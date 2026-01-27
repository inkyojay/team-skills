# Team Skills Catalog

마케팅 및 콘텐츠 제작을 위한 스킬 모음입니다.

> 자동 생성됨: 2026-01-27 12:06

## 통계

| 항목 | 수량 |
|------|------|
| 총 스킬 | 53개 |
| 에이전트 | 13개 |
| 카테고리 | 6개 |

---

## 폴더 구조

```
team-skills/
├── skills/
│   ├── content-creation/  # 콘텐츠 제작 (2)
│   ├── video/  # 영상 제작 (2)
│   ├── tools/  # 유틸리티 도구 (10)
│   ├── brand/  # 브랜드 관리 (5)
│   ├── advertising/  # 광고 (1)
│   ├── marketing/  # 마케팅 전략 (33)
├── agents/
├── commands/
└── scripts/
```

---

## 📝 콘텐츠 제작

### card-news-creator
**위치:** `skills/content-creation/card-news/`

유튜브, 웹페이지, PDF 등 다양한 소스에서 콘텐츠를 추출하여 인스타그램 스타일 카드뉴스로 변환. 나노바나 API로 배경 이미지를 자동 생성하고, Sunday Hug 스타일의 세련된 카드뉴스 제작. 사용자가 (1) 유튜브 URL을 주고 카드뉴스 제작을 요청하거나, (2) 웹페이지/블로그 URL로 카드뉴스를 요청하거나, (3) 특정 주제로 카드뉴스 제작을 요청할 때 사용.

---

### page-builder
**위치:** `skills/content-creation/page-builder/`

---
name: page-builder
description: |
  멀티 브랜드 상세페이지를 생성하는 스킬.
  트리거: "상세페이지 만들어줘", "제품 페이지 작성", "[브랜드명] 스타일로",
  "URL 분석해서 리뉴얼", "경쟁사 페이지 참고해서"
---

---

## 🎬 영상 제작

### reels-editor
**위치:** `skills/video/reels-editor/`

사용자가 업로드한 영상을 Instagram Reels 광고 형식(9:16, 1080x1920, 최대 90초)으로 자동 편집합니다.

**기능:**
- A
- 9
- 클
- 오

---

### remotion-best-practices
**위치:** `skills/video/remotion/`

Best practices for Remotion - Video creation in React

---

## 🔧 유틸리티 도구

### capture-sections
**위치:** `skills/tools/capture-sections/`

HTML 상세페이지를 섹션별 고해상도 이미지로 캡처합니다. "섹션 캡처", "HTML 이미지로", "스크린샷" 요청 시 사용.

**기능:**
- H
- 고
- 2

---

### hook-creator
**위치:** `skills/tools/hook-creator/`

Create and configure Claude Code hooks for customizing agent behavior. Use when the user wants to (1) create a new hook, (2) configure automatic formatting, logging, or notifications, (3) add file protection or custom permissions, (4) set up pre/post tool execution actions, or (5) asks about hook events like PreToolUse, PostToolUse, Notification, etc.

---

### html-section-capture
**위치:** `skills/tools/html-section-capture/`

HTML 상세페이지 파일을 섹션별로 구분하여 고해상도 이미지로 변환하는 skill. 사용자가 (1) HTML 파일을 이미지로 변환 요청하거나, (2) 상세페이지를 섹션별 이미지로 나눠달라고 하거나, (3) HTML을 고해상도 스크린샷으로 캡처해달라고 할 때 사용.

---

### html2img
**위치:** `skills/tools/html2img/`

HTML 파일 전체를 고해상도 이미지로 변환합니다. "HTML 이미지로", "스크린샷", "고해상도 캡처" 요청 시 사용.

**기능:**
- H
- 2
- 섹

---

### inline-css
**위치:** `skills/tools/inline-css/`

HTML 파일의 CSS 클래스를 인라인 스타일로 변환합니다. "CSS 인라인 변환", "인라인 스타일로 만들어줘" 요청 시 사용.

---

### skill-creator
**위치:** `skills/tools/skill-creator/`

Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Claude's capabilities with specialized knowledge, workflows, or tool integrations.

---

### slash-command-creator
**위치:** `skills/tools/slash-command-creator/`

Guide for creating Claude Code slash commands. Use when the user wants to create a new slash command, update an existing slash command, or asks about slash command syntax, frontmatter options, or best practices.

---

### subagent-creator
**위치:** `skills/tools/subagent-creator/`

Create specialized Claude Code sub-agents with custom system prompts and tool configurations. Use when users ask to create a new sub-agent, custom agent, specialized assistant, or want to configure task-specific AI workflows for Claude Code.

---

### youtube-collector
**위치:** `skills/tools/youtube-collector/`

유튜브 채널을 등록하고 새 컨텐츠를 수집하여 자막 기반 요약을 생성하는 skill. 사용자가 (1) 유튜브 채널 등록/관리를 요청하거나, (2) 등록된 채널의 새 영상 수집을 요청하거나, (3) 유튜브 영상 요약을 요청할 때 사용. 데이터는 .reference/ 폴더에 YAML 형식으로 저장됨.

---

### youtube-transcribe-skill
**위치:** `skills/tools/youtube-transcribe-skill/`

'Extract subtitles/transcripts from YouTube videos. Triggers: "youtube transcript", "extract subtitles", "video captions", "视频字幕", "字幕提取", "YouTube转文字", "提取字幕".'

---

## 🏷️ 브랜드 관리

### brand-dna-extractor
**위치:** `skills/brand/brand-dna/`

웹사이트 URL에서 브랜드 DNA를 추출하고 인터랙티브 웹 리포트를 생성하는 스킬. 사용자가 "브랜드 분석", "브랜드 DNA 추출", "무드보드 만들어줘", "이 사이트 분석해줘", "경쟁사 분석", "레퍼런스 수집" 등을 요청할 때 사용. URL 크롤링 → AI 분석 (퍼스낼리티, 톤앤보이스, 비주얼, 컬러, 타겟, 포지셔닝) → React 웹 리포트 생성의 전체 파이프라인 제공.

---

### brand-logo
**위치:** `skills/brand/brand-logo/`

브랜드 로고를 검색하고 다운로드 링크를 제공합니다. "로고 찾아줘", "브랜드 로고", "로고 검색" 요청 시 사용.

---

### brand-setup
**위치:** `skills/brand/brand-setup/`

새 브랜드 초기 설정을 도와주는 마법사입니다. "브랜드 설정", "새 브랜드 추가", "브랜드 초기화" 요청 시 사용.

---

### brand-updater
**위치:** `skills/brand/brand-updater/`

브랜드 정보를 업데이트하고 동기화합니다. "브랜드 수정", "정보 업데이트", "제품 추가" 요청 시 사용.

---

### product-analyzer
**위치:** `skills/brand/product-analyzer/`

스마트스토어 상세페이지 URL에서 제품 이미지를 분석하여 강점/단점 리포트를 생성하는 스킬. 사용자가 "제품 분석", "상품 리뷰", "상세페이지 분석", "이 제품 어때?", "구매할만해?" 등을 요청할 때 사용. URL 크롤링 → Claude Vision 이미지 분석 → React 웹 리포트 생성.

---

## 📢 광고

### meta-ads
**위치:** `skills/advertising/meta-ads/`

Meta(Facebook/Instagram) 광고 카피와 크리에이티브를 생성합니다.

**트리거:** 메타 광고, 페이스북 광고, 인스타 광고

---

## 📊 마케팅 전략

### Social Media Designer
**위치:** `skills/marketing/social-media-designer/`

Create platform-optimized social media graphics

**트리거:** social media design, social graphics, instagram post

---

### ab-test
**위치:** `skills/marketing/ab-test/`

A/B 테스트 설계 및 분석.

**트리거:** A/B 테스트, 실험 설계, 전환율 테스트

---

### ab-test-setup
**위치:** `skills/marketing/ab-test-setup/`

When the user wants to plan, design, or implement an A/B test or experiment. Also use when the user mentions "A/B test," "split test," "experiment," "test this change," "variant copy," "multivariate test," or "hypothesis." For tracking implementation, see analytics-tracking.

---

### analytics-tracking
**위치:** `skills/marketing/analytics-tracking/`

분석 추적 설정 및 이벤트 기획.

**트리거:** 분석 설정, GA4, 이벤트 추적

---

### canvas-design
**위치:** `skills/marketing/canvas-design/`

Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a poster, piece of art, design, or other static piece. Create original visual designs, never copying existing artists' work to avoid copyright violations.

---

### competitor-alternatives
**위치:** `skills/marketing/competitor-alternatives/`

"When the user wants to create competitor comparison or alternative pages for SEO and sales enablement. Also use when the user mentions 'alternative page,' 'vs page,' 'competitor comparison,' 'comparison page,' '[Product] vs [Product],' '[Product] alternative,' or 'competitive landing pages.' Covers four formats: singular alternative, plural alternatives, you vs competitor, and competitor vs competitor. Emphasizes deep research, modular content architecture, and varied section types beyond feature tables."

---

### competitor-analysis
**위치:** `skills/marketing/competitor-analysis/`

경쟁사 분석 및 벤치마킹.

**트리거:** 경쟁사 분석, 벤치마킹, 시장 조사

---

### content-strategy
**위치:** `skills/marketing/content-strategy/`

When the user wants to plan a content strategy, decide what content to create, or figure out what topics to cover. Also use when the user mentions "content strategy," "what should I write about," "content ideas," "blog strategy," "topic clusters," or "content planning." For writing individual pieces, see copywriting. For SEO-specific audits, see seo-audit.

---

### copy-editing
**위치:** `skills/marketing/copy-editing/`

"When the user wants to edit, review, or improve existing marketing copy. Also use when the user mentions 'edit this copy,' 'review my copy,' 'copy feedback,' 'proofread,' 'polish this,' 'make this better,' or 'copy sweep.' This skill provides a systematic approach to editing marketing copy through multiple focused passes."

---

### copywriting
**위치:** `skills/marketing/copywriting/`

When the user wants to write, rewrite, or improve marketing copy for any page — including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. Also use when the user says "write copy for," "improve this copy," "rewrite this page," "marketing copy," "headline help," or "CTA copy." For email copy, see email-sequence. For popup copy, see popup-cro.

---

### csv-analyzer
**위치:** `skills/marketing/csv-analyzer/`

CSV 데이터 분석 및 인사이트 추출.

**트리거:** 데이터 분석, CSV 분석, 매출 분석

---

### data-report
**위치:** `skills/marketing/data-report/`

마케팅 데이터를 분석하고 인사이트 리포트를 생성합니다. "데이터 분석", "리포트 생성", "성과 분석" 요청 시 사용.

---

### email-sequence
**위치:** `skills/marketing/email-sequence/`

이메일 마케팅 시퀀스 생성. 웰컴, 육성, 재구매 유도 이메일을 작성합니다.

**트리거:** 이메일 시퀀스, 드립 캠페인, 웰컴 이메일

---

### form-cro
**위치:** `skills/marketing/form-cro/`

When the user wants to optimize any form that is NOT signup/registration — including lead capture forms, contact forms, demo request forms, application forms, survey forms, or checkout forms. Also use when the user mentions "form optimization," "lead form conversions," "form friction," "form fields," "form completion rate," or "contact form." For signup/registration forms, see signup-flow-cro. For popups containing forms, see popup-cro.

---

### free-tool-strategy
**위치:** `skills/marketing/free-tool-strategy/`

When the user wants to plan, evaluate, or build a free tool for marketing purposes — lead generation, SEO value, or brand awareness. Also use when the user mentions "engineering as marketing," "free tool," "marketing tool," "calculator," "generator," "interactive tool," "lead gen tool," "build a tool for leads," or "free resource." This skill bridges engineering and marketing — useful for founders and technical marketers.

---

### launch-strategy
**위치:** `skills/marketing/launch-strategy/`

제품/기능 출시 전략 수립.

**트리거:** 출시 전략, 런칭, 신제품 출시

---

### marketing-ideas
**위치:** `skills/marketing/marketing-ideas/`

140개 마케팅 아이디어 & 전술.

**트리거:** 마케팅 아이디어, 프로모션 아이디어, 캠페인 아이디어

---

### marketing-psychology
**위치:** `skills/marketing/marketing-psychology/`

"When the user wants to apply psychological principles, mental models, or behavioral science to marketing. Also use when the user mentions 'psychology,' 'mental models,' 'cognitive bias,' 'persuasion,' 'behavioral science,' 'why people buy,' 'decision-making,' or 'consumer behavior.' This skill provides 70+ mental models organized for marketing application."

---

### onboarding-cro
**위치:** `skills/marketing/onboarding-cro/`

When the user wants to optimize post-signup onboarding, user activation, first-run experience, or time-to-value. Also use when the user mentions "onboarding flow," "activation rate," "user activation," "first-run experience," "empty states," "onboarding checklist," "aha moment," or "new user experience." For signup/registration optimization, see signup-flow-cro. For ongoing email sequences, see email-sequence.

---

### page-cro
**위치:** `skills/marketing/page-cro/`

When the user wants to optimize, improve, or increase conversions on any marketing page — including homepage, landing pages, pricing pages, feature pages, or blog posts. Also use when the user says "CRO," "conversion rate optimization," "this page isn't converting," "improve conversions," or "why isn't this page working." For signup/registration flows, see signup-flow-cro. For post-signup activation, see onboarding-cro. For forms outside of signup, see form-cro. For popups/modals, see popup-cro.

---

### paid-ads
**위치:** `skills/marketing/paid-ads/`

"When the user wants help with paid advertising campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter/X, or other ad platforms. Also use when the user mentions 'PPC,' 'paid media,' 'ad copy,' 'ad creative,' 'ROAS,' 'CPA,' 'ad campaign,' 'retargeting,' or 'audience targeting.' This skill covers campaign strategy, ad creation, audience targeting, and optimization."

---

### paywall-upgrade-cro
**위치:** `skills/marketing/paywall-upgrade-cro/`

When the user wants to create or optimize in-app paywalls, upgrade screens, upsell modals, or feature gates. Also use when the user mentions "paywall," "upgrade screen," "upgrade modal," "upsell," "feature gate," "convert free to paid," "freemium conversion," "trial expiration screen," "limit reached screen," "plan upgrade prompt," or "in-app pricing." Distinct from public pricing pages (see page-cro) — this skill focuses on in-product upgrade moments where the user has already experienced value.

---

### popup-cro
**위치:** `skills/marketing/popup-cro/`

When the user wants to create or optimize popups, modals, overlays, slide-ins, or banners for conversion purposes. Also use when the user mentions "exit intent," "popup conversions," "modal optimization," "lead capture popup," "email popup," "announcement banner," or "overlay." For forms outside of popups, see form-cro. For general page conversion optimization, see page-cro.

---

### pricing-strategy
**위치:** `skills/marketing/pricing-strategy/`

가격 전략 및 수익화 최적화.

**트리거:** 가격 책정, 프라이싱, 할인 전략

---

### product-marketing-context
**위치:** `skills/marketing/product-marketing-context/`

"When the user wants to create or update their product marketing context document. Also use when the user mentions 'product context,' 'marketing context,' 'set up context,' 'positioning,' or wants to avoid repeating foundational information across marketing tasks. Creates `.claude/product-marketing-context.md` that other marketing skills reference."

---

### programmatic-seo
**위치:** `skills/marketing/programmatic-seo/`

When the user wants to create SEO-driven pages at scale using templates and data. Also use when the user mentions "programmatic SEO," "template pages," "pages at scale," "directory pages," "location pages," "[keyword] + [city] pages," "comparison pages," "integration pages," or "building many pages for SEO." For auditing existing SEO issues, see seo-audit.

---

### referral-program
**위치:** `skills/marketing/referral-program/`

추천/리퍼럴 프로그램 설계.

**트리거:** 추천 프로그램, 리퍼럴, 친구 초대

---

### review-management
**위치:** `skills/marketing/review-management/`

고객 리뷰 관리 및 활용 전략.

**트리거:** 리뷰 관리, 후기 요청, 리뷰 분석

---

### schema-markup
**위치:** `skills/marketing/schema-markup/`

When the user wants to add, fix, or optimize schema markup and structured data on their site. Also use when the user mentions "schema markup," "structured data," "JSON-LD," "rich snippets," "schema.org," "FAQ schema," "product schema," "review schema," or "breadcrumb schema." For broader SEO issues, see seo-audit.

---

### seo-audit
**위치:** `skills/marketing/seo-audit/`

웹사이트 SEO 감사 및 최적화 제안.

**트리거:** SEO 분석, 검색 최적화, 사이트 감사

---

### signup-flow-cro
**위치:** `skills/marketing/signup-flow-cro/`

When the user wants to optimize signup, registration, account creation, or trial activation flows. Also use when the user mentions "signup conversions," "registration friction," "signup form optimization," "free trial signup," "reduce signup dropoff," or "account creation flow." For post-signup onboarding, see onboarding-cro. For lead capture forms (not account creation), see form-cro.

---

### social-content
**위치:** `skills/marketing/social-content/`

소셜 미디어 콘텐츠 기획 및 작성.

**트리거:** 인스타 포스팅, SNS 콘텐츠, 소셜 미디어

---

### video-script
**위치:** `skills/marketing/video-script/`

마케팅 영상 스크립트 작성.

**트리거:** 영상 스크립트, 릴스 대본, 광고 영상

---

## 🤖 에이전트

| 에이전트 | 설명 |
|----------|------|
| **Brand Logo Finder** |  |
| **Instagram Reels 영상 편집 에이전트** |  |
| **Meta 광고 전략 에이전트** |  |
| **Meta 광고 카피 에이전트** |  |
| **Meta 광고 캠페인 에이전트** |  |
| **Meta 광고 크리에이티브 에이전트** |  |
| **[브랜드명] 경쟁사 분석 리포트** |  |
| **[브랜드명] 브랜드 가이드** |  |
| **시장 조사 리포트: [조사 주제]** |  |
| **콘텐츠 품질 리뷰 리포트** |  |
| **현재 디렉토리의 데이터 파일 검색** |  |
| **활성 브랜드 확인** |  |
| **활성 브랜드 확인** |  |

---

*마지막 업데이트: 2026-01-27*
