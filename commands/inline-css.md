# HTML CSS 인라인 변환 스킬

HTML 파일과 CSS 파일을 읽어서 CSS 클래스를 인라인 스타일로 변환합니다.

## 사용법

```
/inline-css [HTML파일경로] [CSS파일경로]
```

## 작업 절차

$ARGUMENTS 인자를 파싱하여 HTML 파일 경로와 CSS 파일 경로를 추출합니다.

### 1단계: 파일 읽기
- HTML 파일을 읽어서 사용된 CSS 클래스들을 파악합니다
- CSS 파일을 읽어서 각 클래스의 스타일 정의를 파악합니다

### 2단계: CSS 클래스 매핑
다음 CSS 클래스들을 인라인 스타일로 변환합니다:

**레이아웃 클래스:**
- `.detail_section` → `position: relative; max-width: 600px; margin: 50px auto;`
- `.detail_section_nomargin` → `position: relative; max-width: 600px; margin: 0px auto;`

**배경색 클래스:**
- `.bg-color-white` → `background-color: white; padding: 50px 0;`
- `.bg-color-1` → `background-color: #FFF8EE; padding: 50px 0;`
- `.bg-color-dailycream` → `background-color: #FFFBF5; padding: 50px 0;`
- `.bg-color-oat` → `background-color: #EAE2D5; padding: 50px 0;`
- `.bg-color-coral` → `background-color: #eaccca; padding: 50px 0;`
- `.bg-color-black` → `background-color: rgb(0, 0, 0); padding: 50px 0;`

**타이포그래피 클래스:**
- `.sub_title` → `font-size: 18px; line-height: 28px; font-weight: 600; text-align: center; padding: 0px 0px 10px 0px;`
- `.feature_title` → `font-size: 27px; font-weight: 600; line-height: 36px; text-align: center; padding: 0px 0px 10px 0px;`
- `.title` → `font-size: 24px; font-weight: 600; line-height: 32px; padding: 0px 0px 10px 0px; text-align: center;`
- `.desc_big` → `font-size: 18px; line-height: 28px; text-align: center; padding: 0px 0px 10px 0px;`
- `.desc_small` → `font-size: 15px; line-height: 23px; text-align: center; padding: 0px 0px 10px 0px;`
- `.desc_ssmall` → `font-size: 12px; text-align: center; line-height: 20px; padding: 0px 0px 10px 0px;`

**정렬 클래스:**
- `.txtleft` → `text-align: left; padding-left: 15px;`
- `.txtright` → `text-align: right; padding-right: 15px;`
- `.txtcenter` → `text-align: center;`

**폰트 굵기 클래스:**
- `.font-w900` → `font-weight: 900;`
- `.font-w700` → `font-weight: 700;`
- `.font-w600` → `font-weight: 600;`
- `.font-w500` → `font-weight: 500;`
- `.font-w400` → `font-weight: 400;`
- `.font-w300` → `font-weight: 300;`

**폰트 스타일 클래스:**
- `.font-serif` → `font-family: 'Noto Serif KR', serif;`
- `.font_24_700` → `font-size: 24px; font-weight: 700;`
- `.font_20_600` → `font-size: 20px; font-weight: 600;`
- `.font_16_600` → `font-size: 16px; font-weight: 600;`

**색상 클래스:**
- `.color_white` → `color: #fff;`
- `.color_coral` → `color: #a38068;`
- `.color_dark_brown` → `color: #A38068;`
- `.color_red` → `color: #FF0000;`
- `.color_daily_cream` → `color: #FFFBF5;`

**배너/이미지 클래스:**
- `.banner_0_img` → `padding: 0px 0 0px 0;`
- `.banner_top20_img` → `padding: 20px 0 0px 0;`
- `.banner_bt20_img` → `padding: 0 0 20px 0;`
- `.banner_top_bt_20_img` → `padding: 20px 0 20px 0;`
- `.banner_top40_img` → `padding: 40px 0 0px 0;`

**강조 클래스:**
- `.point_color1` → `box-shadow: inset 0 -9px 0 0 #FBF6ED; font-weight: bold;`
- `.point_color2` → `box-shadow: inset 0 -9px 0 0 #ffe0de; font-weight: bold;`
- `.point_color3` → `box-shadow: inset 0 -9px 0 0 #CACDBB; font-weight: bold;`
- `.point_bold` → `font-weight: bold;`
- `.underline` → `display: inline-block; border-bottom: 1px solid #000; padding-bottom: 2px;`

**버튼/뱃지 클래스:**
- `.desc_btn` → `background: #000; color: #fff; padding: 3px 15px 0px 15px; font-size: 17px; box-sizing: border-box; border-radius: 30px; margin-bottom: 10px; display: inline-block;`
- `.purchase_btn` → `background: #000000; color: #fff; padding: 2px 15px; font-size: 13px; box-sizing: border-box; margin-bottom: 10px; display: inline-block;`

**프로필/레이아웃 클래스:**
- `.profile` → `display: flex; align-items: center; justify-content: center; margin: 50px 0 50px 0;`
- `.flex_container` → `display: flex; justify-content: space-between; align-items: center; width: 100%; margin: 0 auto; gap: 5px;`

**사이즈 테이블 클래스:**
- `.size_wrap2` → `width: 95%; margin: 30px auto; text-align: center;`
- `.sizeTable` → `display: table; width: 100%; border-bottom: 1px solid #C2C2C2; font-weight: 300;`
- `.size_cell` → `display: table-cell; width: 50%; vertical-align: middle; font-size: 13px; line-height: 2.7;`
- `.sizetit` → `font-weight: bold;`
- `.sizetxt` → `text-align: left; position: relative; padding-left: 10px; font-size: 13px;`

### 3단계: 변환 실행
1. HTML 파일에서 `class="..."` 속성을 찾습니다
2. 각 클래스를 해당하는 인라인 스타일로 변환합니다
3. 여러 클래스가 있는 경우 모든 스타일을 병합합니다
4. 기존 `style="..."` 속성이 있으면 스타일을 추가합니다
5. `<link rel="stylesheet">` 태그를 제거합니다

### 4단계: 이미지 태그 처리
모든 `<img>` 태그에 다음 기본 스타일을 추가합니다:
- `max-width: 100%; height: auto; display: block;`

### 5단계: 출력
- 원본 파일명에 `_inline` 접미사를 붙여 새 파일로 저장합니다
- 예: `page.html` → `page_inline.html`

## 주의사항
- CSS 파일에서 실제 클래스 정의를 읽어서 정확한 스타일을 적용합니다
- 미디어 쿼리나 의사 클래스(:hover 등)는 인라인으로 변환할 수 없으므로 제외합니다
- CSS 변수(var())는 실제 값으로 치환합니다
