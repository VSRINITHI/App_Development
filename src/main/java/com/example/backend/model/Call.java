package com.example.backend.model;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "call")
public class Call {
    @Id
    int userId;
    String name;
    String email_id;
    String phone_no;
    String event_type;
    Date date;
    int timing;
    String resources;
    public Call()
    {
        
    }
    public Call(String name, String email_id, String phone_no, String event_type, Date date, int timing,
    String resources,int userId) {
        this.userId=userId;
        this.name = name;
        this.email_id = email_id;
        this.phone_no = phone_no;
        this.event_type = event_type;
        this.date = date;
        this.timing = timing;
        this.resources = resources;
    }
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
    public String getEmail_id() {
        return email_id;
    }
    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }
    public String getPhone_no() {
        return phone_no;
    }
    public void setPhone_no(String phone_no) {
        this.phone_no = phone_no;
    }
    public String getEvent_type() {
        return event_type;
    }
    public void setEvent_type(String event_type) {
        this.event_type = event_type;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public int getTiming() {
        return timing;
    }
    public void setTiming(int timing) {
        this.timing = timing;
    }
    public String getResources() {
        return resources;
    }
    public void setResources(String resources) {
        this.resources = resources;
    }
    
}
