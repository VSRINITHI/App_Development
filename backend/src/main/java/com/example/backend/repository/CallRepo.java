package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Call;

@Repository
public interface CallRepo extends JpaRepository<Call,Integer>{
   
}
