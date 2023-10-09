package com.creativefusion.sneha.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/vi/user")
@PreAuthorize("hasRole('USER')")
public class UserController {
	@GetMapping
	 @PreAuthorize("hasAuthority('user:read')")
	public String get() {
		return "GET::usercontroller";
	}

	

}
