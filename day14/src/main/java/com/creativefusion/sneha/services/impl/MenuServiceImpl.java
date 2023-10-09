package com.creativefusion.sneha.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.creativefusion.sneha.dto.request.RequestMenuDto;
import com.creativefusion.sneha.dto.response.ResponseHotelDto;
import com.creativefusion.sneha.model.Hotel;
import com.creativefusion.sneha.model.Menu;
import com.creativefusion.sneha.repository.HotelRepository;
import com.creativefusion.sneha.repository.MenuRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class MenuServiceImpl {
	@Autowired
	private MenuRepository menuRepository;
	private HotelRepository hotelRepository;
	
	public boolean saveMenu(RequestMenuDto menuRequest) {
			var data = Menu.builder()
					.food_name(menuRequest.getFood_name())
					.description(menuRequest.getDescription())
					.price(menuRequest.getPrice())
					.img_url(menuRequest.getImg_url())
					.hotel(hotelRepository.findById(menuRequest.getHotel_id()))
					.build();
			System.out.println(data);
		menuRepository.save(data);
			return true;
		
	}
//	public boolean deleteUser(int id) {
//		Hotel hotel = hotelRepository.findById(id);
//		if(hotel != null) {
//			hotelRepository.deleteById(id);
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
	
	private ResponseHotelDto mapHotelToHotelResponse(Hotel hotel) {
		return ResponseHotelDto.builder()
				.id(hotel.getId())
				.hotel_name(hotel.getHotel_name())
				.location(hotel.getLocation())
				.address(hotel.getAddress())
				.rating(hotel.getRating())
				.menu(hotel.getMenu())
				.build();
				
	}
	private ResponseHotelDto mapToHotelResponse(Hotel hotel) {
        return ResponseHotelDto.builder()
        		.id(hotel.getId())
				.hotel_name(hotel.getHotel_name())
				.location(hotel.getLocation())
				.address(hotel.getAddress())
				.rating(hotel.getRating())
                .build();
    }


}