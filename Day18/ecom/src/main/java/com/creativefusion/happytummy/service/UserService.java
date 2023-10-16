package com.creativefusion.happytummy.service;

import java.util.List;

import com.creativefusion.happytummy.dto.request.UserRequest;
import com.creativefusion.happytummy.dto.response.CountResponse;
import com.creativefusion.happytummy.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
