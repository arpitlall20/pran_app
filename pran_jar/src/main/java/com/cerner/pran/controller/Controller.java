package com.cerner.pran.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	
	@GetMapping("/testapi")
	public String testApi() {
		return "Success";
	}

}
