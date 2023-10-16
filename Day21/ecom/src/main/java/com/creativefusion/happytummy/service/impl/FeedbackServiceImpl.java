package com.creativefusion.happytummy.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.creativefusion.happytummy.client.FeedbackClient;
import com.creativefusion.happytummy.dto.request.FeedbackRequest;
import com.creativefusion.happytummy.dto.response.FeedbackResponse;
import com.creativefusion.happytummy.service.FeedbackService;
import com.creativefusion.happytummy.vo.Feedback;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackClient feedbackClient;
   
    @Override
    public List<FeedbackResponse> getFeedbacks() {
        List<Feedback> feedbacks = feedbackClient.getFeedbacks();
        return feedbacks.stream()
                .map(feedback -> {
                    FeedbackResponse response = new FeedbackResponse();
                    response.setFid(feedback.getFid());
                    response.setUsername(feedback.getUsername());
                    response.setUseremail(feedback.getUseremail());
                    response.setQuestion(feedback.getQuestion());
                    response.setAnswer(feedback.getAnswer());
                    return response;
                })
                .collect(Collectors.toList());
    }

}
