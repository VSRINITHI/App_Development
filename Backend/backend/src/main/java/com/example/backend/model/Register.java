package com.example.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.OneToOne;

@Entity
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;
    private String f_name;
    private String l_name;
    private String email_id;
    private String password;

    // @OneToOne(mappedBy = "register", cascade = CascadeType.ALL)
    // @JsonBackReference
    // private Login login;

    public Register() {}

    public Register(int userId, String f_name, String l_name, String email_id, String password) {
        this.userId = userId;
        this.f_name = f_name;
        this.l_name = l_name;
        this.email_id = email_id;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getf_name() {
        return f_name;
    }

    public void setf_name(String f_name) {
        this.f_name = f_name;
    }
    public String getl_name() {
        return l_name;
    }

    public void setl_name(String l_name) {
        this.l_name = l_name;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // public Login getLogin() {
    //     return login;
    // }

    // public void setLogin(Login login) {
    //     this.login = login;
    //     if (login != null) {
    //         login.setRegister(this);
    //     }
    // }
}