// controller/BeerController.java
package com.dio.beerstock.controller;

import com.dio.beerstock.entity.Beer;
import com.dio.beerstock.service.BeerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/beers")
public class BeerController {

    private final BeerService service;

    public BeerController(BeerService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Beer>> list() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beer> get(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<Beer> create(@RequestBody Beer beer) {
        return ResponseEntity.status(201).body(service.create(beer));
    }

    @PatchMapping("/{id}/stock")
    public ResponseEntity<Beer> updateStock(
            @PathVariable Long id,
            @RequestBody Integer delta
    ) {
        return ResponseEntity.ok(service.updateStock(id, delta));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
