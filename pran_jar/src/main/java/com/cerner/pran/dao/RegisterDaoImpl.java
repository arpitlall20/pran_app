package com.cerner.pran.dao;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cerner.pran.model.Hospital;

@Repository
@Transactional
public class RegisterDaoImpl implements RegisterDao {

	@Autowired
	EntityManager em;
	
	@Override
	public void registerHospital(Hospital hospital) {
		em.persist(hospital.getAdmin());
		em.persist(hospital.getContact());
		em.persist(hospital.getSite());
	}

}
