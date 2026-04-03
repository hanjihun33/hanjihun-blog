package com.hanjihun.blog.web;

import java.util.List;

public record BlogDetailResponse(
        long id,
        String title,
        String summary,
        String content,
        String thumbnailUrl,
        String createdDate,
        List<BlogTagResponse> tags
) {
}
