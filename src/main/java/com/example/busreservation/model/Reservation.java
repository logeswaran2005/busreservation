package com.example.busreservation.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reservations")
public class Reservation {
    @Id
    private String id;
    private String name;
    private String email;
    private String busNumber;
    private String date;
    private int seatNumber;

    // Getters and Setters
}
