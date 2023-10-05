package com.creativefusion.sneha.dto.response;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseHotelDto {
	private int id;
	private String hotel_name;
	private String location;
	private String address;
	private int rating;

}
