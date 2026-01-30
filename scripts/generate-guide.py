#!/usr/bin/env python3
"""
스킬 가이드 생성기 v2

사이드바 네비게이션, 카드뉴스 템플릿 프리뷰, 상세 문서 포함.

사용법:
    python scripts/generate-guide.py

출력:
    - docs/guide/index.html (메인 가이드)
    - SKILL-CATALOG.md (마크다운 카탈로그)
    - 사용가이드.html (리다이렉트)
"""

import os
import re
import json
import shutil
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional

# 경로 설정
BASE_DIR = Path(__file__).parent.parent
SKILLS_DIR = BASE_DIR / "skills"
AGENTS_DIR = BASE_DIR / "agents"
TEMPLATES_DIR = BASE_DIR / "skills" / "video" / "remotion" / "templates"
CARD_NEWS_DIR = BASE_DIR / "skills" / "content-creation" / "card-news"
META_AD_DIR = BASE_DIR / "skills" / "advertising" / "meta-ad-image"
LIVE_BANNER_DIR = BASE_DIR / "skills" / "advertising" / "live-banner"
SMARTSTORE_BANNER_DIR = BASE_DIR / "skills" / "advertising" / "smartstore-banner"
OUTPUT_GUIDE = BASE_DIR / "docs" / "guide" / "index.html"
OUTPUT_CATALOG = BASE_DIR / "SKILL-CATALOG.md"
OUTPUT_REDIRECT = BASE_DIR / "사용가이드.html"

# 카테고리 설정
CATEGORIES = {
    "content-creation": {
        "name": "콘텐츠 제작",
        "icon": "📝",
        "color": "#4CAF50",
        "examples": ["상세페이지 만들어줘", "카드뉴스 제작해줘", "제품 소개 페이지"]
    },
    "video": {
        "name": "영상 제작",
        "icon": "🎬",
        "color": "#9C27B0",
        "examples": ["릴스 영상 편집해줘", "Remotion으로 영상 만들어줘"]
    },
    "advertising": {
        "name": "광고",
        "icon": "📢",
        "color": "#FF5722",
        "examples": ["메타 광고 기획해줘", "광고 카피 써줘"]
    },
    "brand": {
        "name": "브랜드 관리",
        "icon": "🏷️",
        "color": "#2196F3",
        "examples": ["브랜드 분석해줘", "제품 분석 리포트"]
    },
    "marketing": {
        "name": "마케팅 전략",
        "icon": "📊",
        "color": "#FF9800",
        "examples": ["랜딩페이지 CRO 분석", "가격 전략 세워줘", "이메일 시퀀스"]
    },
    "tools": {
        "name": "유틸리티",
        "icon": "🔧",
        "color": "#607D8B",
        "examples": ["HTML을 이미지로 변환", "유튜브 자막 추출"]
    }
}

# 스킬 한국어 번역
SKILL_TRANSLATIONS = {
    "ab-test-setup": "A/B 테스트 설계",
    "ab-test": "A/B 테스트 분석",
    "analytics-tracking": "애널리틱스 추적 설정",
    "competitor-alternatives": "경쟁사 비교 페이지",
    "competitor-analysis": "경쟁사 분석",
    "content-strategy": "콘텐츠 전략",
    "copy-editing": "카피 편집",
    "copywriting": "마케팅 카피라이팅",
    "email-sequence": "이메일 시퀀스",
    "form-cro": "폼 최적화",
    "free-tool-strategy": "무료 툴 마케팅",
    "launch-strategy": "런칭 전략",
    "marketing-ideas": "마케팅 아이디어 140개",
    "marketing-psychology": "마케팅 심리학",
    "onboarding-cro": "온보딩 최적화",
    "page-cro": "페이지 CRO",
    "paid-ads": "유료 광고 캠페인",
    "paywall-upgrade-cro": "페이월 최적화",
    "popup-cro": "팝업 최적화",
    "pricing-strategy": "가격 전략",
    "product-marketing-context": "제품 마케팅 컨텍스트",
    "programmatic-seo": "프로그래매틱 SEO",
    "referral-program": "추천 프로그램",
    "schema-markup": "스키마 마크업",
    "seo-audit": "SEO 감사",
    "signup-flow-cro": "회원가입 최적화",
    "social-content": "소셜 콘텐츠",
    "canvas-design": "디자인 시각물",
    "csv-analyzer": "CSV 분석",
    "data-report": "데이터 리포트",
    "review-management": "리뷰 관리",
    "video-script": "영상 스크립트",
    "hook-creator": "훅 생성",
    "skill-creator": "스킬 생성",
    "slash-command-creator": "슬래시 커맨드",
    "subagent-creator": "서브에이전트",
    "youtube-transcribe-skill": "유튜브 자막 추출",
    "youtube-collector": "유튜브 수집",
    "capture-sections": "섹션 캡처",
    "html-section-capture": "HTML 섹션 캡처",
    "html2img": "HTML → 이미지",
    "inline-css": "CSS 인라인",
    "remotion-best-practices": "Remotion 가이드",
    "reels-editor": "릴스 편집",
    "card-news-creator": "카드뉴스 제작",
    "page-builder": "상세페이지 제작",
    "brand-dna-extractor": "브랜드 DNA 분석",
    "brand-logo": "로고 검색",
    "brand-setup": "브랜드 설정",
    "brand-updater": "브랜드 업데이트",
    "product-analyzer": "제품 분석",
    "meta-ad-image": "메타 광고 이미지",
}


def parse_skill_md(skill_path: Path) -> Optional[dict]:
    """SKILL.md 파싱"""
    skill_file = skill_path / "SKILL.md"
    if not skill_file.exists():
        return None

    content = skill_file.read_text(encoding="utf-8")

    info = {
        "id": skill_path.name,
        "name": skill_path.name,
        "path": str(skill_path.relative_to(BASE_DIR)),
        "description": "",
        "full_description": "",
        "triggers": [],
        "usage": "",
        "has_templates": False
    }

    # Frontmatter 파싱
    fm_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if fm_match:
        fm = fm_match.group(1)

        name_match = re.search(r'^name:\s*(.+)$', fm, re.MULTILINE)
        if name_match:
            info["name"] = name_match.group(1).strip().strip('"\'')

        desc_match = re.search(r'^description:\s*["\']?([^|\n][^\n]*)["\']?$', fm, re.MULTILINE)
        if desc_match:
            info["description"] = desc_match.group(1).strip().strip('"\'')[:100]

        triggers_match = re.search(r'triggers:\s*\n((?:\s*-\s*.+\n?)+)', fm)
        if triggers_match:
            triggers = re.findall(r'-\s*["\']?(.+?)["\']?\s*$', triggers_match.group(1), re.MULTILINE)
            info["triggers"] = [t.strip('"\'') for t in triggers[:3]]

    # 본문에서 추가 정보 추출
    body = re.sub(r'^---\n.*?\n---\n?', '', content, flags=re.DOTALL)

    # 워크플로우/사용법 섹션 추출
    workflow_match = re.search(r'##\s*워크플로우(.*?)(?=\n##|\Z)', body, re.DOTALL)
    if workflow_match:
        info["usage"] = workflow_match.group(1).strip()[:500]

    # 템플릿 존재 확인
    templates_dir = skill_path / "assets" / "templates"
    if templates_dir.exists():
        info["has_templates"] = True

    return info


def scan_skills() -> Dict[str, List[dict]]:
    """스킬 스캔"""
    skills = {}

    for cat_dir in SKILLS_DIR.iterdir():
        if not cat_dir.is_dir():
            continue

        category = cat_dir.name
        skills[category] = []

        for skill_dir in cat_dir.iterdir():
            if not skill_dir.is_dir():
                continue

            info = parse_skill_md(skill_dir)
            if info:
                skills[category].append(info)

        skills[category].sort(key=lambda x: x["name"])

    return skills


def scan_agents() -> List[dict]:
    """에이전트 스캔"""
    agents = []

    if not AGENTS_DIR.exists():
        return agents

    for agent_file in AGENTS_DIR.glob("*.md"):
        content = agent_file.read_text(encoding="utf-8")

        info = {
            "name": agent_file.stem.replace("-", " ").title(),
            "filename": agent_file.name,
            "description": ""
        }

        title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
        if title_match:
            info["name"] = title_match.group(1).strip()

        agents.append(info)

    agents.sort(key=lambda x: x["name"])
    return agents


def scan_video_templates() -> List[dict]:
    """영상 템플릿 스캔"""
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

        name = tpl_dir.name
        title = name
        description = ""
        duration = "-"

        lines = content.strip().split("\n")
        if lines and lines[0].startswith("#"):
            title = lines[0].lstrip("#").strip()

        # 설명 추출
        for i, line in enumerate(lines[1:], 1):
            if line.strip() and not line.startswith("#") and not line.startswith("|"):
                description = line.strip()[:80]
                break

        # 권장 길이
        dur_match = re.search(r'권장\s*길이\s*\|\s*(.+?)\s*\|', content)
        if dur_match:
            duration = dur_match.group(1).strip()

        templates.append({
            "name": name,
            "title": title,
            "description": description,
            "duration": duration
        })

    return templates


def get_card_template_svg(tpl_type: str, color: str) -> str:
    """카드뉴스 템플릿 레이아웃 SVG 생성"""

    layouts = {
        "cover": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#f5f0e8" stroke="{color}" stroke-width="1"/>
            <text x="40" y="18" text-anchor="middle" font-size="6" fill="#999">BRAND</text>
            <rect x="10" y="25" width="50" height="30" rx="2" fill="{color}20" stroke="{color}" stroke-dasharray="2"/>
            <text x="35" y="43" text-anchor="middle" font-size="5" fill="{color}">이미지</text>
            <text x="40" y="68" text-anchor="middle" font-size="5" fill="#666">에피소드</text>
            <text x="40" y="78" text-anchor="middle" font-size="7" font-weight="bold" fill="#333">타이틀</text>
            <text x="40" y="88" text-anchor="middle" font-size="5" fill="#666">서브타이틀</text>
        ''',
        "content": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#f5f0e8" stroke="{color}" stroke-width="1"/>
            <text x="40" y="15" text-anchor="middle" font-size="6" fill="#999">BRAND</text>
            <rect x="5" y="5" width="70" height="50" rx="4" fill="{color}20"/>
            <text x="40" y="35" text-anchor="middle" font-size="5" fill="{color}">배경 이미지 (65%)</text>
            <rect x="10" y="60" width="60" height="30" rx="2" fill="white"/>
            <text x="40" y="72" text-anchor="middle" font-size="6" font-weight="bold" fill="{color}">헤딩</text>
            <text x="40" y="82" text-anchor="middle" font-size="5" fill="#666">본문 텍스트</text>
        ''',
        "full": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="{color}20" stroke="{color}" stroke-width="1"/>
            <text x="40" y="15" text-anchor="middle" font-size="6" fill="#999">BRAND</text>
            <text x="40" y="45" text-anchor="middle" font-size="5" fill="{color}">전체 배경 이미지</text>
            <rect x="12" y="65" width="56" height="25" rx="3" fill="white" fill-opacity="0.9"/>
            <text x="40" y="80" text-anchor="middle" font-size="6" fill="#333">강조 메시지</text>
        ''',
        "info": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#FFF9F0" stroke="{color}" stroke-width="1"/>
            <text x="40" y="15" text-anchor="middle" font-size="6" fill="#999">BRAND</text>
            <text x="40" y="28" text-anchor="middle" font-size="7" font-weight="bold" fill="#333">타이틀</text>
            <g transform="translate(12, 35)">
                <circle cx="8" cy="8" r="6" fill="{color}20"/>
                <text x="8" y="11" text-anchor="middle" font-size="6">📌</text>
                <text x="20" y="10" font-size="5" fill="#444">항목 1</text>
            </g>
            <g transform="translate(12, 52)">
                <circle cx="8" cy="8" r="6" fill="{color}20"/>
                <text x="8" y="11" text-anchor="middle" font-size="6">📌</text>
                <text x="20" y="10" font-size="5" fill="#444">항목 2</text>
            </g>
            <g transform="translate(12, 69)">
                <circle cx="8" cy="8" r="6" fill="{color}20"/>
                <text x="8" y="11" text-anchor="middle" font-size="6">📌</text>
                <text x="20" y="10" font-size="5" fill="#444">항목 3</text>
            </g>
        ''',
        "summary": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="url(#grad-{tpl_type})" stroke="{color}" stroke-width="1"/>
            <defs><linearGradient id="grad-{tpl_type}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:{color};stop-opacity:0.9"/>
                <stop offset="100%" style="stop-color:{color};stop-opacity:0.7"/>
            </linearGradient></defs>
            <text x="40" y="15" text-anchor="middle" font-size="6" fill="white" fill-opacity="0.7">BRAND</text>
            <text x="40" y="35" text-anchor="middle" font-size="7" font-weight="bold" fill="white">요약 타이틀</text>
            <text x="15" y="52" font-size="5" fill="white">✓ 포인트 1</text>
            <text x="15" y="64" font-size="5" fill="white">✓ 포인트 2</text>
            <text x="15" y="76" font-size="5" fill="white">✓ 포인트 3</text>
        ''',
        "product": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#f5f0e8" stroke="{color}" stroke-width="1"/>
            <text x="40" y="15" text-anchor="middle" font-size="6" fill="#999">BRAND</text>
            <rect x="35" y="20" width="35" height="45" rx="2" fill="{color}15" stroke="{color}" stroke-dasharray="2"/>
            <text x="52" y="45" text-anchor="middle" font-size="5" fill="{color}">제품</text>
            <text x="52" y="52" text-anchor="middle" font-size="5" fill="{color}">이미지</text>
            <g transform="translate(10, 30)">
                <text x="0" y="0" font-size="4" fill="#E8A85C">🎀</text>
                <text x="0" y="12" font-size="6" font-weight="bold" fill="#6B5B4F">제품명</text>
                <text x="0" y="22" font-size="4" fill="#8B7B6B">부제목</text>
                <text x="0" y="32" font-size="5" fill="#E8A85C">₩ 가격</text>
            </g>
            <text x="40" y="78" text-anchor="middle" font-size="4" fill="#666">감성 카피 1</text>
            <text x="40" y="86" text-anchor="middle" font-size="4" fill="#666">감성 카피 2</text>
        '''
    }

    svg_content = layouts.get(tpl_type, layouts["cover"])
    svg_content = svg_content.replace("{color}", color).replace("{tpl_type}", tpl_type)

    return f'<svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">{svg_content}</svg>'


def scan_card_news_templates() -> List[dict]:
    """카드뉴스 템플릿 스캔"""
    templates = []

    templates_dir = CARD_NEWS_DIR / "assets" / "templates"
    if not templates_dir.exists():
        return templates

    # 카드 타입별 정보
    card_types = {
        "cover": {"name": "커버", "desc": "주제 소개, 첫 페이지", "color": "#E07A5F",
                  "vars": ["BRAND_NAME", "BACKGROUND_IMAGE", "EPISODE", "TITLE", "SUBTITLE"]},
        "content": {"name": "콘텐츠", "desc": "본문 전달, 이미지+텍스트", "color": "#81B29A",
                    "vars": ["BRAND_NAME", "BACKGROUND_IMAGE", "HEADING", "BODY"]},
        "full": {"name": "전체 배경", "desc": "강조 메시지, 이미지 배경", "color": "#F2CC8F",
                 "vars": ["BRAND_NAME", "BACKGROUND_IMAGE", "BODY"]},
        "info": {"name": "정보형", "desc": "리스트, 항목 정리", "color": "#3D405B",
                 "vars": ["BRAND_NAME", "TITLE", "ICON_1~3", "TEXT_1~3"]},
        "summary": {"name": "요약", "desc": "핵심 포인트 정리", "color": "#E07A5F",
                    "vars": ["BRAND_NAME", "BACKGROUND_IMAGE", "TITLE", "POINTS"]},
        "product": {"name": "제품 쇼케이스", "desc": "제품 사진 + 정보", "color": "#A38068",
                    "vars": ["BRAND_NAME", "BACKGROUND_IMAGE", "PRODUCT_NAME", "PRICE", "COPY_LINE_1~3"]},
    }

    for tpl_file in templates_dir.glob("sunday_hug_*.html"):
        tpl_name = tpl_file.stem.replace("sunday_hug_", "")
        if tpl_name in card_types:
            templates.append({
                "id": tpl_name,
                "file": tpl_file.name,
                "name": card_types[tpl_name]["name"],
                "description": card_types[tpl_name]["desc"],
                "color": card_types[tpl_name]["color"],
                "style": "sunday_hug",
                "vars": card_types[tpl_name]["vars"],
                "svg": get_card_template_svg(tpl_name, card_types[tpl_name]["color"])
            })

    return templates


def get_meta_ad_template_svg(tpl_type: str, color: str) -> str:
    """메타 광고 템플릿 레이아웃 SVG 생성"""

    layouts = {
        "ugc-native": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#faf8f5" stroke="{color}" stroke-width="1"/>
            <circle cx="18" cy="18" r="8" fill="white" stroke="#ddd"/>
            <text x="18" y="21" text-anchor="middle" font-size="8">👤</text>
            <text x="30" y="20" font-size="5" fill="white" style="text-shadow:0 1px 2px rgba(0,0,0,.5)">username</text>
            <text x="68" y="18" text-anchor="middle" font-size="10" fill="#e84d3d">♥</text>
            <rect x="5" y="5" width="70" height="60" rx="4" fill="{color}20"/>
            <text x="40" y="40" text-anchor="middle" font-size="5" fill="{color}">UGC 이미지</text>
            <rect x="5" y="65" width="70" height="30" rx="0 0 4 4" fill="linear-gradient(transparent, rgba(0,0,0,0.6))"/>
            <text x="12" y="80" font-size="5" font-weight="bold" fill="white">"인용 텍스트"</text>
            <text x="12" y="90" font-size="4" fill="#aaa">#해시태그</text>
        ''',
        "us-vs-them": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#fefefe" stroke="{color}" stroke-width="1"/>
            <rect x="8" y="25" width="30" height="40" rx="2" fill="#fee" stroke="#e74c3c"/>
            <text x="23" y="48" text-anchor="middle" font-size="5" fill="#c0392b">기존 방식</text>
            <text x="23" y="58" text-anchor="middle" font-size="8">✗</text>
            <rect x="42" y="25" width="30" height="40" rx="2" fill="#efe" stroke="#27ae60"/>
            <text x="57" y="48" text-anchor="middle" font-size="5" fill="#27ae60">우리 제품</text>
            <text x="57" y="58" text-anchor="middle" font-size="8">✓</text>
            <text x="40" y="18" text-anchor="middle" font-size="6" font-weight="bold" fill="#333">VS</text>
            <text x="40" y="82" text-anchor="middle" font-size="5" fill="#666">CTA 버튼</text>
        ''',
        "social-proof": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#fff9f0" stroke="{color}" stroke-width="1"/>
            <text x="40" y="18" text-anchor="middle" font-size="5" fill="#999">⭐⭐⭐⭐⭐</text>
            <text x="40" y="28" text-anchor="middle" font-size="6" font-weight="bold" fill="#333">"리뷰 인용"</text>
            <rect x="15" y="35" width="50" height="35" rx="3" fill="{color}20" stroke="{color}" stroke-dasharray="2"/>
            <text x="40" y="55" text-anchor="middle" font-size="5" fill="{color}">제품 이미지</text>
            <text x="40" y="82" text-anchor="middle" font-size="5" fill="#333">제품명</text>
            <text x="40" y="90" text-anchor="middle" font-size="5" fill="{color}">₩ 가격</text>
        ''',
        "lifestyle": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="{color}15" stroke="{color}" stroke-width="1"/>
            <text x="40" y="35" text-anchor="middle" font-size="5" fill="{color}">라이프스타일 이미지</text>
            <rect x="10" y="60" width="60" height="30" rx="3" fill="white" fill-opacity="0.95"/>
            <text x="40" y="72" text-anchor="middle" font-size="5" font-weight="bold" fill="#333">헤드라인</text>
            <text x="40" y="82" text-anchor="middle" font-size="4" fill="#666">서브카피</text>
        ''',
        "direct-offer": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#fff" stroke="{color}" stroke-width="1"/>
            <rect x="10" y="10" width="60" height="40" rx="3" fill="{color}20"/>
            <text x="40" y="35" text-anchor="middle" font-size="5" fill="{color}">제품 이미지</text>
            <text x="40" y="60" text-anchor="middle" font-size="7" font-weight="bold" fill="#e74c3c">30% OFF</text>
            <text x="40" y="72" text-anchor="middle" font-size="5" fill="#333">제품명</text>
            <rect x="20" y="78" width="40" height="12" rx="6" fill="{color}"/>
            <text x="40" y="87" text-anchor="middle" font-size="5" fill="white">구매하기</text>
        ''',
        "minimal-product": '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#fafafa" stroke="{color}" stroke-width="1"/>
            <rect x="20" y="15" width="40" height="50" rx="3" fill="{color}15" stroke="{color}" stroke-dasharray="2"/>
            <text x="40" y="45" text-anchor="middle" font-size="5" fill="{color}">제품</text>
            <text x="40" y="75" text-anchor="middle" font-size="6" font-weight="bold" fill="#333">제품명</text>
            <text x="40" y="85" text-anchor="middle" font-size="5" fill="{color}">₩ 가격</text>
        '''
    }

    svg_content = layouts.get(tpl_type, layouts.get("lifestyle", ""))
    if not svg_content:
        svg_content = '''
            <rect x="5" y="5" width="70" height="90" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="50" text-anchor="middle" font-size="6" fill="{color}">''' + tpl_type + '''</text>
        '''
    svg_content = svg_content.replace("{color}", color)

    return f'<svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">{svg_content}</svg>'


def scan_meta_ad_templates() -> List[dict]:
    """메타 광고 이미지 템플릿 스캔"""
    templates = []

    templates_dir = META_AD_DIR / "assets" / "templates"
    if not templates_dir.exists():
        return templates

    # 템플릿 정보 (한글 이름, 설명, 색상)
    template_info = {
        "ugc-native": {"name": "UGC 네이티브", "desc": "사용자 후기 스타일, SNS 느낌", "color": "#E74C3C"},
        "us-vs-them": {"name": "비교형", "desc": "기존 vs 우리 제품 비교", "color": "#3498DB"},
        "social-proof": {"name": "소셜 프루프", "desc": "리뷰/별점 강조", "color": "#F39C12"},
        "lifestyle": {"name": "라이프스타일", "desc": "감성 이미지 + 카피", "color": "#9B59B6"},
        "direct-offer": {"name": "직접 오퍼", "desc": "할인/프로모션 강조", "color": "#E74C3C"},
        "minimal-product": {"name": "미니멀 제품", "desc": "깔끔한 제품 중심", "color": "#2C3E50"},
        "stress-test": {"name": "스트레스 테스트", "desc": "문제 상황 제시", "color": "#E67E22"},
        "audience-callout": {"name": "타겟 콜아웃", "desc": "특정 타겟 호출", "color": "#1ABC9C"},
        "new-product": {"name": "신제품", "desc": "NEW 뱃지 + 제품 소개", "color": "#8E44AD"},
        "promotion": {"name": "프로모션", "desc": "이벤트/할인 배너", "color": "#C0392B"},
        "event": {"name": "이벤트", "desc": "기간 한정 이벤트", "color": "#D35400"},
    }

    for tpl_file in templates_dir.glob("*.html"):
        tpl_name = tpl_file.stem
        info = template_info.get(tpl_name, {"name": tpl_name, "desc": "-", "color": "#666"})

        templates.append({
            "id": tpl_name,
            "file": tpl_file.name,
            "name": info["name"],
            "description": info["desc"],
            "color": info["color"],
            "svg": get_meta_ad_template_svg(tpl_name, info["color"])
        })

    templates.sort(key=lambda x: x["name"])
    return templates


def get_live_banner_template_svg(tpl_type: str, color: str) -> str:
    """라이브 배너 템플릿 레이아웃 SVG 생성"""

    layouts = {
        "benefit-banner": '''
            <rect x="2" y="15" width="76" height="25" rx="3" fill="#F5F0E8" stroke="{color}" stroke-width="1"/>
            <rect x="6" y="19" width="18" height="6" rx="3" fill="{color}"/>
            <text x="15" y="24" text-anchor="middle" font-size="4" fill="white" font-weight="bold">혜택 N</text>
            <text x="6" y="32" font-size="4" fill="#333">제품명</text>
            <text x="6" y="37" font-size="3" fill="#666">설명 텍스트</text>
            <rect x="58" y="18" width="18" height="20" rx="2" fill="{color}20" stroke="{color}" stroke-dasharray="1"/>
            <text x="67" y="30" text-anchor="middle" font-size="3" fill="{color}">제품</text>
        ''',
        "live-main-banner": '''
            <rect x="15" y="2" width="50" height="90" rx="3" fill="#F8F4F0" stroke="{color}" stroke-width="1"/>
            <text x="20" y="10" font-size="3" fill="#999">BRAND</text>
            <rect x="50" y="6" width="12" height="5" rx="1" fill="{color}"/>
            <text x="56" y="10" text-anchor="middle" font-size="3" fill="white">LIVE</text>
            <text x="40" y="22" text-anchor="middle" font-size="5" font-weight="bold" fill="#333">메인 타이틀</text>
            <g transform="translate(18, 30)">
                <rect width="14" height="12" rx="2" fill="{color}20"/>
                <text x="22" y="5" font-size="3" font-weight="bold" fill="#333">모드 1</text>
                <text x="22" y="10" font-size="2" fill="#666">설명...</text>
            </g>
            <g transform="translate(18, 48)">
                <rect width="14" height="12" rx="2" fill="{color}20"/>
                <text x="22" y="5" font-size="3" font-weight="bold" fill="#333">모드 2</text>
                <text x="22" y="10" font-size="2" fill="#666">설명...</text>
            </g>
            <g transform="translate(18, 66)">
                <rect width="14" height="12" rx="2" fill="{color}20"/>
                <text x="22" y="5" font-size="3" font-weight="bold" fill="#333">모드 3</text>
                <text x="22" y="10" font-size="2" fill="#666">설명...</text>
            </g>
        ''',
        "event-banner": '''
            <rect x="15" y="2" width="50" height="70" rx="3" fill="{color}" stroke="{color}" stroke-width="1"/>
            <text x="20" y="10" font-size="3" fill="white" fill-opacity="0.8">BRAND</text>
            <rect x="30" y="15" width="20" height="6" rx="3" fill="white" fill-opacity="0.2"/>
            <text x="40" y="19" text-anchor="middle" font-size="3" fill="white">LIVE 날짜</text>
            <text x="40" y="30" text-anchor="middle" font-size="4" fill="white">제품명</text>
            <text x="40" y="42" text-anchor="middle" font-size="8" font-weight="bold" fill="white">159,000원</text>
            <rect x="32" y="50" width="16" height="18" rx="2" fill="white"/>
            <text x="40" y="60" text-anchor="middle" font-size="3" fill="{color}">미리보기</text>
        ''',
        "promo-banner": '''
            <rect x="15" y="10" width="50" height="50" rx="3" fill="{color}" stroke="{color}" stroke-width="1"/>
            <text x="20" y="18" font-size="3" fill="white" fill-opacity="0.8">BRAND</text>
            <rect x="48" y="14" width="12" height="5" rx="1" fill="white" fill-opacity="0.2"/>
            <text x="54" y="18" text-anchor="middle" font-size="3" fill="white">LIVE</text>
            <text x="40" y="38" text-anchor="middle" font-size="6" font-weight="bold" fill="white">이벤트</text>
            <text x="40" y="46" text-anchor="middle" font-size="6" font-weight="bold" fill="white">타이틀</text>
            <rect x="28" y="52" width="24" height="6" rx="3" fill="white"/>
            <text x="40" y="57" text-anchor="middle" font-size="3" fill="{color}" font-weight="bold">CTA 버튼</text>
        ''',
        "benefit-badge-banner": '''
            <rect x="2" y="15" width="76" height="25" rx="3" fill="#F5F0E8" stroke="{color}" stroke-width="1"/>
            <rect x="6" y="18" width="22" height="6" rx="3" fill="{color}"/>
            <text x="17" y="23" text-anchor="middle" font-size="3" fill="white" font-weight="bold">구매고객대상</text>
            <text x="6" y="31" font-size="4" fill="#333">제품명</text>
            <text x="6" y="36" font-size="3" fill="{color}" font-weight="bold">증정</text>
            <rect x="56" y="18" width="18" height="18" rx="2" fill="{color}20" stroke="{color}" stroke-dasharray="1"/>
            <text x="65" y="28" text-anchor="middle" font-size="3" fill="{color}">제품</text>
            <rect x="68" y="30" width="8" height="5" rx="2" fill="{color}"/>
            <text x="72" y="34" text-anchor="middle" font-size="3" fill="white">20</text>
        ''',
        "live-only-price": '''
            <rect x="15" y="2" width="50" height="90" rx="3" fill="#F8F4F0" stroke="{color}" stroke-width="1"/>
            <text x="40" y="10" text-anchor="middle" font-size="3" fill="#A38068">LIVE ONLY</text>
            <text x="40" y="18" text-anchor="middle" font-size="5" font-weight="bold" fill="#333">라이브 단독가</text>
            <rect x="32" y="22" width="16" height="8" rx="2" fill="#E74C3C"/>
            <text x="40" y="28" text-anchor="middle" font-size="5" fill="white" font-weight="bold">45%</text>
            <rect x="22" y="34" width="36" height="24" rx="2" fill="white"/>
            <text x="40" y="48" text-anchor="middle" font-size="4" fill="#999">제품 이미지</text>
            <rect x="20" y="62" width="40" height="20" rx="2" fill="white"/>
            <text x="24" y="68" font-size="2" fill="#999">판매가</text>
            <text x="56" y="68" text-anchor="end" font-size="2" fill="#999" text-decoration="line-through">249,000</text>
            <text x="24" y="74" font-size="2" fill="#E74C3C">라이브특가</text>
            <text x="56" y="74" text-anchor="end" font-size="2" fill="#E74C3C">-5,000</text>
            <rect x="20" y="84" width="40" height="6" rx="1" fill="#333"/>
            <text x="40" y="89" text-anchor="middle" font-size="3" fill="white" font-weight="bold">136,800원</text>
        ''',
        "daily-deal-grid": '''
            <rect x="15" y="2" width="50" height="90" rx="3" fill="#F8F4F0" stroke="{color}" stroke-width="1"/>
            <text x="40" y="10" text-anchor="middle" font-size="3" fill="#A38068">LIVE ONLY</text>
            <text x="40" y="18" text-anchor="middle" font-size="5" font-weight="bold" fill="#333">하루 특가</text>
            <rect x="18" y="24" width="22" height="28" rx="2" fill="white"/>
            <rect x="20" y="26" width="8" height="4" rx="1" fill="#4A90A4"/>
            <text x="24" y="29" text-anchor="middle" font-size="2" fill="white">50%</text>
            <rect x="22" y="32" width="16" height="12" rx="1" fill="#eee"/>
            <text x="30" y="48" text-anchor="middle" font-size="2" fill="#333">29,900</text>
            <rect x="42" y="24" width="22" height="28" rx="2" fill="white"/>
            <rect x="44" y="26" width="8" height="4" rx="1" fill="#4A90A4"/>
            <text x="48" y="29" text-anchor="middle" font-size="2" fill="white">47%</text>
            <rect x="46" y="32" width="16" height="12" rx="1" fill="#eee"/>
            <text x="54" y="48" text-anchor="middle" font-size="2" fill="#333">19,000</text>
            <rect x="18" y="56" width="46" height="14" rx="2" fill="white"/>
            <rect x="22" y="59" width="14" height="8" rx="1" fill="#eee"/>
            <text x="45" y="66" font-size="2" fill="#333">50,000원</text>
            <rect x="18" y="74" width="22" height="14" rx="2" fill="white"/>
            <rect x="42" y="74" width="22" height="14" rx="2" fill="white"/>
        ''',
        "customer-review": '''
            <rect x="15" y="2" width="50" height="90" rx="3" fill="#F8F4F0" stroke="{color}" stroke-width="1"/>
            <text x="40" y="10" text-anchor="middle" font-size="3" fill="#A38068">REVIEW</text>
            <text x="40" y="18" text-anchor="middle" font-size="5" font-weight="bold" fill="#333">실제 고객 후기</text>
            <rect x="18" y="24" width="44" height="20" rx="2" fill="white"/>
            <text x="21" y="30" font-size="3" fill="#FF9500">⭐⭐⭐⭐⭐</text>
            <text x="21" y="36" font-size="2" fill="#333">리뷰 텍스트...</text>
            <rect x="50" y="28" width="10" height="12" rx="1" fill="#eee"/>
            <rect x="18" y="48" width="44" height="20" rx="2" fill="white"/>
            <text x="21" y="54" font-size="3" fill="#FF9500">⭐⭐⭐⭐⭐</text>
            <text x="21" y="60" font-size="2" fill="#333">리뷰 텍스트...</text>
            <rect x="21" y="62" width="8" height="5" rx="1" fill="#eee"/>
            <rect x="31" y="62" width="8" height="5" rx="1" fill="#eee"/>
            <rect x="18" y="72" width="44" height="18" rx="2" fill="white"/>
            <text x="21" y="78" font-size="3" fill="#FF9500">⭐⭐⭐⭐⭐</text>
            <text x="21" y="84" font-size="2" fill="#333">리뷰 텍스트...</text>
        '''
    }

    svg_content = layouts.get(tpl_type, "")
    if not svg_content:
        svg_content = f'''
            <rect x="5" y="5" width="70" height="45" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="30" text-anchor="middle" font-size="5" fill="{color}">{tpl_type}</text>
        '''
    svg_content = svg_content.replace("{color}", color)

    return f'<svg viewBox="0 0 80 75" xmlns="http://www.w3.org/2000/svg">{svg_content}</svg>'


def scan_live_banner_templates() -> List[dict]:
    """라이브 배너 템플릿 스캔"""
    templates = []

    templates_dir = LIVE_BANNER_DIR / "assets" / "templates"
    if not templates_dir.exists():
        return templates

    # 템플릿 정보
    template_info = {
        "benefit-banner": {"name": "혜택 배너", "desc": "750×250 가로형, 혜택 안내", "color": "#E74C3C", "size": "750×250"},
        "live-main-banner": {"name": "라이브 메인", "desc": "720×1280 세로형, 메인 화면", "color": "#A38068", "size": "720×1280"},
        "event-banner": {"name": "이벤트 배너", "desc": "720×900 세로형, 라이브 예고", "color": "#E74C3C", "size": "720×900"},
        "promo-banner": {"name": "프로모션 배너", "desc": "720×720 정사각형, 이벤트 홍보", "color": "#C0392B", "size": "720×720"},
        "benefit-badge-banner": {"name": "혜택 뱃지 배너", "desc": "750×250 방송중 증정 안내", "color": "#4A90A4", "size": "750×250"},
        "live-only-price": {"name": "라이브 단독가", "desc": "720×1280 가격표 세로형", "color": "#E74C3C", "size": "720×1280"},
        "daily-deal-grid": {"name": "하루특가 그리드", "desc": "720×1280 다중 제품 특가", "color": "#4A90A4", "size": "720×1280"},
        "customer-review": {"name": "고객 후기", "desc": "720×1280 리뷰 모음", "color": "#FF9500", "size": "720×1280"},
    }

    for tpl_file in templates_dir.glob("*.html"):
        tpl_name = tpl_file.stem
        if tpl_name == "styles":
            continue
        info = template_info.get(tpl_name, {"name": tpl_name, "desc": "-", "color": "#666", "size": "-"})

        templates.append({
            "id": tpl_name,
            "file": tpl_file.name,
            "name": info["name"],
            "description": info["desc"],
            "color": info["color"],
            "size": info["size"],
            "svg": get_live_banner_template_svg(tpl_name, info["color"])
        })

    templates.sort(key=lambda x: x["name"])
    return templates


def get_smartstore_banner_template_svg(tpl_type: str, color: str) -> str:
    """스마트스토어 배너 템플릿 레이아웃 SVG 생성"""

    layouts = {
        "pc-main-banner": '''
            <rect x="2" y="20" width="76" height="25" rx="2" fill="#C9C4A8" stroke="{color}" stroke-width="1"/>
            <circle cx="12" cy="26" r="4" fill="#F5E050"/>
            <circle cx="68" cy="28" r="5" fill="none" stroke="#7FB3D5" stroke-width="1"/>
            <text x="40" y="30" text-anchor="middle" font-size="3" fill="#666">EVENT DATE</text>
            <text x="40" y="36" text-anchor="middle" font-size="5" font-weight="bold" fill="#333">KIDS WEEK</text>
            <rect x="15" y="38" width="8" height="6" rx="1" fill="#eee"/>
            <rect x="25" y="38" width="8" height="6" rx="1" fill="#eee"/>
            <rect x="35" y="36" width="10" height="8" rx="1" fill="#ddd"/>
            <rect x="47" y="38" width="8" height="6" rx="1" fill="#eee"/>
            <rect x="57" y="38" width="8" height="6" rx="1" fill="#eee"/>
        ''',
        "mo-promo-banner": '''
            <rect x="20" y="5" width="40" height="70" rx="2" fill="#C9C4A8" stroke="{color}" stroke-width="1"/>
            <circle cx="28" cy="12" r="3" fill="#F5E050"/>
            <circle cx="52" cy="18" r="4" fill="none" stroke="#7FB3D5" stroke-width="1"/>
            <polygon points="26,22 30,28 22,28" fill="#E8A85C"/>
            <text x="40" y="38" text-anchor="middle" font-size="3" fill="#666">1/12~1/18</text>
            <text x="40" y="44" text-anchor="middle" font-size="5" font-weight="bold" fill="#333">KIDS</text>
            <text x="40" y="50" text-anchor="middle" font-size="5" font-weight="bold" fill="#333">WEEK</text>
            <circle cx="30" cy="60" r="4" fill="none" stroke="#7FB3D5" stroke-width="1"/>
            <circle cx="52" cy="68" r="3" fill="#F5E050"/>
        ''',
        "coupon-banner-pc": '''
            <rect x="2" y="15" width="76" height="30" rx="2" fill="#C9C4A8" stroke="{color}" stroke-width="1"/>
            <text x="12" y="26" font-size="4" font-weight="bold" fill="#333">매일 00시!</text>
            <text x="12" y="32" font-size="3" fill="#333">선착순 쿠폰</text>
            <rect x="45" y="18" width="16" height="8" rx="1" fill="#F5C518"/>
            <text x="53" y="24" text-anchor="middle" font-size="3" fill="#333">COUPON</text>
            <rect x="50" y="28" width="16" height="8" rx="1" fill="#F5C518" transform="rotate(3 58 32)"/>
            <text x="58" y="34" text-anchor="middle" font-size="3" fill="#333">10%</text>
            <rect x="55" y="37" width="16" height="8" rx="1" fill="#F5C518" transform="rotate(-2 63 41)"/>
            <text x="63" y="43" text-anchor="middle" font-size="3" fill="#333">10%</text>
        ''',
        "coupon-banner-mo": '''
            <rect x="15" y="5" width="50" height="60" rx="2" fill="#C9C4A8" stroke="{color}" stroke-width="1"/>
            <text x="40" y="16" text-anchor="middle" font-size="4" font-weight="bold" fill="#333">매일 00시!</text>
            <text x="40" y="23" text-anchor="middle" font-size="3" fill="#333">선착순 쿠폰 3종!</text>
            <rect x="20" y="30" width="14" height="10" rx="1" fill="#F5C518"/>
            <text x="27" y="37" text-anchor="middle" font-size="3" fill="#333">10%</text>
            <rect x="38" y="30" width="14" height="10" rx="1" fill="#F5C518"/>
            <text x="45" y="37" text-anchor="middle" font-size="3" fill="#333">10%</text>
            <rect x="26" y="45" width="20" height="12" rx="1" fill="#F5C518"/>
            <text x="36" y="53" text-anchor="middle" font-size="3" fill="#333">10%</text>
        '''
    }

    svg_content = layouts.get(tpl_type, "")
    if not svg_content:
        svg_content = f'''
            <rect x="5" y="5" width="70" height="45" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="30" text-anchor="middle" font-size="5" fill="{color}">{tpl_type}</text>
        '''
    svg_content = svg_content.replace("{color}", color)

    return f'<svg viewBox="0 0 80 75" xmlns="http://www.w3.org/2000/svg">{svg_content}</svg>'


def scan_smartstore_banner_templates() -> List[dict]:
    """스마트스토어 배너 템플릿 스캔"""
    templates = []

    templates_dir = SMARTSTORE_BANNER_DIR / "assets" / "templates"
    if not templates_dir.exists():
        return templates

    # 템플릿 정보
    template_info = {
        "pc-main-banner": {"name": "PC 메인배너", "desc": "1920×640 스토어 상단", "color": "#C9C4A8", "size": "1920×640"},
        "mo-promo-banner": {"name": "MO 프로모션", "desc": "750×1334 모바일 전체화면", "color": "#C9C4A8", "size": "750×1334"},
        "coupon-banner-pc": {"name": "PC 쿠폰배너", "desc": "1920×500 쿠폰 안내", "color": "#F5C518", "size": "1920×500"},
        "coupon-banner-mo": {"name": "MO 쿠폰배너", "desc": "750×900 모바일 쿠폰", "color": "#F5C518", "size": "750×900"},
    }

    for tpl_file in templates_dir.glob("*.html"):
        tpl_name = tpl_file.stem
        if tpl_name == "styles":
            continue
        info = template_info.get(tpl_name, {"name": tpl_name, "desc": "-", "color": "#666", "size": "-"})

        templates.append({
            "id": tpl_name,
            "file": tpl_file.name,
            "name": info["name"],
            "description": info["desc"],
            "color": info["color"],
            "size": info["size"],
            "svg": get_smartstore_banner_template_svg(tpl_name, info["color"])
        })

    templates.sort(key=lambda x: x["name"])
    return templates


def get_video_template_svg(tpl_type: str, color: str) -> str:
    """영상 템플릿 타임라인 SVG 생성"""

    layouts = {
        "branded-showcase": '''
            <rect x="5" y="5" width="70" height="35" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="18" text-anchor="middle" font-size="5" fill="#999">고정 헤더</text>
            <rect x="10" y="22" width="15" height="10" rx="1" fill="{color}30"/>
            <rect x="28" y="22" width="25" height="10" rx="1" fill="{color}50"/>
            <rect x="56" y="22" width="12" height="10" rx="1" fill="{color}30"/>
            <text x="40" y="50" text-anchor="middle" font-size="5" fill="#666">↓ 콘텐츠 순환 ↓</text>
            <rect x="8" y="55" width="18" height="8" rx="1" fill="{color}" fill-opacity="0.3"/>
            <rect x="28" y="55" width="18" height="8" rx="1" fill="{color}" fill-opacity="0.5"/>
            <rect x="48" y="55" width="18" height="8" rx="1" fill="{color}" fill-opacity="0.7"/>
            <text x="17" y="61" text-anchor="middle" font-size="4" fill="#666">씬1</text>
            <text x="37" y="61" text-anchor="middle" font-size="4" fill="#666">씬2</text>
            <text x="57" y="61" text-anchor="middle" font-size="4" fill="#666">씬3</text>
        ''',
        "ugc-review": '''
            <rect x="5" y="5" width="70" height="35" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="15" text-anchor="middle" font-size="5" font-weight="bold" fill="{color}">UGC 스타일</text>
            <g transform="translate(8, 20)">
                <rect width="12" height="12" rx="1" fill="#fee"/>
                <text x="6" y="9" text-anchor="middle" font-size="4">훅</text>
            </g>
            <g transform="translate(22, 20)">
                <rect width="12" height="12" rx="1" fill="#eef"/>
                <text x="6" y="9" text-anchor="middle" font-size="4">검색</text>
            </g>
            <g transform="translate(36, 20)">
                <rect width="12" height="12" rx="1" fill="#efe"/>
                <text x="6" y="9" text-anchor="middle" font-size="4">시연</text>
            </g>
            <g transform="translate(50, 20)">
                <rect width="12" height="12" rx="1" fill="#ffe"/>
                <text x="6" y="9" text-anchor="middle" font-size="4">기능</text>
            </g>
            <text x="40" y="48" text-anchor="middle" font-size="4" fill="#666">셀카 훅 → 검색 → 제품 시연 → CTA</text>
        ''',
        "comparison": '''
            <rect x="5" y="5" width="70" height="35" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="15" text-anchor="middle" font-size="5" font-weight="bold" fill="{color}">비교 광고</text>
            <rect x="10" y="20" width="25" height="12" rx="1" fill="#fee" stroke="#e74c3c"/>
            <text x="22" y="28" text-anchor="middle" font-size="4" fill="#c0392b">문제</text>
            <rect x="45" y="20" width="25" height="12" rx="1" fill="#efe" stroke="#27ae60"/>
            <text x="57" y="28" text-anchor="middle" font-size="4" fill="#27ae60">솔루션</text>
            <text x="40" y="48" text-anchor="middle" font-size="4" fill="#666">문제 → 비교 → 시연 → 차별화 → CTA</text>
        ''',
        "meta-reels-ad": '''
            <rect x="5" y="5" width="70" height="35" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="15" text-anchor="middle" font-size="5" font-weight="bold" fill="{color}">릴스/스토리</text>
            <text x="40" y="25" text-anchor="middle" font-size="4" fill="#666">9:16 세로형</text>
            <g transform="translate(15, 28)">
                <rect width="10" height="6" rx="1" fill="{color}50"/>
            </g>
            <g transform="translate(27, 28)">
                <rect width="10" height="6" rx="1" fill="{color}60"/>
            </g>
            <g transform="translate(39, 28)">
                <rect width="10" height="6" rx="1" fill="{color}70"/>
            </g>
            <g transform="translate(51, 28)">
                <rect width="10" height="6" rx="1" fill="{color}80"/>
            </g>
            <text x="40" y="48" text-anchor="middle" font-size="4" fill="#666">멀티씬 Config 기반</text>
        ''',
        "review-banner": '''
            <rect x="5" y="5" width="70" height="35" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="15" text-anchor="middle" font-size="5" font-weight="bold" fill="{color}">리뷰 배너</text>
            <rect x="10" y="20" width="30" height="12" rx="1" fill="#fff9e6" stroke="#f1c40f"/>
            <text x="25" y="28" text-anchor="middle" font-size="4">⭐ 리뷰</text>
            <rect x="42" y="20" width="25" height="12" rx="1" fill="{color}30"/>
            <text x="54" y="28" text-anchor="middle" font-size="4">제품</text>
            <text x="40" y="48" text-anchor="middle" font-size="4" fill="#666">정적 컴포지트, 5~10초</text>
        '''
    }

    svg_content = layouts.get(tpl_type, "")
    if not svg_content:
        svg_content = f'''
            <rect x="5" y="5" width="70" height="35" rx="4" fill="#f5f5f5" stroke="{color}" stroke-width="1"/>
            <text x="40" y="25" text-anchor="middle" font-size="5" fill="{color}">{tpl_type}</text>
        '''
    svg_content = svg_content.replace("{color}", color)

    return f'<svg viewBox="0 0 80 55" xmlns="http://www.w3.org/2000/svg">{svg_content}</svg>'


def generate_html_guide(skills: dict, agents: list, video_templates: list, card_templates: list, meta_ad_templates: list, live_banner_templates: list, smartstore_banner_templates: list) -> str:
    """HTML 가이드 생성"""

    total_skills = sum(len(s) for s in skills.values())
    now = datetime.now().strftime('%Y-%m-%d %H:%M')

    # 사이드바 네비게이션 생성
    sidebar_items = ""
    for cat_id, cat_info in CATEGORIES.items():
        if cat_id in skills and skills[cat_id]:
            count = len(skills[cat_id])
            sidebar_items += f'''
            <a href="#cat-{cat_id}" class="nav-item" data-category="{cat_id}">
                <span class="nav-icon">{cat_info["icon"]}</span>
                <span class="nav-text">{cat_info["name"]}</span>
                <span class="nav-count">{count}</span>
            </a>'''

    # 카테고리별 콘텐츠 생성
    category_content = ""
    for cat_id, skill_list in skills.items():
        if not skill_list:
            continue

        cat_info = CATEGORIES.get(cat_id, {"name": cat_id, "icon": "📁", "color": "#666", "examples": []})

        # 스킬 카드 생성
        skill_cards = ""
        for skill in skill_list:
            trans_name = SKILL_TRANSLATIONS.get(skill["id"], skill["name"])
            desc = skill["description"][:60] + "..." if len(skill["description"]) > 60 else skill["description"]

            triggers_html = ""
            if skill["triggers"]:
                triggers_html = '<div class="skill-triggers">' + ''.join(
                    f'<span class="trigger-tag">{t}</span>' for t in skill["triggers"][:2]
                ) + '</div>'

            skill_cards += f'''
            <div class="skill-card" data-skill="{skill["id"]}">
                <div class="skill-header">
                    <span class="skill-name">{trans_name}</span>
                    {"<span class='has-template'>템플릿</span>" if skill["has_templates"] else ""}
                </div>
                <p class="skill-desc">{desc or "-"}</p>
                {triggers_html}
            </div>'''

        # 예시 태그
        examples_html = ''.join(f'<span class="example-chip">{ex}</span>' for ex in cat_info["examples"])

        category_content += f'''
        <section class="category-section" id="cat-{cat_id}">
            <div class="category-header">
                <span class="cat-icon">{cat_info["icon"]}</span>
                <h2>{cat_info["name"]}</h2>
                <span class="cat-count">{len(skill_list)}개</span>
            </div>
            <div class="category-examples">
                <span class="examples-label">이렇게 말해보세요:</span>
                {examples_html}
            </div>
            <div class="skills-grid">
                {skill_cards}
            </div>
        </section>'''

    # 카드뉴스 템플릿 섹션 (SVG 레이아웃 다이어그램)
    card_template_cards = ""
    for tpl in card_templates:
        vars_html = ", ".join(tpl.get("vars", [])[:4])
        if len(tpl.get("vars", [])) > 4:
            vars_html += "..."

        card_template_cards += f'''
        <div class="template-card" style="--tpl-color: {tpl["color"]}">
            <div class="template-svg">
                {tpl.get("svg", "")}
            </div>
            <div class="template-info">
                <h4>{tpl["name"]}</h4>
                <p>{tpl["description"]}</p>
                <code>{tpl["file"]}</code>
                <div class="template-vars">{vars_html}</div>
            </div>
        </div>'''

    # 메타 광고 템플릿 섹션 (SVG 레이아웃 다이어그램)
    meta_ad_template_cards = ""
    for tpl in meta_ad_templates:
        meta_ad_template_cards += f'''
        <div class="template-card" style="--tpl-color: {tpl["color"]}">
            <div class="template-svg">
                {tpl.get("svg", "")}
            </div>
            <div class="template-info">
                <h4>{tpl["name"]}</h4>
                <p>{tpl["description"]}</p>
                <code>{tpl["file"]}</code>
            </div>
        </div>'''

    # 영상 템플릿 섹션 (SVG 타임라인 다이어그램)
    video_template_cards = ""
    for tpl in video_templates:
        svg = get_video_template_svg(tpl["name"], "#9C27B0")
        video_template_cards += f'''
        <div class="template-card video-tpl" style="--tpl-color: #9C27B0">
            <div class="template-svg video-svg">
                {svg}
            </div>
            <div class="template-info">
                <h4>{tpl.get("title", tpl["name"])}</h4>
                <p>{tpl["description"]}</p>
                <span class="tpl-duration">{tpl["duration"]}</span>
            </div>
        </div>'''

    # 라이브 배너 템플릿 섹션
    live_banner_template_cards = ""
    for tpl in live_banner_templates:
        live_banner_template_cards += f'''
        <div class="template-card" style="--tpl-color: {tpl["color"]}">
            <div class="template-svg">
                {tpl.get("svg", "")}
            </div>
            <div class="template-info">
                <h4>{tpl["name"]}</h4>
                <p>{tpl["description"]}</p>
                <code>{tpl["file"]}</code>
                <div class="template-vars">{tpl.get("size", "")}</div>
            </div>
        </div>'''

    # 스마트스토어 배너 템플릿 섹션
    smartstore_banner_template_cards = ""
    for tpl in smartstore_banner_templates:
        smartstore_banner_template_cards += f'''
        <div class="template-card" style="--tpl-color: {tpl["color"]}">
            <div class="template-svg">
                {tpl.get("svg", "")}
            </div>
            <div class="template-info">
                <h4>{tpl["name"]}</h4>
                <p>{tpl["description"]}</p>
                <code>{tpl["file"]}</code>
                <div class="template-vars">{tpl.get("size", "")}</div>
            </div>
        </div>'''

    # 에이전트 테이블
    agent_rows = ""
    for agent in agents:
        agent_rows += f'''
        <tr>
            <td class="agent-name">{agent["name"]}</td>
            <td>{agent["description"] or "-"}</td>
        </tr>'''

    html = f'''<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Skills 가이드</title>
    <style>
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

        :root {{
            --primary: #A38068;
            --primary-light: #c4a68a;
            --bg: #f5f5f7;
            --card-bg: #ffffff;
            --text: #1d1d1f;
            --text-secondary: #6e6e73;
            --border: #e5e5e7;
            --sidebar-width: 260px;
        }}

        * {{ margin: 0; padding: 0; box-sizing: border-box; }}

        body {{
            font-family: 'Pretendard', -apple-system, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
        }}

        /* 레이아웃 */
        .layout {{
            display: flex;
            min-height: 100vh;
        }}

        /* 사이드바 */
        .sidebar {{
            width: var(--sidebar-width);
            background: var(--card-bg);
            border-right: 1px solid var(--border);
            position: fixed;
            height: 100vh;
            overflow-y: auto;
            z-index: 100;
        }}

        .sidebar-header {{
            padding: 24px 20px;
            border-bottom: 1px solid var(--border);
        }}

        .sidebar-header h1 {{
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--primary);
        }}

        .sidebar-header p {{
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-top: 4px;
        }}

        .sidebar-stats {{
            display: flex;
            gap: 16px;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border);
        }}

        .stat {{
            text-align: center;
        }}

        .stat-num {{
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
        }}

        .stat-label {{
            font-size: 0.7rem;
            color: var(--text-secondary);
        }}

        .sidebar-nav {{
            padding: 12px 0;
        }}

        .nav-section-title {{
            padding: 12px 20px 8px;
            font-size: 0.7rem;
            font-weight: 600;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}

        .nav-item {{
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 20px;
            color: var(--text);
            text-decoration: none;
            transition: all 0.15s;
            font-size: 0.9rem;
        }}

        .nav-item:hover {{
            background: var(--bg);
        }}

        .nav-item.active {{
            background: var(--primary);
            color: white;
        }}

        .nav-icon {{
            font-size: 1.1rem;
        }}

        .nav-text {{
            flex: 1;
        }}

        .nav-count {{
            font-size: 0.75rem;
            background: var(--bg);
            padding: 2px 8px;
            border-radius: 10px;
            color: var(--text-secondary);
        }}

        .nav-item.active .nav-count {{
            background: rgba(255,255,255,0.2);
            color: white;
        }}

        /* 메인 콘텐츠 */
        .main {{
            flex: 1;
            margin-left: var(--sidebar-width);
            padding: 32px 40px;
            max-width: 1200px;
        }}

        /* 사용법 박스 */
        .usage-box {{
            background: linear-gradient(135deg, var(--primary), var(--primary-light));
            color: white;
            padding: 28px 32px;
            border-radius: 16px;
            margin-bottom: 32px;
        }}

        .usage-box h2 {{
            font-size: 1.1rem;
            margin-bottom: 8px;
        }}

        .usage-box p {{
            opacity: 0.9;
            font-size: 0.9rem;
            margin-bottom: 16px;
        }}

        .usage-examples {{
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }}

        .usage-chip {{
            background: rgba(255,255,255,0.2);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
        }}

        /* 카테고리 섹션 */
        .category-section {{
            margin-bottom: 48px;
            scroll-margin-top: 20px;
        }}

        .category-header {{
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }}

        .cat-icon {{
            font-size: 1.5rem;
        }}

        .category-header h2 {{
            font-size: 1.25rem;
            font-weight: 600;
        }}

        .cat-count {{
            font-size: 0.8rem;
            color: var(--text-secondary);
            background: var(--border);
            padding: 4px 10px;
            border-radius: 12px;
        }}

        .category-examples {{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
        }}

        .examples-label {{
            font-size: 0.8rem;
            color: var(--text-secondary);
        }}

        .example-chip {{
            background: #e8f5e9;
            color: #2e7d32;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.8rem;
        }}

        /* 스킬 그리드 */
        .skills-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 16px;
        }}

        .skill-card {{
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 16px;
            transition: all 0.2s;
            cursor: pointer;
        }}

        .skill-card:hover {{
            border-color: var(--primary);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }}

        .skill-header {{
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }}

        .skill-name {{
            font-weight: 600;
            font-size: 0.95rem;
        }}

        .has-template {{
            font-size: 0.65rem;
            background: var(--primary);
            color: white;
            padding: 2px 6px;
            border-radius: 4px;
        }}

        .skill-desc {{
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-bottom: 8px;
        }}

        .skill-triggers {{
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }}

        .trigger-tag {{
            font-size: 0.7rem;
            background: var(--bg);
            padding: 3px 8px;
            border-radius: 6px;
            color: var(--text-secondary);
        }}

        /* 특별 섹션 */
        .special-section {{
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 32px;
        }}

        .special-section h3 {{
            font-size: 1.1rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }}

        /* 카드뉴스 템플릿 */
        .card-templates-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 16px;
        }}

        .template-card {{
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.2s;
        }}

        .template-card:hover {{
            border-color: var(--tpl-color);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }}

        .template-svg {{
            padding: 16px;
            background: var(--bg);
            display: flex;
            align-items: center;
            justify-content: center;
        }}

        .template-svg svg {{
            width: 100%;
            max-width: 160px;
            height: auto;
        }}

        .video-tpl .template-svg {{
            padding: 12px;
        }}

        .video-svg svg {{
            max-width: 200px;
        }}

        .template-info {{
            padding: 12px;
        }}

        .template-info h4 {{
            font-size: 0.9rem;
            margin-bottom: 4px;
        }}

        .template-info p {{
            font-size: 0.75rem;
            color: var(--text-secondary);
            margin-bottom: 8px;
        }}

        .template-info code {{
            font-size: 0.7rem;
            background: var(--bg);
            padding: 2px 6px;
            border-radius: 4px;
            color: var(--primary);
            display: inline-block;
            margin-bottom: 6px;
        }}

        .template-vars {{
            font-size: 0.65rem;
            color: var(--text-secondary);
            font-family: 'Monaco', monospace;
        }}

        .tpl-duration {{
            font-size: 0.7rem;
            background: #9C27B020;
            color: #9C27B0;
            padding: 2px 8px;
            border-radius: 4px;
        }}

        /* 테이블 */
        .data-table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }}

        .data-table th {{
            text-align: left;
            padding: 12px;
            background: var(--bg);
            font-weight: 600;
            color: var(--text-secondary);
            font-size: 0.8rem;
        }}

        .data-table td {{
            padding: 12px;
            border-bottom: 1px solid var(--border);
        }}

        .data-table tr:last-child td {{
            border-bottom: none;
        }}

        .tpl-name, .agent-name {{
            font-weight: 600;
            font-family: 'Monaco', monospace;
            font-size: 0.85rem;
        }}

        .tpl-name {{ color: #9C27B0; }}
        .agent-name {{ color: var(--primary); }}
        .tpl-duration {{ color: var(--text-secondary); white-space: nowrap; }}

        /* 푸터 */
        .footer {{
            text-align: center;
            padding: 32px;
            color: var(--text-secondary);
            font-size: 0.8rem;
        }}

        /* 반응형 */
        @media (max-width: 900px) {{
            .sidebar {{
                transform: translateX(-100%);
            }}

            .main {{
                margin-left: 0;
            }}
        }}
    </style>
</head>
<body>
    <div class="layout">
        <!-- 사이드바 -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h1>Team Skills</h1>
                <p>AI 마케팅 자동화 도구</p>
            </div>

            <div class="sidebar-stats">
                <div class="stat">
                    <div class="stat-num">{total_skills}</div>
                    <div class="stat-label">스킬</div>
                </div>
                <div class="stat">
                    <div class="stat-num">{len(agents)}</div>
                    <div class="stat-label">에이전트</div>
                </div>
                <div class="stat">
                    <div class="stat-num">{len(card_templates)}</div>
                    <div class="stat-label">템플릿</div>
                </div>
            </div>

            <nav class="sidebar-nav">
                <div class="nav-section-title">카테고리</div>
                {sidebar_items}

                <div class="nav-section-title" style="margin-top: 16px;">리소스</div>
                <a href="#card-templates" class="nav-item">
                    <span class="nav-icon">🎴</span>
                    <span class="nav-text">카드뉴스 템플릿</span>
                    <span class="nav-count">{len(card_templates)}</span>
                </a>
                <a href="#meta-ad-templates" class="nav-item">
                    <span class="nav-icon">📷</span>
                    <span class="nav-text">메타 광고 템플릿</span>
                    <span class="nav-count">{len(meta_ad_templates)}</span>
                </a>
                <a href="#video-templates" class="nav-item">
                    <span class="nav-icon">🎬</span>
                    <span class="nav-text">영상 템플릿</span>
                    <span class="nav-count">{len(video_templates)}</span>
                </a>
                <a href="#live-banner-templates" class="nav-item">
                    <span class="nav-icon">📺</span>
                    <span class="nav-text">라이브 배너</span>
                    <span class="nav-count">{len(live_banner_templates)}</span>
                </a>
                <a href="#smartstore-banner-templates" class="nav-item">
                    <span class="nav-icon">🏪</span>
                    <span class="nav-text">스마트스토어</span>
                    <span class="nav-count">{len(smartstore_banner_templates)}</span>
                </a>
                <a href="#agents" class="nav-item">
                    <span class="nav-icon">🤖</span>
                    <span class="nav-text">에이전트</span>
                </a>
            </nav>
        </aside>

        <!-- 메인 콘텐츠 -->
        <main class="main">
            <div class="usage-box">
                <h2>사용 방법</h2>
                <p>슬래시 명령어가 아닙니다. 자연어로 요청하세요!</p>
                <div class="usage-examples">
                    <span class="usage-chip">"상세페이지 만들어줘"</span>
                    <span class="usage-chip">"메타 광고 기획해줘"</span>
                    <span class="usage-chip">"브랜드 분석해줘"</span>
                    <span class="usage-chip">"카드뉴스 제작해줘"</span>
                </div>
            </div>

            <!-- 카테고리별 스킬 -->
            {category_content}

            <!-- 카드뉴스 템플릿 -->
            <section class="special-section" id="card-templates">
                <h3>🎴 카드뉴스 템플릿 ({len(card_templates)}개)</h3>
                <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">
                    인스타그램 카드뉴스용 HTML 템플릿입니다. 1080×1350 (4:5) 비율로 렌더링됩니다.
                </p>
                <div class="card-templates-grid">
                    {card_template_cards}
                </div>
            </section>

            <!-- 메타 광고 이미지 템플릿 -->
            <section class="special-section" id="meta-ad-templates">
                <h3>📷 메타 광고 이미지 템플릿 ({len(meta_ad_templates)}개)</h3>
                <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">
                    Meta (Facebook/Instagram) 피드 광고용 이미지 템플릿입니다. 1080×1350 (4:5) 비율.
                </p>
                <div class="card-templates-grid">
                    {meta_ad_template_cards}
                </div>
            </section>

            <!-- 영상 템플릿 -->
            <section class="special-section" id="video-templates">
                <h3>🎬 영상 템플릿 ({len(video_templates)}개)</h3>
                <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">
                    Remotion 기반 영상 광고 템플릿입니다. 릴스/스토리(9:16) 또는 피드(4:5) 비율.
                </p>
                <div class="card-templates-grid video-templates-grid">
                    {video_template_cards}
                </div>
            </section>

            <!-- 라이브 배너 템플릿 -->
            <section class="special-section" id="live-banner-templates">
                <h3>📺 라이브 배너 템플릿 ({len(live_banner_templates)}개)</h3>
                <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">
                    네이버/카카오 쇼핑라이브용 배너 템플릿입니다. 혜택 안내, 메인 화면, 이벤트 배너 등.
                </p>
                <div class="card-templates-grid">
                    {live_banner_template_cards}
                </div>
            </section>

            <!-- 스마트스토어 배너 템플릿 -->
            <section class="special-section" id="smartstore-banner-templates">
                <h3>🏪 스마트스토어 배너 템플릿 ({len(smartstore_banner_templates)}개)</h3>
                <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">
                    네이버 스마트스토어용 PC/모바일 배너 템플릿입니다. 메인배너, 쿠폰배너 등.
                </p>
                <div class="card-templates-grid">
                    {smartstore_banner_template_cards}
                </div>
            </section>

            <!-- 에이전트 -->
            <section class="special-section" id="agents">
                <h3>🤖 에이전트 ({len(agents)}개)</h3>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>에이전트</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agent_rows}
                    </tbody>
                </table>
            </section>

            <footer class="footer">
                자동 생성됨 · {now}
            </footer>
        </main>
    </div>

    <script>
        // 네비게이션 활성화
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('section[id]');

        function updateActiveNav() {{
            let current = '';
            sections.forEach(section => {{
                const sectionTop = section.offsetTop - 100;
                if (scrollY >= sectionTop) {{
                    current = section.getAttribute('id');
                }}
            }});

            navItems.forEach(item => {{
                item.classList.remove('active');
                if (item.getAttribute('href') === '#' + current) {{
                    item.classList.add('active');
                }}
            }});
        }}

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    </script>
</body>
</html>'''

    return html


def generate_redirect_html() -> str:
    """리다이렉트 HTML 생성"""
    return '''<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=docs/guide/index.html">
    <title>Redirecting...</title>
</head>
<body>
    <p>가이드로 이동 중... <a href="docs/guide/index.html">클릭하여 이동</a></p>
</body>
</html>'''


def generate_markdown_catalog(skills: dict, agents: list, video_templates: list) -> str:
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

    for cat_id, skill_list in skills.items():
        cat_info = CATEGORIES.get(cat_id, {"name": cat_id, "icon": "📁"})

        md += f"## {cat_info['icon']} {cat_info['name']} ({len(skill_list)}개)\n\n"
        md += "| 스킬 | 설명 |\n|------|------|\n"

        for skill in skill_list:
            trans = SKILL_TRANSLATIONS.get(skill["id"], skill["name"])
            desc = skill["description"][:60] if skill["description"] else "-"
            md += f"| `{skill['id']}` | {trans} - {desc} |\n"

        md += "\n"

    if video_templates:
        md += f"## 🎬 영상 템플릿 ({len(video_templates)}개)\n\n"
        md += "| 템플릿 | 설명 | 권장 길이 |\n|--------|------|--------|\n"
        for tpl in video_templates:
            md += f"| `{tpl['name']}` | {tpl['description']} | {tpl['duration']} |\n"
        md += "\n"

    md += "## 🤖 에이전트\n\n| 에이전트 | 설명 |\n|----------|------|\n"
    for agent in agents:
        md += f"| **{agent['name']}** | {agent['description'] or '-'} |\n"

    md += f"\n---\n\n*마지막 업데이트: {datetime.now().strftime('%Y-%m-%d')}*\n"

    return md


def main():
    print("🔍 스캔 중...")

    skills = scan_skills()
    agents = scan_agents()
    video_templates = scan_video_templates()
    card_templates = scan_card_news_templates()
    meta_ad_templates = scan_meta_ad_templates()
    live_banner_templates = scan_live_banner_templates()
    smartstore_banner_templates = scan_smartstore_banner_templates()

    total_skills = sum(len(s) for s in skills.values())
    print(f"   스킬: {total_skills}개")
    print(f"   에이전트: {len(agents)}개")
    print(f"   영상 템플릿: {len(video_templates)}개")
    print(f"   카드뉴스 템플릿: {len(card_templates)}개")
    print(f"   메타 광고 템플릿: {len(meta_ad_templates)}개")
    print(f"   라이브 배너 템플릿: {len(live_banner_templates)}개")
    print(f"   스마트스토어 배너 템플릿: {len(smartstore_banner_templates)}개")

    # HTML 가이드 생성
    print("\n📝 HTML 가이드 생성 중...")
    OUTPUT_GUIDE.parent.mkdir(parents=True, exist_ok=True)
    html = generate_html_guide(skills, agents, video_templates, card_templates, meta_ad_templates, live_banner_templates, smartstore_banner_templates)
    OUTPUT_GUIDE.write_text(html, encoding="utf-8")
    print(f"   ✅ {OUTPUT_GUIDE}")

    # 리다이렉트 HTML
    redirect = generate_redirect_html()
    OUTPUT_REDIRECT.write_text(redirect, encoding="utf-8")
    print(f"   ✅ {OUTPUT_REDIRECT}")

    # 마크다운 카탈로그
    print("\n📄 마크다운 카탈로그 생성 중...")
    md = generate_markdown_catalog(skills, agents, video_templates)
    OUTPUT_CATALOG.write_text(md, encoding="utf-8")
    print(f"   ✅ {OUTPUT_CATALOG}")

    print(f"\n✨ 완료!")


if __name__ == "__main__":
    main()
