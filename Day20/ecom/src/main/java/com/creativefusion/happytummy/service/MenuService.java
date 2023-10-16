package com.creativefusion.happytummy.service;

import java.util.List;

import com.creativefusion.happytummy.dto.request.MenuRequest;
import com.creativefusion.happytummy.dto.response.CountResponse;
import com.creativefusion.happytummy.dto.response.MenuResponse;
import com.creativefusion.happytummy.model.Menu;



public interface MenuService {

    boolean saveMenu(MenuRequest request);

    List<MenuResponse> getAllMenu();

    MenuResponse getMenu(Long mid);

    MenuResponse updateMenu(MenuRequest request, Long mid);

    boolean deleteMenu(Long mid);

    Menu getMenuModelId(Long mid);

    CountResponse productCount();

}

