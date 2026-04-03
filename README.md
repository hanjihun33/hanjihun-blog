# hanjihun-blog

React + Spring Boot 기반 개인 블로그를 위한 기초 모노레포입니다.

## 구조

```text
.
├── frontend/  # React + Vite + TypeScript
└── backend/   # Spring Boot API
```

## 기술 선택

- Frontend: React, TypeScript, Vite
- Backend: Spring Boot, Java 17
- Dev flow: 프론트 개발 서버에서 `/api` 요청을 백엔드로 프록시

## 빠른 시작

### 1. 프론트엔드

```bash
cd frontend
npm install
npm run dev
```

기본 포트는 `5173`입니다.

### 2. 백엔드

```bash
cd backend
chmod +x mvnw
./mvnw spring-boot:run
```

기본 포트는 `8080`입니다.

`mvnw`는 로컬에 Maven이 없으면 Apache Maven을 자동으로 내려받아 실행합니다.

## 현재 포함된 기능

- React 기본 랜딩 화면
- 백엔드 상태를 읽어오는 `/api/blog/profile` 예제 API
- Vite 프록시 설정
- Spring Boot Actuator health endpoint

## 다음 단계 추천

1. 게시글 도메인(`Post`, `Category`, `Tag`) 추가
2. 데이터베이스(H2 -> PostgreSQL) 연결
3. 마크다운 에디터와 관리자 페이지 추가
4. 인증/권한 관리 추가

