package com.cerner.pran.service;

import javax.mail.PasswordAuthentication;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.cerner.pran.dao.RegisterDao;
import com.cerner.pran.model.Hospital;
import com.cerner.pran.model.HospitalAdmin;

@Service
public class RegisterServiceImpl implements RegisterService {

	@Autowired
	private RegisterDao repo;
	@Autowired 
	private UtilitiesService utilities;

	@Override
	public void registerHospital(Hospital hospital) {

		hospital.setHospitalCreateDate(new Date());
		hospital.getSite().setCreatedDate(new Date());
		hospital.getContact().setCreatedDate(new Date());
		hospital.getSite().getLocation().setCreatedDate(new Date());

		// Setting the objects
		hospital.getSite().setHospital(hospital);
		hospital.getContact().setHospital(hospital);
		hospital.getContact().setHospitalSite(hospital.getSite());
		hospital.getAdmin().setHospital(hospital);
		String encryptedPassword = utilities.passwordEncrypter(utilities.passwordGenerator(20));
		hospital.getAdmin().setPersonnelPassword(encryptedPassword);

		repo.registerHospital(hospital);
		String registerText = "Hi <b>" + hospital.getAdmin().getPersonnelName()
				+ "</b>, <br><br>Welcome to Cerner Search. Your initial password to login is "
				+ utilities.passwordDecrypter(hospital.getAdmin().getPersonnelPassword());
		String registerSubject = "Welcome to Cerner Search";

		utilities.mailSender(hospital.getAdmin().getPersonnelEmail(), registerSubject, registerText);
	}

	@Override
	public boolean login(HospitalAdmin admin) {
		admin.setPersonnelPassword(utilities.passwordDecrypter(admin.getPersonnelPassword()));
		return repo.loginAdmin(admin);
	}

	@Override
	public boolean updatePassword(HospitalAdmin admin) {
		System.out.println("Update Password " + admin.getPersonnelPassword());
		admin.setPersonnelPassword(utilities.passwordEncrypter(admin.getPersonnelPassword()));
		System.out.println("Updated Password " + admin.getPersonnelPassword());
		return repo.updatePassword(admin);
	}

	@Override
	public boolean findHospitalByName(String hospName) {
		return repo.findHospitalByName(hospName);
	}

	@Override
	public HospitalAdmin login(JSONObject json) {
		try {
			String email = json.getString("email");
			String password = json.getString("password");
			HospitalAdmin admin = repo.login(email, password);
			String decryptedPassword = utilities.passwordDecrypter(admin.getPersonnelPassword()).trim();
			if (decryptedPassword.equals(password)) {
				repo.updateLoginDate(admin.getPersonnelEmail());
				return admin;
			} else
				return null;

		} catch (JSONException e) {
			System.out.println("JSON Exception");
			return null;
		}
		catch(NullPointerException e) {
			System.out.println("Null Pointer - No such admin / Invalid Credentials");
			return null;
		}
	}

}
