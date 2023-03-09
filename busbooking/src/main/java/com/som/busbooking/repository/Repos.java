package com.som.busbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.som.busbooking.entity.Booking;

public interface Repos extends JpaRepository <Booking,Integer>{

}
