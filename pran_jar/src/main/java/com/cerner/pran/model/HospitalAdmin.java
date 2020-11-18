package com.cerner.pran.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Table(name="Hospital_Admin")
@Entity
public class HospitalAdmin {
	
	public HospitalAdmin() {
	}

	public HospitalAdmin(String personnelName, String personnelEmail, String personnelNumber, Hospital hospital) {
		super();
		this.personnelName = personnelName;
		this.personnelEmail = personnelEmail;
		this.personnelNumber = personnelNumber;
		this.hospital = hospital;
	}

	@Id
	@SequenceGenerator(name = "admin_seq", allocationSize = 1, sequenceName = "system.admin_seq")
	@GeneratedValue(generator = "system.admin_seq", strategy = GenerationType.SEQUENCE)
	@Column(name = "admin_id")
	private int id;
	
	@Column(name="admin_name")
	private String personnelName;
	
	@Column(name="admin_email")
	private String personnelEmail;
	
	@Column(name="admin_phone")
	private String personnelNumber;
	
	@OneToOne(cascade = {CascadeType.PERSIST})
	@JoinColumn(name="admin_hosp_id")
	private Hospital hospital;

	public String getPersonnelName() {
		return personnelName;
	}

	public void setPersonnelName(String personnelName) {
		this.personnelName = personnelName;
	}

	public String getPersonnelEmail() {
		return personnelEmail;
	}

	public void setPersonnelEmail(String personnelEmail) {
		this.personnelEmail = personnelEmail;
	}

	public String getPersonnelNumber() {
		return personnelNumber;
	}

	public void setPersonnelNumber(String personnelNumber) {
		this.personnelNumber = personnelNumber;
	}

	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}

	@Override
	public String toString() {
		return "HospitalAdmin [id=" + id + ", personnelName=" + personnelName + ", personnelEmail=" + personnelEmail
				+ ", personnelNumber=" + personnelNumber + "]";
	}
	
}
