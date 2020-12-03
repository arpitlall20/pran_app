package com.cerner.pran.service;

import com.cerner.pran.model.Hospital;
import com.cerner.pran.model.HospitalAdmin;
public interface RegisterService {
	public void registerHospital(Hospital hospital);
	public boolean findHospitalByName(String hospName);
	boolean sendRegistrationMail(HospitalAdmin admin);
}
