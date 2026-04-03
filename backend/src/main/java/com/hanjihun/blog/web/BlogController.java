package com.hanjihun.blog.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    private final BlogQueryService blogQueryService;

    public BlogController(BlogQueryService blogQueryService) {
        this.blogQueryService = blogQueryService;
    }

    @GetMapping
    public List<BlogSummaryResponse> list() {
        return blogQueryService.findAll();
    }

    @GetMapping("/{id}")
    public BlogDetailResponse detail(@PathVariable long id) {
        return blogQueryService.findById(id);
    }
}
