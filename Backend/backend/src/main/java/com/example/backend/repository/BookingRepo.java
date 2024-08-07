package com.example.backend.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.model.Booking;

public interface BookingRepo extends JpaRepository<Booking,Integer>
{
    @Query("select b from Booking b where b.event = :event")
    List<Booking> findByEvent(@Param("event") String event);

    @Query("select b from Booking b where b.venue = :venue")
    List<Booking> findByVenue(@Param("venue") String venue);
}
