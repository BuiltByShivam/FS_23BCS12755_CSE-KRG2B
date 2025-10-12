import com.smartinventory.model.Product;
import com.smartinventory.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SmartInventoryApplication {

    public static void main(String[] args) {
        SpringApplication.run(SmartInventoryApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(ProductRepository productRepository) {
        return (args) -> {
            // Create a sample product
            Product product = new Product("Laptop", "Dell Inspiron 15", 10, 55000.0);

            // Save it to the database
            productRepository.save(product);

            // Print all products in the database
            productRepository.findAll().forEach(System.out::println);
        };
    }
}
