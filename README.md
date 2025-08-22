## 📌 Doda
25년 상반기 UNIS 2박 3일 해커톤 프로젝트 (2025.7.28 ~ 2025.7.30)

👉 배포 링크: https://doda-omega.vercel.app/

## 🚀 프로젝트 소개

정보 접근에 어려움을 겪는 사용자를 위한 맞춤형 복지·뉴스 큐레이션 플랫폼.
복잡하고 방대한 복지 제도나 뉴스 콘텐츠를 사용자가 쉽게 이해하고 접근할 수 있도록 돕는 것을 목표
앱 취지: 사회적 정보 격차를 줄이고, 누구나 복지/뉴스를 쉽게 활용하도록 지원

앱 목표:
복잡한 정보를 간단하고 직관적으로 전달
개인화된 맞춤 추천 및 필터링 기능 제공
시각적·청각적 접근성을 고려한 UI/UX 구현

## 🙋‍♀️ 역할
Frontend Developer로 참여
주요 페이지 UI/UX 설계 및 구현
백엔드 API 연동 (회원가입/로그인, 복지 리스트 호출, 뉴스 카드 렌더링 등)
Vercel을 활용한 최종 배포

🛠️ 기술 스택
Frontend: React + Vite + TypeScript
Styling: CSS Modules (모듈화된 컴포넌트 단위 스타일)
Routing: React Router DOM
Deployment: Vercel
Backend API: https://winnerteam.store REST API 연동

📑 페이지 설계

Onboarding
전화번호 입력/인증 → 비밀번호 설정 → 프로필 정보 입력 → 수준 설정
음성 안내 버튼을 통해 시각장애 사용자도 접근 가능

홈(Home)
상단 배너 슬라이드
카테고리별 아이콘 + 추천 상품 영역

고정 하단바(탭바)
-복지(Welfare)
API 기반 복지 리스트 호출 및 검색
상세페이지: 정책 설명 + 맞춤형 신청 확인 UI

-뉴스(News)
카테고리별 뉴스 카드 UI (이미지, 키워드, 제목 표시)
상세페이지: 기사 전문 보기, 감정 버튼(쉬워요/괜찮아요/어려워요), 음성 읽기

-콘텐츠
최신 유행 밈, 영상, 노래 


📂 파일 구조 (src 중심)
src
 ┣ components/          # 재사용 가능한 공용 컴포넌트 (버튼, 컨테이너 등)
 ┣ pages/
 ┃ ┣ onboarding/        # 온보딩 관련 화면 (Onboarding2, 3, 3-1, 4 ...)
 ┃ ┣ welfare/           # 복지 리스트/상세 페이지
 ┃ ┣ news/              # 뉴스 리스트/상세 페이지
 ┃ ┣ login/             # 로그인 페이지
 ┃ ┣ home/              # 홈(배너, 카테고리, 추천상품 등)
 ┃ ┗ etc/               # 예산 계산기, 상세페이지 등
 ┣ styles/              # CSS Module 파일
 ┣ App.tsx              # 라우팅 및 전체 앱 구조
 ┗ main.tsx             # 진입 파일

🌐 배포

배포 플랫폼: Vercel

배포 과정:
GitHub 저장소와 Vercel 연동
main 브랜치 push 시 자동 빌드 & 배포
환경변수/API는 .env 파일로 관리

👉 배포 링크: https://doda-omega.vercel.app/

📌 해커톤 성과

25년 7월 UNIS 해커톤(2박3일) 동안 기획 → 디자인 → 개발 → 배포까지 완료
프론트엔드/백엔드 연동 및 실제 사용 가능한 프로토타입 완성
복지/뉴스 접근성 강화라는 사회적 가치 중심 프로젝트

