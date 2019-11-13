package de.smartformer.demo.demo.controller;

import de.smartformer.demo.demo.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/v1/healthcheck")
public class HealthcheckController {

    @Autowired
    DataSource dataSource;

    @GetMapping()
    public ResponseEntity<HashMap<String, Boolean>> getApiVersion() throws ResourceNotFoundException {

        HashMap<String, Boolean> map = new HashMap<>();

        try (Connection connection = dataSource.getConnection()) {
            map.put("health", true);
        } catch (SQLException e) {
            map.put("health", false);
        }

        return ResponseEntity.ok().body(map);
    }
}