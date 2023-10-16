package com.creativefusion.happytummy.service;

import com.creativefusion.happytummy.dto.request.AuthenticationRequest;
import com.creativefusion.happytummy.dto.request.RegisterRequest;
import com.creativefusion.happytummy.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
