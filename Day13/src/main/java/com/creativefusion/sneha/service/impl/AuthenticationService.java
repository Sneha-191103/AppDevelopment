package com.creativefusion.sneha.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.creativefusion.sneha.config.JwtService;
import com.creativefusion.sneha.dto.request.AuthenticationRequest;
import com.creativefusion.sneha.dto.request.RegisterRequest;
import com.creativefusion.sneha.dto.response.AuthenticationResponse;
import com.creativefusion.sneha.model.User;
import com.creativefusion.sneha.repository.UserRepository;
import com.creativefusion.sneha.token.Token;
import com.creativefusion.sneha.token.TokenRepository;
import com.creativefusion.sneha.token.TokenType;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final PasswordEncoder passwordEncoder;
	private final UserRepository repository;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	  private final TokenRepository tokenRepository;

	public AuthenticationResponse register(RegisterRequest request) {
		var user = User.builder()
		        .user_name(request.getUser_name())
		        .email(request.getEmail())
		        .pass_word(passwordEncoder.encode(request.getPass_word()))
		        .role(request.getRole())
		        .build();
		    var savedUser = repository.save(user);
		    var jwtToken = jwtService.generateToken(user);
		    var refreshToken = jwtService.generateRefreshToken(user);
		    saveUserToken(savedUser, jwtToken);
		    return AuthenticationResponse.builder()
		        .accessToken(jwtToken)
		            .refreshToken(refreshToken)
		        .build();
		  }

		  public AuthenticationResponse authenticate(AuthenticationRequest request) {
		    authenticationManager.authenticate(
		        new UsernamePasswordAuthenticationToken(
		            request.getEmail(),
		            request.getPass_word()
		        )
		    );
		    var user = repository.findByEmail(request.getEmail())
		        .orElseThrow();
		    var jwtToken = jwtService.generateToken(user);
		    var refreshToken = jwtService.generateRefreshToken(user);
		   
		    saveUserToken(user, jwtToken);
		    return AuthenticationResponse.builder()
		        .accessToken(jwtToken)
		            .refreshToken(refreshToken)
		        .build();
		  }

		  private void saveUserToken(User user, String jwtToken) {
		    var token = Token.builder()
		        .user(user)
		        .token(jwtToken)
		        .tokenType(TokenType.BEARER)
		        .expired(false)
		        .revoked(false)
		        .build();
		    tokenRepository.save(token);
		  }

		 

		
}
