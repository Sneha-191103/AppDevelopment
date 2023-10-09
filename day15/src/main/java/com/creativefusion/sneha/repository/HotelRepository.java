package com.creativefusion.sneha.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.creativefusion.sneha.model.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel,Integer> {
//	@Query("SELECT u FROM Hotel u WHERE u.hotel_name = :hotel_name")
//	Hotel existsByHotel_name(@Param("hotel_name") String hotel_name);
	public Hotel findById(int id);
	void deleteById(int id);

}
