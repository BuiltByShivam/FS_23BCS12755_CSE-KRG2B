package com.smartinventory.repository;

import com.smartinventory.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // JpaRepository provides CRUD methods by default
    // You can add custom queries here later if needed
}
