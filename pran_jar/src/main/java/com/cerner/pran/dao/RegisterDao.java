package com.cerner.pran.dao;

import com.cerner.pran.model.Hospital;
import com.cerner.pran.model.HospitalAdmin;

public interface RegisterDao {
	public void registerHospital(Hospital hospital);
	public boolean loginAdmin(HospitalAdmin admin);
	public boolean updatePassword(HospitalAdmin admin);
	public boolean findHospitalByName(String hospName);
	public HospitalAdmin login(String email, String password);
	public boolean updateLoginDate(String email);
}
