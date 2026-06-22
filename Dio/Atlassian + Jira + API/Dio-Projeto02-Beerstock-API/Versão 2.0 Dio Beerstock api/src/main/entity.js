// entity/Beer.java
package com.dio.beerstock.entity;

import jakarta.persistence.*;

@Entity
public class Beer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String brand;
    private Integer quantity;

    public Beer() {}

    public Beer(String name, String brand, Integer quantity) {
        this.name = name;
        this.brand = brand;
        this.quantity = quantity;
    }

    // getters e setters
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getBrand() { return brand; }
    public Integer getQuantity() { return quantity; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setBrand(String brand) { this.brand = brand; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
}
