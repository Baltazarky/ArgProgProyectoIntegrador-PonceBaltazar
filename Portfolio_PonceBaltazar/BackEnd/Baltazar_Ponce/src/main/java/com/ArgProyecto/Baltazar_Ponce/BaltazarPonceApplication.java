package com.ArgProyecto.Baltazar_Ponce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BaltazarPonceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BaltazarPonceApplication.class, args);
	}
        
       @Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/auth/login").allowedOrigins("https://balponargprog.web.app", "https://balponargprog.web.app/login");
			}
		};
	}
}
