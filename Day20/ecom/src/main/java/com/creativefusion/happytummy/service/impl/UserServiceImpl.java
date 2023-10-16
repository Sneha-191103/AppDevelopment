package com.creativefusion.happytummy.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.creativefusion.happytummy.dto.request.UserRequest;
import com.creativefusion.happytummy.dto.response.CountResponse;
import com.creativefusion.happytummy.dto.response.UserResponse;
import com.creativefusion.happytummy.model.Order;
import com.creativefusion.happytummy.model.OrderMapping;
import com.creativefusion.happytummy.model.User;
import com.creativefusion.happytummy.model.enumerate.Role;
import com.creativefusion.happytummy.repository.OrderMappingRepository;
import com.creativefusion.happytummy.repository.OrderRepository;
import com.creativefusion.happytummy.repository.UserRepository;
import com.creativefusion.happytummy.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final OrderMappingRepository ordermappingRepository;

    @Override
    public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUser(Long uid) {
        User user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    @Override
    public UserResponse updateUser(UserRequest request, Long uid) {
        User user = userRepository.findByUid(uid);
        User newUser = new User();
        if (user != null) {
            newUser = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(user.getPassword())
                    .role(user.getRole())
                    .isEnabled(request.getIsEnabled())
                    .address(request.getAddress())
                    .phone(request.getPhone())
                    .build();
            userRepository.save(newUser);
        }
        return mapUserToUserResponse(newUser);
    }

    @Override
    public boolean deleteProduct(Long uid) {
        User user = userRepository.findByUid(uid);

        if (user != null) {
            // Get the orders for the user
            List<Order> orderList = orderRepository.findAllByUserUid(uid);

            if (!orderList.isEmpty()) {
                // Delete order mappings (if any) associated with each order
                for (Order order : orderList) {
                    List<OrderMapping> orderMappings = order.getOrderMappings();
                    for (OrderMapping orderMapping : orderMappings) {
                        ordermappingRepository.delete(orderMapping);
                    }
                }

                // Delete orders associated with the user
                orderRepository.deleteAll(orderList);
            }

            // Delete the user
            userRepository.delete(user);

            return true;
        } else {
            return false;
        }
    }


    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .address(user.getAddress())
                .phone(user.getPhone())
                .build();
    }

    @Override
    public CountResponse userCount() {
        long count = userRepository.count();
        return CountResponse.builder().count(count).build();
    }

}
