package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Booking;
import com.example.backend.repository.BookingRepo;
@Service
public class BookingService {
    @Autowired
    BookingRepo br;
    public Booking create(Booking b) {
        return br.save(b);
    }

    public List<Booking> getAll() {
        return br.findAll();
    }

     public List<Booking> getByEvent(String event) {
        return br.findByEvent(event);
    }
     public List<Booking> getByVenue(String venue) {
        return br.findByVenue(venue);
    }

    public Optional<Booking> getById(int userId) {
        return br.findById(userId);
    }

    public boolean deleteDetails(int userId) {
        if (br.existsById(userId)) {
            br.deleteById(userId);
            return true;
        } else {
            return false;
        }
    }
    
    
}
