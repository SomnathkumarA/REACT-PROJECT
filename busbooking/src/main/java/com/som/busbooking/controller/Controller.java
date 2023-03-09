package com.som.busbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.som.busbooking.entity.Booking;
import com.som.busbooking.service.service;

@RestController

public class Controller {
	
	@Autowired
	private service serv;
	
	@PostMapping("/add")
	public Booking addDet(@RequestBody Booking obj)
	{
		return serv.saveDetails(obj);
	}
	
	@GetMapping("/show")
	public List<Booking>getDet(){
		
		return serv.getAllDetails();
	}
	
	@DeleteMapping("/delete/{b}")
	public void delete(@PathVariable int b){
		serv.delete(b);
		
	}
	@PutMapping("/update/{b}")
	public Booking update(@PathVariable int b,@RequestBody Booking obj) {
		return serv.update(b, obj);
	}
	
	

}
	


