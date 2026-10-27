# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

# Project: SAFE LAB 웹 페이지

이 repo는 2026 IRC 매니퓰레이터 대회(광운대 주관)에 제출하는 **홈페이지**다. 평가 항목 ⑤ "홈페이지 또는 보고서"(20점)이며 기준은 "잘 정리되어 있는가", "다른 사람들에게 도움이 되는가"이다. 규정 2.4③에 따라 작품의 **주제, 개발 과정, 구현 내용**을 담는다.

## 프로젝트 사실 (단일 출처, 확정되면 content 파일로 이동)

- 이름 SAFE LAB, 팀 ROBIT, 슬로건 없음. 연구실 안전사고를 VLA와 자체 제작 Mobile Manipulator로 대처한다.
- 일정: 프로젝트 완료 목표 10/30, 홈페이지 제출 11/10(본선 2일 전까지). 제출일 전후로 repo를 public 전환하고 계속 유지한다.
- 정식 참가자(4인): 김민조, 우정윤, 송수민, 박기홍. 도움 주신 분: 최범수 (팀 소개와 별도 항목).
- 역할
  - 김민조: QDD 모터 low-level 제어기, 모방학습, Task planner
  - 우정윤: QDD 매니퓰레이터 설계·가공, 조립
  - 박기홍: 매니퓰레이터 배선, 소품 제작·준비, 웹 페이지 제작
  - 송수민: VLM, Vision
- 시연 task와 AI 역할은 08.13 컨셉 문서 기준이며 **확정 전**이다. 사이트에는 "확정 전" 표시를 붙인다.
- 한국어 우선. 영어는 나중에 추가할 수 있으므로 본문 문구는 content 파일에 둔다.

## 공개 repo 규칙 (11/10 이후 전부 공개된다)

- 커밋 금지: 연락처·학번 등 개인정보, API 키와 `.env`, `.claude/`, Claude 대화·세션 기록, 내부 회의 원본(컨셉 PDF 등).
- 팀원 사진·실명은 동의가 확인된 것만 쓴다. 사진은 EXIF(GPS)를 제거한다.
- 외부 링크에서 추적 파라미터(쿠팡 `traceId` 등)를 제거한다.
- 외부 영상은 YouTube 임베드와 출처 표기로만 쓴다. 통계는 출처를 표기한다(예: 과기정통부 연구실안전관리실태조사 2024, KOSIS).
- 생성 이미지·목업은 실제 시연으로 오인되지 않게 "컨셉 일러스트"로 표기한다.
- 리더암은 모방학습 데이터 수집용이며, 시합 중 수동 조작은 없다(규정 2.1⑥)는 점을 분명히 쓴다.
- 커밋 메시지와 PR 설명에 대화 내용을 넣지 않는다.

## 커밋 규칙

- commit과 push는 사용자가 직접 한다. Claude는 `git add` 대상과 커밋 메시지만 추천하고, commit·push를 실행하지 않는다.
- `Co-Authored-By` 등 Claude를 공동 작성자로 표기하는 줄을 넣지 않는다. 커밋 메시지는 추천 문구 그대로 쓸 수 있게 작성한다.
- 형식은 gitmoji를 쓴다: `:이모지: 타입: 설명`. 예: `:sparkles: Create: a new project`, `:memo: Docs: update README.md`.
- 커밋 하나에는 한 가지 변경만 담는다.

## 기술 스택 (확정)

- Astro + TypeScript + Tailwind CSS + MDX, 정적 출력, GitHub Pages(base path `/irc-mani-web/`).
- 기본은 JS 없는 정적 페이지로 하고, 3D 뷰어·타임라인처럼 필요한 곳에만 클라이언트 JS를 쓴다.
- 스크롤 연출은 CSS(scroll-driven animations, View Transitions)를 먼저 쓰고, 부족할 때만 GSAP을 쓴다. 3D는 `<model-viewer>`, 폰트는 Pretendard 셀프호스팅.
- 디자인 시안 4종: A Lab HUD(어두운 톤, VLM 탐지 패널), B Clean Editorial(밝고 큰 타이포, 3D 로봇), C Incident → Response(경고 노랑/검정, 스토리), D Blueprint/Docs(도면 그리드, 문서 중심). 시안은 Hero + 대표 섹션 2개 + 모바일 화면만 만들고 모두 같은 더미 콘텐츠를 쓴다.

## 구조 규칙

- 콘텐츠(문구·수치·팀 정보)와 디자인(컴포넌트·스타일)을 분리한다. 디자인을 바꿔도 콘텐츠 파일은 그대로여야 한다.
- 아직 없는 자료는 라벨과 필요 규격이 적힌 플레이스홀더로 두고, 파일만 교체하면 반영되게 한다.
- 보류 섹션(시스템 구성, 소프트웨어)은 `draft` 표시로 빌드에서 숨긴다. 공개 시점에 빈 틀이 보이면 안 된다.
- 큰 TV에서도 읽히는 글자 크기, `prefers-reduced-motion` 대응, 모바일 대응을 기본으로 한다.
- 영상은 repo에 10MB 이하 루프만 넣고, 긴 영상은 YouTube를 쓴다.
- 완료 기준은 "빌드 성공 + 데스크톱/모바일 스크린샷 확인"이다.

## 브랜치 규칙

- 디자인 시안은 `design/<알파벳>-<이름>` 브랜치에서 만들고, 시안 PR은 열지 않는다.
- 공개 전환 전에 시안 브랜치를 원격에서 삭제한다.
