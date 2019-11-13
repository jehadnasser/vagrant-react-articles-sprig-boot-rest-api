package de.smartformer.demo.demo.controller;

import de.smartformer.demo.demo.exception.ResourceNotFoundException;
import de.smartformer.demo.demo.model.Article;
import de.smartformer.demo.demo.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/v1/articles")
public class ArticleController {

    @Autowired
    private ArticleRepository articleRepository;

    @GetMapping()
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<Article> getArticleById(
            @PathVariable("id") Long id)
            throws ResourceNotFoundException {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found :: " + id));

        return ResponseEntity.ok().body(article);
    }

    @PostMapping
    public Article createArticle(@Valid @RequestBody Article article) {
        return articleRepository.save(article);
    }

    @PatchMapping(path = "{id}")
    public ResponseEntity<Article> updateArticle(
            @PathVariable("id") Long id,
            @Valid @RequestBody Article newArticle)
            throws ResourceNotFoundException {

        Article currentArticle = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found :: " + id));

        currentArticle.setTitle(newArticle.getTitle());
        currentArticle.setContent(newArticle.getContent());
        currentArticle.setUpdatedAt(new Date());

        final Article updatedArticle = articleRepository.save(currentArticle);
        return ResponseEntity.ok(updatedArticle);
    }

    @DeleteMapping(path = "{id}")
    public Map<String, Boolean> deleteArticle(
            @PathVariable("id") Long id)
            throws ResourceNotFoundException {

        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found :: " + id));

        articleRepository.delete(article);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}