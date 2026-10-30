# SAFE LAB

2026 IRC 매니퓰레이터 대회 출품작 **SAFE LAB**(팀 ROBIT)의 소개 웹 페이지입니다.
VLA와 직접 제작한 Mobile Manipulator로 연구실 안전사고에 대처하는 프로젝트를 소개합니다.

## 기술 스택

- [Astro](https://astro.build) (정적 출력) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [Pretendard](https://github.com/orioncactus/pretendard) 폰트 (패키지로 설치, 셀프호스팅)

## 환경 세팅

### 준비물

| 도구 | 버전 | 확인 |
|---|---|---|
| Node.js | 22.23.4 이상 | `node --version` |
| npm | 9.6.5 이상 (Node에 포함) | `npm --version` |
| Git | 최신 | `git --version` |

Node.js는 [nodejs.org](https://nodejs.org)의 LTS 버전을 설치하면 됩니다.

### 설치

```bash
git clone https://github.com/Team-ROBIT/irc-mani-web.git
cd irc-mani-web
npm install
```

## 실행 방법

| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행. 파일을 저장하면 브라우저가 바로 갱신됩니다. |
| `npm run build` | `dist/`에 배포용 정적 파일을 만듭니다. |
| `npm run preview` | 빌드 결과를 로컬에서 미리 봅니다. (`npm run build` 먼저 실행) |

개발 서버를 실행하면 터미널에 주소가 표시됩니다. 기본 주소는 아래와 같습니다.

```
http://localhost:4321/irc-mani-web/
```

주소 끝의 `/irc-mani-web/`는 GitHub Pages 배포 경로(`base`)입니다. 빼고 접속하면 페이지가 열리지 않습니다.

## 프로젝트 구조

```
src/
├─ data/site.ts           # 페이지의 모든 문구·수치·팀 정보 (내용 수정은 주로 여기)
├─ assets/media/          # 사진 파일 (파일명만 맞추면 자동으로 반영)
├─ pages/index.astro      # 홈 페이지 (왼쪽 챕터 목차 + 본문)
├─ components/
│  ├─ sections/           # 배경, Task, 시연 결과, 시스템, 하드웨어, 소프트웨어, 팀 섹션
│  ├─ Media.astro         # 사진이 없으면 필요한 규격이 적힌 자리표시를 보여줌
│  └─ ...
├─ layouts/Base.astro     # 공통 HTML 틀
└─ styles/global.css      # 전역 스타일, 색상 값
```

## 내용 수정하기

### 문구·수치·팀 정보

[`src/data/site.ts`](src/data/site.ts)만 수정하면 됩니다. 디자인 코드는 건드리지 않아도 됩니다.

- `project`: 이름, 팀, Hero 문구
- `why`: 통계, 위험 요인, 출처, 사례 영상
- `tasks`, `results`, `hardware`, `system`, `software`, `team`: 각 섹션의 내용
- `pending: true`인 항목은 화면에 "확정 전" 또는 "자료 준비 중"으로 표시됩니다. 내용이 확정되면 `false`로 바꾸거나 지우세요.
- `[작성 예정]`으로 적힌 문구는 직접 채워야 할 자리입니다.

### 사진 넣기

`src/assets/media/` 아래에 정해진 이름으로 파일을 넣으면 코드 수정 없이 자동으로 교체됩니다. 확장자는 `jpg`, `jpeg`, `png`, `webp`, `avif`를 쓸 수 있습니다.

| 파일 | 용도 |
|---|---|
| `hero/robot.jpg` | 맨 위 대표 사진 (16:9, 가로 2400px 이상) |
| `hardware/manipulator.jpg` | Mobile Manipulator 사진 (4:3) |
| `hardware/leader-arm.jpg` | 리더암 사진 (4:3) |
| `hardware/station.jpg` | 스테이션 사진 (4:3) |
| `software/vlm.jpg` 등 | 소프트웨어 모듈별 결과 이미지 (`vlm`, `vision`, `imitation`, `task-planner`, `motion-planner`) |
| `team/kim-minjo.jpg` 등 | 팀원 사진 (1:1, 800px 이상) |

사진이 없는 자리는 회색 자리표시로 보이며, 거기에 필요한 파일 경로와 규격이 적혀 있습니다.

## 공개 repo 주의사항

이 repo는 11/10 제출 시점에 public으로 전환됩니다. 아래 항목은 커밋하지 마세요.

- 연락처·학번 등 개인정보, API 키, `.env` 파일
- 동의를 받지 않은 팀원 사진과 이름
- 내부 회의 원본 문서
- 사진의 위치 정보(EXIF). 사진을 넣기 전에 제거하세요.

자세한 작업 규칙은 [CLAUDE.md](CLAUDE.md)를 참고하세요.

## 커밋 규칙

gitmoji 형식을 씁니다: `:이모지: 타입: 설명`

```
:sparkles: Create: add team photos
:memo: Docs: update README.md
```
