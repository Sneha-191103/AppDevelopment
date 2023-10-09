package com.creativefusion.sneha.dto.request;

import java.util.List;

import com.creativefusion.sneha.model.Menu;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RequestHotelDto {
	private String hotel_name;
	private String location;
	private String address;
	private int rating;
	private List<Menu> menu;

}
