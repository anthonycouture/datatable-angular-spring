package com.example.demo.controllers;

import com.example.demo.entity.Personne;
import com.example.demo.services.PersonneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonneController {

    private PersonneService personneService;

    @GetMapping
    public Iterable<Personne> getAllPersonne(){
        return personneService.getAllPersonne();
    }

    @Autowired
    public void setPersonneService(PersonneService personneService) {
        this.personneService = personneService;
    }
}
