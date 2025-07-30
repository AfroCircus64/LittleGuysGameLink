package com.littleguys.app.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bug {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code; // e.g., BUG-1024
    private String title;
    private String description;
    private String platform; // UE5, MetaHuman, etc.
    private String priority; // Critical, High, etc.
    private String status; // Open, In Progress, etc.
    private String assignee;
    private LocalDateTime reportedAt;

    // Getters and setters...
    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getPlatform() {
        return platform;
    }

    public String getPriority() {
        return priority;
    }

    public String getStatus() {
        return status;
    }

    public String getAssignee() {
        return assignee;
    }

    public LocalDateTime getReportedAt() {
        return reportedAt;
    }
}
