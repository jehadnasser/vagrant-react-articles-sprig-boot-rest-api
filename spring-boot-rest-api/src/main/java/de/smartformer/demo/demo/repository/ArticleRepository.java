package de.smartformer.demo.demo.repository;

import de.smartformer.demo.demo.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>{

}