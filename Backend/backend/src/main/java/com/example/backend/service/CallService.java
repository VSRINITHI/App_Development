package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Call;
import com.example.backend.repository.CallRepo;

@Service
public class CallService {
    @Autowired
    CallRepo cr;
    public Call create(Call c) {
        return cr.save(c);

    }

    public List<Call> getAll() {
        return cr.findAll();    
    }

    public Call getById(int userId) {
        return cr.findById(userId).orElse(null);
    }

    public boolean deleteDetails(int userId) {
        if(cr.findById(userId)==null)
        {
            return false;
        }
        else
        
        {
            cr.deleteById(name);
            return true;
        }
    }

   
    
}
