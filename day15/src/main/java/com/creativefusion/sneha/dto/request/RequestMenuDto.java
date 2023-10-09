package com.creativefusion.sneha.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RequestMenuDto {
	private String food_name;
	private String img_url;
	private Double price;
	private String description;
	private int hotel_id;
	

}
