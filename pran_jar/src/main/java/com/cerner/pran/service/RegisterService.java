package com.cerner.pran.service;

import org.json.JSONObject;

import com.cerner.pran.model.Hospital;
import com.cerner.pran.model.HospitalAdmin;

public interface RegisterService {
	public void registerHospital(Hospital hospital);
	public boolean login(HospitalAdmin admin);
	public boolean updatePassword(HospitalAdmin admin);
	public boolean findHospitalByName(String hospName);
	public HospitalAdmin login(JSONObject json);
}
