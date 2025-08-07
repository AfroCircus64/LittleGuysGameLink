package com.littleguys.app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.littleguys.app.model.Bug;
import com.littleguys.app.repo.BugRepository;

import com.littleguys.app.model.Platform;
import com.littleguys.app.repo.PlatformRepository;

import com.littleguys.app.model.User;
import com.littleguys.app.repo.UserRepository;

@RestController
@RequestMapping("/api/bugs")
public class BugController {
    private final BugRepository bugRepository;

    public BugController(BugRepository bugRepository) {
        this.bugRepository = bugRepository;
    }

    @GetMapping
    public List<Bug> getAllBugs() {
        return bugRepository.findAll();
    }

    @PostMapping
    public Bug createBug(@RequestBody Bug bug) {
        return bugRepository.save(bug);
    }
}

@RestController
@RequestMapping("/api/platforms")
public class PlatformController {
    private final PlatformRepository platformRepository;

    public PlatformController(PlatformRepository platformRepository) {
        this.platformRepository = platformRepository;
    }

    @GetMapping
    public List<Platform> getAllPlatforms() {
        return platformRepository.findAll();
    }
}

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}