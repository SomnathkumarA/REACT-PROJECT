package com.som.busbooking.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.som.busbooking.entity.Booking;
import com.som.busbooking.repository.Repos;

@Service
public class service {
	
	@Autowired
	public Repos repo;
	
	//getmapping
	
	public List<Booking> getAllDetails()
	{
		List<Booking> arr=new ArrayList<>();
		arr=repo.findAll();
		return arr;
	}
	
	//postmapping
	
	public Booking saveDetails(Booking b)
	{
		return repo.save(b);
	}
	
	//deletemapping
	
	public void delete(int id)
	{
		repo.deleteById(id);
	}
	
	//upadatemapping
	
	public Booking update(int id,Booking b)
	{
		return repo.saveAndFlush(b);
	}
	

}
