package com.cerner.pran.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.cerner.pran.dao.RegisterDao;
import com.cerner.pran.model.Hospital;

@Service
public class RegisterServiceImpl implements RegisterService {
	
	@Autowired
	public RegisterDao repo;
	
    @Autowired
    private JavaMailSender emailSender;
 
    public void sendSimpleMessage(String to, String subject, String text) {
    	
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to); 
        message.setSubject(subject); 
        message.setText(text);
        emailSender.send(message);
        
    }
	
	@Override
	public void registerHospital(Hospital hospital) {

		hospital.setHospitalCreateDate(new Date());
		hospital.getSite().setCreatedDate(new Date());
		hospital.getContact().setCreatedDate(new Date());
		hospital.getSite().getLocation().setCreatedDate(new Date());
		
		//Setting the objects
		hospital.getSite().setHospital(hospital);
		hospital.getContact().setHospital(hospital);
		hospital.getContact().setHospitalSite(hospital.getSite());
		hospital.getAdmin().setHospital(hospital);
		
		repo.registerHospital(hospital);
		String text = "Welcome "+hospital.getAdmin().getPersonnelName()+"\nYour initial password to login is ";
		this.sendSimpleMessage(hospital.getAdmin().getPersonnelEmail(), "Welcome to Cerner Search", text);
	}

}
