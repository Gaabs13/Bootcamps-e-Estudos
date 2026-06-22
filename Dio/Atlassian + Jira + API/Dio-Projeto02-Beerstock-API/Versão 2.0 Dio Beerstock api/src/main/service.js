// service/BeerService.java
package com.dio.beerstock.service;

import com.dio.beerstock.entity.Beer;
import com.dio.beerstock.repository.BeerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeerService {

    private final BeerRepository repository;

    public BeerService(BeerRepository repository) {
        this.repository = repository;
    }

    public List<Beer> findAll() {
        return repository.findAll();
    }

    public Beer findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Beer not found"));
    }

    public Beer create(Beer beer) {
        return repository.save(beer);
    }

    public Beer updateStock(Long id, Integer delta) {
        Beer beer = findById(id);
        int newQty = beer.getQuantity() + delta;

        if (newQty < 0) {
            throw new RuntimeException("Insufficient stock");
        }

        beer.setQuantity(newQty);
        return repository.save(beer);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
