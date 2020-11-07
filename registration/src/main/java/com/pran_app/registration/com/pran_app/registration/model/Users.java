package com.pran_app.registration.com.pran_app.registration.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.sun.istack.NotNull;

@Entity
public class Users {
	@Id
	/*
	 * @GeneratedValue(strategy=GenerationType.AUTO)
	 * 
	 * @Column(name = "id")
	 */
	private int id;
	private String username;
	private String password;
	private String emailid;
	
	
	public Users() {
	}
	public Users(int id, String username, String password, String emailid) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.emailid = emailid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	
}
