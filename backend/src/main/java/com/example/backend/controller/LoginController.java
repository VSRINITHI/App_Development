package com.example.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Login;
import com.example.backend.service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {
    
    @Autowired
    LoginService ls;

    @PostMapping("/add/details")
    public ResponseEntity<Login> addLogin(@RequestBody Login l) {
        Login obj = ls.create(l);
        String username = obj.getUsername(); // Ensure this method exists in Login class
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }
    
    @GetMapping("/details/getId/{loginId}")
    public ResponseEntity<Login> get(@PathVariable("loginId") int loginId) {
        try {
            Login obj = ls.getById(loginId);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/alldetails")
    public ResponseEntity<List<Login>> getAll() {
        try {
            List<Login> obj = ls.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
    
    @DeleteMapping("/details/delete/{loginId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable("loginId") int loginId) {
        if (ls.deleteLogin(loginId) == true) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}
