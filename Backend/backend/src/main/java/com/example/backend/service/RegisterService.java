package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Register;
import com.example.backend.repository.RegisterRepo;
@Service
public class RegisterService {
    @Autowired
    RegisterRepo rr;
    public Register create(Register r) {
        return rr.save(r);

    }

    public List<Register> getAll() {
        return rr.findAll();
    }

    public Register getById(int userId) {
        return rr.findById(userId).orElse(null);
    }

    public boolean deleteDetails(int userId) {
        if (this.getById(userId) == null) {
            return false;
        }
        rr.deleteById(userId);
        return true;
    }
    
}
