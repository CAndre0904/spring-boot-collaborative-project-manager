// Adapted from https://www.youtube.com/watch?v=Cw0J6jYJtzw&t=3135s

package com.carlandre.collaborative_project_manager.service;

import com.carlandre.collaborative_project_manager.entity.SoftwareUser;
import com.carlandre.collaborative_project_manager.repository.SoftwareUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SoftwareUserService {
    private final SoftwareUserRepository softwareUserRepository;

    public SoftwareUserService(SoftwareUserRepository softwareUserRepository) {
        this.softwareUserRepository = softwareUserRepository;
    }

    public List<SoftwareUser> getAllSoftwareUsers() {
        return softwareUserRepository.findAll();
    }
}
