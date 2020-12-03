package com.cerner.pran.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cerner.pran.model.HospitalAdmin;

@Repository
public interface HospitalAdminDao extends JpaRepository<HospitalAdmin, Integer> {

	@Query("select admin from HospitalAdmin admin where admin.personnelEmail = ?1")
	public HospitalAdmin findByEmail(String email);
}
