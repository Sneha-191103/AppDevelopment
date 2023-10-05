//package com.creativefusion.sneha.service.impl;
//
//import java.util.List;
//import java.util.Optional;
//import java.util.stream.Collectors;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.creativefusion.sneha.dto.request.RequestHotelDto;
//import com.creativefusion.sneha.dto.response.ResponseHotelDto;
//import com.creativefusion.sneha.model.Hotel;
//import com.creativefusion.sneha.repository.HotelRepository;
//
//import jakarta.persistence.EntityNotFoundException;
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//
//@Service
//@Transactional
//@RequiredArgsConstructor
//public class HotelServiceimpl {
//	@Autowired
//	private HotelRepository hotelRepository;
//	
//	public boolean saveUser(RequestHotelDto hotelRequest) {
//		Optional<Hotel> isHotelOptional = hotelRepository.existsByHotel_name(hotelRequest.getHotel_name());
//		if(isHotelOptional.isPresent()) {
//			var data = Hotel.builder()
//					.hotel_name(hotelRequest.getHotel_name())
//					.address(hotelRequest.getAddress())
//					.location(hotelRequest.getLocation())
//					.rating(hotelRequest.getRating())
//					.build();
//		hotelRepository.save(data);
//			return true;
//		} else {
//			return false;
//		}
//	}
//	
//	public List<ResponseHotelDto> getAllUser() {
//        List<Hotel> hotelList = hotelRepository.findAll();
//
//        return hotelList.stream()
//                .map(this::mapToHotelResponse)
//                .collect(Collectors.toList());
//    }
//	public ResponseHotelDto updateUser(RequestHotelDto hotelRequest,int id) {
//		Hotel hotel = hotelRepository.findById(id);
//		if(hotel != null) {
//			hotel.setLocation(hotelRequest.getLocation());
//			hotel.setAddress(hotelRequest.getAddress());
//			hotel.setRating(hotelRequest.getRating());
//			hotelRepository.save(hotel);
//			
//			return mapHotelToHotelResponse(hotel);
//		} else {
//			throw new EntityNotFoundException("Hotel with id "+ id+" not found");
//		}
//	}
//	
//	
//	private ResponseHotelDto mapHotelToHotelResponse(Hotel hotel) {
//		return ResponseHotelDto.builder()
//				.id(hotel.getId())
//				.hotel_name(hotel.getHotel_name())
//				.location(hotel.getLocation())
//				.address(hotel.getAddress())
//				.rating(hotel.getRating())
//				.build();
//				
//	}
//	private ResponseHotelDto mapToHotelResponse(Hotel hotel) {
//        return ResponseHotelDto.builder()
//        		.id(hotel.getId())
//				.hotel_name(hotel.getHotel_name())
//				.location(hotel.getLocation())
//				.address(hotel.getAddress())
//				.rating(hotel.getRating())
//                .build();
//    }
//
//}
