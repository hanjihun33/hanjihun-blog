package com.hanjihun.blog.web;

import java.util.List;

public record SiteProfileResponse(
        String title,
        String subtitle,
        String description,
        List<String> categories
) {
}

