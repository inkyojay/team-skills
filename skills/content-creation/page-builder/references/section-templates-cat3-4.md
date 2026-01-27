# 섹션 템플릿 레퍼런스 — 카테고리 3 & 4

제품 특징/기능 섹션 및 신뢰/증거 섹션 템플릿입니다.

---

## 카테고리 3: 제품 특징/기능 섹션

---

### 3-1. 아이콘 그리드 (2열)

**용도**: 제품의 핵심 특징을 아이콘 + 제목 + 설명으로 2열 카드 형태 배치
**특징**: 서브틀한 그림자와 라운드 아이콘으로 깔끔한 카드 스타일

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        FEATURES
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 40px; line-height: 1.4;">
        제품의 핵심 특징
    </div>
    <div class="sh_icon-grid-2col" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 600px; margin: 0 auto;">
        <!-- 카드 1 -->
        <div style="background: #fff; border-radius: 12px; padding: 28px 16px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: #FFFBF5;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 16px; border: 1px solid #EAE2D5;">
                <img src="https://dummyimage.com/32x32" alt="아이콘" style="width: 32px; height: 32px;">
            </div>
            <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">
                통기성 소재
            </div>
            <div style="font-size: 13px; color: #888; line-height: 1.6;">
                공기 순환이 원활한 메쉬 구조로<br>쾌적한 수면 환경
            </div>
        </div>
        <!-- 카드 2 -->
        <div style="background: #fff; border-radius: 12px; padding: 28px 16px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: #FFFBF5;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 16px; border: 1px solid #EAE2D5;">
                <img src="https://dummyimage.com/32x32" alt="아이콘" style="width: 32px; height: 32px;">
            </div>
            <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">
                안전 인증
            </div>
            <div style="font-size: 13px; color: #888; line-height: 1.6;">
                KC 안전 인증 완료<br>유해물질 걱정 없는 소재
            </div>
        </div>
        <!-- 카드 3 -->
        <div style="background: #fff; border-radius: 12px; padding: 28px 16px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: #FFFBF5;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 16px; border: 1px solid #EAE2D5;">
                <img src="https://dummyimage.com/32x32" alt="아이콘" style="width: 32px; height: 32px;">
            </div>
            <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">
                세탁 편의
            </div>
            <div style="font-size: 13px; color: #888; line-height: 1.6;">
                통째로 세탁기 사용 가능<br>빠른 건조 설계
            </div>
        </div>
        <!-- 카드 4 -->
        <div style="background: #fff; border-radius: 12px; padding: 28px 16px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: #FFFBF5;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 16px; border: 1px solid #EAE2D5;">
                <img src="https://dummyimage.com/32x32" alt="아이콘" style="width: 32px; height: 32px;">
            </div>
            <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">
                사계절 사용
            </div>
            <div style="font-size: 13px; color: #888; line-height: 1.6;">
                적정 보온력으로<br>사계절 내내 사용 가능
            </div>
        </div>
    </div>
</div>
```

---

### 3-2. 아이콘 그리드 (3열)

**용도**: 많은 특징을 컴팩트하게 아이콘 + 라벨로 빠르게 보여주는 그리드
**특징**: 3열 컴팩트 배치, 아이콘과 라벨만으로 특징 개요 전달

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 40px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        WHY SUNDAY HUG
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
        한눈에 보는 특장점
    </div>
    <div class="sh_icon-grid-3col" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 600px; margin: 0 auto;">
        <!-- 아이템 1 -->
        <div style="text-align: center; padding: 20px 8px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #fff;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/28x28" alt="아이콘" style="width: 28px; height: 28px;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; line-height: 1.4;">
                100% 순면
            </div>
        </div>
        <!-- 아이템 2 -->
        <div style="text-align: center; padding: 20px 8px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #fff;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/28x28" alt="아이콘" style="width: 28px; height: 28px;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; line-height: 1.4;">
                KC 인증
            </div>
        </div>
        <!-- 아이템 3 -->
        <div style="text-align: center; padding: 20px 8px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #fff;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/28x28" alt="아이콘" style="width: 28px; height: 28px;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; line-height: 1.4;">
                세탁기 OK
            </div>
        </div>
        <!-- 아이템 4 -->
        <div style="text-align: center; padding: 20px 8px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #fff;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/28x28" alt="아이콘" style="width: 28px; height: 28px;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; line-height: 1.4;">
                사계절 사용
            </div>
        </div>
        <!-- 아이템 5 -->
        <div style="text-align: center; padding: 20px 8px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #fff;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/28x28" alt="아이콘" style="width: 28px; height: 28px;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; line-height: 1.4;">
                무형광 원단
            </div>
        </div>
        <!-- 아이템 6 -->
        <div style="text-align: center; padding: 20px 8px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #fff;
                        display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/28x28" alt="아이콘" style="width: 28px; height: 28px;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; line-height: 1.4;">
                간편 착용
            </div>
        </div>
    </div>
</div>
```

---

### 3-3. 좌 이미지 + 우 텍스트 (교차 반복)

**용도**: 이미지와 텍스트를 좌우 교차(지그재그) 배치로 제품 특징 설명
**특징**: 첫 행은 이미지 왼쪽 / 텍스트 오른쪽, 둘째 행은 반대 배치

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 50px 15px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        DETAILS
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 40px; line-height: 1.4;">
        이런 점이 다릅니다
    </div>

    <!-- Row 1: 이미지 좌 / 텍스트 우 -->
    <div class="sh_zigzag-row" style="display: flex; align-items: center; gap: 20px; margin-bottom: 32px;">
        <div style="flex: 1; border-radius: 12px; overflow: hidden;">
            <img src="https://dummyimage.com/280x280" alt="특징 1"
                 style="width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block;">
        </div>
        <div style="flex: 1; padding: 10px 0;">
            <div style="display: inline-block; background: linear-gradient(135deg, #a38068, #8b6b56);
                        color: #fff; padding: 5px 14px; border-radius: 20px;
                        font-size: 12px; font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">
                POINT 01
            </div>
            <div style="font-size: 18px; font-weight: 700; color: #2d2420; line-height: 1.4; margin-bottom: 10px;">
                부드러운<br>오가닉 코튼
            </div>
            <div style="font-size: 13px; color: #888; line-height: 1.7;">
                아기 피부에 직접 닿는 안감은 100% 오가닉 코튼으로 제작하여 자극을 최소화했습니다.
            </div>
        </div>
    </div>

    <!-- Row 2: 텍스트 좌 / 이미지 우 -->
    <div class="sh_zigzag-row" style="display: flex; align-items: center; gap: 20px; margin-bottom: 32px;
                flex-direction: row-reverse;">
        <div style="flex: 1; border-radius: 12px; overflow: hidden;">
            <img src="https://dummyimage.com/280x280" alt="특징 2"
                 style="width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block;">
        </div>
        <div style="flex: 1; padding: 10px 0;">
            <div style="display: inline-block; background: linear-gradient(135deg, #a38068, #8b6b56);
                        color: #fff; padding: 5px 14px; border-radius: 20px;
                        font-size: 12px; font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">
                POINT 02
            </div>
            <div style="font-size: 18px; font-weight: 700; color: #2d2420; line-height: 1.4; margin-bottom: 10px;">
                특허받은<br>안전 잠금장치
            </div>
            <div style="font-size: 13px; color: #888; line-height: 1.7;">
                아기가 스스로 열 수 없는 특허 잠금 구조로 수면 중 안전을 지켜줍니다.
            </div>
        </div>
    </div>

    <!-- Row 3: 이미지 좌 / 텍스트 우 -->
    <div class="sh_zigzag-row" style="display: flex; align-items: center; gap: 20px;">
        <div style="flex: 1; border-radius: 12px; overflow: hidden;">
            <img src="https://dummyimage.com/280x280" alt="특징 3"
                 style="width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block;">
        </div>
        <div style="flex: 1; padding: 10px 0;">
            <div style="display: inline-block; background: linear-gradient(135deg, #a38068, #8b6b56);
                        color: #fff; padding: 5px 14px; border-radius: 20px;
                        font-size: 12px; font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">
                POINT 03
            </div>
            <div style="font-size: 18px; font-weight: 700; color: #2d2420; line-height: 1.4; margin-bottom: 10px;">
                간편한<br>통세탁
            </div>
            <div style="font-size: 13px; color: #888; line-height: 1.7;">
                세탁망 없이 통째로 세탁기에 넣어 세탁 가능. 빠른 건조로 위생적입니다.
            </div>
        </div>
    </div>
</div>
```

---

### 3-4. 탭 전환 형식

**용도**: 여러 제품 특징을 탭 버튼으로 전환하며 보여주는 인터랙티브 섹션
**특징**: CSS + 최소 JS로 탭 전환, 기존 sh_fabric-tab 패턴 활용

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        FEATURES
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 30px; line-height: 1.4;">
        제품 특징 살펴보기
    </div>

    <!-- 탭 버튼 -->
    <div class="sh_tab-buttons" style="display: flex; gap: 0; border-bottom: 2px solid #EAE2D5; margin-bottom: 30px;">
        <button class="sh_tab-btn sh_tab-active"
                onclick="shTabSwitch(this, 'sh_tab-panel-1')"
                style="flex: 1; padding: 14px 0; font-size: 14px; font-weight: 600; color: #2d2420;
                       background: none; border: none; border-bottom: 2px solid #A38068;
                       margin-bottom: -2px; cursor: pointer; transition: all 0.3s ease;">
            소재
        </button>
        <button class="sh_tab-btn"
                onclick="shTabSwitch(this, 'sh_tab-panel-2')"
                style="flex: 1; padding: 14px 0; font-size: 14px; font-weight: 600; color: #aaa;
                       background: none; border: none; border-bottom: 2px solid transparent;
                       margin-bottom: -2px; cursor: pointer; transition: all 0.3s ease;">
            기능
        </button>
        <button class="sh_tab-btn"
                onclick="shTabSwitch(this, 'sh_tab-panel-3')"
                style="flex: 1; padding: 14px 0; font-size: 14px; font-weight: 600; color: #aaa;
                       background: none; border: none; border-bottom: 2px solid transparent;
                       margin-bottom: -2px; cursor: pointer; transition: all 0.3s ease;">
            세탁/관리
        </button>
    </div>

    <!-- 탭 패널 1 -->
    <div id="sh_tab-panel-1" class="sh_tab-panel" style="display: block;">
        <div style="text-align: center;">
            <div style="border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
                <img src="https://dummyimage.com/560x360" alt="소재"
                     style="width: 100%; display: block;">
            </div>
            <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 10px;">
                OEKO-TEX 인증 오가닉 코튼
            </div>
            <div style="font-size: 14px; color: #888; line-height: 1.7;">
                국제 유해물질 검증 기관의 인증을 받은<br>최상급 오가닉 코튼만을 사용합니다.
            </div>
        </div>
    </div>

    <!-- 탭 패널 2 -->
    <div id="sh_tab-panel-2" class="sh_tab-panel" style="display: none;">
        <div style="text-align: center;">
            <div style="border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
                <img src="https://dummyimage.com/560x360" alt="기능"
                     style="width: 100%; display: block;">
            </div>
            <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 10px;">
                360도 안전 지퍼 가드
            </div>
            <div style="font-size: 14px; color: #888; line-height: 1.7;">
                지퍼 끝부분에 원단 가드를 적용하여<br>아기 피부가 직접 닿지 않습니다.
            </div>
        </div>
    </div>

    <!-- 탭 패널 3 -->
    <div id="sh_tab-panel-3" class="sh_tab-panel" style="display: none;">
        <div style="text-align: center;">
            <div style="border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
                <img src="https://dummyimage.com/560x360" alt="세탁관리"
                     style="width: 100%; display: block;">
            </div>
            <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 10px;">
                통째로 세탁기 OK
            </div>
            <div style="font-size: 14px; color: #888; line-height: 1.7;">
                분리 없이 통째로 세탁 가능하며<br>형태 변형 없이 빠르게 건조됩니다.
            </div>
        </div>
    </div>
</div>
```

**추가 JS**:
```js
function shTabSwitch(btn, panelId) {
    // 모든 탭 버튼 비활성화
    var btns = btn.parentElement.querySelectorAll('.sh_tab-btn');
    btns.forEach(function(b) {
        b.style.color = '#aaa';
        b.style.borderBottomColor = 'transparent';
        b.classList.remove('sh_tab-active');
    });
    // 클릭한 버튼 활성화
    btn.style.color = '#2d2420';
    btn.style.borderBottomColor = '#A38068';
    btn.classList.add('sh_tab-active');
    // 모든 패널 숨기기
    var panels = document.querySelectorAll('.sh_tab-panel');
    panels.forEach(function(p) { p.style.display = 'none'; });
    // 선택된 패널 보이기
    document.getElementById(panelId).style.display = 'block';
}
```

---

### 3-5. 아코디언 펼치기

**용도**: 제품 특징을 접고 펼 수 있는 아코디언 형태로 구성
**특징**: 플러스/마이너스 토글 아이콘, 부드러운 열림 애니메이션

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        PRODUCT INFO
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
        자세히 알아보기
    </div>

    <div class="sh_accordion" style="max-width: 600px; margin: 0 auto;">
        <!-- 아코디언 아이템 1 -->
        <div class="sh_accordion-item" style="border-bottom: 1px solid #EAE2D5;">
            <button class="sh_accordion-header" onclick="shAccordionToggle(this)"
                    style="width: 100%; display: flex; justify-content: space-between; align-items: center;
                           padding: 20px 0; background: none; border: none; cursor: pointer; text-align: left;">
                <span style="font-size: 16px; font-weight: 600; color: #2d2420;">
                    오가닉 코튼 소재
                </span>
                <span class="sh_accordion-icon"
                      style="font-size: 22px; color: #A38068; font-weight: 300; transition: transform 0.3s ease;
                             flex-shrink: 0; width: 24px; text-align: center;">
                    +
                </span>
            </button>
            <div class="sh_accordion-body"
                 style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
                <div style="padding: 0 0 20px 0;">
                    <div style="display: flex; gap: 16px; align-items: flex-start;">
                        <div style="border-radius: 8px; overflow: hidden; flex-shrink: 0;">
                            <img src="https://dummyimage.com/120x120" alt="소재"
                                 style="width: 120px; height: 120px; object-fit: cover; display: block;">
                        </div>
                        <div style="font-size: 14px; color: #666; line-height: 1.7;">
                            OEKO-TEX 인증을 받은 100% 오가닉 코튼을 사용합니다. 아기의 민감한 피부에도 자극 없이 부드럽게 감싸줍니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 아코디언 아이템 2 -->
        <div class="sh_accordion-item" style="border-bottom: 1px solid #EAE2D5;">
            <button class="sh_accordion-header" onclick="shAccordionToggle(this)"
                    style="width: 100%; display: flex; justify-content: space-between; align-items: center;
                           padding: 20px 0; background: none; border: none; cursor: pointer; text-align: left;">
                <span style="font-size: 16px; font-weight: 600; color: #2d2420;">
                    특허 안전 잠금장치
                </span>
                <span class="sh_accordion-icon"
                      style="font-size: 22px; color: #A38068; font-weight: 300; transition: transform 0.3s ease;
                             flex-shrink: 0; width: 24px; text-align: center;">
                    +
                </span>
            </button>
            <div class="sh_accordion-body"
                 style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
                <div style="padding: 0 0 20px 0;">
                    <div style="display: flex; gap: 16px; align-items: flex-start;">
                        <div style="border-radius: 8px; overflow: hidden; flex-shrink: 0;">
                            <img src="https://dummyimage.com/120x120" alt="잠금장치"
                                 style="width: 120px; height: 120px; object-fit: cover; display: block;">
                        </div>
                        <div style="font-size: 14px; color: #666; line-height: 1.7;">
                            아기가 스스로 열 수 없는 특허 잠금 구조입니다. 수면 중 안전을 지켜줍니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 아코디언 아이템 3 -->
        <div class="sh_accordion-item" style="border-bottom: 1px solid #EAE2D5;">
            <button class="sh_accordion-header" onclick="shAccordionToggle(this)"
                    style="width: 100%; display: flex; justify-content: space-between; align-items: center;
                           padding: 20px 0; background: none; border: none; cursor: pointer; text-align: left;">
                <span style="font-size: 16px; font-weight: 600; color: #2d2420;">
                    통세탁 가능
                </span>
                <span class="sh_accordion-icon"
                      style="font-size: 22px; color: #A38068; font-weight: 300; transition: transform 0.3s ease;
                             flex-shrink: 0; width: 24px; text-align: center;">
                    +
                </span>
            </button>
            <div class="sh_accordion-body"
                 style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
                <div style="padding: 0 0 20px 0;">
                    <div style="display: flex; gap: 16px; align-items: flex-start;">
                        <div style="border-radius: 8px; overflow: hidden; flex-shrink: 0;">
                            <img src="https://dummyimage.com/120x120" alt="세탁"
                                 style="width: 120px; height: 120px; object-fit: cover; display: block;">
                        </div>
                        <div style="font-size: 14px; color: #666; line-height: 1.7;">
                            분리할 필요 없이 통째로 세탁기에 넣으면 됩니다. 형태 변형 없이 빠르게 건조됩니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 아코디언 아이템 4 -->
        <div class="sh_accordion-item" style="border-bottom: 1px solid #EAE2D5;">
            <button class="sh_accordion-header" onclick="shAccordionToggle(this)"
                    style="width: 100%; display: flex; justify-content: space-between; align-items: center;
                           padding: 20px 0; background: none; border: none; cursor: pointer; text-align: left;">
                <span style="font-size: 16px; font-weight: 600; color: #2d2420;">
                    사계절 온도 조절
                </span>
                <span class="sh_accordion-icon"
                      style="font-size: 22px; color: #A38068; font-weight: 300; transition: transform 0.3s ease;
                             flex-shrink: 0; width: 24px; text-align: center;">
                    +
                </span>
            </button>
            <div class="sh_accordion-body"
                 style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
                <div style="padding: 0 0 20px 0;">
                    <div style="display: flex; gap: 16px; align-items: flex-start;">
                        <div style="border-radius: 8px; overflow: hidden; flex-shrink: 0;">
                            <img src="https://dummyimage.com/120x120" alt="온도조절"
                                 style="width: 120px; height: 120px; object-fit: cover; display: block;">
                        </div>
                        <div style="font-size: 14px; color: #666; line-height: 1.7;">
                            적정 보온력과 통기성을 동시에 갖춰 사계절 모두 쾌적하게 사용할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

**추가 JS**:
```js
function shAccordionToggle(header) {
    var item = header.parentElement;
    var body = item.querySelector('.sh_accordion-body');
    var icon = header.querySelector('.sh_accordion-icon');
    var isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';

    if (isOpen) {
        body.style.maxHeight = '0px';
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    } else {
        body.style.maxHeight = body.scrollHeight + 'px';
        icon.textContent = '-';
        icon.style.transform = 'rotate(0deg)';
    }
}
```

---

### 3-6. Before/After 비교

**용도**: 사용 전/후 비교를 좌우 배치하여 효과를 시각적으로 전달
**특징**: Before는 어둡고 탁한 톤, After는 밝고 깨끗한 톤으로 대비

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        COMPARE
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
        썬데이허그 전과 후
    </div>

    <div class="sh_before-after" style="display: flex; gap: 12px; max-width: 600px; margin: 0 auto;">
        <!-- Before -->
        <div style="flex: 1; position: relative; border-radius: 12px; overflow: hidden;">
            <img src="https://dummyimage.com/280x360" alt="Before"
                 style="width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block;
                        filter: brightness(0.7) saturate(0.5);">
            <!-- 오버레이 -->
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.2);"></div>
            <!-- 라벨 -->
            <div style="position: absolute; top: 16px; left: 16px;
                        background: rgba(0,0,0,0.6); color: #fff;
                        padding: 6px 16px; border-radius: 20px;
                        font-size: 12px; font-weight: 700; letter-spacing: 1px;">
                BEFORE
            </div>
            <!-- 하단 텍스트 -->
            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;
                        background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);">
                <div style="color: #ddd; font-size: 14px; font-weight: 600; margin-bottom: 4px;">
                    뒤척이는 밤
                </div>
                <div style="color: #aaa; font-size: 12px; line-height: 1.5;">
                    이불 걷어차고<br>수시로 깨는 아기
                </div>
            </div>
        </div>

        <!-- After -->
        <div style="flex: 1; position: relative; border-radius: 12px; overflow: hidden;">
            <img src="https://dummyimage.com/280x360" alt="After"
                 style="width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block;">
            <!-- 라벨 -->
            <div style="position: absolute; top: 16px; left: 16px;
                        background: linear-gradient(135deg, #A38068, #8b6b56); color: #fff;
                        padding: 6px 16px; border-radius: 20px;
                        font-size: 12px; font-weight: 700; letter-spacing: 1px;">
                AFTER
            </div>
            <!-- 하단 텍스트 -->
            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;
                        background: linear-gradient(to top, rgba(163,128,104,0.7), transparent);">
                <div style="color: #fff; font-size: 14px; font-weight: 600; margin-bottom: 4px;">
                    편안한 숙면
                </div>
                <div style="color: rgba(255,255,255,0.9); font-size: 12px; line-height: 1.5;">
                    포근하게 감싸여<br>아침까지 푹 자는 아기
                </div>
            </div>
        </div>
    </div>

    <!-- 중앙 VS 뱃지 (선택 사항) -->
    <div style="text-align: center; margin-top: 24px;">
        <span style="display: inline-block; background: #2d2420; color: #fff;
                     padding: 8px 20px; border-radius: 20px; font-size: 13px; font-weight: 700;">
            썬데이허그의 차이
        </span>
    </div>
</div>
```

---

### 3-7. 체크리스트 스타일

**용도**: 제품 장점을 체크마크 아이콘 리스트로 깔끔하게 나열
**특징**: 체크마크 + 제목 + 짧은 설명, 카드 형태

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        CHECKLIST
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
        이 모든 것을 담았습니다
    </div>

    <div class="sh_checklist" style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px;">
        <!-- 체크 아이템 1 -->
        <div style="background: #fff; border-radius: 12px; padding: 20px 20px 20px 24px;
                    display: flex; align-items: flex-start; gap: 16px;
                    box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
                        background: linear-gradient(135deg, #A38068, #8b6b56);
                        display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div>
                <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">
                    OEKO-TEX 인증 원단
                </div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">
                    국제 유해물질 검증 기관의 인증을 받은 안전한 소재만 사용합니다.
                </div>
            </div>
        </div>

        <!-- 체크 아이템 2 -->
        <div style="background: #fff; border-radius: 12px; padding: 20px 20px 20px 24px;
                    display: flex; align-items: flex-start; gap: 16px;
                    box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
                        background: linear-gradient(135deg, #A38068, #8b6b56);
                        display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div>
                <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">
                    KC 안전 인증 완료
                </div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">
                    국내 안전 기준에 적합한 제품으로 안심하고 사용할 수 있습니다.
                </div>
            </div>
        </div>

        <!-- 체크 아이템 3 -->
        <div style="background: #fff; border-radius: 12px; padding: 20px 20px 20px 24px;
                    display: flex; align-items: flex-start; gap: 16px;
                    box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
                        background: linear-gradient(135deg, #A38068, #8b6b56);
                        display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div>
                <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">
                    통세탁 가능
                </div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">
                    분리 없이 세탁기에 통째로 세탁 가능하여 관리가 편리합니다.
                </div>
            </div>
        </div>

        <!-- 체크 아이템 4 -->
        <div style="background: #fff; border-radius: 12px; padding: 20px 20px 20px 24px;
                    display: flex; align-items: flex-start; gap: 16px;
                    box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
                        background: linear-gradient(135deg, #A38068, #8b6b56);
                        display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div>
                <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">
                    사계절 쾌적한 온도
                </div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">
                    적정 보온력과 통기성으로 사계절 내내 편안하게 사용 가능합니다.
                </div>
            </div>
        </div>

        <!-- 체크 아이템 5 -->
        <div style="background: #fff; border-radius: 12px; padding: 20px 20px 20px 24px;
                    display: flex; align-items: flex-start; gap: 16px;
                    box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
                        background: linear-gradient(135deg, #A38068, #8b6b56);
                        display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div>
                <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">
                    특허받은 안전 잠금
                </div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">
                    아기가 스스로 열 수 없는 안전 잠금 구조로 수면 중 보호합니다.
                </div>
            </div>
        </div>
    </div>
</div>
```

---

### 3-8. 번호 스텝 형식 (01, 02, 03...)

**용도**: 사용 방법이나 제품 특징을 순서대로 번호 스텝으로 안내
**특징**: 세로 연결선 + 번호 뱃지 + 제목 + 설명 + 이미지

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        HOW TO USE
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 40px; line-height: 1.4;">
        간단한 사용법
    </div>

    <div class="sh_steps" style="max-width: 600px; margin: 0 auto; position: relative; padding-left: 40px;">
        <!-- 세로 연결선 -->
        <div style="position: absolute; left: 18px; top: 20px; bottom: 20px; width: 2px;
                    background: linear-gradient(to bottom, #A38068, #EAE2D5);"></div>

        <!-- 스텝 1 -->
        <div class="sh_step-item" style="position: relative; margin-bottom: 40px;">
            <!-- 번호 뱃지 -->
            <div style="position: absolute; left: -40px; top: 0; width: 38px; height: 38px;
                        border-radius: 50%; background: linear-gradient(135deg, #A38068, #8b6b56);
                        display: flex; align-items: center; justify-content: center;
                        color: #fff; font-size: 14px; font-weight: 700; z-index: 1;
                        box-shadow: 0 2px 8px rgba(163,128,104,0.3);">
                01
            </div>
            <div style="padding-top: 2px;">
                <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">
                    슬리핑백을 펼쳐주세요
                </div>
                <div style="font-size: 14px; color: #888; line-height: 1.7; margin-bottom: 16px;">
                    지퍼를 완전히 열고 슬리핑백을 평평하게 펼쳐놓습니다.
                </div>
                <div style="border-radius: 10px; overflow: hidden;">
                    <img src="https://dummyimage.com/520x300" alt="스텝 1"
                         style="width: 100%; display: block;">
                </div>
            </div>
        </div>

        <!-- 스텝 2 -->
        <div class="sh_step-item" style="position: relative; margin-bottom: 40px;">
            <div style="position: absolute; left: -40px; top: 0; width: 38px; height: 38px;
                        border-radius: 50%; background: linear-gradient(135deg, #A38068, #8b6b56);
                        display: flex; align-items: center; justify-content: center;
                        color: #fff; font-size: 14px; font-weight: 700; z-index: 1;
                        box-shadow: 0 2px 8px rgba(163,128,104,0.3);">
                02
            </div>
            <div style="padding-top: 2px;">
                <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">
                    아기를 눕혀주세요
                </div>
                <div style="font-size: 14px; color: #888; line-height: 1.7; margin-bottom: 16px;">
                    아기를 슬리핑백 위에 눕히고 양팔을 소매에 넣어줍니다.
                </div>
                <div style="border-radius: 10px; overflow: hidden;">
                    <img src="https://dummyimage.com/520x300" alt="스텝 2"
                         style="width: 100%; display: block;">
                </div>
            </div>
        </div>

        <!-- 스텝 3 -->
        <div class="sh_step-item" style="position: relative;">
            <div style="position: absolute; left: -40px; top: 0; width: 38px; height: 38px;
                        border-radius: 50%; background: linear-gradient(135deg, #A38068, #8b6b56);
                        display: flex; align-items: center; justify-content: center;
                        color: #fff; font-size: 14px; font-weight: 700; z-index: 1;
                        box-shadow: 0 2px 8px rgba(163,128,104,0.3);">
                03
            </div>
            <div style="padding-top: 2px;">
                <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">
                    지퍼를 올려주세요
                </div>
                <div style="font-size: 14px; color: #888; line-height: 1.7; margin-bottom: 16px;">
                    아래에서 위로 지퍼를 올려 잠가주세요. 안전 잠금이 자동으로 작동합니다.
                </div>
                <div style="border-radius: 10px; overflow: hidden;">
                    <img src="https://dummyimage.com/520x300" alt="스텝 3"
                         style="width: 100%; display: block;">
                </div>
            </div>
        </div>
    </div>
</div>
```

---

## 카테고리 4: 신뢰/증거 섹션

---

### 4-1. 리뷰 캐러셀

**용도**: 고객 리뷰를 가로 스크롤 카드로 보여주는 캐러셀 섹션
**특징**: 별점 + 이름 + 리뷰 텍스트, 가로 스크롤 스냅

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 0;">
    <div style="padding: 0 20px;">
        <div class="sub_title font-w600 txtcenter color_dark_brown"
             style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
            REVIEWS
        </div>
        <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
            실제 사용 후기
        </div>
    </div>

    <div class="sh_review-carousel"
         style="display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory;
                padding: 0 20px 20px 20px; -webkit-overflow-scrolling: touch;">

        <!-- 리뷰 카드 1 -->
        <div style="min-width: 280px; max-width: 280px; scroll-snap-align: start;
                    background: #fff; border-radius: 12px; padding: 24px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); flex-shrink: 0;">
            <!-- 별점 -->
            <div style="margin-bottom: 12px; color: #ff8605; font-size: 16px; letter-spacing: 2px;">
                &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <!-- 리뷰 텍스트 -->
            <div style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 16px;
                        display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
                아기가 정말 잘 자요! 이불 걷어차는 걱정이 사라졌어요. 소재도 부드럽고 세탁해도 형태가 그대로라 너무 만족합니다.
            </div>
            <!-- 작성자 -->
            <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid #f0f0f0; padding-top: 14px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background: #EAE2D5;
                            display: flex; align-items: center; justify-content: center;
                            font-size: 13px; font-weight: 600; color: #A38068;">
                    김
                </div>
                <div>
                    <div style="font-size: 13px; font-weight: 600; color: #2d2420;">김**</div>
                    <div style="font-size: 11px; color: #aaa;">2025.01.15</div>
                </div>
            </div>
        </div>

        <!-- 리뷰 카드 2 -->
        <div style="min-width: 280px; max-width: 280px; scroll-snap-align: start;
                    background: #fff; border-radius: 12px; padding: 24px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="margin-bottom: 12px; color: #ff8605; font-size: 16px; letter-spacing: 2px;">
                &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <div style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 16px;
                        display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
                둘째까지 잘 쓰고 있어요. 통세탁 가능한 점이 진짜 편하고, 아기가 편안하게 잠드는 모습을 보니 사길 잘했다 싶습니다.
            </div>
            <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid #f0f0f0; padding-top: 14px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background: #EAE2D5;
                            display: flex; align-items: center; justify-content: center;
                            font-size: 13px; font-weight: 600; color: #A38068;">
                    이
                </div>
                <div>
                    <div style="font-size: 13px; font-weight: 600; color: #2d2420;">이**</div>
                    <div style="font-size: 11px; color: #aaa;">2025.01.10</div>
                </div>
            </div>
        </div>

        <!-- 리뷰 카드 3 -->
        <div style="min-width: 280px; max-width: 280px; scroll-snap-align: start;
                    background: #fff; border-radius: 12px; padding: 24px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="margin-bottom: 12px; color: #ff8605; font-size: 16px; letter-spacing: 2px;">
                &#9733;&#9733;&#9733;&#9733;&#9734;
            </div>
            <div style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 16px;
                        display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
                선물로 받았는데 소재가 정말 좋아요. 아기 피부에 자극이 없고 디자인도 예뻐서 외출할 때도 사용하고 있어요.
            </div>
            <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid #f0f0f0; padding-top: 14px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background: #EAE2D5;
                            display: flex; align-items: center; justify-content: center;
                            font-size: 13px; font-weight: 600; color: #A38068;">
                    박
                </div>
                <div>
                    <div style="font-size: 13px; font-weight: 600; color: #2d2420;">박**</div>
                    <div style="font-size: 11px; color: #aaa;">2025.01.05</div>
                </div>
            </div>
        </div>

        <!-- 리뷰 카드 4 -->
        <div style="min-width: 280px; max-width: 280px; scroll-snap-align: start;
                    background: #fff; border-radius: 12px; padding: 24px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="margin-bottom: 12px; color: #ff8605; font-size: 16px; letter-spacing: 2px;">
                &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <div style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 16px;
                        display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
                세 번째 재구매입니다. 성장에 맞춰 사이즈업하며 계속 쓰고 있어요. 아기 수면에 정말 도움이 됩니다.
            </div>
            <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid #f0f0f0; padding-top: 14px;">
                <div style="width: 36px; height: 36px; border-radius: 50%; background: #EAE2D5;
                            display: flex; align-items: center; justify-content: center;
                            font-size: 13px; font-weight: 600; color: #A38068;">
                    정
                </div>
                <div>
                    <div style="font-size: 13px; font-weight: 600; color: #2d2420;">정**</div>
                    <div style="font-size: 11px; color: #aaa;">2024.12.28</div>
                </div>
            </div>
        </div>
    </div>
</div>
```

**추가 CSS**:
```css
.sh_review-carousel::-webkit-scrollbar {
    display: none;
}
.sh_review-carousel {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
```

---

### 4-2. 별점 + 리뷰 요약 카드

**용도**: 평균 별점과 별점 분포를 시각적으로 요약하여 보여주는 카드
**특징**: 큰 평균 점수 + 별점 바 차트 (5점~1점)

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        CUSTOMER RATING
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
        고객 만족도
    </div>

    <div style="max-width: 480px; margin: 0 auto; background: #FFFBF5; border-radius: 16px;
                padding: 32px 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.04);">
        <div style="display: flex; align-items: center; gap: 28px;">
            <!-- 왼쪽: 평균 점수 -->
            <div style="text-align: center; flex-shrink: 0; min-width: 100px;">
                <div style="font-size: 48px; font-weight: 800; color: #2d2420; line-height: 1;">
                    4.8
                </div>
                <div style="color: #ff8605; font-size: 18px; letter-spacing: 2px; margin: 8px 0;">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div style="font-size: 13px; color: #999;">
                    3,847건의 리뷰
                </div>
            </div>

            <!-- 오른쪽: 바 차트 -->
            <div style="flex: 1;">
                <!-- 5점 -->
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-size: 12px; color: #888; width: 28px; text-align: right;">5점</span>
                    <div style="flex: 1; height: 8px; background: #EAE2D5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 85%; height: 100%; background: #A38068; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 32px;">85%</span>
                </div>
                <!-- 4점 -->
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-size: 12px; color: #888; width: 28px; text-align: right;">4점</span>
                    <div style="flex: 1; height: 8px; background: #EAE2D5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 10%; height: 100%; background: #A38068; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 32px;">10%</span>
                </div>
                <!-- 3점 -->
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-size: 12px; color: #888; width: 28px; text-align: right;">3점</span>
                    <div style="flex: 1; height: 8px; background: #EAE2D5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 3%; height: 100%; background: #A38068; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 32px;">3%</span>
                </div>
                <!-- 2점 -->
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-size: 12px; color: #888; width: 28px; text-align: right;">2점</span>
                    <div style="flex: 1; height: 8px; background: #EAE2D5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 1%; height: 100%; background: #A38068; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 32px;">1%</span>
                </div>
                <!-- 1점 -->
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 12px; color: #888; width: 28px; text-align: right;">1점</span>
                    <div style="flex: 1; height: 8px; background: #EAE2D5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 1%; height: 100%; background: #A38068; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 32px;">1%</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

### 4-3. 인증마크 가로 배열

**용도**: 제품의 각종 인증 마크/로고를 가로로 나열하여 신뢰도 전달
**특징**: 그레이스케일 기본, 호버 시 컬러 전환 효과

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        CERTIFICATIONS
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
        안전 인증 현황
    </div>

    <div class="sh_cert-row"
         style="display: flex; justify-content: center; align-items: center; gap: 24px; flex-wrap: wrap;
                max-width: 600px; margin: 0 auto;">
        <!-- 인증마크 1 -->
        <div class="sh_cert-item"
             style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;
                    background: #f9f9f9; border-radius: 12px; padding: 16px;
                    transition: all 0.3s ease; cursor: default;">
            <img src="https://dummyimage.com/64x64" alt="KC 인증"
                 style="max-width: 64px; max-height: 64px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.6;
                        transition: all 0.3s ease;">
        </div>
        <!-- 인증마크 2 -->
        <div class="sh_cert-item"
             style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;
                    background: #f9f9f9; border-radius: 12px; padding: 16px;
                    transition: all 0.3s ease; cursor: default;">
            <img src="https://dummyimage.com/64x64" alt="OEKO-TEX"
                 style="max-width: 64px; max-height: 64px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.6;
                        transition: all 0.3s ease;">
        </div>
        <!-- 인증마크 3 -->
        <div class="sh_cert-item"
             style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;
                    background: #f9f9f9; border-radius: 12px; padding: 16px;
                    transition: all 0.3s ease; cursor: default;">
            <img src="https://dummyimage.com/64x64" alt="ISO 인증"
                 style="max-width: 64px; max-height: 64px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.6;
                        transition: all 0.3s ease;">
        </div>
        <!-- 인증마크 4 -->
        <div class="sh_cert-item"
             style="width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;
                    background: #f9f9f9; border-radius: 12px; padding: 16px;
                    transition: all 0.3s ease; cursor: default;">
            <img src="https://dummyimage.com/64x64" alt="친환경 인증"
                 style="max-width: 64px; max-height: 64px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.6;
                        transition: all 0.3s ease;">
        </div>
    </div>

    <!-- 인증마크 라벨 -->
    <div style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap;
                max-width: 600px; margin: 16px auto 0;">
        <div style="width: 100px; text-align: center; font-size: 11px; color: #999;">KC 안전인증</div>
        <div style="width: 100px; text-align: center; font-size: 11px; color: #999;">OEKO-TEX</div>
        <div style="width: 100px; text-align: center; font-size: 11px; color: #999;">ISO 9001</div>
        <div style="width: 100px; text-align: center; font-size: 11px; color: #999;">친환경 인증</div>
    </div>
</div>
```

**추가 CSS**:
```css
.sh_cert-item:hover {
    background: #fff !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.sh_cert-item:hover img {
    filter: grayscale(0%) !important;
    opacity: 1 !important;
}
```

---

### 4-4. 전문가 추천 프로필

**용도**: 전문가(소아과 의사, 수면 전문가 등)의 추천 프로필과 코멘트
**특징**: 전문가 사진 + 자격 정보 + 인용문, 프로페셔널 카드 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-1" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        EXPERT RECOMMEND
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
        전문가가 추천합니다
    </div>

    <div class="sh_expert-card"
         style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 16px;
                padding: 32px 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <!-- 프로필 영역 -->
        <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 24px;">
            <div style="width: 72px; height: 72px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
                        border: 3px solid #EAE2D5;">
                <img src="https://dummyimage.com/72x72" alt="전문가 프로필"
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div>
                <div style="font-size: 17px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">
                    김수연 원장
                </div>
                <div style="font-size: 13px; color: #A38068; font-weight: 500; margin-bottom: 2px;">
                    소아수면 전문의
                </div>
                <div style="font-size: 12px; color: #aaa; line-height: 1.4;">
                    서울대학교 의과대학 졸업<br>아이 수면 클리닉 대표
                </div>
            </div>
        </div>

        <!-- 구분선 -->
        <div style="height: 1px; background: #EAE2D5; margin-bottom: 24px;"></div>

        <!-- 인용문 -->
        <div style="position: relative; padding-left: 20px;">
            <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
                        background: linear-gradient(to bottom, #A38068, #EAE2D5); border-radius: 2px;"></div>
            <div style="font-size: 15px; color: #444; line-height: 1.8; font-style: italic;">
                "영유아기의 수면 환경은 성장 발달에 직접적인 영향을 줍니다.
                슬리핑백은 아기의 <span style="color: #A38068; font-weight: 600;">체온 유지와 안정적인 수면</span>에
                효과적이며, 이불을 걷어차는 습관에 대한 안전한 대안입니다."
            </div>
        </div>
    </div>
</div>
```

---

### 4-5. 미디어/언론 로고 섹션

**용도**: "As Seen In" 스타일로 언론/미디어 노출 이력을 로고로 보여주는 섹션
**특징**: 깔끔하고 뮤트된 스타일, 그리드 배치

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 50px 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 8px;">
            <div style="flex: 1; max-width: 60px; height: 1px; background: #ddd;"></div>
            <span style="font-size: 13px; font-weight: 600; color: #999; letter-spacing: 3px;">
                AS SEEN IN
            </span>
            <div style="flex: 1; max-width: 60px; height: 1px; background: #ddd;"></div>
        </div>
        <div style="font-size: 14px; color: #bbb; margin-top: 4px;">
            다양한 미디어에서 소개된 썬데이허그
        </div>
    </div>

    <div class="sh_media-logos"
         style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; align-items: center;
                max-width: 480px; margin: 0 auto;">
        <!-- 미디어 로고 1 -->
        <div style="display: flex; align-items: center; justify-content: center;
                    height: 60px; padding: 10px;">
            <img src="https://dummyimage.com/120x40" alt="미디어 1"
                 style="max-width: 100%; max-height: 36px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.4;">
        </div>
        <!-- 미디어 로고 2 -->
        <div style="display: flex; align-items: center; justify-content: center;
                    height: 60px; padding: 10px;">
            <img src="https://dummyimage.com/120x40" alt="미디어 2"
                 style="max-width: 100%; max-height: 36px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.4;">
        </div>
        <!-- 미디어 로고 3 -->
        <div style="display: flex; align-items: center; justify-content: center;
                    height: 60px; padding: 10px;">
            <img src="https://dummyimage.com/120x40" alt="미디어 3"
                 style="max-width: 100%; max-height: 36px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.4;">
        </div>
        <!-- 미디어 로고 4 -->
        <div style="display: flex; align-items: center; justify-content: center;
                    height: 60px; padding: 10px;">
            <img src="https://dummyimage.com/120x40" alt="미디어 4"
                 style="max-width: 100%; max-height: 36px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.4;">
        </div>
        <!-- 미디어 로고 5 -->
        <div style="display: flex; align-items: center; justify-content: center;
                    height: 60px; padding: 10px;">
            <img src="https://dummyimage.com/120x40" alt="미디어 5"
                 style="max-width: 100%; max-height: 36px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.4;">
        </div>
        <!-- 미디어 로고 6 -->
        <div style="display: flex; align-items: center; justify-content: center;
                    height: 60px; padding: 10px;">
            <img src="https://dummyimage.com/120x40" alt="미디어 6"
                 style="max-width: 100%; max-height: 36px; object-fit: contain;
                        filter: grayscale(100%); opacity: 0.4;">
        </div>
    </div>
</div>
```

---

### 4-6. 수상 내역 배지

**용도**: 제품 수상 이력을 배지 형태 그리드로 전시
**특징**: 연도 + 수상명 + 주관 기관, 깔끔한 배지 카드

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">
        AWARDS
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px; line-height: 1.4;">
        수상 내역
    </div>

    <div class="sh_awards-grid"
         style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
                max-width: 500px; margin: 0 auto;">
        <!-- 수상 배지 1 -->
        <div style="background: #fff; border-radius: 12px; padding: 24px 16px; text-align: center;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.04); border: 1px solid #f0ece6;">
            <div style="width: 56px; height: 56px; border-radius: 50%; margin: 0 auto 14px;
                        background: linear-gradient(135deg, #A38068, #C6B198);
                        display: flex; align-items: center; justify-content: center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
            </div>
            <div style="font-size: 12px; color: #A38068; font-weight: 600; margin-bottom: 6px;">
                2024
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px; line-height: 1.3;">
                맘앤베이비<br>대상 수상
            </div>
            <div style="font-size: 11px; color: #aaa;">
                한국유아용품협회
            </div>
        </div>

        <!-- 수상 배지 2 -->
        <div style="background: #fff; border-radius: 12px; padding: 24px 16px; text-align: center;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.04); border: 1px solid #f0ece6;">
            <div style="width: 56px; height: 56px; border-radius: 50%; margin: 0 auto 14px;
                        background: linear-gradient(135deg, #A38068, #C6B198);
                        display: flex; align-items: center; justify-content: center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
            </div>
            <div style="font-size: 12px; color: #A38068; font-weight: 600; margin-bottom: 6px;">
                2024
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px; line-height: 1.3;">
                올해의<br>육아용품
            </div>
            <div style="font-size: 11px; color: #aaa;">
                대한민국 브랜드대상
            </div>
        </div>

        <!-- 수상 배지 3 -->
        <div style="background: #fff; border-radius: 12px; padding: 24px 16px; text-align: center;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.04); border: 1px solid #f0ece6;">
            <div style="width: 56px; height: 56px; border-radius: 50%; margin: 0 auto 14px;
                        background: linear-gradient(135deg, #A38068, #C6B198);
                        display: flex; align-items: center; justify-content: center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
            </div>
            <div style="font-size: 12px; color: #A38068; font-weight: 600; margin-bottom: 6px;">
                2023
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px; line-height: 1.3;">
                소비자 선정<br>최고의 브랜드
            </div>
            <div style="font-size: 11px; color: #aaa;">
                한국소비자포럼
            </div>
        </div>

        <!-- 수상 배지 4 -->
        <div style="background: #fff; border-radius: 12px; padding: 24px 16px; text-align: center;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.04); border: 1px solid #f0ece6;">
            <div style="width: 56px; height: 56px; border-radius: 50%; margin: 0 auto 14px;
                        background: linear-gradient(135deg, #A38068, #C6B198);
                        display: flex; align-items: center; justify-content: center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
            </div>
            <div style="font-size: 12px; color: #A38068; font-weight: 600; margin-bottom: 6px;">
                2023
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px; line-height: 1.3;">
                친환경<br>우수제품
            </div>
            <div style="font-size: 11px; color: #aaa;">
                환경부
            </div>
        </div>
    </div>
</div>
```

---

### 4-7. 고객 수 카운터

**용도**: 누적 고객 수, 판매 수 등을 애니메이션 카운터로 임팩트 있게 전달
**특징**: 큰 숫자 애니메이션 + "10,000+ 맘들의 선택" 스타일

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px; padding: 60px 20px;">
    <div style="text-align: center; margin-bottom: 40px;">
        <div class="feature_title font-w700 txtcenter" style="line-height: 1.4;">
            숫자로 증명합니다
        </div>
    </div>

    <div class="sh_counter-grid"
         style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
                max-width: 480px; margin: 0 auto;">
        <!-- 카운터 1 -->
        <div style="text-align: center; padding: 24px 12px; background: #FFFBF5; border-radius: 12px;">
            <div class="sh_counter-number" data-target="38000"
                 style="font-size: 36px; font-weight: 800; color: #A38068; line-height: 1; margin-bottom: 6px;">
                0
            </div>
            <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 4px;">
                +
            </div>
            <div style="font-size: 13px; color: #888;">
                누적 판매량
            </div>
        </div>

        <!-- 카운터 2 -->
        <div style="text-align: center; padding: 24px 12px; background: #FFFBF5; border-radius: 12px;">
            <div class="sh_counter-number" data-target="4.8"
                 style="font-size: 36px; font-weight: 800; color: #A38068; line-height: 1; margin-bottom: 6px;">
                0
            </div>
            <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 4px;">
                / 5.0
            </div>
            <div style="font-size: 13px; color: #888;">
                평균 별점
            </div>
        </div>

        <!-- 카운터 3 -->
        <div style="text-align: center; padding: 24px 12px; background: #FFFBF5; border-radius: 12px;">
            <div class="sh_counter-number" data-target="96"
                 style="font-size: 36px; font-weight: 800; color: #A38068; line-height: 1; margin-bottom: 6px;">
                0
            </div>
            <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 4px;">
                %
            </div>
            <div style="font-size: 13px; color: #888;">
                재구매율
            </div>
        </div>

        <!-- 카운터 4 -->
        <div style="text-align: center; padding: 24px 12px; background: #FFFBF5; border-radius: 12px;">
            <div class="sh_counter-number" data-target="10000"
                 style="font-size: 36px; font-weight: 800; color: #A38068; line-height: 1; margin-bottom: 6px;">
                0
            </div>
            <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 4px;">
                +
            </div>
            <div style="font-size: 13px; color: #888;">
                맘들의 선택
            </div>
        </div>
    </div>

    <!-- 하단 메시지 -->
    <div style="text-align: center; margin-top: 32px;">
        <span style="display: inline-block; background: #2d2420; color: #fff;
                     padding: 10px 28px; border-radius: 25px; font-size: 14px; font-weight: 600;">
            10,000+ 맘들이 선택한 썬데이허그
        </span>
    </div>
</div>
```

**추가 JS**:
```js
(function() {
    function shAnimateCounters() {
        var counters = document.querySelectorAll('.sh_counter-number');
        counters.forEach(function(counter) {
            if (counter.dataset.shDone) return;
            var rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                counter.dataset.shDone = '1';
                var target = parseFloat(counter.getAttribute('data-target'));
                var isDecimal = target % 1 !== 0;
                var duration = 2000;
                var startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = Math.min((timestamp - startTime) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    var current = eased * target;

                    if (isDecimal) {
                        counter.textContent = current.toFixed(1);
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString();
                    }

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        if (isDecimal) {
                            counter.textContent = target.toFixed(1);
                        } else {
                            counter.textContent = target.toLocaleString();
                        }
                    }
                }
                requestAnimationFrame(step);
            }
        });
    }

    window.addEventListener('scroll', shAnimateCounters);
    window.addEventListener('load', shAnimateCounters);
})();
```
