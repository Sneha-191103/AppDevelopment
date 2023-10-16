package com.creativefusion.happytummy.service;

import java.util.List;

import com.creativefusion.happytummy.dto.request.OrderRequest;
import com.creativefusion.happytummy.dto.response.CountResponse;
import com.creativefusion.happytummy.dto.response.OrderResponse;



public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

	List<OrderResponse> orderResponses();

}
