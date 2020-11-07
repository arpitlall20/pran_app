package com.pran_app.registration.com.pran_app.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pran_app.registration.com.pran_app.registration.model.Users;
import com.pran_app.registration.com.pran_app.registration.repository.RegistrationRepository;

@Service
public class RegistrationService {
	@Autowired
	private RegistrationRepository repo;
	
		public Users saveUser(Users users) {
			return repo.save(users);
		}
		
	
	  public Users fetchUserEmailId(String email) { 
		  return repo.findByemailid(email); 
		  }
	 
}
