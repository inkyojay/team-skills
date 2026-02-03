---
name: nano-banana-pro
description: Google Gemini 3 Pro Image API를 사용한 이미지 생성 및 편집. 텍스트로 이미지 생성, 기존 이미지 수정/편집 가능.
triggers:
  - "이미지 생성"
  - "이미지 만들어줘"
  - "이미지 편집"
  - "사진 수정"
  - "generate image"
  - "edit image"
---

# Nano Banana Pro - AI 이미지 생성 & 편집

Google의 Gemini 3 Pro Image API를 활용한 이미지 생성 및 편집 스킬입니다.

## 기능

### 1. 텍스트 → 이미지 생성
프롬프트만으로 새로운 이미지를 생성합니다.

### 2. 이미지 편집/수정
기존 이미지를 기반으로 수정, 스타일 변경, 요소 추가/제거 등이 가능합니다.

## 사용법

### 새 이미지 생성

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "이미지 설명" \
  --filename "output.png" \
  [--resolution 1K|2K|4K]
```

### 기존 이미지 편집

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "편집 지시사항" \
  --filename "edited-output.png" \
  --input-image "원본이미지.png" \
  [--resolution 1K|2K|4K]
```

## 해상도 옵션

| 옵션 | 해상도 | 용도 |
|------|--------|------|
| `1K` | ~1024px | 기본값, 빠른 생성 |
| `2K` | ~2048px | 중간 품질 |
| `4K` | ~4096px | 고품질, 인쇄용 |

## API 키 설정

### 방법 1: direnv 사용 (권장)

프로젝트별로 API 키를 안전하게 관리합니다.

1. direnv 설치:
   ```bash
   brew install direnv
   ```

2. 셸에 훅 추가 (~/.zshrc 또는 ~/.bashrc):
   ```bash
   eval "$(direnv hook zsh)"  # zsh 사용시
   eval "$(direnv hook bash)" # bash 사용시
   ```

3. 프로젝트 루트에 `.envrc` 파일 생성:
   ```bash
   export GEMINI_API_KEY="your-api-key-here"
   ```

4. direnv 허용:
   ```bash
   direnv allow
   ```

5. `.gitignore`에 추가:
   ```
   .envrc
   ```

### 방법 2: 직접 전달

```bash
uv run ... --api-key "your-api-key"
```

## 예제

### 제품 이미지 생성

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "A cozy baby sleeping bag in soft beige color, product photography style, white background, studio lighting" \
  --filename "2025-01-28-sleeping-bag-product.png" \
  --resolution 2K
```

### 배경 변경

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Change the background to a modern nursery room with soft lighting" \
  --filename "2025-01-28-product-in-nursery.png" \
  --input-image "original-product.png" \
  --resolution 2K
```

### 스타일 변환

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Convert to watercolor painting style" \
  --filename "2025-01-28-watercolor-style.png" \
  --input-image "photo.jpg"
```

### 요소 추가/제거

```bash
# 요소 추가
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Add a cute teddy bear next to the baby" \
  --filename "with-teddy.png" \
  --input-image "baby-photo.png"

# 요소 제거
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Remove the person in the background" \
  --filename "clean-background.png" \
  --input-image "original.png"
```

## 파일명 규칙

자동 생성 시 권장 형식:
```
yyyy-mm-dd-hh-mm-ss-descriptive-name.png
```

예시:
- `2025-01-28-14-30-00-baby-nursery.png`
- `2025-01-28-15-45-22-product-shot.png`

## 팁

1. **프롬프트 작성**: 구체적이고 상세한 설명이 좋은 결과를 만듭니다
2. **편집 시**: 변경하고 싶은 부분만 명확히 지시하세요
3. **해상도**: 입력 이미지가 있으면 자동으로 적절한 해상도를 감지합니다
4. **출력**: 항상 PNG 형식으로 저장됩니다

## 관련 링크

- [Google Gemini API](https://ai.google.dev/)
- [원본 스킬](https://skills.sh/intellectronica/agent-skills/nano-banana-pro)
