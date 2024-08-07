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

import com.example.backend.model.Call;
import com.example.backend.service.CallService;

@RestController
@RequestMapping("/call")
public class CallController {
    @Autowired
    CallService cs;
    @PostMapping("/add/details") 
    public ResponseEntity<Call> adddetails(@RequestBody Call c)
    {
        Call cal=cs.create(c);
        return new ResponseEntity<>(cal,HttpStatus.CREATED);
    }
    @GetMapping("/alldetails")
    public ResponseEntity<List<Call>> getAll()
    {
        try
        {
            List<Call> cal;
            cal = cs.getAll();
            return new ResponseEntity<>(cal,HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);   
        }
        
    }
    @GetMapping("/details/{userId}")
    public ResponseEntity<Call> get(@PathVariable("userId") int userId)
    {
        try
        {
            Call cal=cs.getById(userId);
            return new ResponseEntity<>(cal,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/detail/delete/{userId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable( "userId" )int userId)
    {
        if(cs.deleteDetails(userId)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);

        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);

    }
}
