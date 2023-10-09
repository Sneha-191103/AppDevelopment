package com.creativefusion.sneha.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.creativefusion.sneha.dto.request.RequestHotelDto;
import com.creativefusion.sneha.dto.request.RequestMenuDto;
import com.creativefusion.sneha.dto.response.ResponseHotelDto;
import com.creativefusion.sneha.services.impl.HotelServiceimpl;
import com.creativefusion.sneha.services.impl.MenuServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/vi/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {
	@Autowired
	private HotelServiceimpl hotelService;
	private MenuServiceImpl menuService;
	
	@GetMapping
	 @PreAuthorize("hasAuthority('admin:read')")
	 public ResponseEntity<List<ResponseHotelDto>> getAllUser() {
        List<ResponseHotelDto> userList = hotelService.getAllUser();
        return !userList.isEmpty() ? ResponseEntity.status(200).body(userList)
                : ResponseEntity.noContent().build();
    }

	@PutMapping("/{id}")
	 @PreAuthorize("hasAuthority('admin:update')")
	public ResponseEntity<ResponseHotelDto> updateUser(@RequestBody RequestHotelDto userRequest, @PathVariable int id){
		ResponseHotelDto userResposne = hotelService.updateUser(userRequest, id);
		return userResposne != null ? ResponseEntity.ok().body(userResposne) : ResponseEntity.notFound().build();
	}
	@PostMapping
	 @PreAuthorize("hasAuthority('admin:create')")
	public ResponseEntity<String> saveUser(@RequestBody RequestHotelDto hotelRequest){
		boolean isDataSaved = hotelService.saveHotel(hotelRequest);
		return isDataSaved ? ResponseEntity.status(200).body("Hotel added successfully"):
				ResponseEntity.status(403).body("Something went wrong");
	}
	@PostMapping("/menu")
	 @PreAuthorize("hasAuthority('admin:create')")
	public ResponseEntity<String> saveMenu(@RequestBody RequestMenuDto menuRequest){
		boolean isDataSaved = menuService.saveMenu(menuRequest);
		return isDataSaved ? ResponseEntity.status(200).body("Menu added successfully"):
				ResponseEntity.status(403).body("Something went wrong");
	}
	@DeleteMapping("/{id}")
	 @PreAuthorize("hasAuthority('admin:delete')")
	public ResponseEntity<String> deleteUser(@PathVariable int id){
		boolean isDeleted = hotelService.deleteUser(id);
		return isDeleted ? ResponseEntity.ok().body("Hotel deleted successfully !")
				          :ResponseEntity.notFound().build();
	}

}
