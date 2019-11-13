package de.smartformer.demo.demo.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "article")
@EntityListeners(AuditingEntityListener.class)
public class Article {

    private long id;
    private String title;
    private String content;
    private Date createdAt;
    private Date updatedAt;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "title", nullable = false)
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    @Column(name = "content", nullable = true)
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreationTimestamp
    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @Column(name = "updated_at", nullable = false)
    @UpdateTimestamp
    public Date getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}