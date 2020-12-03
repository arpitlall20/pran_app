package com.cerner.pran.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cerner.pran.dao.HospitalAdminDao;
import com.cerner.pran.dao.RegisterDaoImpl;
import com.cerner.pran.model.Hospital;
import com.cerner.pran.model.HospitalAdmin;
import com.cerner.pran.service.RegisterService;
import com.cerner.pran.service.UtilitiesService;

@RestController
@CrossOrigin()
public class HospitalController {

	@Autowired 
	public HospitalAdminDao dao;
	@Autowired
	public RegisterDaoImpl dao1;	
	@Autowired
	public RegisterService service;
	@Autowired 
	public UtilitiesService utilities;
	
	@GetMapping("/testapi")
	public Hospital testApi() {
		System.out.println(dao.findByEmail("Neil.Abraham@Cerner.com").getHospital());
		return dao.findByEmail("Neil.Abraham@Cerner.com").getHospital();
	}
	
	@GetMapping("/findhospital")
	public ResponseEntity<Boolean> findHospital(@RequestParam("name") String name){
		System.out.println(name);
		boolean bool = service.findHospitalByName(name);
		return new ResponseEntity<Boolean>(bool, HttpStatus.OK);
	}
	
	@PostMapping(path="/validatehospital")
	public ResponseEntity<Boolean> validateHospital(@RequestBody HttpEntity<String> httpEntity){
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	@PostMapping(path="/register")
	public ResponseEntity<String> registerApi(@RequestBody Hospital hospital) {
		System.out.println(hospital);
		service.registerHospital(hospital);
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}

	@PostMapping(path="/verify")
	public ResponseEntity<Boolean> verifyCredentials(@RequestBody HospitalAdmin admin){
		return new ResponseEntity<Boolean>(service.login(admin),HttpStatus.OK);
	}
	
	@PostMapping(path="/update")
	public ResponseEntity<Boolean> updatePassword(@RequestBody HospitalAdmin admin){
		return new ResponseEntity<Boolean>(service.updatePassword(admin),HttpStatus.OK);
	}
	
	@PostMapping(path="/adminlogin")
	public ResponseEntity<HospitalAdmin> adminLogin(HttpEntity<String> httpEntity) {
		JSONObject jsonObject = null;
		try {
			jsonObject = new JSONObject(httpEntity.getBody());
			System.out.println(jsonObject);
			HospitalAdmin admin = service.login(jsonObject);
			if(admin != null)
				return new ResponseEntity<HospitalAdmin>(admin, HttpStatus.OK);
			else {
				return new ResponseEntity<HospitalAdmin>(admin, HttpStatus.BAD_REQUEST);
			}
			
		} catch (JSONException e) {
			return new ResponseEntity<HospitalAdmin>(service.login(jsonObject), HttpStatus.BAD_REQUEST);
			// TODO Auto-generated catch block
		}
	}

}
