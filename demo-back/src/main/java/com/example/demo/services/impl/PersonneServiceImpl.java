package com.example.demo.services.impl;

import com.example.demo.entity.Personne;
import com.example.demo.repository.PersonneRepository;
import com.example.demo.services.PersonneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonneServiceImpl implements PersonneService {

    private PersonneRepository personneRepository;

    @Override
    public Iterable<Personne> getAllPersonne() {
        return personneRepository.findAll();
    }

    @Autowired
    public void setPersonneRepository(PersonneRepository personneRepository) {
        this.personneRepository = personneRepository;
    }
}
