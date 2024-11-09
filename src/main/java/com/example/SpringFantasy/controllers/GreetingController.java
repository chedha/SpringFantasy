package com.example.SpringFantasy.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api") // Prefixes all endpoints with /api
public class GreetingController {

    @GetMapping("/greeting")
    public String getGreeting() {
        return "Hello from the Spring Boot backend!";
    }
}
