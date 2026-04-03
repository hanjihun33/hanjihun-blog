package com.hanjihun.blog.web;

import com.hanjihun.blog.config.SiteProfileProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/blog")
public class SiteProfileController {

    private final SiteProfileProperties siteProfileProperties;

    public SiteProfileController(SiteProfileProperties siteProfileProperties) {
        this.siteProfileProperties = siteProfileProperties;
    }

    @GetMapping("/profile")
    public SiteProfileResponse profile() {
        return new SiteProfileResponse(
                siteProfileProperties.title(),
                siteProfileProperties.subtitle(),
                siteProfileProperties.description(),
                siteProfileProperties.categories()
        );
    }
}

