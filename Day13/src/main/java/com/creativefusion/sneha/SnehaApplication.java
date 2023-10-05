package com.creativefusion.sneha;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.creativefusion.sneha.dto.request.RegisterRequest;
import com.creativefusion.sneha.service.impl.AuthenticationService;
import static com.creativefusion.sneha.model.Role.USER;
import static com.creativefusion.sneha.model.Role.ADMIN;

@SpringBootApplication
@EnableJpaAuditing()
public class SnehaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SnehaApplication.class, args);
	}
		
		@Bean
		public CommandLineRunner commandLineRunner(
				AuthenticationService service
		) {
			return args -> {
				var admin = RegisterRequest.builder()
											.user_name("Admin")
											.email("admin@mail.com")
											.pass_word("password")
											.role(ADMIN)
											.build();
				System.out.println("Admin token: " + service.register(admin).getAccessToken());

				var user = RegisterRequest.builder()
											.user_name("User")
											.email("user@mail.com")
											.pass_word("password")
											.role(USER)
											.build();
				System.out.println("User token: " + service.register(user).getAccessToken());

			};
		}		
}


