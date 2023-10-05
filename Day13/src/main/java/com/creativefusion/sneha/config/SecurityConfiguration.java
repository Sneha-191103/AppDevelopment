package com.creativefusion.sneha.config;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.creativefusion.sneha.model.Permission.USER_CREATE;
import static com.creativefusion.sneha.model.Permission.USER_UPDATE;
import static com.creativefusion.sneha.model.Permission.USER_DELETE;
import static com.creativefusion.sneha.model.Permission.USER_READ;
import static com.creativefusion.sneha.model.Permission.ADMIN_CREATE;
import static com.creativefusion.sneha.model.Permission.ADMIN_UPDATE;
import static com.creativefusion.sneha.model.Permission.ADMIN_DELETE;
import static com.creativefusion.sneha.model.Permission.ADMIN_READ;

import static com.creativefusion.sneha.model.Role.USER;
import static com.creativefusion.sneha.model.Role.ADMIN;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

       private final JWTAuthenticationFilter jwtAuthFilter;
       private final AuthenticationProvider authenticationProvider;
	
	 private static final String[] WHITE_LIST_URL = {"/api/v1/auth/**"
	           };

	 @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        http
	                .csrf(AbstractHttpConfigurer::disable)
	                .authorizeHttpRequests(req ->
	                        req.requestMatchers(WHITE_LIST_URL)
	                                .permitAll()
	                                .requestMatchers("/api/v1/admin/**").hasAnyRole(ADMIN.name())
	                                .requestMatchers(GET, "/api/v1/admin/**").hasAnyAuthority(ADMIN_READ.name())
	                                .requestMatchers(POST, "/api/v1/admin/**").hasAnyAuthority(ADMIN_CREATE.name())
	                                .requestMatchers(PUT, "/api/v1/admin/**").hasAnyAuthority(ADMIN_UPDATE.name())
	                                .requestMatchers(DELETE, "/api/v1/admin/**").hasAnyAuthority(ADMIN_DELETE.name())
	                                .requestMatchers("/api/v1/user/**").hasAnyRole(USER.name())
	                                .requestMatchers(GET, "/api/v1/user/**").hasAnyAuthority(USER_READ.name())
	                                .requestMatchers(POST, "/api/v1/user/**").hasAnyAuthority(USER_CREATE.name())
	                                .requestMatchers(PUT, "/api/v1/user/**").hasAnyAuthority(USER_UPDATE.name())
	                                .requestMatchers(DELETE, "/api/v1/user/**").hasAnyAuthority(USER_DELETE.name())
	                                .anyRequest()
	                                .authenticated()
	                )
	                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
	                .authenticationProvider(authenticationProvider)
	                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
	                
	        ;

	        return http.build();
	    }
}
