package com.example.backend.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Booking {
    @Id
    @GeneratedValue
    int userId;
    private String name;
    private String email_id;
    private String phone_no;
    private String event;
    private Date event_date;
    private String event_timing;
    private int no_of_days;
    private String venue;
    private String address;

   
    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
    @JsonBackReference
    private Payment payment;
    public Booking() {}

    public Booking(int userId,String name, String email_id, String phone_no, String event, Date event_date, String event_timing,
                   int no_of_days, String venue, String address)
        {
        this.userId=userId;
        this.name = name;
        this.email_id = email_id;
        this.phone_no = phone_no;
        this.event = event;
        this.event_date = event_date;
        this.event_timing = event_timing;
        this.no_of_days = no_of_days;
        this.venue = venue;
        this.address = address;
    }

    // Getters and Setters
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getemail_id() {
        return email_id;
    }
    public void setemail_id(String email_id) {
        this.email_id = email_id;
    }
    public String getPhone_no() {
        return phone_no;
    }
    public void setPhone_no(String phone_no) {
        this.phone_no = phone_no;
    }
    public String getEvent() {
        return event;
    }
    public void setEvent(String event) {
        this.event = event;
    }
    public Date getEvent_date() {
        return event_date;
    }
    public void setEvent_date(Date event_date) {
        this.event_date = event_date;
    }
    public String getEvent_timing() {
        return event_timing;
    }
    public void setEvent_timing(String event_timing) {
        this.event_timing = event_timing;
    }
    public int getNo_of_days() {
        return no_of_days;
    }
    public void setNo_of_days(int no_of_days) {
        this.no_of_days = no_of_days;
    }
    public String getVenue() {
        return venue;
    }
    public void setVenue(String venue) {
        this.venue = venue;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    
    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
        if (payment != null) {
            payment.setBooking(this);
        }
    }
}
