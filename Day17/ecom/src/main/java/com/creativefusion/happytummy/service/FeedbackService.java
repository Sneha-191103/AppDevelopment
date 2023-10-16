package com.creativefusion.happytummy.service;

import java.util.List;

import com.creativefusion.happytummy.dto.response.FeedbackResponse;

public interface FeedbackService {

    List<FeedbackResponse> getFeedbacks();

}
