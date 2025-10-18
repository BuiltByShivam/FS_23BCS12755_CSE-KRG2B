package com.smartinventory.controller;

import com.smartinventory.model.Product;
import com.smartinventory.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*") // allow all for testing
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // 🟢 Get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // 🟡 Add new product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        product.setLastUpdated(LocalDateTime.now()); // auto-update timestamp
        return productRepository.save(product);
    }

    // 🟡 Update product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Product product = productRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Product not found with id " + id)
        );

        // update fields
        product.setName(productDetails.getName());
        product.setCategory(productDetails.getCategory());
        product.setPrice(productDetails.getPrice());
        product.setSku(productDetails.getSku());
        product.setQuantity(productDetails.getQuantity());
        product.setLastUpdated(LocalDateTime.now()); // auto-update timestamp

        return productRepository.save(product);
    }

    // 🔴 Delete a product
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
    }
}
