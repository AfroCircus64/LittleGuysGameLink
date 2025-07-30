package com.littleguys.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.littleguys.app.model.Bug;

public interface BugRepository extends JpaRepository<Bug, Long> {
}
