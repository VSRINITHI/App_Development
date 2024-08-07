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

import com.example.backend.model.Register;
import com.example.backend.service.RegisterService;

@RestController
@RequestMapping("/register")
public class RegisterController {
    @Autowired
    RegisterService rs;
    @PostMapping("/add/details")
    public ResponseEntity<Register> adddetails(@RequestBody Register r)
    {
        Register reg=rs.create(r);
        return new ResponseEntity<>(reg,HttpStatus.CREATED);
    }
    @GetMapping("/alldetails")
    public ResponseEntity<List<Register>> getAll()
    {
        try
        {
            List<Register> reg=rs.getAll();
            return new ResponseEntity<>(reg,HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);   
        }
        
    }
    @GetMapping("/details/{userId}")
    public ResponseEntity<Register> get(@PathVariable("userId") int userId)
    {
        try
        {
            Register reg=rs.getById(userId);
            return new ResponseEntity<>(reg,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/details/delete/{userId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable( "userId" )int userId)
    {
        if(rs.deleteDetails(userId)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);

        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);

    }
}
