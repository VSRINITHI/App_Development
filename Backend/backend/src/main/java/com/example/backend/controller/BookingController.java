package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

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

import com.example.backend.model.Booking;
import com.example.backend.service.BookingService;

@RestController
@RequestMapping("/book")
public class BookingController {
    @Autowired
    BookingService bs;
    @PostMapping("/add/details") 
    public ResponseEntity<Booking> adddetails(@RequestBody Booking b)
    {
        Booking book=bs.create(b);
        return new ResponseEntity<>(book,HttpStatus.CREATED);
    }
    @GetMapping("/alldetails")
    public ResponseEntity<List<Booking>> getAll()
    {
        try
        {
            List<Booking> book=bs.getAll();
            return new ResponseEntity<>(book,HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);   
        }
        
    }
    @GetMapping("/details/{event}")
    public ResponseEntity<List<Booking>> getEmail(@PathVariable("event") String event) {
        try {
            List<Booking> book = bs.getByEvent(event);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/details/venue/{venue}")
    public ResponseEntity<List<Booking>> getvenue(@PathVariable("venue") String venue) {
        try {
            List<Booking> book = bs.getByVenue(venue);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/details/id/{userId}")
    public ResponseEntity<Booking> getId(@PathVariable("userId") int userId) {
        Optional<Booking> book = bs.getById(userId);
        return book.map(b -> new ResponseEntity<>(b, HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }
    
    @DeleteMapping("/detail/delete/{userId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable( "userId" )int userId)
    {
        if(bs.deleteDetails(userId)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);

        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);

    }
}
