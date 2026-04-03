package com.hanjihun.blog.config;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Validated
@ConfigurationProperties(prefix = "app.site")
public record SiteProfileProperties(
        @NotBlank String title,
        @NotBlank String subtitle,
        @NotBlank String description,
        @NotEmpty List<@NotBlank String> categories
) {
}

