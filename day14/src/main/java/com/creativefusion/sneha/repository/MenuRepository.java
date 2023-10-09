package com.creativefusion.sneha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.creativefusion.sneha.model.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu,Integer> {
	public Menu findById(int id);
	void deleteById(int id);
}
