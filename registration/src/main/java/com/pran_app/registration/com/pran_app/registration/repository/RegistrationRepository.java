package com.pran_app.registration.com.pran_app.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pran_app.registration.com.pran_app.registration.model.Users;

public interface RegistrationRepository extends JpaRepository<Users, Integer>{

	public Users findByemailid(String emailid);
}
