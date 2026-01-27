# 섹션 템플릿: CATEGORY 7 — FAQ/정보 섹션

---

### 7-1. 기본 아코디언 FAQ

**용도**: 클릭하여 열고 닫는 기본 FAQ 섹션
**특징**: 화살표 회전 애니메이션, border-bottom 구분선, 부드러운 전환

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px;">
  <div class="sub_title font-w700 txtleft">
    <span class="desc_btn" style="background: #000000;">FAQ</span>
  </div>
  <div class="title font-w700 txtleft" style="font-size: 28px; margin: 15px 0 30px 0;">
    자주 묻는 질문
  </div>
  <div style="max-width: 100%; margin: 0; text-align: left;">

    <!-- FAQ Item 1 -->
    <div class="sh_faq-item" style="border-bottom: 1px solid #eee;">
      <div class="sh_faq-question" onclick="this.parentElement.classList.toggle('sh_faq-open')"
           style="display: flex; justify-content: space-between; align-items: center; padding: 20px 15px; cursor: pointer;">
        <span style="flex: 1; text-align: left; font-weight: 600; font-size: 15px; color: #2d2420;">
          Q. 썬데이허그 제품은 신생아도 사용할 수 있나요?
        </span>
        <span class="sh_faq-arrow" style="font-size: 12px; color: #999; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease;">
        <div style="padding: 0 15px 20px 15px; color: #666; line-height: 1.8; font-size: 14px;">
          네, 썬데이허그의 모든 제품은 신생아부터 사용 가능합니다. KC 안전인증을 완료했으며, 아기 피부에 자극 없는 오가닉 코튼 원단을 사용합니다.
        </div>
      </div>
    </div>

    <!-- FAQ Item 2 -->
    <div class="sh_faq-item" style="border-bottom: 1px solid #eee;">
      <div class="sh_faq-question" onclick="this.parentElement.classList.toggle('sh_faq-open')"
           style="display: flex; justify-content: space-between; align-items: center; padding: 20px 15px; cursor: pointer;">
        <span style="flex: 1; text-align: left; font-weight: 600; font-size: 15px; color: #2d2420;">
          Q. 세탁은 어떻게 해야 하나요?
        </span>
        <span class="sh_faq-arrow" style="font-size: 12px; color: #999; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease;">
        <div style="padding: 0 15px 20px 15px; color: #666; line-height: 1.8; font-size: 14px;">
          중성세제를 사용하여 30도 이하 미온수에서 손세탁 또는 세탁망에 넣어 약한 세탁을 권장합니다. 건조기 사용은 피해주세요.
        </div>
      </div>
    </div>

    <!-- FAQ Item 3 -->
    <div class="sh_faq-item" style="border-bottom: 1px solid #eee;">
      <div class="sh_faq-question" onclick="this.parentElement.classList.toggle('sh_faq-open')"
           style="display: flex; justify-content: space-between; align-items: center; padding: 20px 15px; cursor: pointer;">
        <span style="flex: 1; text-align: left; font-weight: 600; font-size: 15px; color: #2d2420;">
          Q. 교환/반품은 어떻게 하나요?
        </span>
        <span class="sh_faq-arrow" style="font-size: 12px; color: #999; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease;">
        <div style="padding: 0 15px 20px 15px; color: #666; line-height: 1.8; font-size: 14px;">
          수령일로부터 7일 이내 교환/반품이 가능합니다. 단, 사용 흔적이 있거나 택이 제거된 경우 반품이 불가합니다.
        </div>
      </div>
    </div>

    <!-- FAQ Item 4 -->
    <div class="sh_faq-item" style="border-bottom: 1px solid #eee;">
      <div class="sh_faq-question" onclick="this.parentElement.classList.toggle('sh_faq-open')"
           style="display: flex; justify-content: space-between; align-items: center; padding: 20px 15px; cursor: pointer;">
        <span style="flex: 1; text-align: left; font-weight: 600; font-size: 15px; color: #2d2420;">
          Q. 사이즈 선택은 어떻게 하나요?
        </span>
        <span class="sh_faq-arrow" style="font-size: 12px; color: #999; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease;">
        <div style="padding: 0 15px 20px 15px; color: #666; line-height: 1.8; font-size: 14px;">
          상세페이지의 사이즈 가이드를 참고해 주세요. 아기의 키와 몸무게를 기준으로 적합한 사이즈를 선택하시면 됩니다.
        </div>
      </div>
    </div>

  </div>
</div>
```

**추가 CSS**:
```css
.sh_faq-open .sh_faq-arrow {
  transform: rotate(180deg) !important;
}
.sh_faq-open .sh_faq-answer {
  max-height: 300px !important;
}
.sh_faq-question:hover {
  background: #faf8f6;
}
```

---

### 7-2. 카드형 FAQ

**용도**: 개별 카드 형태의 FAQ로 시각적 분리감 제공
**특징**: 카드 그림자, 라운드 코너, 클릭 시 확장

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 0 15px;">
  <div class="title font-w700 txtcenter" style="font-size: 26px; margin-bottom: 30px;">
    자주 묻는 질문
  </div>

  <!-- Card FAQ Item 1 -->
  <div class="sh_faq-card" style="background: #fff; border-radius: 12px; margin-bottom: 12px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.06); overflow: hidden;">
    <div onclick="this.parentElement.classList.toggle('sh_faq-card-open')"
         style="display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; cursor: pointer;">
      <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
        <span style="display: inline-flex; align-items: center; justify-content: center;
                     width: 28px; height: 28px; background: linear-gradient(135deg, #a38068, #8b6b56);
                     color: #fff; border-radius: 50%; font-size: 12px; font-weight: 700; flex-shrink: 0;">Q</span>
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">
          썬데이허그 슬리핑백은 사계절용인가요?
        </span>
      </div>
      <span class="sh_faq-card-arrow" style="font-size: 11px; color: #a38068; transition: transform 0.3s ease;
                   display: inline-block; flex-shrink: 0; margin-left: 10px;">&#9660;</span>
    </div>
    <div class="sh_faq-card-body" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
      <div style="padding: 0 20px 20px 60px; color: #666; line-height: 1.8; font-size: 14px; border-top: 1px solid #f0ebe6;">
        <div style="padding-top: 15px;">
          썬데이허그 슬리핑백은 시즌별 원단 두께를 다르게 제작합니다. 여름용(0.5tog), 사계절용(1.0tog), 겨울용(2.5tog)으로 구분되어 있으니 계절에 맞는 제품을 선택해 주세요.
        </div>
      </div>
    </div>
  </div>

  <!-- Card FAQ Item 2 -->
  <div class="sh_faq-card" style="background: #fff; border-radius: 12px; margin-bottom: 12px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.06); overflow: hidden;">
    <div onclick="this.parentElement.classList.toggle('sh_faq-card-open')"
         style="display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; cursor: pointer;">
      <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
        <span style="display: inline-flex; align-items: center; justify-content: center;
                     width: 28px; height: 28px; background: linear-gradient(135deg, #a38068, #8b6b56);
                     color: #fff; border-radius: 50%; font-size: 12px; font-weight: 700; flex-shrink: 0;">Q</span>
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">
          배송은 얼마나 걸리나요?
        </span>
      </div>
      <span class="sh_faq-card-arrow" style="font-size: 11px; color: #a38068; transition: transform 0.3s ease;
                   display: inline-block; flex-shrink: 0; margin-left: 10px;">&#9660;</span>
    </div>
    <div class="sh_faq-card-body" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
      <div style="padding: 0 20px 20px 60px; color: #666; line-height: 1.8; font-size: 14px; border-top: 1px solid #f0ebe6;">
        <div style="padding-top: 15px;">
          평일 오후 2시 이전 주문 시 당일 출고되며, 출고 후 1~2일 내 수령 가능합니다. 주말/공휴일 주문은 다음 영업일에 출고됩니다.
        </div>
      </div>
    </div>
  </div>

  <!-- Card FAQ Item 3 -->
  <div class="sh_faq-card" style="background: #fff; border-radius: 12px; margin-bottom: 12px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.06); overflow: hidden;">
    <div onclick="this.parentElement.classList.toggle('sh_faq-card-open')"
         style="display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; cursor: pointer;">
      <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
        <span style="display: inline-flex; align-items: center; justify-content: center;
                     width: 28px; height: 28px; background: linear-gradient(135deg, #a38068, #8b6b56);
                     color: #fff; border-radius: 50%; font-size: 12px; font-weight: 700; flex-shrink: 0;">Q</span>
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">
          선물포장이 가능한가요?
        </span>
      </div>
      <span class="sh_faq-card-arrow" style="font-size: 11px; color: #a38068; transition: transform 0.3s ease;
                   display: inline-block; flex-shrink: 0; margin-left: 10px;">&#9660;</span>
    </div>
    <div class="sh_faq-card-body" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
      <div style="padding: 0 20px 20px 60px; color: #666; line-height: 1.8; font-size: 14px; border-top: 1px solid #f0ebe6;">
        <div style="padding-top: 15px;">
          네, 주문 시 선물포장 옵션을 선택하시면 썬데이허그 전용 선물박스에 포장하여 발송해 드립니다. 선물포장 비용은 3,000원입니다.
        </div>
      </div>
    </div>
  </div>

</div>
```

**추가 CSS**:
```css
.sh_faq-card-open .sh_faq-card-arrow {
  transform: rotate(180deg) !important;
}
.sh_faq-card-open .sh_faq-card-body {
  max-height: 300px !important;
}
```

---

### 7-3. 아이콘 + FAQ

**용도**: 카테고리 아이콘으로 시각적 그룹핑된 FAQ
**특징**: 질문 앞 카테고리 아이콘, 주제별 시각 구분

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 15px;">
  <div class="title font-w700 txtcenter" style="font-size: 26px; margin-bottom: 10px;">
    궁금한 점을 해결해 드려요
  </div>
  <div class="desc_small txtcenter" style="color: #888; margin-bottom: 35px; font-size: 14px;">
    카테고리별로 자주 묻는 질문을 모았습니다
  </div>

  <!-- FAQ with Icon - 제품 관련 -->
  <div class="sh_icon-faq-item" style="border-bottom: 1px solid #f0ebe6; padding: 18px 0;">
    <div onclick="this.parentElement.classList.toggle('sh_icon-faq-open')"
         style="display: flex; align-items: center; gap: 14px; cursor: pointer;">
      <div style="width: 40px; height: 40px; background: #FFFBF5; border-radius: 10px;
                  display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a38068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>
      <div style="flex: 1;">
        <div style="font-size: 11px; color: #a38068; font-weight: 600; letter-spacing: 1px; margin-bottom: 3px;">제품</div>
        <div style="font-size: 14px; font-weight: 600; color: #2d2420;">오가닉 코튼 인증을 받은 제품인가요?</div>
      </div>
      <span class="sh_icon-faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
    </div>
    <div class="sh_icon-faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
      <div style="padding: 12px 0 5px 54px; color: #666; line-height: 1.8; font-size: 14px;">
        네, 썬데이허그의 모든 원단은 GOTS 인증 오가닉 코튼을 사용합니다. 아기 피부에 직접 닿는 안감은 100% 오가닉 코튼으로 제작됩니다.
      </div>
    </div>
  </div>

  <!-- FAQ with Icon - 세탁 관련 -->
  <div class="sh_icon-faq-item" style="border-bottom: 1px solid #f0ebe6; padding: 18px 0;">
    <div onclick="this.parentElement.classList.toggle('sh_icon-faq-open')"
         style="display: flex; align-items: center; gap: 14px; cursor: pointer;">
      <div style="width: 40px; height: 40px; background: #EAE2D5; border-radius: 10px;
                  display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b6b56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 6l3 12h12l3-12"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      </div>
      <div style="flex: 1;">
        <div style="font-size: 11px; color: #8b6b56; font-weight: 600; letter-spacing: 1px; margin-bottom: 3px;">세탁</div>
        <div style="font-size: 14px; font-weight: 600; color: #2d2420;">드럼세탁기로 세탁해도 되나요?</div>
      </div>
      <span class="sh_icon-faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
    </div>
    <div class="sh_icon-faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
      <div style="padding: 12px 0 5px 54px; color: #666; line-height: 1.8; font-size: 14px;">
        세탁망에 넣어 울/섬세 코스로 세탁 가능합니다. 30도 이하 미온수, 중성세제 사용을 권장합니다.
      </div>
    </div>
  </div>

  <!-- FAQ with Icon - 배송 관련 -->
  <div class="sh_icon-faq-item" style="border-bottom: 1px solid #f0ebe6; padding: 18px 0;">
    <div onclick="this.parentElement.classList.toggle('sh_icon-faq-open')"
         style="display: flex; align-items: center; gap: 14px; cursor: pointer;">
      <div style="width: 40px; height: 40px; background: #d7eae4; border-radius: 10px;
                  display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5a9a87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      </div>
      <div style="flex: 1;">
        <div style="font-size: 11px; color: #5a9a87; font-weight: 600; letter-spacing: 1px; margin-bottom: 3px;">배송</div>
        <div style="font-size: 14px; font-weight: 600; color: #2d2420;">제주도/도서산간 지역도 배송 가능한가요?</div>
      </div>
      <span class="sh_icon-faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
    </div>
    <div class="sh_icon-faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
      <div style="padding: 12px 0 5px 54px; color: #666; line-height: 1.8; font-size: 14px;">
        네, 전국 배송 가능합니다. 제주도 및 도서산간 지역은 추가 배송비 3,000원이 발생하며, 배송 기간이 1~2일 추가 소요될 수 있습니다.
      </div>
    </div>
  </div>

  <!-- FAQ with Icon - 교환/반품 -->
  <div class="sh_icon-faq-item" style="padding: 18px 0;">
    <div onclick="this.parentElement.classList.toggle('sh_icon-faq-open')"
         style="display: flex; align-items: center; gap: 14px; cursor: pointer;">
      <div style="width: 40px; height: 40px; background: #eaccca; border-radius: 10px;
                  display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b07070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
        </svg>
      </div>
      <div style="flex: 1;">
        <div style="font-size: 11px; color: #b07070; font-weight: 600; letter-spacing: 1px; margin-bottom: 3px;">교환/반품</div>
        <div style="font-size: 14px; font-weight: 600; color: #2d2420;">개봉 후에도 반품이 가능한가요?</div>
      </div>
      <span class="sh_icon-faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
    </div>
    <div class="sh_icon-faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
      <div style="padding: 12px 0 5px 54px; color: #666; line-height: 1.8; font-size: 14px;">
        제품 수령 후 7일 이내, 미사용 상태에서 교환/반품 가능합니다. 단순 변심의 경우 왕복 배송비는 고객 부담입니다.
      </div>
    </div>
  </div>

</div>
```

**추가 CSS**:
```css
.sh_icon-faq-open .sh_icon-faq-arrow {
  transform: rotate(180deg) !important;
}
.sh_icon-faq-open .sh_icon-faq-answer {
  max-height: 300px !important;
}
```

---

### 7-4. 배송/교환 정보 박스

**용도**: 배송, 교환/반품, AS 정책 정보를 그리드로 정리
**특징**: 아이콘 + 타이틀 + 상세정보 그리드, 섹션 구분 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; margin-top: 50px; padding: 50px 20px;">
  <div class="sub_title font-w700 txtcenter" style="margin-bottom: 8px;">
    <span class="desc_btn" style="background: #000000;">INFO</span>
  </div>
  <div class="title font-w700 txtcenter" style="font-size: 26px; margin-bottom: 40px;">
    배송 및 교환/반품 안내
  </div>

  <div style="display: grid; grid-template-columns: 1fr; gap: 16px; max-width: 560px; margin: 0 auto;">

    <!-- 배송 정보 -->
    <div style="background: #fff; border-radius: 12px; padding: 24px 20px; box-shadow: 0 1px 8px rgba(0,0,0,0.04);">
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
        <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #a38068, #8b6b56);
                    border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        </div>
        <div style="font-size: 17px; font-weight: 700; color: #2d2420;">배송 안내</div>
      </div>
      <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 14px; font-size: 13px; line-height: 1.7;">
        <span style="color: #a38068; font-weight: 600;">배송비</span>
        <span style="color: #555;">3,000원 (50,000원 이상 무료배송)</span>
        <span style="color: #a38068; font-weight: 600;">배송기간</span>
        <span style="color: #555;">결제 완료 후 1~3일 (영업일 기준)</span>
        <span style="color: #a38068; font-weight: 600;">출고마감</span>
        <span style="color: #555;">평일 오후 2시 이전 주문 당일 출고</span>
        <span style="color: #a38068; font-weight: 600;">택배사</span>
        <span style="color: #555;">CJ대한통운</span>
      </div>
    </div>

    <!-- 교환/반품 정보 -->
    <div style="background: #fff; border-radius: 12px; padding: 24px 20px; box-shadow: 0 1px 8px rgba(0,0,0,0.04);">
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
        <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #a38068, #8b6b56);
                    border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
          </svg>
        </div>
        <div style="font-size: 17px; font-weight: 700; color: #2d2420;">교환/반품 안내</div>
      </div>
      <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 14px; font-size: 13px; line-height: 1.7;">
        <span style="color: #a38068; font-weight: 600;">신청기간</span>
        <span style="color: #555;">수령일로부터 7일 이내</span>
        <span style="color: #a38068; font-weight: 600;">반품배송비</span>
        <span style="color: #555;">단순변심 시 왕복 6,000원 고객부담</span>
        <span style="color: #a38068; font-weight: 600;">반품불가</span>
        <span style="color: #555;">사용 흔적, 택 제거, 세탁 후 상품</span>
        <span style="color: #a38068; font-weight: 600;">반품주소</span>
        <span style="color: #555;">서울시 성동구 썬데이허그 물류센터</span>
      </div>
    </div>

    <!-- AS 안내 -->
    <div style="background: #fff; border-radius: 12px; padding: 24px 20px; box-shadow: 0 1px 8px rgba(0,0,0,0.04);">
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
        <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #a38068, #8b6b56);
                    border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div style="font-size: 17px; font-weight: 700; color: #2d2420;">품질보증/AS</div>
      </div>
      <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 14px; font-size: 13px; line-height: 1.7;">
        <span style="color: #a38068; font-weight: 600;">보증기간</span>
        <span style="color: #555;">구매일로부터 1년</span>
        <span style="color: #a38068; font-weight: 600;">AS문의</span>
        <span style="color: #555;">카카오톡 @썬데이허그</span>
        <span style="color: #a38068; font-weight: 600;">고객센터</span>
        <span style="color: #555;">1588-0000 (평일 10:00~17:00)</span>
      </div>
    </div>

  </div>
</div>
```

---

### 7-5. 사용법/케어 가이드 스텝

**용도**: 제품 사용법이나 세탁/케어 방법을 단계별로 안내
**특징**: 번호 스텝, 이미지 포함, 깔끔한 설명 레이아웃

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 50px 20px;">
  <div style="text-align: center; margin-bottom: 8px;">
    <span style="display: inline-block; background: linear-gradient(135deg, #a38068 0%, #8b6b56 100%);
                 color: #fff; padding: 8px 22px; border-radius: 25px;
                 font-size: 12px; font-weight: 700; letter-spacing: 2px;">
      CARE GUIDE
    </span>
  </div>
  <div class="title font-w700 txtcenter" style="font-size: 26px; margin-bottom: 8px; line-height: 1.4;">
    올바른 세탁 & 케어 방법
  </div>
  <div class="desc_small txtcenter" style="color: #888; margin-bottom: 40px; font-size: 14px;">
    오래도록 부드러운 촉감을 유지하는 관리법
  </div>

  <!-- Step 1 -->
  <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 32px;">
    <div style="width: 120px; flex-shrink: 0; position: relative; border-radius: 12px; overflow: hidden;">
      <img src="https://dummyimage.com/240x240" alt="세탁 준비" style="width: 100%; aspect-ratio: 1/1; object-fit: cover;">
      <div style="position: absolute; top: 8px; left: 8px; width: 26px; height: 26px; background: #2d2420;
                  color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center;
                  font-size: 12px; font-weight: 700;">1</div>
    </div>
    <div style="flex: 1; padding-top: 4px;">
      <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 6px;">세탁 전 준비</div>
      <div style="font-size: 13px; color: #666; line-height: 1.7;">
        지퍼와 스냅 버튼을 모두 잠근 후, 세탁망에 넣어주세요. 다른 의류와 분리 세탁을 권장합니다.
      </div>
    </div>
  </div>

  <!-- Step 2 -->
  <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 32px;">
    <div style="width: 120px; flex-shrink: 0; position: relative; border-radius: 12px; overflow: hidden;">
      <img src="https://dummyimage.com/240x240" alt="세탁" style="width: 100%; aspect-ratio: 1/1; object-fit: cover;">
      <div style="position: absolute; top: 8px; left: 8px; width: 26px; height: 26px; background: #2d2420;
                  color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center;
                  font-size: 12px; font-weight: 700;">2</div>
    </div>
    <div style="flex: 1; padding-top: 4px;">
      <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 6px;">미온수 세탁</div>
      <div style="font-size: 13px; color: #666; line-height: 1.7;">
        30도 이하 미온수에서 중성세제를 사용하여 울/섬세 코스로 세탁해 주세요. 표백제, 섬유유연제 사용은 피해주세요.
      </div>
    </div>
  </div>

  <!-- Step 3 -->
  <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 32px;">
    <div style="width: 120px; flex-shrink: 0; position: relative; border-radius: 12px; overflow: hidden;">
      <img src="https://dummyimage.com/240x240" alt="건조" style="width: 100%; aspect-ratio: 1/1; object-fit: cover;">
      <div style="position: absolute; top: 8px; left: 8px; width: 26px; height: 26px; background: #2d2420;
                  color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center;
                  font-size: 12px; font-weight: 700;">3</div>
    </div>
    <div style="flex: 1; padding-top: 4px;">
      <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 6px;">자연 건조</div>
      <div style="font-size: 13px; color: #666; line-height: 1.7;">
        건조기 사용은 피해주세요. 통풍이 잘 되는 그늘에서 자연 건조해 주세요. 직사광선은 원단 변색의 원인이 될 수 있습니다.
      </div>
    </div>
  </div>

  <!-- Step 4 -->
  <div style="display: flex; gap: 20px; align-items: flex-start;">
    <div style="width: 120px; flex-shrink: 0; position: relative; border-radius: 12px; overflow: hidden;">
      <img src="https://dummyimage.com/240x240" alt="보관" style="width: 100%; aspect-ratio: 1/1; object-fit: cover;">
      <div style="position: absolute; top: 8px; left: 8px; width: 26px; height: 26px; background: #2d2420;
                  color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center;
                  font-size: 12px; font-weight: 700;">4</div>
    </div>
    <div style="flex: 1; padding-top: 4px;">
      <div style="font-size: 16px; font-weight: 700; color: #2d2420; margin-bottom: 6px;">보관 방법</div>
      <div style="font-size: 13px; color: #666; line-height: 1.7;">
        완전히 건조된 상태에서 접어서 보관해 주세요. 습기가 없는 서늘한 장소에 보관하면 오래도록 부드러운 촉감을 유지할 수 있습니다.
      </div>
    </div>
  </div>

  <!-- 주의사항 박스 -->
  <div style="background: #fff3e0; border-left: 4px solid #ff8605; padding: 16px 18px; border-radius: 8px;
              margin-top: 35px; text-align: left;">
    <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 6px;">주의사항</div>
    <div style="font-size: 12px; color: #666; line-height: 1.7;">
      - 첫 세탁 시 약간의 수축이 있을 수 있습니다 (정상)<br>
      - 이염 방지를 위해 반드시 분리 세탁해 주세요<br>
      - 다림질은 낮은 온도에서 천을 덮고 해주세요
    </div>
  </div>
</div>
```

---

### 7-6. 카테고리별 FAQ 탭

**용도**: 탭 버튼으로 카테고리별 FAQ 필터링
**특징**: 탭 전환으로 제품/배송/교환/기타 FAQ 분류 표시

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 15px;">
  <div class="title font-w700 txtcenter" style="font-size: 26px; margin-bottom: 30px;">
    자주 묻는 질문
  </div>

  <!-- Tab Buttons -->
  <div class="sh_faq-tabs" style="display: flex; gap: 8px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap;">
    <button class="sh_faq-tab-btn sh_faq-tab-active" data-tab="product"
            onclick="shFaqTabSwitch('product')"
            style="padding: 9px 20px; border-radius: 25px; border: 1.5px solid #a38068;
                   background: #a38068; color: #fff; font-size: 13px; font-weight: 600;
                   cursor: pointer; transition: all 0.25s ease;">
      제품
    </button>
    <button class="sh_faq-tab-btn" data-tab="shipping"
            onclick="shFaqTabSwitch('shipping')"
            style="padding: 9px 20px; border-radius: 25px; border: 1.5px solid #ddd;
                   background: #fff; color: #888; font-size: 13px; font-weight: 600;
                   cursor: pointer; transition: all 0.25s ease;">
      배송
    </button>
    <button class="sh_faq-tab-btn" data-tab="exchange"
            onclick="shFaqTabSwitch('exchange')"
            style="padding: 9px 20px; border-radius: 25px; border: 1.5px solid #ddd;
                   background: #fff; color: #888; font-size: 13px; font-weight: 600;
                   cursor: pointer; transition: all 0.25s ease;">
      교환/반품
    </button>
    <button class="sh_faq-tab-btn" data-tab="etc"
            onclick="shFaqTabSwitch('etc')"
            style="padding: 9px 20px; border-radius: 25px; border: 1.5px solid #ddd;
                   background: #fff; color: #888; font-size: 13px; font-weight: 600;
                   cursor: pointer; transition: all 0.25s ease;">
      기타
    </button>
  </div>

  <!-- FAQ Content: 제품 -->
  <div class="sh_faq-tab-content" data-content="product" style="display: block;">
    <div style="border-bottom: 1px solid #eee; padding: 18px 10px;">
      <div onclick="this.parentElement.classList.toggle('sh_faq-open')" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">Q. 어떤 원단으로 만들어졌나요?</span>
        <span class="sh_faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
        <div style="padding-top: 12px; color: #666; line-height: 1.8; font-size: 14px;">
          GOTS 인증 오가닉 코튼과 뱀부 원단을 사용합니다. 아기 피부에 자극 없는 저자극 원단입니다.
        </div>
      </div>
    </div>
    <div style="border-bottom: 1px solid #eee; padding: 18px 10px;">
      <div onclick="this.parentElement.classList.toggle('sh_faq-open')" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">Q. 사이즈 교환이 잦은데, 어떤 사이즈가 맞나요?</span>
        <span class="sh_faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
        <div style="padding-top: 12px; color: #666; line-height: 1.8; font-size: 14px;">
          상세페이지 사이즈 가이드를 참고해 주세요. 키와 몸무게 기준표를 확인하시면 정확한 사이즈를 선택하실 수 있습니다.
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ Content: 배송 -->
  <div class="sh_faq-tab-content" data-content="shipping" style="display: none;">
    <div style="border-bottom: 1px solid #eee; padding: 18px 10px;">
      <div onclick="this.parentElement.classList.toggle('sh_faq-open')" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">Q. 배송은 얼마나 걸리나요?</span>
        <span class="sh_faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
        <div style="padding-top: 12px; color: #666; line-height: 1.8; font-size: 14px;">
          평일 오후 2시 이전 주문 시 당일 출고, 출고 후 1~2일 내 수령 가능합니다.
        </div>
      </div>
    </div>
    <div style="border-bottom: 1px solid #eee; padding: 18px 10px;">
      <div onclick="this.parentElement.classList.toggle('sh_faq-open')" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">Q. 무료배송 조건이 있나요?</span>
        <span class="sh_faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
        <div style="padding-top: 12px; color: #666; line-height: 1.8; font-size: 14px;">
          50,000원 이상 구매 시 무료배송입니다. 미만 시 배송비 3,000원이 부과됩니다.
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ Content: 교환/반품 -->
  <div class="sh_faq-tab-content" data-content="exchange" style="display: none;">
    <div style="border-bottom: 1px solid #eee; padding: 18px 10px;">
      <div onclick="this.parentElement.classList.toggle('sh_faq-open')" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">Q. 교환/반품 절차가 어떻게 되나요?</span>
        <span class="sh_faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
        <div style="padding-top: 12px; color: #666; line-height: 1.8; font-size: 14px;">
          카카오톡 @썬데이허그로 문의 후, 반품 택배를 접수해 주세요. 상품 수령 후 검수 완료 시 교환 발송 또는 환불 처리됩니다.
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ Content: 기타 -->
  <div class="sh_faq-tab-content" data-content="etc" style="display: none;">
    <div style="border-bottom: 1px solid #eee; padding: 18px 10px;">
      <div onclick="this.parentElement.classList.toggle('sh_faq-open')" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
        <span style="font-weight: 600; font-size: 14px; color: #2d2420; text-align: left;">Q. 선물포장이 가능한가요?</span>
        <span class="sh_faq-arrow" style="font-size: 11px; color: #ccc; transition: transform 0.3s ease; display: inline-block;">&#9660;</span>
      </div>
      <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.35s ease;">
        <div style="padding-top: 12px; color: #666; line-height: 1.8; font-size: 14px;">
          네, 주문 시 선물포장 옵션(3,000원)을 선택하시면 썬데이허그 전용 박스에 포장하여 발송합니다.
        </div>
      </div>
    </div>
  </div>

</div>
```

**추가 CSS**:
```css
.sh_faq-open .sh_faq-arrow {
  transform: rotate(180deg) !important;
}
.sh_faq-open .sh_faq-answer {
  max-height: 300px !important;
}
```

**추가 JS**:
```js
function shFaqTabSwitch(tab) {
  // Update buttons
  document.querySelectorAll('.sh_faq-tab-btn').forEach(function(btn) {
    if (btn.getAttribute('data-tab') === tab) {
      btn.style.background = '#a38068';
      btn.style.color = '#fff';
      btn.style.borderColor = '#a38068';
      btn.classList.add('sh_faq-tab-active');
    } else {
      btn.style.background = '#fff';
      btn.style.color = '#888';
      btn.style.borderColor = '#ddd';
      btn.classList.remove('sh_faq-tab-active');
    }
  });
  // Update content
  document.querySelectorAll('.sh_faq-tab-content').forEach(function(content) {
    content.style.display = content.getAttribute('data-content') === tab ? 'block' : 'none';
  });
}
```
