// Adapted from https://www.youtube.com/watch?v=Cw0J6jYJtzw&t=3135s

package com.carlandre.collaborative_project_manager.repository;
import com.carlandre.collaborative_project_manager.entity.SoftwareUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SoftwareUserRepository extends JpaRepository<SoftwareUser, Integer> {
    Optional<SoftwareUser> findByEmail(String email);
}
