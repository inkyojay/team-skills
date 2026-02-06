#!/usr/bin/env python3
"""
카드뉴스 생성기
config.json + template.html → 완성된 HTML → PNG 캡처

사용법:
  python3 generate.py config.json
  python3 generate.py config.json --preview   # 브라우저 미리보기만
  python3 generate.py config.json --capture    # PNG 캡처까지
"""

import json
import sys
import os
import subprocess
from pathlib import Path


def load_config(config_path):
    with open(config_path, 'r', encoding='utf-8') as f:
        return json.load(f)


def load_template():
    template_dir = Path(__file__).parent
    with open(template_dir / 'template.html', 'r', encoding='utf-8') as f:
        return f.read()


def nl2br(text):
    """\\n → <br>"""
    return text.replace('\n', '<br>\n')


def build_cover_card(cover, idx):
    bubble_html = ''
    if cover.get('bubble'):
        bubble_html = f'''
  <div class="speech-bubble">
    {nl2br(cover["bubble"])}
  </div>'''

    badge_html = ''
    if cover.get('badge'):
        badge_html = f'<div class="badge">{cover["badge"]}</div>'

    return f'''
<!-- 카드 {idx}: 커버 -->
<div class="card card-cover" id="card-{idx}">
  <img class="bg-photo" src="{cover["photo"]}" alt="커버">
  <div class="gradient-overlay"></div>
  {bubble_html}
  <div class="text-overlay">
    {badge_html}
    <div class="title">{nl2br(cover["title"])}</div>
  </div>
</div>'''


def build_product_card(card, idx):
    icon_class = ' icon-right' if card.get('icon_right') else ''

    if card.get('icon_right'):
        name_inner = f'''
      <span class="name-text">{card["name"]}</span>
      <div class="plus-icon">+</div>'''
    else:
        name_inner = f'''
      <div class="plus-icon">+</div>
      <span class="name-text">{card["name"]}</span>'''

    tag_html = ''
    if card.get('tag'):
        tag_html = f'<div class="tag">{card["tag"]}</div>'

    return f'''
<!-- 카드 {idx}: {card["name"]} -->
<div class="card card-product{icon_class}" id="card-{idx}">
  <img class="bg-photo" src="{card["photo"]}" alt="{card["name"]}">
  <div class="gradient-overlay"></div>
  <div class="text-overlay">
    <div class="product-name">{name_inner}
    </div>
    <div class="desc">{nl2br(card["desc"])}</div>
    {tag_html}
  </div>
</div>'''


def generate_html(config, config_dir, output_dir):
    template = load_template()

    # <body> 태그 안에 카드 삽입
    head_part = template.split('<body>')[0] + '<body>\n'
    tail_part = '\n</body>\n</html>'

    cards_html = []

    # 커버 카드
    idx = 1
    if config.get('cover'):
        cover = config['cover'].copy()
        # config_dir 기준 사진 경로 → output_dir 기준 상대경로
        cover['photo'] = os.path.relpath(
            os.path.join(config_dir, cover['photo']),
            output_dir
        )
        cards_html.append(build_cover_card(cover, idx))
        idx += 1

    # 제품 카드들
    for card_data in config.get('cards', []):
        card = card_data.copy()
        card['photo'] = os.path.relpath(
            os.path.join(config_dir, card['photo']),
            output_dir
        )
        cards_html.append(build_product_card(card, idx))
        idx += 1

    return head_part + '\n'.join(cards_html) + tail_part, idx - 1


def capture_cards(html_path, total_cards, output_dir):
    """Playwright로 각 카드를 PNG 캡처"""
    capture_script = f'''
from playwright.sync_api import sync_playwright
import os

html_path = "{html_path}"
output_dir = "{output_dir}"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={{"width": 2160, "height": 6000}})
    page.goto(f"file://{{html_path}}")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(1000)

    for i in range(1, {total_cards + 1}):
        card = page.locator(f"#card-{{i}}")
        path = os.path.join(output_dir, f"card-{{i}}.png")
        card.screenshot(path=path)
        print(f"  card-{{i}}.png")

    browser.close()
'''
    script_path = os.path.join(output_dir, '_capture_tmp.py')
    with open(script_path, 'w') as f:
        f.write(capture_script)

    result = subprocess.run(
        [sys.executable, script_path],
        capture_output=True, text=True
    )
    os.remove(script_path)

    if result.returncode != 0:
        print(f"캡처 오류: {result.stderr}")
        return False

    print(result.stdout, end='')
    return True


def main():
    if len(sys.argv) < 2:
        print("사용법: python3 generate.py <config.json> [--preview|--capture]")
        sys.exit(1)

    config_path = os.path.abspath(sys.argv[1])
    config_dir = os.path.dirname(config_path)
    mode = sys.argv[2] if len(sys.argv) > 2 else '--capture'

    config = load_config(config_path)

    # 출력 디렉토리
    output_name = config.get('output_dir', 'output')
    output_dir = os.path.join(os.path.dirname(config_dir), output_name)
    os.makedirs(output_dir, exist_ok=True)

    print(f"제품: {config.get('product', 'N/A')}")
    print(f"출력: {output_dir}")

    # HTML 생성
    html_content, total_cards = generate_html(config, config_dir, output_dir)
    html_path = os.path.join(output_dir, 'cards.html')
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"HTML 생성 완료 ({total_cards}장)")

    if mode == '--preview':
        # 브라우저 열기
        if sys.platform == 'darwin':
            subprocess.run(['open', html_path])
        else:
            print(f"브라우저에서 열기: file://{html_path}")
    elif mode == '--capture':
        print("PNG 캡처 중...")
        if capture_cards(html_path, total_cards, output_dir):
            print(f"완료! {total_cards}장 카드 저장됨 → {output_dir}/")


if __name__ == '__main__':
    main()
