# Skills Manual 업데이트 가이드

스킬을 추가하거나 수정할 때 매뉴얼도 함께 업데이트해야 합니다.

## 새 스킬 추가 시

### 1. 스킬 파일 생성

```
your-skill-name/
├── SKILL.md          # 필수: 스킬 정의
├── scripts/          # 선택: Python 스크립트
└── templates/        # 선택: 템플릿 파일
```

### 2. SKILL.md 작성

```yaml
---
name: "스킬 이름"
description: "스킬 설명"
triggers:
  - "트리거 문구 1"
  - "트리거 문구 2"
---

# 스킬 내용...
```

### 3. 매뉴얼 업데이트 (docs/index.html)

#### 3-1. 스킬 카드 추가

해당 카테고리의 `<div class="skills-grid">` 안에 추가:

```html
<div class="skill-card">
  <h3 class="skill-name">스킬 이름</h3>
  <span class="skill-path">폴더/경로/</span>
  <p class="skill-desc">스킬 설명</p>
  <div class="skill-triggers">
    <h4>트리거 문구</h4>
    <div class="trigger-list">
      <span class="trigger">"트리거 1"</span>
      <span class="trigger">"트리거 2"</span>
    </div>
  </div>
  <div class="skill-features">
    <h4>주요 기능</h4>
    <ul class="feature-list">
      <li>기능 1</li>
      <li>기능 2</li>
      <li>기능 3</li>
    </ul>
  </div>
</div>
```

#### 3-2. 카테고리 카운트 업데이트

카테고리 헤더의 `<span class="category-count">` 숫자 수정:

```html
<span class="category-count">5개</span>  <!-- 4개 → 5개 -->
```

#### 3-3. 헤더 통계 업데이트

```html
<div class="stat">
  <div class="stat-num">40</div>  <!-- 39 → 40 -->
  <div class="stat-label">총 스킬</div>
</div>
```

#### 3-4. 업데이트 로그 추가

```html
<div class="update-item">
  <div class="update-date">2026-01-25</div>
  <div class="update-content">
    <strong>v1.2.1</strong> - [스킬 이름] 추가
  </div>
</div>
```

### 4. SKILL.md (루트) 업데이트

루트의 `SKILL.md` 파일에도 새 스킬 정보 추가:
- 폴더 구조 업데이트
- 총 스킬 수 업데이트
- 스킬 설명 추가

---

## 스킬 수정 시

1. 스킬 파일 수정
2. `docs/index.html`에서 해당 스킬 카드 내용 업데이트
3. 업데이트 로그에 변경사항 기록

---

## 스킬 삭제 시

1. 스킬 폴더 삭제
2. `docs/index.html`에서:
   - 스킬 카드 삭제
   - 카테고리 카운트 감소
   - 헤더 통계 감소
   - 업데이트 로그 기록
3. 루트 `SKILL.md` 업데이트

---

## 새 카테고리 추가 시

### 1. 네비게이션에 추가

```html
<nav class="nav">
  <div class="nav-inner">
    ...
    <a href="#new-category">새 카테고리</a>
    ...
  </div>
</nav>
```

### 2. 섹션 추가

```html
<section id="new-category" class="category">
  <div class="category-header">
    <span class="category-icon">&#128640;</span>  <!-- 적절한 이모지 -->
    <h2 class="category-title">새 카테고리</h2>
    <span class="category-count">0개</span>
  </div>
  <div class="skills-grid">
    <!-- 스킬 카드들 -->
  </div>
</section>
```

### 3. 헤더 카테고리 수 업데이트

```html
<div class="stat">
  <div class="stat-num">8</div>  <!-- 7 → 8 -->
  <div class="stat-label">카테고리</div>
</div>
```

---

## 아이콘 참고

| 카테고리 | 아이콘 코드 | 표시 |
|---------|------------|------|
| 콘텐츠 | `&#9998;` | ✎ |
| 브랜드 | `&#9733;` | ★ |
| 유틸리티 | `&#9881;` | ⚙ |
| 에이전트 | `&#129302;` | 🤖 |
| 외부 스킬 | `&#128640;` | 🚀 |
| 업데이트 | `&#128197;` | 📅 |

---

## 체크리스트

스킬 추가 시 확인사항:

- [ ] 스킬 폴더 생성
- [ ] SKILL.md 작성 (YAML 프론트매터 포함)
- [ ] docs/index.html 스킬 카드 추가
- [ ] docs/index.html 카테고리 카운트 업데이트
- [ ] docs/index.html 헤더 통계 업데이트
- [ ] docs/index.html 업데이트 로그 추가
- [ ] 루트 SKILL.md 업데이트
- [ ] git commit & push
