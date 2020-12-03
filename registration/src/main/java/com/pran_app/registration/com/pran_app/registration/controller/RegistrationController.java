package com.pran_app.registration.com.pran_app.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pran_app.registration.com.pran_app.registration.model.Users;
import com.pran_app.registration.com.pran_app.registration.service.RegistrationService;

import net.bytebuddy.asm.Advice.Return;

@RestController
public class RegistrationController {
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	public Users registerUser(@RequestBody Users users) throws Exception {
		String tempEmailId = users.getEmailid();
		
		  if(tempEmailId != null && !"".equals(tempEmailId)) { 
			  Users userobj = service.fetchUserEmailId(tempEmailId); 
			  	if(userobj != null) { 
			  		throw new Exception("User"+tempEmailId+"already exists!!"); 
			  		} 
			  	}
		 
		Users usersobj = null;
		usersobj = service.saveUser(users);
		return usersobj;
	}
	
}
