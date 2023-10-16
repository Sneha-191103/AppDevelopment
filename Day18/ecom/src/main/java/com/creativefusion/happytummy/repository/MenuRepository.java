package com.creativefusion.happytummy.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.creativefusion.happytummy.model.Menu;


public interface MenuRepository extends JpaRepository<Menu, Long> {

    Optional<Menu> findByFoodName(String foodName);

    Menu findByMid(Long mid);

    void deleteByMid(Long mid);


}

