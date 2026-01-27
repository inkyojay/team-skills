# 섹션 템플릿: CATEGORY 8 — 소셜 프루프/UGC 섹션

---

### 8-1. 인스타 피드 스타일 그리드

**용도**: 인스타그램 피드처럼 정사각형 이미지를 3열 그리드로 배치
**특징**: 3열 그리드, 정사각형 이미지, 브랜드 핸들 헤더

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 0;">
  <!-- Header -->
  <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 8px;">
    <div style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden; border: 2px solid #a38068;">
      <img src="https://dummyimage.com/80x80" alt="profile" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div>
      <div style="font-size: 15px; font-weight: 700; color: #2d2420;">@sundayhug_official</div>
      <div style="font-size: 12px; color: #a38068;">Sunday Hug</div>
    </div>
  </div>
  <div class="desc_small txtcenter" style="color: #888; font-size: 13px; margin-bottom: 25px;">
    #썬데이허그 와 함께하는 소중한 일상
  </div>

  <!-- 3-column Grid -->
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; max-width: 600px; margin: 0 auto;">
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc1" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc2" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc3" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc4" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc5" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc6" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc7" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc8" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
    <div style="aspect-ratio: 1/1; overflow: hidden;">
      <img src="https://dummyimage.com/400x400" alt="ugc9" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
           onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    </div>
  </div>

  <!-- CTA -->
  <div style="text-align: center; margin-top: 25px;">
    <a href="#" class="od_more_btn4" style="text-decoration: none; display: inline-block; padding: 10px 28px; font-size: 13px;">
      인스타그램 바로가기
    </a>
  </div>
</div>
```

---

### 8-2. 고객 포토 리뷰 갤러리

**용도**: 고객 포토 리뷰를 카드 형태로 수평 스크롤 표시
**특징**: 별점, 고객명, 구매정보 포함, 수평 스크롤 갤러리

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 0;">
  <div class="sub_title font-w700 txtcenter" style="margin-bottom: 8px;">
    <span class="desc_btn" style="background: #000000;">REVIEW</span>
  </div>
  <div class="title font-w700 txtcenter" style="font-size: 26px; margin-bottom: 8px;">
    생생한 고객 포토 리뷰
  </div>
  <div class="desc_small txtcenter" style="color: #888; font-size: 14px; margin-bottom: 30px;">
    실제 사용 고객님들의 소중한 후기
  </div>

  <!-- Horizontal Scroll Gallery -->
  <div style="overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; padding: 0 15px;">
    <div style="display: flex; gap: 14px; width: max-content; padding-bottom: 5px;">

      <!-- Review Card 1 -->
      <div style="width: 260px; background: #fff; border-radius: 14px; overflow: hidden;
                  box-shadow: 0 2px 16px rgba(0,0,0,0.07); flex-shrink: 0;">
        <div style="aspect-ratio: 1/1; overflow: hidden;">
          <img src="https://dummyimage.com/520x520" alt="리뷰 사진" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 16px;">
          <div style="color: #ff8605; font-size: 13px; letter-spacing: 1px; margin-bottom: 8px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 6px; line-height: 1.4;">
            아기가 너무 편안하게 자요!
          </div>
          <div style="font-size: 12px; color: #888; line-height: 1.6; margin-bottom: 10px;
                      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            원단이 정말 부드럽고 아기 피부에 자극이 없어서 안심하고 사용하고 있어요. 세탁해도 부드러움이 유지돼요.
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0ebe6; padding-top: 10px;">
            <span style="font-size: 12px; color: #aaa;">김**맘</span>
            <span style="font-size: 11px; color: #ccc;">슬리핑백 M / 크림</span>
          </div>
        </div>
      </div>

      <!-- Review Card 2 -->
      <div style="width: 260px; background: #fff; border-radius: 14px; overflow: hidden;
                  box-shadow: 0 2px 16px rgba(0,0,0,0.07); flex-shrink: 0;">
        <div style="aspect-ratio: 1/1; overflow: hidden;">
          <img src="https://dummyimage.com/520x520" alt="리뷰 사진" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 16px;">
          <div style="color: #ff8605; font-size: 13px; letter-spacing: 1px; margin-bottom: 8px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 6px; line-height: 1.4;">
            둘째도 역시 썬데이허그!
          </div>
          <div style="font-size: 12px; color: #888; line-height: 1.6; margin-bottom: 10px;
                      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            첫째 때 사용하고 너무 좋아서 둘째도 바로 구매했어요. 통잠 자는 아기 보면 이불값 합니다.
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0ebe6; padding-top: 10px;">
            <span style="font-size: 12px; color: #aaa;">이**님</span>
            <span style="font-size: 11px; color: #ccc;">스와들 / 오트</span>
          </div>
        </div>
      </div>

      <!-- Review Card 3 -->
      <div style="width: 260px; background: #fff; border-radius: 14px; overflow: hidden;
                  box-shadow: 0 2px 16px rgba(0,0,0,0.07); flex-shrink: 0;">
        <div style="aspect-ratio: 1/1; overflow: hidden;">
          <img src="https://dummyimage.com/520x520" alt="리뷰 사진" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 16px;">
          <div style="color: #ff8605; font-size: 13px; letter-spacing: 1px; margin-bottom: 8px;">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
          <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 6px; line-height: 1.4;">
            선물용으로 완벽해요
          </div>
          <div style="font-size: 12px; color: #888; line-height: 1.6; margin-bottom: 10px;
                      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            조카 선물로 구매했는데 포장도 예쁘고 받으신 분이 너무 좋아하셨어요. 퀄리티가 확실히 다릅니다.
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0ebe6; padding-top: 10px;">
            <span style="font-size: 12px; color: #aaa;">박**님</span>
            <span style="font-size: 11px; color: #ccc;">슬리핑백 S / 베이지</span>
          </div>
        </div>
      </div>

      <!-- Review Card 4 -->
      <div style="width: 260px; background: #fff; border-radius: 14px; overflow: hidden;
                  box-shadow: 0 2px 16px rgba(0,0,0,0.07); flex-shrink: 0;">
        <div style="aspect-ratio: 1/1; overflow: hidden;">
          <img src="https://dummyimage.com/520x520" alt="리뷰 사진" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="padding: 16px;">
          <div style="color: #ff8605; font-size: 13px; letter-spacing: 1px; margin-bottom: 8px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 6px; line-height: 1.4;">
            디자인도 기능도 최고
          </div>
          <div style="font-size: 12px; color: #888; line-height: 1.6; margin-bottom: 10px;
                      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            예쁜 디자인에 끌려서 샀는데 기능까지 만족스러워요. 지퍼가 양방향이라 기저귀 갈 때 편해요.
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f0ebe6; padding-top: 10px;">
            <span style="font-size: 12px; color: #aaa;">최**맘</span>
            <span style="font-size: 11px; color: #ccc;">슬리핑백 L / 민트</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_review-scroll::-webkit-scrollbar {
  display: none;
}
```

---

### 8-3. 해시태그 클라우드

**용도**: 브랜드 관련 해시태그를 클라우드 형태로 시각화
**특징**: 유동적 레이아웃, 인기도별 크기 차이, 브랜드 컬러 태그

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; margin-top: 50px; padding: 50px 20px;">
  <div class="title font-w700 txtcenter" style="font-size: 24px; margin-bottom: 8px;">
    SNS에서 화제!
  </div>
  <div class="desc_small txtcenter" style="color: #888; font-size: 14px; margin-bottom: 35px;">
    고객님들이 직접 남겨주신 이야기
  </div>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 500px; margin: 0 auto;">

    <!-- Large tags (popular) -->
    <span class="nb-hashtag" style="display: inline-block; padding: 10px 22px; border-radius: 25px;
                background: #a38068; color: #fff; font-size: 15px; font-weight: 600;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #썬데이허그
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 10px 22px; border-radius: 25px;
                background: #2d2420; color: #fff; font-size: 15px; font-weight: 600;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #통잠성공
    </span>

    <!-- Medium tags -->
    <span class="nb-hashtag" style="display: inline-block; padding: 8px 18px; border-radius: 25px;
                background: #EAE2D5; color: #2d2420; font-size: 13px; font-weight: 600;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #아기수면
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 8px 18px; border-radius: 25px;
                background: #d7eae4; color: #2d2420; font-size: 13px; font-weight: 600;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #슬리핑백추천
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 8px 18px; border-radius: 25px;
                background: #eaccca; color: #2d2420; font-size: 13px; font-weight: 600;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #육아필수템
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 8px 18px; border-radius: 25px;
                background: #C6B198; color: #fff; font-size: 13px; font-weight: 600;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #스와들추천
    </span>

    <!-- Small tags -->
    <span class="nb-hashtag" style="display: inline-block; padding: 6px 14px; border-radius: 25px;
                border: 1px solid #ddd; background: #fff; color: #888; font-size: 12px; font-weight: 500;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #오가닉코튼
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 6px 14px; border-radius: 25px;
                border: 1px solid #ddd; background: #fff; color: #888; font-size: 12px; font-weight: 500;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #출산선물
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 6px 14px; border-radius: 25px;
                border: 1px solid #ddd; background: #fff; color: #888; font-size: 12px; font-weight: 500;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #신생아용품
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 6px 14px; border-radius: 25px;
                border: 1px solid #ddd; background: #fff; color: #888; font-size: 12px; font-weight: 500;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #아기꿀잠
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 6px 14px; border-radius: 25px;
                border: 1px solid #ddd; background: #fff; color: #888; font-size: 12px; font-weight: 500;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #베이비용품
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 6px 14px; border-radius: 25px;
                border: 1px solid #ddd; background: #fff; color: #888; font-size: 12px; font-weight: 500;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #수면교육
    </span>

    <!-- Medium accent -->
    <span class="nb-hashtag" style="display: inline-block; padding: 8px 18px; border-radius: 25px;
                background: #ff8605; color: #fff; font-size: 13px; font-weight: 600;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #재구매의사100%
    </span>
    <span class="nb-hashtag" style="display: inline-block; padding: 6px 14px; border-radius: 25px;
                border: 1px solid #ddd; background: #fff; color: #888; font-size: 12px; font-weight: 500;
                transition: transform 0.2s ease; cursor: default;"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      #엄마추천
    </span>

  </div>
</div>
```

---

### 8-4. 인플루언서 추천 카드

**용도**: 인플루언서/전문가 추천을 카드 형태로 표시
**특징**: 프로필 사진 + 이름 + 팔로워 수, 추천 코멘트, SNS 플랫폼 뱃지

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 15px;">
  <div style="text-align: center; margin-bottom: 8px;">
    <span style="display: inline-block; border: 1px solid #2d2420; color: #2d2420;
                 padding: 6px 20px; font-size: 12px; font-weight: 600; letter-spacing: 2px;">
      RECOMMENDED
    </span>
  </div>
  <div class="title font-w700 txtcenter" style="font-size: 26px; margin-bottom: 30px; line-height: 1.4;">
    인플루언서가 선택한<br>썬데이허그
  </div>

  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 560px; margin: 0 auto;">

    <!-- Influencer Card 1 -->
    <div style="background: #fff; border-radius: 16px; padding: 24px 20px;
                box-shadow: 0 2px 16px rgba(0,0,0,0.06); position: relative;">
      <!-- Platform Badge -->
      <div style="position: absolute; top: 16px; right: 16px; display: flex; align-items: center; gap: 4px;
                  background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
                  padding: 4px 10px; border-radius: 12px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#fff" stroke-width="2"/>
          <circle cx="12" cy="12" r="5" fill="none" stroke="#fff" stroke-width="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/>
        </svg>
        <span style="color: #fff; font-size: 10px; font-weight: 600;">Instagram</span>
      </div>
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
                    border: 2px solid #EAE2D5;">
          <img src="https://dummyimage.com/112x112" alt="인플루언서" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div>
          <div style="font-size: 15px; font-weight: 700; color: #2d2420;">하늘맘 육아일기</div>
          <div style="font-size: 12px; color: #a38068; margin-top: 2px;">팔로워 12.4만</div>
        </div>
      </div>
      <div style="background: #FFFBF5; border-radius: 10px; padding: 16px 18px; position: relative;">
        <div style="position: absolute; top: -6px; left: 20px; width: 12px; height: 12px; background: #FFFBF5;
                    transform: rotate(45deg);"></div>
        <div style="font-size: 14px; color: #555; line-height: 1.7; font-style: italic;">
          "첫째 때부터 썬데이허그만 고집했어요. 원단이 정말 다르거든요. 아기 피부가 예민한 우리 아이도 트러블 없이 잘 입고 있어요."
        </div>
      </div>
    </div>

    <!-- Influencer Card 2 -->
    <div style="background: #fff; border-radius: 16px; padding: 24px 20px;
                box-shadow: 0 2px 16px rgba(0,0,0,0.06); position: relative;">
      <!-- Platform Badge -->
      <div style="position: absolute; top: 16px; right: 16px; display: flex; align-items: center; gap: 4px;
                  background: #000; padding: 4px 10px; border-radius: 12px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.8.1V9.01a6.27 6.27 0 0 0-.8-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.77 1.52V6.94a4.85 4.85 0 0 1-1.01-.25z"/>
        </svg>
        <span style="color: #fff; font-size: 10px; font-weight: 600;">TikTok</span>
      </div>
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
                    border: 2px solid #EAE2D5;">
          <img src="https://dummyimage.com/112x112" alt="인플루언서" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div>
          <div style="font-size: 15px; font-weight: 700; color: #2d2420;">소아과의사 닥터리</div>
          <div style="font-size: 12px; color: #a38068; margin-top: 2px;">팔로워 8.7만</div>
        </div>
      </div>
      <div style="background: #FFFBF5; border-radius: 10px; padding: 16px 18px; position: relative;">
        <div style="position: absolute; top: -6px; left: 20px; width: 12px; height: 12px; background: #FFFBF5;
                    transform: rotate(45deg);"></div>
        <div style="font-size: 14px; color: #555; line-height: 1.7; font-style: italic;">
          "소아과 의사로서 영유아 수면 환경이 정말 중요하다고 강조하는데, 썬데이허그는 안전 인증과 원단 품질 모두 신뢰할 수 있습니다."
        </div>
      </div>
    </div>

    <!-- Influencer Card 3 -->
    <div style="background: #fff; border-radius: 16px; padding: 24px 20px;
                box-shadow: 0 2px 16px rgba(0,0,0,0.06); position: relative;">
      <!-- Platform Badge -->
      <div style="position: absolute; top: 16px; right: 16px; display: flex; align-items: center; gap: 4px;
                  background: #FF0000; padding: 4px 10px; border-radius: 12px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
          <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
        <span style="color: #fff; font-size: 10px; font-weight: 600;">YouTube</span>
      </div>
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
                    border: 2px solid #EAE2D5;">
          <img src="https://dummyimage.com/112x112" alt="인플루언서" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div>
          <div style="font-size: 15px; font-weight: 700; color: #2d2420;">쌍둥이 아빠 브이로그</div>
          <div style="font-size: 12px; color: #a38068; margin-top: 2px;">구독자 5.2만</div>
        </div>
      </div>
      <div style="background: #FFFBF5; border-radius: 10px; padding: 16px 18px; position: relative;">
        <div style="position: absolute; top: -6px; left: 20px; width: 12px; height: 12px; background: #FFFBF5;
                    transform: rotate(45deg);"></div>
        <div style="font-size: 14px; color: #555; line-height: 1.7; font-style: italic;">
          "쌍둥이 키우는데 잠이 절실하잖아요. 슬리핑백 쓰고 나서 두 아이 다 통잠 성공! 이것만큼은 진짜 강추합니다."
        </div>
      </div>
    </div>

  </div>
</div>
```

---

### 8-5. SNS 팔로우 유도 배너

**용도**: SNS 채널 팔로우를 유도하는 CTA 배너
**특징**: 플랫폼 아이콘, 팔로워 수 표시, 브랜드 컬러 CTA 버튼

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px;">
  <div style="background: linear-gradient(135deg, #2d2420 0%, #4a3830 100%); padding: 45px 25px; text-align: center;">
    <div style="font-size: 12px; color: #a38068; font-weight: 600; letter-spacing: 3px; margin-bottom: 12px;">
      FOLLOW US
    </div>
    <div style="font-size: 24px; font-weight: 700; color: #fff; line-height: 1.4; margin-bottom: 6px;">
      썬데이허그와 함께하는<br>특별한 육아 이야기
    </div>
    <div style="font-size: 13px; color: #C6B198; margin-bottom: 30px; line-height: 1.6;">
      신제품 소식, 육아 팁, 이벤트를 가장 먼저 만나보세요
    </div>

    <!-- Platform Cards -->
    <div style="display: flex; gap: 12px; justify-content: center; max-width: 400px; margin: 0 auto 30px;">

      <!-- Instagram -->
      <div style="flex: 1; background: rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 10px;
                  backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08);">
        <div style="width: 40px; height: 40px; margin: 0 auto 10px; border-radius: 10px;
                    background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
                    display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="#fff" stroke="none"/>
          </svg>
        </div>
        <div style="font-size: 18px; font-weight: 700; color: #fff;">15.2K</div>
        <div style="font-size: 11px; color: #C6B198; margin-top: 2px;">팔로워</div>
      </div>

      <!-- YouTube -->
      <div style="flex: 1; background: rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 10px;
                  backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08);">
        <div style="width: 40px; height: 40px; margin: 0 auto 10px; border-radius: 10px;
                    background: #FF0000; display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </div>
        <div style="font-size: 18px; font-weight: 700; color: #fff;">8.7K</div>
        <div style="font-size: 11px; color: #C6B198; margin-top: 2px;">구독자</div>
      </div>

      <!-- Naver Blog -->
      <div style="flex: 1; background: rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 10px;
                  backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08);">
        <div style="width: 40px; height: 40px; margin: 0 auto 10px; border-radius: 10px;
                    background: #03C75A; display: flex; align-items: center; justify-content: center;">
          <span style="color: #fff; font-size: 16px; font-weight: 900;">N</span>
        </div>
        <div style="font-size: 18px; font-weight: 700; color: #fff;">22.1K</div>
        <div style="font-size: 11px; color: #C6B198; margin-top: 2px;">이웃</div>
      </div>

    </div>

    <!-- CTA Button -->
    <a href="#" style="display: inline-block; background: linear-gradient(135deg, #a38068, #8b6b56);
                       color: #fff; padding: 14px 40px; border-radius: 30px; text-decoration: none;
                       font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
                       box-shadow: 0 4px 16px rgba(163, 128, 104, 0.4);
                       transition: transform 0.2s ease, box-shadow 0.2s ease;"
       onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(163,128,104,0.5)'"
       onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 16px rgba(163,128,104,0.4)'">
      인스타그램 팔로우하기
    </a>

  </div>
</div>
```

---

### 8-6. 고객 후기 하이라이트 슬라이더

**용도**: 대표 고객 후기를 CSS scroll-snap 기반 슬라이더로 표시
**특징**: 큰 인용문, 고객 사진, 인증 뱃지, scroll-snap 슬라이드

**HTML**:
```html
<div class="detail_section bg-color-oat" style="margin-bottom: 0px; margin-top: 50px; padding: 50px 0;">
  <div style="text-align: center; margin-bottom: 8px;">
    <span style="display: inline-block; background: linear-gradient(135deg, #a38068 0%, #8b6b56 100%);
                 color: #fff; padding: 8px 22px; border-radius: 25px;
                 font-size: 12px; font-weight: 700; letter-spacing: 2px;">
      BEST REVIEW
    </span>
  </div>
  <div class="title font-w700 txtcenter" style="font-size: 26px; margin-bottom: 30px;">
    고객님이 증명하는 품질
  </div>

  <!-- Scroll-snap Slider -->
  <div class="sh_review-slider" style="overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
              scrollbar-width: none; padding: 0 20px;">
    <div style="display: flex; gap: 16px; width: max-content;">

      <!-- Review Slide 1 -->
      <div style="width: 300px; flex-shrink: 0; scroll-snap-align: center; background: #fff;
                  border-radius: 16px; padding: 28px 22px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <!-- Quote Icon -->
        <div style="font-size: 36px; color: #EAE2D5; font-family: Georgia, serif; line-height: 1; margin-bottom: 12px;">
          &#8220;
        </div>
        <div style="font-size: 15px; color: #2d2420; line-height: 1.8; font-weight: 500; margin-bottom: 20px; min-height: 80px;">
          매일 밤 전쟁이었는데, 슬리핑백 하나로 아기가 통잠을 자기 시작했어요. 인생템이라는 말이 이런 거구나 싶었습니다.
        </div>
        <div style="border-top: 1px solid #f0ebe6; padding-top: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="width: 42px; height: 42px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
            <img src="https://dummyimage.com/84x84" alt="고객" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 13px; font-weight: 600; color: #2d2420;">김서연 님</span>
              <span style="display: inline-flex; align-items: center; gap: 3px; background: #d7eae4;
                           padding: 2px 8px; border-radius: 10px; font-size: 10px; color: #3a7d5c; font-weight: 600;">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#3a7d5c"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                구매인증
              </span>
            </div>
            <div style="font-size: 11px; color: #aaa; margin-top: 2px;">슬리핑백 M / 크림</div>
          </div>
          <div style="color: #ff8605; font-size: 12px; letter-spacing: 1px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
      </div>

      <!-- Review Slide 2 -->
      <div style="width: 300px; flex-shrink: 0; scroll-snap-align: center; background: #fff;
                  border-radius: 16px; padding: 28px 22px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <div style="font-size: 36px; color: #EAE2D5; font-family: Georgia, serif; line-height: 1; margin-bottom: 12px;">
          &#8220;
        </div>
        <div style="font-size: 15px; color: #2d2420; line-height: 1.8; font-weight: 500; margin-bottom: 20px; min-height: 80px;">
          출산 선물로 받았는데 퀄리티에 깜짝 놀랐어요. 이렇게 부드러운 원단은 처음이에요. 직접 써보니 가격이 아깝지 않습니다.
        </div>
        <div style="border-top: 1px solid #f0ebe6; padding-top: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="width: 42px; height: 42px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
            <img src="https://dummyimage.com/84x84" alt="고객" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 13px; font-weight: 600; color: #2d2420;">박지은 님</span>
              <span style="display: inline-flex; align-items: center; gap: 3px; background: #d7eae4;
                           padding: 2px 8px; border-radius: 10px; font-size: 10px; color: #3a7d5c; font-weight: 600;">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#3a7d5c"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                구매인증
              </span>
            </div>
            <div style="font-size: 11px; color: #aaa; margin-top: 2px;">스와들 / 오트</div>
          </div>
          <div style="color: #ff8605; font-size: 12px; letter-spacing: 1px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
      </div>

      <!-- Review Slide 3 -->
      <div style="width: 300px; flex-shrink: 0; scroll-snap-align: center; background: #fff;
                  border-radius: 16px; padding: 28px 22px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <div style="font-size: 36px; color: #EAE2D5; font-family: Georgia, serif; line-height: 1; margin-bottom: 12px;">
          &#8220;
        </div>
        <div style="font-size: 15px; color: #2d2420; line-height: 1.8; font-weight: 500; margin-bottom: 20px; min-height: 80px;">
          소아과 선생님 추천으로 구매했어요. 아이가 모로반사로 깨는 횟수가 확 줄었어요. 세탁해도 형태 유지가 잘 돼서 만족합니다.
        </div>
        <div style="border-top: 1px solid #f0ebe6; padding-top: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="width: 42px; height: 42px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
            <img src="https://dummyimage.com/84x84" alt="고객" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 13px; font-weight: 600; color: #2d2420;">이하은 님</span>
              <span style="display: inline-flex; align-items: center; gap: 3px; background: #d7eae4;
                           padding: 2px 8px; border-radius: 10px; font-size: 10px; color: #3a7d5c; font-weight: 600;">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#3a7d5c"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                구매인증
              </span>
            </div>
            <div style="font-size: 11px; color: #aaa; margin-top: 2px;">스와들스트랩 / 크림</div>
          </div>
          <div style="color: #ff8605; font-size: 12px; letter-spacing: 1px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
      </div>

      <!-- Review Slide 4 -->
      <div style="width: 300px; flex-shrink: 0; scroll-snap-align: center; background: #fff;
                  border-radius: 16px; padding: 28px 22px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <div style="font-size: 36px; color: #EAE2D5; font-family: Georgia, serif; line-height: 1; margin-bottom: 12px;">
          &#8220;
        </div>
        <div style="font-size: 15px; color: #2d2420; line-height: 1.8; font-weight: 500; margin-bottom: 20px; min-height: 80px;">
          셋째까지 모두 썬데이허그로 재웠어요. 첫째 때 샀던 건 아직도 상태가 좋아서 동생한테 물려줬습니다. 내구성 최고!
        </div>
        <div style="border-top: 1px solid #f0ebe6; padding-top: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="width: 42px; height: 42px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
            <img src="https://dummyimage.com/84x84" alt="고객" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 13px; font-weight: 600; color: #2d2420;">정민지 님</span>
              <span style="display: inline-flex; align-items: center; gap: 3px; background: #d7eae4;
                           padding: 2px 8px; border-radius: 10px; font-size: 10px; color: #3a7d5c; font-weight: 600;">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#3a7d5c"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                구매인증
              </span>
            </div>
            <div style="font-size: 11px; color: #aaa; margin-top: 2px;">슬리핑백 L / 베이지</div>
          </div>
          <div style="color: #ff8605; font-size: 12px; letter-spacing: 1px;">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
        </div>
      </div>

    </div>
  </div>

  <!-- Scroll indicator dots -->
  <div style="display: flex; justify-content: center; gap: 6px; margin-top: 20px;">
    <div style="width: 20px; height: 4px; border-radius: 2px; background: #a38068;"></div>
    <div style="width: 8px; height: 4px; border-radius: 2px; background: #d5c8bc;"></div>
    <div style="width: 8px; height: 4px; border-radius: 2px; background: #d5c8bc;"></div>
    <div style="width: 8px; height: 4px; border-radius: 2px; background: #d5c8bc;"></div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_review-slider::-webkit-scrollbar {
  display: none;
}
.sh_review-slider {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```
