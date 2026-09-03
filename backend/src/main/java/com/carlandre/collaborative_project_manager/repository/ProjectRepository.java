package com.carlandre.collaborative_project_manager.repository;
import com.carlandre.collaborative_project_manager.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
