package com.example.demo.repository;

import com.example.demo.entity.Personne;
import org.springframework.data.repository.CrudRepository;

public interface PersonneRepository extends CrudRepository<Personne, Integer> {
}
