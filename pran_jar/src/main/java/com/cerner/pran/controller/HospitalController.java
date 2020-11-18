package com.cerner.pran.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cerner.pran.model.Hospital;
import com.cerner.pran.service.RegisterService;

@RestController
@CrossOrigin()
public class HospitalController {
	
	@Autowired
	public RegisterService service;
	
	@GetMapping("/testapi")
	public void testApi() {
		service.sendSimpleMessage("", "", "");
	}
	
	@PostMapping(path="/register")
	public ResponseEntity<String> registerApi(@RequestBody Hospital hospital) {
		System.out.println(hospital);
		System.out.println(hospital.getAdmin());
		System.out.println(hospital.getContact());
		System.out.println(hospital.getSite());
		System.out.println(hospital.getSite().getLocation());
		service.registerHospital(hospital);
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}

}
