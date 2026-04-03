package com.hanjihun.blog.web;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class BlogQueryService {

    private final List<BlogPostView> posts = List.of(
            new BlogPostView(
                    1L,
                    "React + Spring 블로그 구조를 어떻게 나눌까",
                    "프론트와 백엔드를 분리하면서도 개발 흐름을 단순하게 유지하는 기준을 정리합니다.",
                    """
                    블로그를 오래 운영하려면 화면과 API의 책임이 명확해야 합니다.

                    프론트는 읽기 경험과 상호작용에 집중하고, 백엔드는 게시글 조회, 태그, 시리즈, 이미지 업로드 같은 도메인 책임을 가지는 편이 유지보수에 유리합니다.

                    처음에는 정적 데이터로 시작하더라도 API 계약을 먼저 정해 두면, 이후에 데이터베이스를 붙일 때 프론트 수정량을 줄일 수 있습니다.
                    """,
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
                    "2026-04-03T10:00:00",
                    List.of(
                            new BlogTagResponse(1L, "react"),
                            new BlogTagResponse(2L, "spring"),
                            new BlogTagResponse(3L, "architecture")
                    )
            ),
            new BlogPostView(
                    2L,
                    "Vite 프론트엔드에서 Spring API를 연결할 때 먼저 정할 것",
                    "프록시 설정, API 경로, 응답 형식을 먼저 고정하면 이후 작업 속도가 빨라집니다.",
                    """
                    Vite를 사용할 때 개발 환경에서는 /api 프록시를 두는 것이 가장 단순합니다.

                    이렇게 하면 프론트 코드에서는 절대 주소를 직접 쓰지 않아도 되고, 운영 환경에서는 리버스 프록시나 같은 도메인 배포 전략으로 그대로 이어가기 쉽습니다.

                    응답 형식도 초기에 합의해야 합니다. 이번 예시처럼 목록과 상세 응답 구조를 먼저 맞추면 React 화면을 안정적으로 옮길 수 있습니다.
                    """,
                    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
                    "2026-04-02T09:30:00",
                    List.of(
                            new BlogTagResponse(4L, "vite"),
                            new BlogTagResponse(2L, "spring"),
                            new BlogTagResponse(5L, "api")
                    )
            ),
            new BlogPostView(
                    3L,
                    "Next.js 코드베이스에서 순수 React로 안전하게 옮기는 순서",
                    "라우팅과 메타데이터, 이미지 처리처럼 프레임워크 의존도가 높은 부분부터 분리해야 합니다.",
                    """
                    기존 Next.js 프로젝트를 옮길 때는 app router 파일을 그대로 복사하면 안 됩니다.

                    먼저 페이지 경로를 react-router-dom으로 다시 세우고, next/link, next/image, next/navigation 같은 전용 기능을 치환해야 합니다.

                    그 다음 공통 UI와 API 호출 레이어를 옮기면 프레임워크에 묶인 코드를 줄이면서도 기존 화면 구성을 상당 부분 재사용할 수 있습니다.
                    """,
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
                    "2026-04-01T08:15:00",
                    List.of(
                            new BlogTagResponse(1L, "react"),
                            new BlogTagResponse(6L, "migration"),
                            new BlogTagResponse(7L, "nextjs")
                    )
            )
    );

    public List<BlogSummaryResponse> findAll() {
        return posts.stream()
                .map(post -> new BlogSummaryResponse(
                        post.id(),
                        post.title(),
                        post.summary(),
                        post.thumbnailUrl(),
                        post.createdDate(),
                        post.tags()
                ))
                .toList();
    }

    public BlogDetailResponse findById(long id) {
        BlogPostView post = posts.stream()
                .filter(candidate -> candidate.id() == id)
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Blog post not found"));

        return new BlogDetailResponse(
                post.id(),
                post.title(),
                post.summary(),
                post.content(),
                post.thumbnailUrl(),
                post.createdDate(),
                post.tags()
        );
    }

    private record BlogPostView(
            long id,
            String title,
            String summary,
            String content,
            String thumbnailUrl,
            String createdDate,
            List<BlogTagResponse> tags
    ) {
    }
}
