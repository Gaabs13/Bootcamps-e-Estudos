// test/controller/BeerControllerTest.java
package com.dio.beerstock.controller;

import com.dio.beerstock.entity.Beer;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class BeerControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @Test
    void shouldCreateBeer() throws Exception {
        Beer beer = new Beer("Lager", "Brew", 5);

        mockMvc.perform(
                post("/beers")
                        .contentType(APPLICATION_JSON)
                        .content(mapper.writeValueAsString(beer))
        ).andExpect(status().isCreated());
    }
}
