package com.hanjihun.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class HanjihunBlogApplication {

    public static void main(String[] args) {
        SpringApplication.run(HanjihunBlogApplication.class, args);
    }
}

