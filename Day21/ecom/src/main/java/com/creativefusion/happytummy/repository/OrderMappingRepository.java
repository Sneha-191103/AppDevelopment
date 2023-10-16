package com.creativefusion.happytummy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.creativefusion.happytummy.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {
//	void deleteByOrderId(Long order_id);
}
