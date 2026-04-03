package com.hanjihun.blog.web;

import java.util.List;

public record BlogSummaryResponse(
        long id,
        String title,
        String summary,
        String thumbnailUrl,
        String createdDate,
        List<BlogTagResponse> tags
) {
}
