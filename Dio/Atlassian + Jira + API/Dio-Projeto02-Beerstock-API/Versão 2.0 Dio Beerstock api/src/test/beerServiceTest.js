// test/service/BeerServiceTest.java
package com.dio.beerstock.service;

import com.dio.beerstock.entity.Beer;
import com.dio.beerstock.repository.BeerRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class BeerServiceTest {

    private final BeerRepository repository = Mockito.mock(BeerRepository.class);
    private final BeerService service = new BeerService(repository);

    @Test
    void shouldUpdateStock() {
        Beer beer = new Beer("IPA", "Lab", 10);
        beer.setId(1L);

        Mockito.when(repository.findById(1L)).thenReturn(Optional.of(beer));
        Mockito.when(repository.save(Mockito.any())).thenReturn(beer);

        Beer updated = service.updateStock(1L, 5);
        assertEquals(15, updated.getQuantity());
    }
}
