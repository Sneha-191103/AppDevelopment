package com.creativefusion.happytummy.constant;

import java.util.Arrays;
import java.util.List;

public class Api {
    public static final String DEFAULT = "http://localhost:8181";
    public static final String AUTH = "/ecom/auth";
    public static final String USER = "/ecom/user";
    public static final String CATEGORY = "/ecom/hotel";
    public static final String PRODUCT = "/ecom/menu";
    public static final String ORDER = "/ecom/order";
    public static final String FEEDBACK = "/ecom/feedback";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:3000");
}
