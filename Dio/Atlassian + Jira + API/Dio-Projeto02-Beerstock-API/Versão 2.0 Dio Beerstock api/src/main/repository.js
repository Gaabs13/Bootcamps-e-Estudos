// repository/BeerRepository.java
package com.dio.beerstock.repository;

import com.dio.beerstock.entity.Beer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BeerRepository extends JpaRepository<Beer, Long> {
}
