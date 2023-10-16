package com.creativefusion.happytummy.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.creativefusion.happytummy.constant.Api;
import com.creativefusion.happytummy.dto.request.HotelRequest;
import com.creativefusion.happytummy.dto.response.HotelResponse;
import com.creativefusion.happytummy.service.HotelService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.CATEGORY)
@RequiredArgsConstructor
@Tag(name = "Category")
public class HotelController {

    private final HotelService hotelService;

    @GetMapping("/get")
    public ResponseEntity<List<HotelResponse>> getAllCategories() {
        List<HotelResponse> hotelResponse = hotelService.getAllHotels();
        return !hotelResponse.isEmpty() ? ResponseEntity.ok().body(hotelResponse)
                : ResponseEntity.noContent().build();
    }
    @PostMapping("/add")
    public ResponseEntity<String> saveHotel(@RequestBody HotelRequest request) {
        boolean isSaved = hotelService.saveHotel(request);
        return isSaved ? ResponseEntity.status(201).body("Hotel added successfully!")
                : ResponseEntity.badRequest().build();
    }
    @GetMapping("/gethotelbyId/{hid}")
    public ResponseEntity<HotelResponse> getHotelById(@PathVariable Long hid) {
        HotelResponse hotelResponse = hotelService.getHotel(hid);
        return hotelResponse != null ? ResponseEntity.ok().body(hotelResponse) : ResponseEntity.notFound().build();
    }
    @PutMapping("/edit/{hid}")
    public ResponseEntity<HotelResponse> updateProduct(@RequestBody HotelRequest request, @PathVariable Long hid) {
        HotelResponse hotelResponse = hotelService.updateHotel(request, hid);
        return hotelResponse != null ? ResponseEntity.ok().body(hotelResponse) : ResponseEntity.notFound().build();
    }



}
