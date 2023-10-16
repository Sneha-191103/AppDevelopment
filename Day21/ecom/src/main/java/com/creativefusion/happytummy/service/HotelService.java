package com.creativefusion.happytummy.service;


import java.util.List;
import java.util.Optional;

import com.creativefusion.happytummy.dto.request.HotelRequest;
import com.creativefusion.happytummy.dto.response.HotelResponse;
import com.creativefusion.happytummy.model.Hotel;



public interface HotelService {

    List<HotelResponse> getAllHotels();

	boolean saveHotel(HotelRequest request);

	Optional<HotelResponse> getHotelById(Long hid);

	Hotel getHotelModelId(Long hid);

	HotelResponse getHotel(Long hid);

	

	HotelResponse updateHotel(HotelRequest request, Long hid);

}

