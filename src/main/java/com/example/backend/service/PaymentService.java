package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.backend.model.Payment;
import com.example.backend.repository.PaymentRepo;

@Service

public class PaymentService {
    @Autowired
    PaymentRepo pr;
    public Payment create(Payment p) {
        return pr.save(p);
    }

    public List<Payment> getAll() {
        return pr.findAll();
    }

    public Payment getById(String name) {
        return pr.findById(name).orElse(null);
    }

    public boolean deleteDetails(String name) {
        if(pr.findById(name)==null)
        {
            return false;
        }
        else
        {
            pr.deleteById(name);
            return true;
        }
    }
    
}
