package de.smartformer.demo.demo.controller;

import de.smartformer.demo.demo.exception.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/v1/version")
public class VersionController {

    @GetMapping()
    public ResponseEntity<HashMap<String, String>> getApiVersion() throws ResourceNotFoundException {

        HashMap<String, String> map = new HashMap<>();
        map.put("version", "1.0");

        return ResponseEntity.ok().body(map);
    }
}