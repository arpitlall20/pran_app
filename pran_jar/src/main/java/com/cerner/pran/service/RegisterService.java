package com.cerner.pran.service;

import com.cerner.pran.model.Hospital;

public interface RegisterService {
	public void registerHospital(Hospital hospital);
	public void sendSimpleMessage(String to, String subject, String text); 
}
