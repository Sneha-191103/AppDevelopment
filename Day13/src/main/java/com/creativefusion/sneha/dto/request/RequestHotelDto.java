package com.creativefusion.sneha.dto.request;

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

}
