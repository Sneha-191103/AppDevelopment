package com.creativefusion.sneha.services.impl;

//import org.springframework.http.HttpHeaders;
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
//import com.creativefusion.sneha.token.Token;
//import com.creativefusion.sneha.token.TokenRepository;
//import com.creativefusion.sneha.token.TokenType;
//import com.fasterxml.jackson.core.exc.StreamWriteException;
//import com.fasterxml.jackson.databind.DatabindException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//
//import io.jsonwebtoken.io.IOException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import static com.creativefusion.sneha.model.Role.USER;



import static com.creativefusion.sneha.model.Role.ADMIN;
@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final PasswordEncoder passwordEncoder;
	private final UserRepository repository;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
//	  private final TokenRepository tokenRepository;

	public AuthenticationResponse register(RegisterRequest request) {
		var user = User.builder()
		        .user_name(request.getUser_name())
		        .email(request.getEmail())
		        .pass_word(passwordEncoder.encode(request.getPass_word()))
		        .phone_number(request.getPhone_number())
		        .role(USER)
		        .build();
		   repository.save(user);
		    var jwtToken = jwtService.generateToken(user);
		    
//		    saveUserToken(savedUser, jwtToken);
		    return AuthenticationResponse.builder()
		        .accessToken(jwtToken)
		          
		        .build();
		  }

	public AuthenticationResponse registerAdmin(RegisterRequest request) {
		var user = User.builder()
		        .user_name(request.getUser_name())
		        .email(request.getEmail())
		        .pass_word(passwordEncoder.encode(request.getPass_word()))
		        .phone_number(request.getPhone_number())
		        .role(ADMIN)
		        .build();
		    repository.save(user);
		    var jwtToken = jwtService.generateToken(user);
		   
//		    saveUserToken(savedUser, jwtToken);
		    return AuthenticationResponse.builder()
		        .accessToken(jwtToken)
		          
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
		   
		   
//		    saveUserToken(user, jwtToken);
		    return AuthenticationResponse.builder()
		        .accessToken(jwtToken)
		        .build();
		  }

//		  private void saveUserToken(User user, String jwtToken) {
//		    var token = Token.builder()
//		        .user(user)
//		        .token(jwtToken)
//		        .tokenType(TokenType.BEARER)
//		        .expired(false)
//		        .revoked(false)
//		        .build();
//		    tokenRepository.save(token);
//		  }

//		  private void revokeAllUserTokens(User user) {
//		    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
//		    if (validUserTokens.isEmpty())
//		      return;
//		    validUserTokens.forEach(token -> {
//		      token.setExpired(true);
//		      token.setRevoked(true);
//		    });
//		    tokenRepository.saveAll(validUserTokens);
//		  }
//		  public void refreshToken(
//		          HttpServletRequest request,
//		          HttpServletResponse response
//		  ) throws IOException, StreamWriteException, DatabindException, java.io.IOException {
//		    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
//		    final String refreshToken;
//		    final String userEmail;
//		    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
//		      return;
//		    }
//		    refreshToken = authHeader.substring(7);
//		    userEmail = jwtService.extractUsername(refreshToken);
//		    if (userEmail != null) {
//		      var user = this.repository.findByEmail(userEmail)
//		              .orElseThrow();
//		      if (jwtService.isTokenValid(refreshToken, user)) {
//		        var accessToken = jwtService.generateToken(user);
//		        revokeAllUserTokens(user);
//		        saveUserToken(user, accessToken);
//		        var authResponse = AuthenticationResponse.builder()
//		                .accessToken(accessToken)
//		                .refreshToken(refreshToken)
//		                .build();
//		        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
//		      }
//		    }
//		  }
//
//		 

		
}
