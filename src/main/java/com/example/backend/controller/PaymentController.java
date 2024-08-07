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

import com.example.backend.model.Payment;
import com.example.backend.service.PaymentService;

@RestController
@RequestMapping("/pay")
public class PaymentController {
    @Autowired
    PaymentService ps;
    @PostMapping("/add/details")
    public ResponseEntity<Payment> adddetails(@RequestBody Payment p)
    {
        Payment pay=ps.create(p);
        return new ResponseEntity<>(pay,HttpStatus.CREATED);
    }
    @GetMapping("/alldetails")
    public ResponseEntity<List<Payment>> getAll()
    {
        try
        {
            List<Payment> pay=ps.getAll();
            return new ResponseEntity<>(pay,HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);   
        }
        
    }
    @GetMapping("/details/{name}")
    public ResponseEntity<Payment> get(@PathVariable("name") String name)
    {
        try
        {
            Payment pay=ps.getById(name);
            return new ResponseEntity<>(pay,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/detail/delete/{name}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable( "name" )String name)
    {
        if(ps.deleteDetails(name)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);

        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);

    }
}
