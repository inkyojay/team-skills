#!/usr/bin/env python3
"""
스킬 카탈로그 & 사용 가이드 자동 생성기

사용법:
    python scripts/generate-catalog.py

출력:
    - SKILL-CATALOG.md (마크다운 카탈로그)
    - 사용가이드.html (HTML 가이드)
"""

import os
import re
import json
from pathlib import Path
from datetime import datetime

# 경로 설정
BASE_DIR = Path(__file__).parent.parent
SKILLS_DIR = BASE_DIR / "skills"
AGENTS_DIR = BASE_DIR / "agents"
TEMPLATES_DIR = BASE_DIR / "skills" / "video" / "remotion" / "templates"
OUTPUT_CATALOG = BASE_DIR / "SKILL-CATALOG.md"
OUTPUT_HTML = BASE_DIR / "사용가이드.html"

# 카테고리 한글 매핑
CATEGORY_NAMES = {
    "content-creation": "콘텐츠 제작",
    "video": "영상 제작",
    "advertising": "광고",
    "brand": "브랜드 관리",
    "marketing": "마케팅 전략",
    "tools": "유틸리티 도구"
}

CATEGORY_ICONS = {
    "content-creation": "📝",
    "video": "🎬",
    "advertising": "📢",
    "brand": "🏷️",
    "marketing": "📊",
    "tools": "🔧"
}

CATEGORY_COLORS = {
    "content-creation": "#4CAF50",
    "video": "#9C27B0",
    "advertising": "#FF5722",
    "brand": "#2196F3",
    "marketing": "#FF9800",
    "tools": "#607D8B"
}

# 스킬 한국어 번역 (영어 스킬용)
SKILL_TRANSLATIONS = {
    # Marketing
    "ab-test-setup": "A/B 테스트 설계 및 실험 계획",
    "ab-test": "A/B 테스트 분석",
    "analytics-tracking": "애널리틱스 추적 설정",
    "competitor-alternatives": "경쟁사 비교 페이지 제작 (vs 페이지, 대안 페이지)",
    "competitor-analysis": "경쟁사 분석",
    "content-strategy": "콘텐츠 전략 수립 및 주제 기획",
    "copy-editing": "마케팅 카피 편집 및 개선",
    "copywriting": "마케팅 카피라이팅 (랜딩페이지, 홈페이지 등)",
    "email-sequence": "이메일 시퀀스 작성",
    "form-cro": "폼 최적화 (리드 캡처, 문의 폼 등)",
    "free-tool-strategy": "무료 툴 마케팅 전략",
    "launch-strategy": "런칭 전략 수립",
    "marketing-ideas": "마케팅 아이디어 140개 전술",
    "marketing-psychology": "마케팅 심리학 (70+ 멘탈 모델)",
    "onboarding-cro": "온보딩 최적화 (활성화율 개선)",
    "page-cro": "페이지 전환율 최적화 (CRO)",
    "paid-ads": "유료 광고 캠페인 (Google, Meta, LinkedIn 등)",
    "paywall-upgrade-cro": "페이월/업그레이드 화면 최적화",
    "popup-cro": "팝업/모달 최적화",
    "pricing-strategy": "가격 전략 수립",
    "product-marketing-context": "제품 마케팅 컨텍스트 문서 작성",
    "programmatic-seo": "프로그래매틱 SEO (대량 페이지 생성)",
    "referral-program": "추천 프로그램 설계",
    "schema-markup": "스키마 마크업 (구조화된 데이터)",
    "seo-audit": "SEO 감사 및 분석",
    "signup-flow-cro": "회원가입 플로우 최적화",
    "social-content": "소셜 미디어 콘텐츠 제작",
    "canvas-design": "포스터/디자인 시각물 제작",
    "csv-analyzer": "CSV 데이터 분석",
    "data-report": "마케팅 데이터 분석 리포트",
    "review-management": "리뷰 관리",
    "social-media-designer": "소셜 미디어 디자인",
    "video-script": "영상 스크립트 작성",

    # Tools
    "hook-creator": "Claude Code 훅 생성",
    "skill-creator": "스킬 생성 가이드",
    "slash-command-creator": "슬래시 커맨드 생성",
    "subagent-creator": "서브에이전트 생성",
    "youtube-transcribe-skill": "유튜브 자막 추출",
    "youtube-collector": "유튜브 콘텐츠 수집",
    "capture-sections": "HTML 섹션별 이미지 캡처",
    "html-section-capture": "HTML 섹션별 이미지 변환",
    "html2img": "HTML을 이미지로 변환",
    "inline-css": "CSS 인라인 변환",

    # Video
    "remotion-best-practices": "Remotion 영상 제작 가이드",
    "reels-editor": "릴스 영상 편집 (9:16, 1080x1920)",

    # Content
    "card-news-creator": "카드뉴스 제작 (인스타그램 스타일)",
    "page-builder": "상세페이지 제작",

    # Brand
    "brand-dna": "브랜드 DNA 분석",
    "product-analyzer": "제품 분석 리포트",

    # Advertising
    "meta-ads": "메타 광고 기획 및 제작",
}

# 카테고리별 대표 예시 (사용자가 이해하기 쉬운 형태)
CATEGORY_EXAMPLES = {
    "content-creation": [
        "상세페이지 만들어줘",
        "카드뉴스 제작해줘",
        "제품 소개 페이지 작성"
    ],
    "video": [
        "릴스 영상 편집해줘",
        "Remotion으로 영상 만들어줘"
    ],
    "advertising": [
        "메타 광고 기획해줘",
        "광고 카피 써줘",
        "타겟 오디언스 분석"
    ],
    "brand": [
        "브랜드 분석해줘",
        "제품 분석 리포트",
        "경쟁사 조사"
    ],
    "marketing": [
        "랜딩페이지 CRO 분석",
        "마케팅 카피 작성",
        "가격 전략 세워줘",
        "이메일 시퀀스 만들어줘"
    ],
    "tools": [
        "HTML을 이미지로 변환",
        "스킬 만들어줘",
        "유튜브 자막 추출"
    ]
}


def parse_skill_md(skill_path: Path) -> dict:
    """SKILL.md 파일을 파싱하여 정보 추출"""
    skill_file = skill_path / "SKILL.md"
    if not skill_file.exists():
        return None

    content = skill_file.read_text(encoding="utf-8")

    # Frontmatter 파싱
    info = {
        "name": skill_path.name,
        "path": str(skill_path.relative_to(BASE_DIR)),
        "description": "",
        "triggers": []
    }

    # YAML frontmatter 추출
    frontmatter_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if frontmatter_match:
        frontmatter = frontmatter_match.group(1)

        # name 추출
        name_match = re.search(r'^name:\s*(.+)$', frontmatter, re.MULTILINE)
        if name_match:
            info["name"] = name_match.group(1).strip().strip('"\'')

        # description 추출 (한 줄짜리)
        desc_match = re.search(r'^description:\s*["\']?([^|\n][^\n]*)["\']?$', frontmatter, re.MULTILINE)
        if desc_match:
            info["description"] = desc_match.group(1).strip().strip('"\'')
        else:
            # 멀티라인 description
            desc_match = re.search(r'^description:\s*[|>]\s*\n(.*?)(?=\n[a-z_]+:|\Z)', frontmatter, re.DOTALL | re.MULTILINE)
            if desc_match:
                desc_lines = desc_match.group(1).strip().split('\n')
                info["description"] = desc_lines[0].strip() if desc_lines else ""

        # triggers 추출
        triggers_match = re.search(r'triggers:\s*\n((?:\s*-\s*.+\n?)+)', frontmatter)
        if triggers_match:
            triggers = re.findall(r'-\s*["\']?(.+?)["\']?\s*$', triggers_match.group(1), re.MULTILINE)
            info["triggers"] = [t.strip('"\'') for t in triggers[:3]]

    # 본문에서 description 추출 (frontmatter에 없는 경우)
    if not info["description"]:
        body = re.sub(r'^---\n.*?\n---\n?', '', content, flags=re.DOTALL)
        # 첫 번째 일반 텍스트 단락 찾기
        lines = body.strip().split('\n')
        for line in lines:
            line = line.strip()
            if line and not line.startswith('#') and not line.startswith('-') and not line.startswith('*'):
                info["description"] = line[:100]
                break

    # description 정리 (frontmatter 잔재 제거)
    if info["description"]:
        info["description"] = re.sub(r'^---.*', '', info["description"]).strip()
        info["description"] = re.sub(r'^name:.*', '', info["description"]).strip()
        if len(info["description"]) > 80:
            info["description"] = info["description"][:80] + "..."

    return info


def parse_agent_md(agent_path: Path) -> dict:
    """에이전트 .md 파일 파싱"""
    if not agent_path.exists():
        return None

    content = agent_path.read_text(encoding="utf-8")

    info = {
        "name": agent_path.stem.replace("-", " ").title(),
        "filename": agent_path.name,
        "description": ""
    }

    # 첫 번째 제목 추출
    title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    if title_match:
        info["name"] = title_match.group(1).strip()

    # 설명 추출
    desc_match = re.search(r'^#.*?\n+(.+?)(?=\n\n|\n#|$)', content, re.DOTALL)
    if desc_match:
        info["description"] = desc_match.group(1).strip()[:80]

    return info


def scan_skills() -> dict:
    """skills 폴더 스캔하여 모든 스킬 정보 수집"""
    skills = {}

    for category_dir in SKILLS_DIR.iterdir():
        if not category_dir.is_dir():
            continue

        category = category_dir.name
        skills[category] = []

        for skill_dir in category_dir.iterdir():
            if not skill_dir.is_dir():
                continue

            skill_info = parse_skill_md(skill_dir)
            if skill_info:
                skills[category].append(skill_info)

        # 이름순 정렬
        skills[category].sort(key=lambda x: x["name"])

    return skills


def scan_agents() -> list:
    """agents 폴더 스캔하여 모든 에이전트 정보 수집"""
    agents = []

    if not AGENTS_DIR.exists():
        return agents

    for agent_file in AGENTS_DIR.glob("*.md"):
        agent_info = parse_agent_md(agent_file)
        if agent_info:
            agents.append(agent_info)

    agents.sort(key=lambda x: x["name"])
    return agents


def scan_templates() -> list:
    """영상 템플릿 폴더 스캔하여 정보 수집"""
    templates = []

    if not TEMPLATES_DIR.exists():
        return templates

    for tpl_dir in sorted(TEMPLATES_DIR.iterdir()):
        if not tpl_dir.is_dir():
            continue

        readme = tpl_dir / "README.md"
        if not readme.exists():
            continue

        content = readme.read_text(encoding="utf-8")
        lines = content.strip().split("\n")

        # 첫 줄에서 제목 추출 (# 제거)
        name = tpl_dir.name
        title = name
        if lines and lines[0].startswith("#"):
            title = lines[0].lstrip("#").strip()

        # 두 번째 문단(빈 줄 다음 첫 텍스트)에서 설명 추출
        description = ""
        found_blank = False
        for line in lines[1:]:
            if not line.strip():
                found_blank = True
                continue
            if found_blank and line.strip() and not line.startswith("#") and not line.startswith("|"):
                description = line.strip()
                break

        # 권장 길이 추출 (README.md 또는 analysis.md)
        duration = "-"
        duration_match = re.search(r'권장\s*길이\s*\|\s*(.+?)\s*\|', content)
        if duration_match:
            duration = duration_match.group(1).strip()
        else:
            analysis = tpl_dir / "analysis.md"
            if analysis.exists():
                analysis_content = analysis.read_text(encoding="utf-8")
                dur_match = re.search(r'권장\s*길이\s*\|\s*(.+?)\s*\|', analysis_content)
                if dur_match:
                    duration = dur_match.group(1).strip()

        if len(description) > 60:
            description = description[:60] + "..."

        templates.append({
            "name": name,
            "title": title,
            "description": description,
            "duration": duration,
        })

    return templates


def generate_markdown_catalog(skills: dict, agents: list, templates: list = None) -> str:
    """마크다운 카탈로그 생성"""

    total_skills = sum(len(s) for s in skills.values())

    md = f"""# Team Skills Catalog

마케팅 및 콘텐츠 제작을 위한 스킬 모음입니다.

> 자동 생성됨: {datetime.now().strftime('%Y-%m-%d %H:%M')}

## 통계

| 항목 | 수량 |
|------|------|
| 총 스킬 | {total_skills}개 |
| 에이전트 | {len(agents)}개 |
| 카테고리 | {len(skills)}개 |

---

"""

    # 카테고리별 스킬 목록
    for category, skill_list in skills.items():
        category_name = CATEGORY_NAMES.get(category, category)
        icon = CATEGORY_ICONS.get(category, "📁")

        md += f"## {icon} {category_name} ({len(skill_list)}개)\n\n"
        md += "| 스킬 | 설명 |\n"
        md += "|------|------|\n"

        for skill in skill_list:
            # 한국어 번역이 있으면 사용
            if skill['name'] in SKILL_TRANSLATIONS:
                desc = SKILL_TRANSLATIONS[skill['name']]
            elif skill['description']:
                desc = skill['description']
            else:
                desc = '-'
            md += f"| `{skill['name']}` | {desc} |\n"

        md += "\n"

    # 영상 템플릿 섹션
    if templates:
        md += f"## 🎬 영상 템플릿 ({len(templates)}개)\n\n"
        md += "| 템플릿 | 설명 | 권장 길이 |\n"
        md += "|--------|------|---------|\n"
        for tpl in templates:
            md += f"| `{tpl['name']}` | {tpl['description'] or tpl['title']} | {tpl['duration']} |\n"
        md += "\n"

    # 에이전트 섹션
    md += "## 🤖 에이전트\n\n"
    md += "| 에이전트 | 설명 |\n"
    md += "|----------|------|\n"

    for agent in agents:
        desc = agent['description'] if agent['description'] else '-'
        md += f"| **{agent['name']}** | {desc} |\n"

    md += f"\n---\n\n*마지막 업데이트: {datetime.now().strftime('%Y-%m-%d')}*\n"

    return md


def generate_html_guide(skills: dict, agents: list, templates: list = None) -> str:
    """HTML 사용 가이드 생성 - 깔끔한 버전"""

    total_skills = sum(len(s) for s in skills.values())

    # 카테고리별 스킬 리스트 생성
    category_sections = ""
    for category, skill_list in skills.items():
        category_name = CATEGORY_NAMES.get(category, category)
        icon = CATEGORY_ICONS.get(category, "📁")
        color = CATEGORY_COLORS.get(category, "#666")
        examples = CATEGORY_EXAMPLES.get(category, [])

        # 스킬 테이블 행 생성
        skill_rows = ""
        for skill in skill_list:
            # 한국어 번역이 있으면 사용, 없으면 원본 설명 사용
            skill_key = skill['name']
            if skill_key in SKILL_TRANSLATIONS:
                desc = SKILL_TRANSLATIONS[skill_key]
            elif skill['description']:
                desc = skill['description']
            else:
                desc = "-"
            skill_rows += f"""
                    <tr>
                        <td class="skill-name">{skill['name']}</td>
                        <td class="skill-desc">{desc}</td>
                    </tr>"""

        # 예시 태그 생성
        example_tags = " ".join(f'<span class="example-tag">{ex}</span>' for ex in examples)

        category_sections += f"""
        <details class="category-section" id="{category}">
            <summary class="category-header" style="--cat-color: {color}">
                <span class="category-icon">{icon}</span>
                <span class="category-name">{category_name}</span>
                <span class="skill-count">{len(skill_list)}개</span>
            </summary>
            <div class="category-content">
                <div class="example-box">
                    <span class="example-label">이렇게 말해보세요:</span>
                    {example_tags}
                </div>
                <table class="skill-table">
                    <thead>
                        <tr>
                            <th>스킬</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>{skill_rows}
                    </tbody>
                </table>
            </div>
        </details>"""

    # 에이전트 행 생성
    agent_rows = ""
    for agent in agents:
        desc = agent['description'] if agent['description'] else "-"
        agent_rows += f"""
                    <tr>
                        <td class="agent-name">{agent['name']}</td>
                        <td>{desc}</td>
                    </tr>"""

    html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마케팅 스킬팩 가이드</title>
    <style>
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

        * {{ margin: 0; padding: 0; box-sizing: border-box; }}

        body {{
            font-family: 'Pretendard', -apple-system, sans-serif;
            background: #f8f9fa;
            color: #333;
            line-height: 1.6;
        }}

        .container {{
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
        }}

        /* 헤더 */
        header {{
            text-align: center;
            margin-bottom: 40px;
        }}

        h1 {{
            font-size: 2rem;
            color: #333;
            margin-bottom: 8px;
        }}

        .subtitle {{
            color: #666;
            font-size: 1rem;
        }}

        /* 통계 */
        .stats {{
            display: flex;
            justify-content: center;
            gap: 40px;
            margin: 30px 0;
        }}

        .stat {{
            text-align: center;
        }}

        .stat-num {{
            font-size: 2rem;
            font-weight: 700;
            color: #A38068;
        }}

        .stat-label {{
            font-size: 0.85rem;
            color: #888;
        }}

        /* 사용법 박스 */
        .usage-box {{
            background: linear-gradient(135deg, #A38068, #c4a68a);
            color: white;
            padding: 24px;
            border-radius: 12px;
            margin-bottom: 30px;
        }}

        .usage-box h2 {{
            font-size: 1.1rem;
            margin-bottom: 12px;
        }}

        .usage-box p {{
            font-size: 0.9rem;
            opacity: 0.9;
            margin-bottom: 16px;
        }}

        .usage-examples {{
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }}

        .usage-example {{
            background: rgba(255,255,255,0.2);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
        }}

        /* 카테고리 섹션 */
        .category-section {{
            background: white;
            border-radius: 12px;
            margin-bottom: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }}

        .category-header {{
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
            cursor: pointer;
            list-style: none;
            border-left: 4px solid var(--cat-color);
            border-radius: 12px 12px 0 0;
        }}

        .category-header::-webkit-details-marker {{
            display: none;
        }}

        .category-section[open] .category-header {{
            border-radius: 12px 12px 0 0;
            border-bottom: 1px solid #eee;
        }}

        .category-icon {{
            font-size: 1.4rem;
        }}

        .category-name {{
            flex: 1;
            font-weight: 600;
            font-size: 1rem;
        }}

        .skill-count {{
            background: #f0f0f0;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.8rem;
            color: #666;
        }}

        .category-content {{
            padding: 20px;
        }}

        /* 예시 박스 */
        .example-box {{
            background: #f8f9fa;
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
        }}

        .example-label {{
            font-size: 0.8rem;
            color: #888;
            margin-right: 4px;
        }}

        .example-tag {{
            background: #e8f4e8;
            color: #2d6a2d;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.8rem;
        }}

        /* 스킬 테이블 */
        .skill-table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }}

        .skill-table th {{
            text-align: left;
            padding: 10px 12px;
            background: #f8f9fa;
            font-weight: 600;
            color: #555;
            border-bottom: 1px solid #eee;
        }}

        .skill-table td {{
            padding: 10px 12px;
            border-bottom: 1px solid #f0f0f0;
        }}

        .skill-table tr:last-child td {{
            border-bottom: none;
        }}

        .skill-name {{
            font-family: 'Monaco', 'Consolas', monospace;
            font-size: 0.85rem;
            color: #A38068;
            white-space: nowrap;
        }}

        .skill-desc {{
            color: #666;
        }}

        /* 에이전트 섹션 */
        .agent-section {{
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin-top: 30px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }}

        .agent-section h2 {{
            font-size: 1.1rem;
            margin-bottom: 16px;
            color: #333;
        }}

        .agent-table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }}

        .agent-table th {{
            text-align: left;
            padding: 10px 12px;
            background: #f8f9fa;
            font-weight: 600;
            color: #555;
        }}

        .agent-table td {{
            padding: 10px 12px;
            border-bottom: 1px solid #f0f0f0;
        }}

        .agent-name {{
            font-weight: 600;
            color: #333;
            white-space: nowrap;
        }}

        /* 템플릿 섹션 */
        .template-section {{
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin-top: 30px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
            border-left: 4px solid #9C27B0;
        }}

        .template-section h2 {{
            font-size: 1.1rem;
            margin-bottom: 16px;
            color: #333;
        }}

        .template-table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }}

        .template-table th {{
            text-align: left;
            padding: 10px 12px;
            background: #f8f9fa;
            font-weight: 600;
            color: #555;
        }}

        .template-table td {{
            padding: 10px 12px;
            border-bottom: 1px solid #f0f0f0;
        }}

        .template-name {{
            font-family: 'Monaco', 'Consolas', monospace;
            font-size: 0.85rem;
            color: #9C27B0;
            white-space: nowrap;
        }}

        .template-duration {{
            white-space: nowrap;
            color: #666;
        }}

        /* 푸터 */
        footer {{
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: #999;
            font-size: 0.8rem;
        }}

        /* 반응형 */
        @media (max-width: 600px) {{
            .stats {{ gap: 20px; }}
            .stat-num {{ font-size: 1.5rem; }}
            .usage-examples {{ flex-direction: column; }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>마케팅 스킬팩</h1>
            <p class="subtitle">AI 마케팅 자동화 도구 모음</p>
            <div class="stats">
                <div class="stat">
                    <div class="stat-num">{total_skills}</div>
                    <div class="stat-label">스킬</div>
                </div>
                <div class="stat">
                    <div class="stat-num">{len(agents)}</div>
                    <div class="stat-label">에이전트</div>
                </div>
                <div class="stat">
                    <div class="stat-num">{len(skills)}</div>
                    <div class="stat-label">카테고리</div>
                </div>
            </div>
        </header>

        <div class="usage-box">
            <h2>💡 사용 방법</h2>
            <p>슬래시 명령어가 아닙니다. 자연어로 요청하세요!</p>
            <div class="usage-examples">
                <span class="usage-example">"상세페이지 만들어줘"</span>
                <span class="usage-example">"메타 광고 기획해줘"</span>
                <span class="usage-example">"랜딩페이지 CRO 분석"</span>
                <span class="usage-example">"이메일 시퀀스 작성"</span>
            </div>
        </div>

        <main>
            {category_sections}

            {"" if not templates else f"""<div class="template-section">
                <h2>🎬 영상 템플릿 ({len(templates)}개)</h2>
                <table class="template-table">
                    <thead>
                        <tr>
                            <th>템플릿</th>
                            <th>설명</th>
                            <th>권장 길이</th>
                        </tr>
                    </thead>
                    <tbody>{"".join(f'''
                        <tr>
                            <td class="template-name">{tpl["name"]}</td>
                            <td>{tpl["description"] or tpl["title"]}</td>
                            <td class="template-duration">{tpl["duration"]}</td>
                        </tr>''' for tpl in templates)}
                    </tbody>
                </table>
            </div>"""}

            <div class="agent-section">
                <h2>🤖 에이전트 ({len(agents)}개)</h2>
                <table class="agent-table">
                    <thead>
                        <tr>
                            <th>에이전트</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>{agent_rows}
                    </tbody>
                </table>
            </div>
        </main>

        <footer>
            자동 생성됨 · {datetime.now().strftime('%Y-%m-%d %H:%M')}
        </footer>
    </div>
</body>
</html>"""

    return html


def main():
    print("🔍 스킬 스캔 중...")
    skills = scan_skills()

    print("🤖 에이전트 스캔 중...")
    agents = scan_agents()

    print("🎬 영상 템플릿 스캔 중...")
    templates = scan_templates()

    total_skills = sum(len(s) for s in skills.values())
    print(f"   - 발견된 스킬: {total_skills}개")
    print(f"   - 발견된 에이전트: {len(agents)}개")
    print(f"   - 발견된 템플릿: {len(templates)}개")

    # 마크다운 생성
    print("\n📝 마크다운 카탈로그 생성 중...")
    md_content = generate_markdown_catalog(skills, agents, templates)
    OUTPUT_CATALOG.write_text(md_content, encoding="utf-8")
    print(f"   ✅ {OUTPUT_CATALOG}")

    # HTML 생성
    print("\n🌐 HTML 가이드 생성 중...")
    html_content = generate_html_guide(skills, agents, templates)
    OUTPUT_HTML.write_text(html_content, encoding="utf-8")
    print(f"   ✅ {OUTPUT_HTML}")

    print(f"\n✨ 완료!")
    print(f"   총 {total_skills}개 스킬, {len(agents)}개 에이전트, {len(templates)}개 템플릿 문서화됨")


if __name__ == "__main__":
    main()
