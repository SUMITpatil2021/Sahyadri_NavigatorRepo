package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages="com.example.demo.*")
@EnableJpaRepositories(basePackages = "com.example.demo.repositories")
public class TrekkingAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrekkingAppApplication.class, args);
	}

}
