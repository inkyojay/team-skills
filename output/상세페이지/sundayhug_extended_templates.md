# 상세페이지 섹션 템플릿 모음

---

## CATEGORY 1: 히어로/인트로 섹션

---

### 1-1. 풀스크린 이미지 + 중앙 텍스트 오버레이

**용도**: 제품 상세페이지 최상단에 임팩트 있는 첫인상을 주는 풀스크린 히어로 이미지
**특징**: 16:9 비율 이미지 위에 하단 그라데이션과 중앙 정렬 텍스트 오버레이

**HTML**:
```html
<div class="detail_section bg-color-black" style="margin-bottom: 0px;">
  <div class="sh_hero-fullscreen">
    <img src="https://dummyimage.com/600x338" alt="제품 히어로 이미지" class="sh_hero-fullscreen__img" />
    <div class="sh_hero-fullscreen__overlay">
      <p class="sh_hero-fullscreen__subtitle font-w400">아이의 숙면을 위한 선택</p>
      <h2 class="sh_hero-fullscreen__title font-w700">썬데이허그<br/>슬리핑백</h2>
      <p class="sh_hero-fullscreen__desc font-w300">잠드는 순간부터 깨어나는 아침까지,<br/>포근한 안정감을 선물하세요.</p>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_hero-fullscreen {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}
.sh_hero-fullscreen__img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}
.sh_hero-fullscreen__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 60px 30px 40px;
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, transparent 100%);
  text-align: center;
  color: #fff;
}
.sh_hero-fullscreen__subtitle {
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  opacity: 0.85;
}
.sh_hero-fullscreen__title {
  font-size: 32px;
  line-height: 1.3;
  margin-bottom: 14px;
  letter-spacing: -0.5px;
}
.sh_hero-fullscreen__desc {
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.8;
}
```

---

### 1-2. 비디오 백그라운드 히어로

**용도**: 움직이는 영상을 배경으로 활용하여 생동감 있는 제품 소개
**특징**: 자동재생 무음 비디오 배경 + 포스터 이미지 폴백 + 중앙 오버레이 텍스트

**HTML**:
```html
<div class="detail_section bg-color-black" style="margin-bottom: 0px;">
  <div class="sh_hero-video">
    <video
      class="sh_hero-video__bg"
      autoplay
      muted
      loop
      playsinline
      poster="https://dummyimage.com/600x338"
    >
      <source src="video-placeholder.mp4" type="video/mp4" />
    </video>
    <div class="sh_hero-video__overlay">
      <p class="sh_hero-video__badge font-w500">NEW ARRIVAL</p>
      <h2 class="sh_hero-video__title font-w700">스와들 스트랩</h2>
      <p class="sh_hero-video__desc font-w300">자연스러운 수면 자세를 잡아주는<br/>신개념 스와들링 솔루션</p>
      <a href="#" class="sh_hero-video__cta font-w600">자세히 보기</a>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_hero-video {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #2d2420;
}
.sh_hero-video__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sh_hero-video__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(45, 36, 32, 0.4);
  color: #fff;
  padding: 30px;
}
.sh_hero-video__badge {
  font-size: 11px;
  letter-spacing: 3px;
  padding: 5px 16px;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 20px;
  margin-bottom: 18px;
}
.sh_hero-video__title {
  font-size: 34px;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.sh_hero-video__desc {
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.85;
  margin-bottom: 24px;
}
.sh_hero-video__cta {
  display: inline-block;
  font-size: 13px;
  color: #fff;
  text-decoration: none;
  padding: 10px 28px;
  border: 1px solid #fff;
  border-radius: 4px;
  transition: background 0.3s ease, color 0.3s ease;
}
.sh_hero-video__cta:hover {
  background: #fff;
  color: #2d2420;
}
```

---

### 1-3. 좌우 스플릿 (이미지 50% | 텍스트 50%)

**용도**: 제품 이미지와 핵심 설명을 나란히 배치하여 정보 전달력을 높이는 레이아웃
**특징**: 좌측 이미지 / 우측 텍스트 플렉스 배치, 모바일에서 수직 스택 전환

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px;">
  <div class="sh_hero-split">
    <div class="sh_hero-split__image">
      <img src="https://dummyimage.com/300x400" alt="제품 이미지" />
    </div>
    <div class="sh_hero-split__text">
      <p class="sh_hero-split__category font-w500 color_coral">BEST SELLER</p>
      <h2 class="sh_hero-split__title font-w700 color_dark_brown">우리 아이<br/>첫 슬리핑백</h2>
      <p class="sh_hero-split__desc font-w300 color_dark_brown">
        엄마 뱃속처럼 포근하게 감싸주는 디자인으로
        신생아부터 24개월까지 사용할 수 있습니다.
      </p>
      <ul class="sh_hero-split__features">
        <li class="font-w400">✓ OEKO-TEX 인증 원단</li>
        <li class="font-w400">✓ 양방향 지퍼</li>
        <li class="font-w400">✓ 사계절 사용 가능</li>
      </ul>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_hero-split {
  display: flex;
  flex-direction: row;
  max-width: 600px;
  margin: 0 auto;
  min-height: 360px;
}
.sh_hero-split__image {
  flex: 1;
  min-width: 0;
}
.sh_hero-split__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.sh_hero-split__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 28px;
  min-width: 0;
}
.sh_hero-split__category {
  font-size: 11px;
  letter-spacing: 2px;
  margin-bottom: 12px;
}
.sh_hero-split__title {
  font-size: 24px;
  line-height: 1.35;
  margin-bottom: 14px;
}
.sh_hero-split__desc {
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: 18px;
  opacity: 0.85;
}
.sh_hero-split__features {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sh_hero-split__features li {
  font-size: 12.5px;
  color: #A38068;
  margin-bottom: 6px;
}
@media (max-width: 480px) {
  .sh_hero-split {
    flex-direction: column;
  }
  .sh_hero-split__image {
    aspect-ratio: 4 / 3;
  }
  .sh_hero-split__text {
    padding: 28px 24px;
  }
}
```

---

### 1-4. 캐러셀 슬라이드 히어로

**용도**: 여러 장의 제품 이미지를 슬라이드로 보여주는 히어로 배너
**특징**: CSS scroll-snap 기반 수평 슬라이드 + 하단 도트 인디케이터

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px;">
  <div class="sh_hero-carousel">
    <div class="sh_hero-carousel__track" id="shCarouselTrack">
      <div class="sh_hero-carousel__slide">
        <img src="https://dummyimage.com/600x400" alt="슬라이드 1" />
        <div class="sh_hero-carousel__caption">
          <h3 class="font-w700">포근한 잠자리의 시작</h3>
          <p class="font-w300">슬리핑백 컬렉션</p>
        </div>
      </div>
      <div class="sh_hero-carousel__slide">
        <img src="https://dummyimage.com/600x400" alt="슬라이드 2" />
        <div class="sh_hero-carousel__caption">
          <h3 class="font-w700">안전한 수면 습관</h3>
          <p class="font-w300">스와들 스트랩</p>
        </div>
      </div>
      <div class="sh_hero-carousel__slide">
        <img src="https://dummyimage.com/600x400" alt="슬라이드 3" />
        <div class="sh_hero-carousel__caption">
          <h3 class="font-w700">사계절 내내 편안하게</h3>
          <p class="font-w300">올시즌 라인업</p>
        </div>
      </div>
    </div>
    <div class="sh_hero-carousel__dots" id="shCarouselDots">
      <span class="sh_hero-carousel__dot sh_hero-carousel__dot--active" data-index="0"></span>
      <span class="sh_hero-carousel__dot" data-index="1"></span>
      <span class="sh_hero-carousel__dot" data-index="2"></span>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_hero-carousel {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}
.sh_hero-carousel__track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.sh_hero-carousel__track::-webkit-scrollbar {
  display: none;
}
.sh_hero-carousel__slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  position: relative;
}
.sh_hero-carousel__slide img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  display: block;
}
.sh_hero-carousel__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 24px 50px;
  background: linear-gradient(to top, rgba(45,36,32,0.6), transparent);
  color: #fff;
  text-align: center;
}
.sh_hero-carousel__caption h3 {
  font-size: 22px;
  margin-bottom: 6px;
}
.sh_hero-carousel__caption p {
  font-size: 13px;
  opacity: 0.85;
}
.sh_hero-carousel__dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
}
.sh_hero-carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}
.sh_hero-carousel__dot--active {
  background: #fff;
  transform: scale(1.2);
}
```

**추가 JS**:
```js
(function() {
  var track = document.getElementById('shCarouselTrack');
  var dots = document.querySelectorAll('#shCarouselDots .sh_hero-carousel__dot');
  if (!track || !dots.length) return;

  track.addEventListener('scroll', function() {
    var slideWidth = track.offsetWidth;
    var index = Math.round(track.scrollLeft / slideWidth);
    dots.forEach(function(dot, i) {
      dot.classList.toggle('sh_hero-carousel__dot--active', i === index);
    });
  });

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var index = parseInt(this.getAttribute('data-index'), 10);
      track.scrollTo({ left: index * track.offsetWidth, behavior: 'smooth' });
    });
  });
})();
```

---

### 1-5. 그라데이션 오버레이 히어로

**용도**: 브랜드 컬러 그라데이션을 이미지 위에 덮어 고급스러운 분위기 연출
**특징**: 브라운 톤 그라데이션 오버레이 + 대형 중앙 정렬 텍스트

**HTML**:
```html
<div class="detail_section bg-color-black" style="margin-bottom: 0px;">
  <div class="sh_hero-gradient">
    <img src="https://dummyimage.com/600x500" alt="배경 이미지" class="sh_hero-gradient__bg" />
    <div class="sh_hero-gradient__overlay"></div>
    <div class="sh_hero-gradient__content">
      <p class="sh_hero-gradient__eyebrow font-w400">SUNDAY HUG</p>
      <h2 class="sh_hero-gradient__title font-w800">
        매일 밤,<br/>
        아이에게 주는<br/>
        <span class="sh_hero-gradient__accent">특별한 선물</span>
      </h2>
      <p class="sh_hero-gradient__desc font-w300">
        썬데이허그와 함께하는 편안한 수면 루틴
      </p>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_hero-gradient {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}
.sh_hero-gradient__bg {
  width: 100%;
  aspect-ratio: 6 / 5;
  object-fit: cover;
  display: block;
}
.sh_hero-gradient__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(163, 128, 104, 0.85) 0%,
    rgba(45, 36, 32, 0.7) 50%,
    rgba(45, 36, 32, 0.9) 100%
  );
}
.sh_hero-gradient__content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 30px;
  color: #fff;
}
.sh_hero-gradient__eyebrow {
  font-size: 11px;
  letter-spacing: 4px;
  margin-bottom: 20px;
  opacity: 0.7;
}
.sh_hero-gradient__title {
  font-size: 30px;
  line-height: 1.4;
  margin-bottom: 18px;
}
.sh_hero-gradient__accent {
  color: #ff8605;
}
.sh_hero-gradient__desc {
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.6;
}
```

---

### 1-6. 미니멀 텍스트 온리

**용도**: 이미지 없이 타이포그래피만으로 브랜드 메시지를 전달하는 히어로
**특징**: 큰 세리프 타이틀 + 작은 산세리프 설명, 여백 중심 클린 디자인

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px;">
  <div class="sh_hero-minimal">
    <p class="sh_hero-minimal__label font-w500">썬데이허그 슬리핑백</p>
    <div class="sh_hero-minimal__divider"></div>
    <h2 class="sh_hero-minimal__title font-w400">
      잠든 아이의 얼굴에<br/>
      미소가 번지는 이유
    </h2>
    <p class="sh_hero-minimal__desc font-w300">
      세상에서 가장 편안한 소재, 가장 안전한 설계.<br/>
      썬데이허그가 수면의 질을 바꿉니다.
    </p>
    <p class="sh_hero-minimal__scroll font-w300">아래로 스크롤하세요 ↓</p>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_hero-minimal {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 30px 60px;
  text-align: center;
  color: #2d2420;
}
.sh_hero-minimal__label {
  font-size: 12px;
  letter-spacing: 3px;
  color: #A38068;
  margin-bottom: 20px;
}
.sh_hero-minimal__divider {
  width: 40px;
  height: 1px;
  background: #A38068;
  margin: 0 auto 30px;
}
.sh_hero-minimal__title {
  font-family: 'Noto Serif KR', serif;
  font-size: 28px;
  line-height: 1.55;
  margin-bottom: 22px;
  color: #2d2420;
}
.sh_hero-minimal__desc {
  font-size: 14px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 50px;
}
.sh_hero-minimal__scroll {
  font-size: 12px;
  color: #aaa;
  letter-spacing: 1px;
  animation: sh_hero-minimal-bounce 2s ease-in-out infinite;
}
@keyframes sh_hero-minimal-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
```

---

### 1-7. 스크롤 리빌 히어로

**용도**: 스크롤 시 텍스트가 순차적으로 페이드인되며 나타나는 인터랙티브 히어로
**특징**: IntersectionObserver 기반 페이드인 애니메이션, 요소별 딜레이 적용

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px;">
  <div class="sh_hero-reveal">
    <div class="sh_hero-reveal__inner">
      <p class="sh_hero-reveal__item font-w400" data-sh-reveal data-sh-delay="0">Sunday Hug</p>
      <h2 class="sh_hero-reveal__item sh_hero-reveal__heading font-w700" data-sh-reveal data-sh-delay="150">
        아기의 잠은<br/>곧 엄마의 휴식입니다
      </h2>
      <div class="sh_hero-reveal__item sh_hero-reveal__line" data-sh-reveal data-sh-delay="300"></div>
      <p class="sh_hero-reveal__item sh_hero-reveal__body font-w300" data-sh-reveal data-sh-delay="400">
        깊고 편안한 수면은 아이의 성장 발달은 물론<br/>
        부모의 삶의 질까지 바꿉니다.<br/>
        썬데이허그는 과학적 설계로 수면 환경을 완성합니다.
      </p>
      <img src="https://dummyimage.com/520x300" alt="제품 이미지" class="sh_hero-reveal__item sh_hero-reveal__image" data-sh-reveal data-sh-delay="550" />
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_hero-reveal {
  max-width: 600px;
  margin: 0 auto;
  padding: 70px 28px 50px;
  text-align: center;
  color: #2d2420;
}
.sh_hero-reveal__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sh_hero-reveal__item {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.sh_hero-reveal__item.sh_hero-reveal--visible {
  opacity: 1;
  transform: translateY(0);
}
.sh_hero-reveal__item:first-child {
  font-size: 12px;
  letter-spacing: 3px;
  color: #A38068;
  margin-bottom: 16px;
}
.sh_hero-reveal__heading {
  font-size: 26px;
  line-height: 1.45;
  margin-bottom: 20px;
}
.sh_hero-reveal__line {
  width: 50px;
  height: 2px;
  background: #A38068;
  margin-bottom: 20px;
}
.sh_hero-reveal__body {
  font-size: 14px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 36px;
}
.sh_hero-reveal__image {
  width: 90%;
  border-radius: 8px;
  object-fit: cover;
}
```

**추가 JS**:
```js
(function() {
  var items = document.querySelectorAll('[data-sh-reveal]');
  if (!items.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var delay = parseInt(entry.target.getAttribute('data-sh-delay') || '0', 10);
        setTimeout(function() {
          entry.target.classList.add('sh_hero-reveal--visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function(item) {
    observer.observe(item);
  });
})();
```

---

## CATEGORY 2: 스토리텔링/감성 섹션

---

### 2-1. 문제-해결 구조 (Pain -> Solution)

**용도**: 육아 고충(Pain)을 먼저 보여주고 제품이 해결책(Solution)임을 드라마틱하게 전달
**특징**: 어두운 Pain 영역 -> 밝은 Solution 영역으로 시각적 대비 전환

**HTML**:
```html
<!-- Pain 섹션 -->
<div class="detail_section bg-color-black" style="margin-bottom: 0px;">
  <div class="sh_story-pain">
    <div class="sh_story-pain__icon">😰</div>
    <h3 class="sh_story-pain__title font-w700 color_white">밤마다 반복되는 고민</h3>
    <ul class="sh_story-pain__list">
      <li class="font-w300">
        <span class="sh_story-pain__x">✕</span>
        이불을 걷어차서 밤새 덮어줘야 해요
      </li>
      <li class="font-w300">
        <span class="sh_story-pain__x">✕</span>
        뒤집기 시작하면서 잠이 불안해졌어요
      </li>
      <li class="font-w300">
        <span class="sh_story-pain__x">✕</span>
        자다 깨서 우는 횟수가 늘었어요
      </li>
    </ul>
  </div>
</div>
<!-- Solution 섹션 -->
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px;">
  <div class="sh_story-solution">
    <div class="sh_story-solution__badge font-w600">SOLUTION</div>
    <h3 class="sh_story-solution__title font-w700 color_dark_brown">썬데이허그가<br/>해답입니다</h3>
    <p class="sh_story-solution__desc font-w300">
      체온 조절 소재와 인체공학적 설계로<br/>
      아이가 밤새 편안하게 잘 수 있도록 도와줍니다.
    </p>
    <div class="sh_story-solution__features">
      <div class="sh_story-solution__feat">
        <div class="sh_story-solution__check">✓</div>
        <p class="font-w400">이불 걷어참 방지</p>
      </div>
      <div class="sh_story-solution__feat">
        <div class="sh_story-solution__check">✓</div>
        <p class="font-w400">안정적 수면 자세 유지</p>
      </div>
      <div class="sh_story-solution__feat">
        <div class="sh_story-solution__check">✓</div>
        <p class="font-w400">야간 기상 횟수 감소</p>
      </div>
    </div>
    <img src="https://dummyimage.com/520x340" alt="제품 솔루션" class="sh_story-solution__img" />
  </div>
</div>
```

**추가 CSS**:
```css
.sh_story-pain {
  max-width: 600px;
  margin: 0 auto;
  padding: 56px 30px;
  text-align: center;
}
.sh_story-pain__icon {
  font-size: 36px;
  margin-bottom: 18px;
}
.sh_story-pain__title {
  font-size: 22px;
  margin-bottom: 28px;
}
.sh_story-pain__list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  max-width: 380px;
  margin: 0 auto;
}
.sh_story-pain__list li {
  font-size: 14px;
  color: rgba(255,255,255,0.8);
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  gap: 12px;
}
.sh_story-pain__x {
  color: #ff6b6b;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.sh_story-solution {
  max-width: 600px;
  margin: 0 auto;
  padding: 56px 30px;
  text-align: center;
}
.sh_story-solution__badge {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 3px;
  color: #fff;
  background: #A38068;
  padding: 5px 18px;
  border-radius: 20px;
  margin-bottom: 20px;
}
.sh_story-solution__title {
  font-size: 24px;
  line-height: 1.4;
  margin-bottom: 14px;
}
.sh_story-solution__desc {
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin-bottom: 30px;
}
.sh_story-solution__features {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 34px;
  flex-wrap: wrap;
}
.sh_story-solution__feat {
  text-align: center;
}
.sh_story-solution__check {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #A38068;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  font-size: 16px;
  font-weight: 700;
}
.sh_story-solution__feat p {
  font-size: 12.5px;
  color: #2d2420;
}
.sh_story-solution__img {
  width: 90%;
  border-radius: 8px;
  object-fit: cover;
}
```

---

### 2-2. 타임라인/여정 형식

**용도**: 아이의 성장 단계별 사용법이나 브랜드 히스토리를 타임라인으로 표현
**특징**: 수직 연결선 + 도트 포인트 + 좌측 정렬 이벤트 카드

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px;">
  <div class="sh_story-timeline">
    <h3 class="sh_story-timeline__heading font-w700 color_dark_brown txtcenter">아이의 성장에 맞춘 수면 솔루션</h3>
    <p class="sh_story-timeline__subheading font-w300 txtcenter">단계별로 최적화된 슬리핑백을 만나보세요</p>

    <div class="sh_story-timeline__track">
      <div class="sh_story-timeline__line"></div>

      <div class="sh_story-timeline__item">
        <div class="sh_story-timeline__dot"></div>
        <div class="sh_story-timeline__card">
          <span class="sh_story-timeline__time font-w600">0 ~ 3개월</span>
          <h4 class="font-w600">신생아 스와들링</h4>
          <p class="font-w300">모로반사를 잡아주는 스와들 스트랩으로 안정적인 수면 환경을 만들어줍니다.</p>
          <img src="https://dummyimage.com/460x200" alt="0-3개월" />
        </div>
      </div>

      <div class="sh_story-timeline__item">
        <div class="sh_story-timeline__dot"></div>
        <div class="sh_story-timeline__card">
          <span class="sh_story-timeline__time font-w600">3 ~ 12개월</span>
          <h4 class="font-w600">슬리핑백 전환</h4>
          <p class="font-w300">뒤집기를 시작하면 양팔이 자유로운 슬리핑백으로 전환해주세요.</p>
          <img src="https://dummyimage.com/460x200" alt="3-12개월" />
        </div>
      </div>

      <div class="sh_story-timeline__item">
        <div class="sh_story-timeline__dot"></div>
        <div class="sh_story-timeline__card">
          <span class="sh_story-timeline__time font-w600">12 ~ 24개월</span>
          <h4 class="font-w600">워킹 슬리핑백</h4>
          <p class="font-w300">걸어다니는 시기에 맞춘 다리 분리형 디자인으로 활동성과 보온성 모두 충족.</p>
          <img src="https://dummyimage.com/460x200" alt="12-24개월" />
        </div>
      </div>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_story-timeline {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 28px;
}
.sh_story-timeline__heading {
  font-size: 22px;
  margin-bottom: 8px;
}
.sh_story-timeline__subheading {
  font-size: 13px;
  color: #999;
  margin-bottom: 40px;
}
.sh_story-timeline__track {
  position: relative;
  padding-left: 28px;
}
.sh_story-timeline__line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 9px;
  width: 2px;
  background: #EAE2D5;
}
.sh_story-timeline__item {
  position: relative;
  margin-bottom: 36px;
}
.sh_story-timeline__item:last-child {
  margin-bottom: 0;
}
.sh_story-timeline__dot {
  position: absolute;
  left: -28px;
  top: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #A38068;
  z-index: 1;
}
.sh_story-timeline__card {
  background: #FFFBF5;
  border-radius: 10px;
  padding: 22px;
}
.sh_story-timeline__time {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 1px;
  color: #A38068;
  margin-bottom: 8px;
}
.sh_story-timeline__card h4 {
  font-size: 16px;
  color: #2d2420;
  margin-bottom: 8px;
}
.sh_story-timeline__card p {
  font-size: 13px;
  line-height: 1.7;
  color: #666;
  margin-bottom: 14px;
}
.sh_story-timeline__card img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}
```

---

### 2-3. 대형 인용문 블록

**용도**: 고객 후기, 전문가 코멘트, 브랜드 철학 문구를 감성적으로 강조
**특징**: 대형 따옴표 장식 + 세리프 폰트 인용문 + 부드러운 배경색

**HTML**:
```html
<div class="detail_section bg-color-oat" style="margin-bottom: 0px;">
  <div class="sh_story-quote">
    <div class="sh_story-quote__mark">"</div>
    <blockquote class="sh_story-quote__text font-w400">
      슬리핑백을 쓰고 나서부터<br/>
      아이가 밤에 한 번도 안 깨요.<br/>
      진작 쓸 걸 그랬어요.
    </blockquote>
    <div class="sh_story-quote__author">
      <div class="sh_story-quote__avatar">
        <img src="https://dummyimage.com/48x48" alt="프로필" />
      </div>
      <div>
        <p class="sh_story-quote__name font-w600">김지현 맘</p>
        <p class="sh_story-quote__info font-w300">12개월 아기 엄마 · 슬리핑백 M 사용</p>
      </div>
    </div>
    <div class="sh_story-quote__stars">★★★★★</div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_story-quote {
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 36px;
  text-align: center;
}
.sh_story-quote__mark {
  font-family: Georgia, 'Noto Serif KR', serif;
  font-size: 80px;
  line-height: 1;
  color: #A38068;
  opacity: 0.4;
  margin-bottom: -10px;
}
.sh_story-quote__text {
  font-family: 'Noto Serif KR', serif;
  font-size: 20px;
  line-height: 1.7;
  color: #2d2420;
  margin-bottom: 30px;
  font-style: italic;
}
.sh_story-quote__author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 14px;
}
.sh_story-quote__avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.sh_story-quote__name {
  font-size: 14px;
  color: #2d2420;
  text-align: left;
}
.sh_story-quote__info {
  font-size: 12px;
  color: #999;
  text-align: left;
}
.sh_story-quote__stars {
  font-size: 16px;
  color: #ff8605;
  letter-spacing: 2px;
}
```

---

### 2-4. 브랜드 철학/미션

**용도**: 브랜드의 핵심 가치와 철학을 대형 텍스트로 감성적으로 전달
**특징**: 핵심 문구 하이라이트 처리 + 여백 중심의 미니멀 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px;">
  <div class="sh_story-mission">
    <p class="sh_story-mission__label font-w500">OUR PHILOSOPHY</p>
    <h2 class="sh_story-mission__title font-w400">
      우리는 믿습니다.<br/>
      <span class="sh_story-mission__highlight">좋은 잠이 좋은 하루를</span> 만든다는 것을.<br/>
      아이의 첫 수면 습관이<br/>
      <span class="sh_story-mission__highlight">평생의 건강을 결정</span>한다는 것을.
    </h2>
    <div class="sh_story-mission__divider"></div>
    <p class="sh_story-mission__desc font-w300">
      썬데이허그는 소아수면 전문가와 함께<br/>
      아기의 수면 과학을 연구합니다.<br/>
      안전하고 편안한 수면 환경을 위해<br/>
      소재 하나, 봉제선 하나까지 고집합니다.
    </p>
    <div class="sh_story-mission__values">
      <div class="sh_story-mission__value">
        <p class="sh_story-mission__value-title font-w600">안전</p>
        <p class="sh_story-mission__value-desc font-w300">글로벌 인증 기준<br/>충족 소재</p>
      </div>
      <div class="sh_story-mission__value">
        <p class="sh_story-mission__value-title font-w600">과학</p>
        <p class="sh_story-mission__value-desc font-w300">수면 전문가 공동<br/>연구 설계</p>
      </div>
      <div class="sh_story-mission__value">
        <p class="sh_story-mission__value-title font-w600">사랑</p>
        <p class="sh_story-mission__value-desc font-w300">부모 마음으로<br/>만드는 제품</p>
      </div>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_story-mission {
  max-width: 600px;
  margin: 0 auto;
  padding: 64px 30px;
  text-align: center;
  color: #2d2420;
}
.sh_story-mission__label {
  font-size: 11px;
  letter-spacing: 4px;
  color: #A38068;
  margin-bottom: 28px;
}
.sh_story-mission__title {
  font-family: 'Noto Serif KR', serif;
  font-size: 21px;
  line-height: 1.7;
  margin-bottom: 28px;
}
.sh_story-mission__highlight {
  background: linear-gradient(to top, rgba(163,128,104,0.2) 40%, transparent 40%);
  padding: 0 2px;
}
.sh_story-mission__divider {
  width: 40px;
  height: 1px;
  background: #A38068;
  margin: 0 auto 28px;
}
.sh_story-mission__desc {
  font-size: 14px;
  line-height: 1.85;
  color: #777;
  margin-bottom: 44px;
}
.sh_story-mission__values {
  display: flex;
  justify-content: center;
  gap: 32px;
}
.sh_story-mission__value {
  flex: 1;
  max-width: 140px;
}
.sh_story-mission__value-title {
  font-size: 16px;
  color: #A38068;
  margin-bottom: 6px;
}
.sh_story-mission__value-desc {
  font-size: 12px;
  color: #999;
  line-height: 1.6;
}
```

---

### 2-5. 숫자 통계 강조 (3열)

**용도**: 판매 수치, 만족도, 수상 이력 등 신뢰도 높이는 핵심 숫자를 강조
**특징**: 3열 그리드 대형 숫자 + 단위 표시 + 카운터 스타일 디자인

**HTML**:
```html
<div class="detail_section bg-color-oat" style="margin-bottom: 0px;">
  <div class="sh_story-stats">
    <h3 class="sh_story-stats__heading font-w700 color_dark_brown txtcenter">숫자로 증명하는 썬데이허그</h3>
    <p class="sh_story-stats__subheading font-w300 txtcenter">많은 부모님들이 이미 선택했습니다</p>
    <div class="sh_story-stats__grid">
      <div class="sh_story-stats__item">
        <p class="sh_story-stats__number font-w800">
          <span class="sh_story-stats__num" data-sh-count="150000">150,000</span>
          <span class="sh_story-stats__unit font-w400">+</span>
        </p>
        <p class="sh_story-stats__label font-w400">누적 판매량</p>
      </div>
      <div class="sh_story-stats__item">
        <p class="sh_story-stats__number font-w800">
          <span class="sh_story-stats__num" data-sh-count="98.7">98.7</span>
          <span class="sh_story-stats__unit font-w400">%</span>
        </p>
        <p class="sh_story-stats__label font-w400">고객 만족도</p>
      </div>
      <div class="sh_story-stats__item">
        <p class="sh_story-stats__number font-w800">
          <span class="sh_story-stats__num" data-sh-count="12">12</span>
          <span class="sh_story-stats__unit font-w400">관</span>
        </p>
        <p class="sh_story-stats__label font-w400">국제 인증 획득</p>
      </div>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_story-stats {
  max-width: 600px;
  margin: 0 auto;
  padding: 56px 24px;
}
.sh_story-stats__heading {
  font-size: 22px;
  margin-bottom: 8px;
}
.sh_story-stats__subheading {
  font-size: 13px;
  color: #999;
  margin-bottom: 40px;
}
.sh_story-stats__grid {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.sh_story-stats__item {
  flex: 1;
  text-align: center;
  background: #fff;
  border-radius: 12px;
  padding: 28px 12px;
}
.sh_story-stats__number {
  font-size: 32px;
  color: #A38068;
  margin-bottom: 8px;
  line-height: 1;
}
.sh_story-stats__unit {
  font-size: 18px;
  color: #A38068;
}
.sh_story-stats__label {
  font-size: 12.5px;
  color: #666;
}
```

---

### 2-6. 편지/메시지 스타일

**용도**: 브랜드에서 부모에게 보내는 진심 어린 메시지를 편지 형식으로 전달
**특징**: 편지 프레임 + 필기체 느낌 레이아웃 + 인사말/마무리 형식

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px;">
  <div class="sh_story-letter">
    <div class="sh_story-letter__envelope">
      <div class="sh_story-letter__stamp">Sunday Hug</div>
      <p class="sh_story-letter__to font-w400">사랑하는 엄마, 아빠에게</p>
      <div class="sh_story-letter__body font-w300">
        <p>안녕하세요, 썬데이허그입니다.</p>
        <p>
          아이를 재우는 일이 얼마나 힘들고,
          또 얼마나 소중한 시간인지 저희는 잘 알고 있습니다.
        </p>
        <p>
          그래서 저희는 단 하나의 제품을 만들더라도
          <em class="sh_story-letter__em">"내 아이에게 쓸 수 있을까?"</em>를
          기준으로 생각합니다.
        </p>
        <p>
          까다롭게 고른 원단, 수십 번의 테스트,
          수면 전문가의 검증을 거쳐 비로소
          여러분의 손에 닿게 됩니다.
        </p>
        <p>
          오늘 밤, 아이가 편히 잠들 수 있기를 바랍니다.
        </p>
      </div>
      <div class="sh_story-letter__sign">
        <p class="sh_story-letter__closing font-w400">늘 응원하며,</p>
        <p class="sh_story-letter__signature font-w600">썬데이허그 팀 드림</p>
      </div>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_story-letter {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 24px;
}
.sh_story-letter__envelope {
  background: #fff;
  border-radius: 12px;
  padding: 44px 32px 40px;
  box-shadow: 0 2px 20px rgba(163,128,104,0.08);
  position: relative;
}
.sh_story-letter__stamp {
  position: absolute;
  top: 20px;
  right: 24px;
  font-size: 10px;
  letter-spacing: 2px;
  color: #A38068;
  border: 1.5px solid #A38068;
  padding: 4px 10px;
  border-radius: 3px;
  opacity: 0.6;
}
.sh_story-letter__to {
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  color: #2d2420;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #EAE2D5;
}
.sh_story-letter__body {
  font-size: 14px;
  line-height: 2;
  color: #555;
}
.sh_story-letter__body p {
  margin-bottom: 16px;
}
.sh_story-letter__em {
  color: #A38068;
  font-style: normal;
  font-weight: 500;
}
.sh_story-letter__sign {
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid #EAE2D5;
  text-align: right;
}
.sh_story-letter__closing {
  font-size: 13px;
  color: #999;
  margin-bottom: 6px;
}
.sh_story-letter__signature {
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: #A38068;
}
```

---

### 2-7. 스토리 스크롤 (이미지 + 텍스트 교차)

**용도**: 이미지와 텍스트를 좌우 교차 배치하여 지그재그 스토리텔링 흐름 구성
**특징**: 홀수 행 이미지 좌-텍스트 우, 짝수 행 텍스트 좌-이미지 우 교차 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-white" style="margin-bottom: 0px;">
  <div class="sh_story-zigzag">
    <h3 class="sh_story-zigzag__heading font-w700 color_dark_brown txtcenter">이렇게 만들어집니다</h3>
    <p class="sh_story-zigzag__subheading font-w300 txtcenter">썬데이허그의 꼼꼼한 제작 과정</p>

    <!-- Row 1: 이미지 좌 | 텍스트 우 -->
    <div class="sh_story-zigzag__row">
      <div class="sh_story-zigzag__img">
        <img src="https://dummyimage.com/280x280" alt="원단 선별" />
      </div>
      <div class="sh_story-zigzag__text">
        <span class="sh_story-zigzag__step font-w600">STEP 01</span>
        <h4 class="font-w700">프리미엄 원단 선별</h4>
        <p class="font-w300">OEKO-TEX 인증을 받은 유기농 면만을 엄선하여 아이의 민감한 피부를 보호합니다.</p>
      </div>
    </div>

    <!-- Row 2: 텍스트 좌 | 이미지 우 (reverse) -->
    <div class="sh_story-zigzag__row sh_story-zigzag__row--reverse">
      <div class="sh_story-zigzag__img">
        <img src="https://dummyimage.com/280x280" alt="패턴 설계" />
      </div>
      <div class="sh_story-zigzag__text">
        <span class="sh_story-zigzag__step font-w600">STEP 02</span>
        <h4 class="font-w700">인체공학 패턴 설계</h4>
        <p class="font-w300">아이의 골격 구조와 수면 자세를 분석한 데이터를 기반으로 패턴을 설계합니다.</p>
      </div>
    </div>

    <!-- Row 3: 이미지 좌 | 텍스트 우 -->
    <div class="sh_story-zigzag__row">
      <div class="sh_story-zigzag__img">
        <img src="https://dummyimage.com/280x280" alt="품질 검사" />
      </div>
      <div class="sh_story-zigzag__text">
        <span class="sh_story-zigzag__step font-w600">STEP 03</span>
        <h4 class="font-w700">3단계 품질 검사</h4>
        <p class="font-w300">봉제 강도, 지퍼 안전성, 세탁 내구성까지 까다로운 삼중 검수를 통과해야 출고됩니다.</p>
      </div>
    </div>

    <!-- Row 4: 텍스트 좌 | 이미지 우 (reverse) -->
    <div class="sh_story-zigzag__row sh_story-zigzag__row--reverse">
      <div class="sh_story-zigzag__img">
        <img src="https://dummyimage.com/280x280" alt="포장 배송" />
      </div>
      <div class="sh_story-zigzag__text">
        <span class="sh_story-zigzag__step font-w600">STEP 04</span>
        <h4 class="font-w700">정성 가득 포장</h4>
        <p class="font-w300">선물처럼 정성스럽게 포장하여 받는 순간부터 특별한 경험이 시작됩니다.</p>
      </div>
    </div>
  </div>
</div>
```

**추가 CSS**:
```css
.sh_story-zigzag {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 24px;
}
.sh_story-zigzag__heading {
  font-size: 22px;
  margin-bottom: 8px;
}
.sh_story-zigzag__subheading {
  font-size: 13px;
  color: #999;
  margin-bottom: 40px;
}
.sh_story-zigzag__row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
}
.sh_story-zigzag__row:last-child {
  margin-bottom: 0;
}
.sh_story-zigzag__row--reverse {
  flex-direction: row-reverse;
}
.sh_story-zigzag__img {
  flex: 0 0 46%;
}
.sh_story-zigzag__img img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}
.sh_story-zigzag__text {
  flex: 1;
  min-width: 0;
}
.sh_story-zigzag__step {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 2px;
  color: #A38068;
  margin-bottom: 8px;
}
.sh_story-zigzag__text h4 {
  font-size: 17px;
  color: #2d2420;
  margin-bottom: 8px;
}
.sh_story-zigzag__text p {
  font-size: 13px;
  line-height: 1.7;
  color: #777;
}
@media (max-width: 420px) {
  .sh_story-zigzag__row,
  .sh_story-zigzag__row--reverse {
    flex-direction: column;
  }
  .sh_story-zigzag__img {
    flex: none;
    width: 100%;
  }
}
```

---

That completes all 14 templates across the two categories. Here is a summary of what was generated:

**Category 1 - Hero/Intro Sections (7 templates)**:
- **1-1**: Full-screen image with bottom gradient overlay and centered text
- **1-2**: Autoplay muted video background with poster fallback and CTA button
- **1-3**: 50/50 flexbox split (image left, text right) that stacks on mobile
- **1-4**: CSS scroll-snap carousel with dot indicators and JS scroll tracking
- **1-5**: Brand-color gradient (brown tones at 135deg) over a background image
- **1-6**: Typography-only hero with serif title, divider line, and bounce-scroll hint
- **1-7**: IntersectionObserver-driven sequential fade-in with per-element delay

**Category 2 - Storytelling/Emotion Sections (7 templates)**:
- **2-1**: Dark pain section with X markers transitioning to light solution section with checkmarks
- **2-2**: Vertical timeline with connecting line, dot markers, and content cards per growth stage
- **2-3**: Large decorative quotation mark with serif blockquote, author avatar, and star rating
- **2-4**: Brand philosophy with underline-highlight on key phrases and 3-column value pillars
- **2-5**: Three-column stat cards with large numbers, units, and labels on oat background
- **2-6**: Letter-format card with stamp, greeting, body paragraphs, and sign-off signature
- **2-7**: Zigzag alternating image/text rows with flex-direction reverse and mobile stack fallback

All templates follow the constraints: `max-width: 600px`, `sh_` prefix for new CSS classes, `detail_section` wrapper pattern, brand colors (#A38068, #2d2420, #ff8605, #FFFBF5, #EAE2D5), dummy images from dummyimage.com, and smooth CSS transitions only (no heavy animations).

## CATEGORY 3: 제품 특징/기능 섹션

---

### 3-1. 아이콘 그리드 (2열)

**용도**: 제품의 주요 특징을 아이콘과 함께 2열 그리드로 한눈에 보여주는 섹션
**특징**: 원형 아이콘 + 제목 + 설명의 카드형 2열 레이아웃, 부드러운 그림자 효과

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 3px; margin-bottom: 12px;">
        KEY FEATURES
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        이런 점이 특별해요
    </div>
    <div class="sh_icon-grid-2col" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 560px; margin: 0 auto;">
        <!-- Card 1 -->
        <div style="background: #fff; border-radius: 16px; padding: 28px 20px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #f5f0e8, #ede3d8);
                        border-radius: 50%; display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 14px; font-size: 26px;">🌿</div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 6px;">오가닉 소재</div>
            <div style="font-size: 13px; color: #888; line-height: 1.6;">GOTS 인증 유기농<br/>코튼 100% 사용</div>
        </div>
        <!-- Card 2 -->
        <div style="background: #fff; border-radius: 16px; padding: 28px 20px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #f5f0e8, #ede3d8);
                        border-radius: 50%; display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 14px; font-size: 26px;">🛡️</div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 6px;">안전 설계</div>
            <div style="font-size: 13px; color: #888; line-height: 1.6;">KC 안전 인증 완료<br/>유해물질 ZERO</div>
        </div>
        <!-- Card 3 -->
        <div style="background: #fff; border-radius: 16px; padding: 28px 20px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #f5f0e8, #ede3d8);
                        border-radius: 50%; display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 14px; font-size: 26px;">🌡️</div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 6px;">온도 조절</div>
            <div style="font-size: 13px; color: #888; line-height: 1.6;">체온 조절 기능으로<br/>사계절 쾌적하게</div>
        </div>
        <!-- Card 4 -->
        <div style="background: #fff; border-radius: 16px; padding: 28px 20px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #f5f0e8, #ede3d8);
                        border-radius: 50%; display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 14px; font-size: 26px;">🧺</div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 6px;">세탁 편의</div>
            <div style="font-size: 13px; color: #888; line-height: 1.6;">세탁기 사용 가능<br/>빠른 건조</div>
        </div>
    </div>
</div>
```

---

### 3-2. 아이콘 그리드 (3열)

**용도**: 제품 특징을 콤팩트한 3열 그리드로 빠르게 전달
**특징**: 아이콘 + 라벨의 미니멀 3열 레이아웃, 빠른 스캔 가능

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 40px 20px;">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 560px; margin: 0 auto;">
        <div style="background: #f8f6f4; border-radius: 12px; padding: 22px 10px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🌙</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">숙면 유도</div>
        </div>
        <div style="background: #f8f6f4; border-radius: 12px; padding: 22px 10px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🍃</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">자연 소재</div>
        </div>
        <div style="background: #f8f6f4; border-radius: 12px; padding: 22px 10px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">✅</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">KC 인증</div>
        </div>
        <div style="background: #f8f6f4; border-radius: 12px; padding: 22px 10px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🧵</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">이중 봉제</div>
        </div>
        <div style="background: #f8f6f4; border-radius: 12px; padding: 22px 10px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">💧</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">통기성</div>
        </div>
        <div style="background: #f8f6f4; border-radius: 12px; padding: 22px 10px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🔄</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">양면 사용</div>
        </div>
    </div>
</div>
```

---

### 3-3. 좌 이미지 + 우 텍스트 (교차 반복)

**용도**: 이미지와 텍스트를 교차 배치하여 스토리텔링하며 기능을 소개
**특징**: 지그재그 레이아웃, 모바일에서 세로 스택

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 40px 15px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 40px;">
        이 제품이 특별한 이유
    </div>
    <!-- Row 1: 이미지 좌 + 텍스트 우 -->
    <div class="sh_zigzag-row" style="display: flex; gap: 20px; align-items: center; margin-bottom: 30px;">
        <div style="flex: 1; border-radius: 12px; overflow: hidden;">
            <img src="https://dummyimage.com/280x280" alt="특징1" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block;">
        </div>
        <div style="flex: 1; padding: 10px 0;">
            <div style="display: inline-block; background: linear-gradient(135deg, #a38068, #8b6b56);
                        color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 11px;
                        font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">POINT 01</div>
            <div style="font-size: 20px; font-weight: 700; color: #2d2420; line-height: 1.4; margin-bottom: 10px;">
                360° 자유로운<br/>뒤집기 가능
            </div>
            <div style="font-size: 14px; color: #888; line-height: 1.7;">
                아기가 잠든 상태에서도 자유롭게 움직일 수 있는 구조 설계
            </div>
        </div>
    </div>
    <!-- Row 2: 텍스트 좌 + 이미지 우 -->
    <div class="sh_zigzag-row" style="display: flex; gap: 20px; align-items: center; flex-direction: row-reverse; margin-bottom: 30px;">
        <div style="flex: 1; border-radius: 12px; overflow: hidden;">
            <img src="https://dummyimage.com/280x280" alt="특징2" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block;">
        </div>
        <div style="flex: 1; padding: 10px 0;">
            <div style="display: inline-block; background: linear-gradient(135deg, #a38068, #8b6b56);
                        color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 11px;
                        font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">POINT 02</div>
            <div style="font-size: 20px; font-weight: 700; color: #2d2420; line-height: 1.4; margin-bottom: 10px;">
                3단계 사이즈<br/>조절 시스템
            </div>
            <div style="font-size: 14px; color: #888; line-height: 1.7;">
                성장에 맞춰 길이 조절이 가능한 스마트 디자인
            </div>
        </div>
    </div>
    <!-- Row 3: 이미지 좌 + 텍스트 우 -->
    <div class="sh_zigzag-row" style="display: flex; gap: 20px; align-items: center;">
        <div style="flex: 1; border-radius: 12px; overflow: hidden;">
            <img src="https://dummyimage.com/280x280" alt="특징3" style="width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block;">
        </div>
        <div style="flex: 1; padding: 10px 0;">
            <div style="display: inline-block; background: linear-gradient(135deg, #a38068, #8b6b56);
                        color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 11px;
                        font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">POINT 03</div>
            <div style="font-size: 20px; font-weight: 700; color: #2d2420; line-height: 1.4; margin-bottom: 10px;">
                YKK 지퍼로<br/>더욱 안전하게
            </div>
            <div style="font-size: 14px; color: #888; line-height: 1.7;">
                글로벌 No.1 YKK 지퍼와 지퍼 가드로 아기 피부를 보호
            </div>
        </div>
    </div>
</div>
```

**추가 CSS**:
```css
@media (max-width: 480px) {
    .sh_zigzag-row {
        flex-direction: column !important;
    }
}
```

---

### 3-4. 탭 전환 형식

**용도**: 여러 제품 특징을 탭으로 분류하여 깔끔하게 보여주는 섹션
**특징**: 탭 버튼으로 콘텐츠 전환, CSS+최소 JS로 구현

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 30px;">
        상세 기능 안내
    </div>
    <!-- Tab Buttons -->
    <div class="sh_tabs-nav" style="display: flex; gap: 8px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap;">
        <button class="sh_tab-btn sh_tab-btn--active" data-tab="tab1"
                style="padding: 10px 22px; border-radius: 25px; border: 1px solid #a38068;
                       background: #a38068; color: #fff; font-size: 13px; font-weight: 600;
                       cursor: pointer; transition: all 0.3s;">소재</button>
        <button class="sh_tab-btn" data-tab="tab2"
                style="padding: 10px 22px; border-radius: 25px; border: 1px solid #ddd;
                       background: #fff; color: #666; font-size: 13px; font-weight: 600;
                       cursor: pointer; transition: all 0.3s;">구조</button>
        <button class="sh_tab-btn" data-tab="tab3"
                style="padding: 10px 22px; border-radius: 25px; border: 1px solid #ddd;
                       background: #fff; color: #666; font-size: 13px; font-weight: 600;
                       cursor: pointer; transition: all 0.3s;">안전</button>
    </div>
    <!-- Tab Contents -->
    <div class="sh_tab-content sh_tab-content--active" id="tab1"
         style="max-width: 560px; margin: 0 auto;">
        <div style="border-radius: 16px; overflow: hidden;">
            <img src="https://dummyimage.com/560x380" alt="소재" style="width: 100%; display: block;">
        </div>
        <div style="padding: 25px 0;">
            <div style="font-size: 20px; font-weight: 700; color: #2d2420; margin-bottom: 10px;">프리미엄 오가닉 코튼</div>
            <div style="font-size: 14px; color: #666; line-height: 1.8;">
                GOTS 인증 유기농 코튼 100%로 아기 피부에 자극 없이 부드럽게 감싸줍니다.
                통기성이 뛰어나 사계절 쾌적한 수면 환경을 만들어 줍니다.
            </div>
        </div>
    </div>
    <div class="sh_tab-content" id="tab2"
         style="max-width: 560px; margin: 0 auto; display: none;">
        <div style="border-radius: 16px; overflow: hidden;">
            <img src="https://dummyimage.com/560x380" alt="구조" style="width: 100%; display: block;">
        </div>
        <div style="padding: 25px 0;">
            <div style="font-size: 20px; font-weight: 700; color: #2d2420; margin-bottom: 10px;">인체공학적 구조 설계</div>
            <div style="font-size: 14px; color: #666; line-height: 1.8;">
                아기의 자연스러운 수면 자세를 고려한 3D 입체 패턴으로 편안한 착용감을 제공합니다.
            </div>
        </div>
    </div>
    <div class="sh_tab-content" id="tab3"
         style="max-width: 560px; margin: 0 auto; display: none;">
        <div style="border-radius: 16px; overflow: hidden;">
            <img src="https://dummyimage.com/560x380" alt="안전" style="width: 100%; display: block;">
        </div>
        <div style="padding: 25px 0;">
            <div style="font-size: 20px; font-weight: 700; color: #2d2420; margin-bottom: 10px;">3중 안전 시스템</div>
            <div style="font-size: 14px; color: #666; line-height: 1.8;">
                YKK 지퍼 가드, 넉넉한 발 공간, 목 부분 안전 스냅으로 안전하게 설계했습니다.
            </div>
        </div>
    </div>
</div>
```

**추가 JS**:
```js
document.querySelectorAll('.sh_tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        // Reset all buttons
        document.querySelectorAll('.sh_tab-btn').forEach(function(b) {
            b.style.background = '#fff';
            b.style.color = '#666';
            b.style.borderColor = '#ddd';
            b.classList.remove('sh_tab-btn--active');
        });
        // Activate clicked button
        this.style.background = '#a38068';
        this.style.color = '#fff';
        this.style.borderColor = '#a38068';
        this.classList.add('sh_tab-btn--active');
        // Toggle content
        document.querySelectorAll('.sh_tab-content').forEach(function(c) {
            c.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    });
});
```

---

### 3-5. 아코디언 펼치기

**용도**: 여러 제품 기능을 접었다 펼 수 있는 아코디언으로 정리
**특징**: 클릭 시 펼치기/접기, 플러스/마이너스 아이콘 회전 애니메이션

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        제품 상세 기능
    </div>
    <div style="max-width: 560px; margin: 0 auto;">
        <!-- Accordion Item 1 -->
        <div class="sh_accordion-item" style="border-bottom: 1px solid #eee;">
            <div class="sh_accordion-header" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 20px 0; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 32px; height: 32px; background: #f5f0e8; border-radius: 8px;
                                display: flex; align-items: center; justify-content: center; font-size: 16px;">🌿</span>
                    <span style="font-size: 16px; font-weight: 600; color: #2d2420;">오가닉 코튼 소재</span>
                </div>
                <span class="sh_accordion-icon" style="font-size: 20px; color: #a38068; transition: transform 0.3s;
                            display: inline-block;">+</span>
            </div>
            <div class="sh_accordion-body" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                <div style="padding: 0 0 20px 44px; font-size: 14px; color: #666; line-height: 1.8;">
                    GOTS 인증 유기농 코튼 100%를 사용하여 아기의 민감한 피부에도 안심하고 사용할 수 있습니다.
                    화학 처리 없이 자연 그대로의 부드러움을 느낄 수 있습니다.
                </div>
            </div>
        </div>
        <!-- Accordion Item 2 -->
        <div class="sh_accordion-item" style="border-bottom: 1px solid #eee;">
            <div class="sh_accordion-header" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 20px 0; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 32px; height: 32px; background: #f5f0e8; border-radius: 8px;
                                display: flex; align-items: center; justify-content: center; font-size: 16px;">🔒</span>
                    <span style="font-size: 16px; font-weight: 600; color: #2d2420;">이중 지퍼 안전 시스템</span>
                </div>
                <span class="sh_accordion-icon" style="font-size: 20px; color: #a38068; transition: transform 0.3s;
                            display: inline-block;">+</span>
            </div>
            <div class="sh_accordion-body" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                <div style="padding: 0 0 20px 44px; font-size: 14px; color: #666; line-height: 1.8;">
                    양방향 YKK 지퍼로 기저귀 교체가 편리하며, 지퍼 가드가 아기 피부를 안전하게 보호합니다.
                </div>
            </div>
        </div>
        <!-- Accordion Item 3 -->
        <div class="sh_accordion-item" style="border-bottom: 1px solid #eee;">
            <div class="sh_accordion-header" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 20px 0; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 32px; height: 32px; background: #f5f0e8; border-radius: 8px;
                                display: flex; align-items: center; justify-content: center; font-size: 16px;">🧺</span>
                    <span style="font-size: 16px; font-weight: 600; color: #2d2420;">간편한 세탁 관리</span>
                </div>
                <span class="sh_accordion-icon" style="font-size: 20px; color: #a38068; transition: transform 0.3s;
                            display: inline-block;">+</span>
            </div>
            <div class="sh_accordion-body" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                <div style="padding: 0 0 20px 44px; font-size: 14px; color: #666; line-height: 1.8;">
                    세탁기 사용이 가능하며(저온 세탁 권장), 빠른 건조가 가능한 소재로 관리가 편리합니다.
                </div>
            </div>
        </div>
    </div>
</div>
```

**추가 JS**:
```js
document.querySelectorAll('.sh_accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
        var body = this.nextElementSibling;
        var icon = this.querySelector('.sh_accordion-icon');
        var isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
        // Close all
        document.querySelectorAll('.sh_accordion-body').forEach(function(b) {
            b.style.maxHeight = '0px';
        });
        document.querySelectorAll('.sh_accordion-icon').forEach(function(i) {
            i.textContent = '+';
            i.style.transform = 'rotate(0deg)';
        });
        // Open clicked if was closed
        if (!isOpen) {
            body.style.maxHeight = body.scrollHeight + 'px';
            icon.textContent = '−';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});
```

---

### 3-6. Before/After 비교

**용도**: 제품 사용 전후를 나란히 비교하여 효과를 시각적으로 보여줌
**특징**: 좌우 분할 비교, Before는 어두운 톤 / After는 밝은 톤

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 10px;">
        이렇게 달라져요
    </div>
    <div class="desc_small txtcenter" style="color: #888; margin-bottom: 30px;">
        썬데이허그 슬리핑백 사용 전·후 비교
    </div>
    <div style="display: flex; gap: 12px; max-width: 560px; margin: 0 auto;">
        <!-- Before -->
        <div style="flex: 1; position: relative; border-radius: 16px; overflow: hidden;">
            <img src="https://dummyimage.com/270x360" alt="Before"
                 style="width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block; filter: brightness(0.7) saturate(0.5);">
            <div style="position: absolute; top: 12px; left: 12px;">
                <span style="background: #555; color: #fff; padding: 5px 14px; border-radius: 20px;
                             font-size: 11px; font-weight: 700; letter-spacing: 1px;">BEFORE</span>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;
                        background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
                <div style="color: #fff; font-size: 14px; font-weight: 600; line-height: 1.5;">
                    이불을 걷어차고<br/>추위에 노출
                </div>
            </div>
        </div>
        <!-- After -->
        <div style="flex: 1; position: relative; border-radius: 16px; overflow: hidden;">
            <img src="https://dummyimage.com/270x360" alt="After"
                 style="width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block;">
            <div style="position: absolute; top: 12px; left: 12px;">
                <span style="background: linear-gradient(135deg, #a38068, #8b6b56); color: #fff;
                             padding: 5px 14px; border-radius: 20px; font-size: 11px; font-weight: 700;
                             letter-spacing: 1px;">AFTER</span>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;
                        background: linear-gradient(to top, rgba(163,128,104,0.7), transparent);">
                <div style="color: #fff; font-size: 14px; font-weight: 600; line-height: 1.5;">
                    포근하게 감싸져<br/>숙면 유지
                </div>
            </div>
        </div>
    </div>
</div>
```

---

### 3-7. 체크리스트 스타일

**용도**: 제품 장점을 체크마크 리스트로 명확하게 나열
**특징**: 체크 아이콘 + 제목 + 짧은 설명의 깔끔한 리스트 형식

**HTML**:
```html
<div class="detail_section bg-color-1" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        썬데이허그가 확인했어요
    </div>
    <div style="max-width: 560px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
        <!-- Check Item 1 -->
        <div style="display: flex; align-items: flex-start; gap: 14px; background: #fff; padding: 20px;
                    border-radius: 12px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center;">
                <span style="color: #fff; font-size: 14px; font-weight: 700;">✓</span>
            </div>
            <div>
                <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">유해물질 검사 완료</div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">포르말데히드, 형광증백제, 아릴아민 등 유해 물질 불검출</div>
            </div>
        </div>
        <!-- Check Item 2 -->
        <div style="display: flex; align-items: flex-start; gap: 14px; background: #fff; padding: 20px;
                    border-radius: 12px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center;">
                <span style="color: #fff; font-size: 14px; font-weight: 700;">✓</span>
            </div>
            <div>
                <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">KC 안전 인증 획득</div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">국가 공인 안전 인증으로 안심하고 사용 가능</div>
            </div>
        </div>
        <!-- Check Item 3 -->
        <div style="display: flex; align-items: flex-start; gap: 14px; background: #fff; padding: 20px;
                    border-radius: 12px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center;">
                <span style="color: #fff; font-size: 14px; font-weight: 700;">✓</span>
            </div>
            <div>
                <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">OEKO-TEX 국제 인증</div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">전 세계적으로 인정받는 섬유 안전성 인증 통과</div>
            </div>
        </div>
        <!-- Check Item 4 -->
        <div style="display: flex; align-items: flex-start; gap: 14px; background: #fff; padding: 20px;
                    border-radius: 12px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="width: 28px; height: 28px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center;">
                <span style="color: #fff; font-size: 14px; font-weight: 700;">✓</span>
            </div>
            <div>
                <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">50회 세탁 내구성 테스트</div>
                <div style="font-size: 13px; color: #888; line-height: 1.6;">반복 세탁에도 형태와 촉감이 유지되는 고품질 원단</div>
            </div>
        </div>
    </div>
</div>
```

---

### 3-8. 번호 스텝 형식 (01, 02, 03…)

**용도**: 사용법이나 제품 과정을 순서대로 보여주는 스텝 형식
**특징**: 세로 연결선 + 넘버 뱃지 + 이미지가 포함된 스텝 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 40px;">
        이렇게 사용하세요
    </div>
    <div style="max-width: 560px; margin: 0 auto; position: relative;">
        <!-- Vertical Line -->
        <div style="position: absolute; left: 22px; top: 24px; bottom: 24px; width: 2px;
                    background: linear-gradient(to bottom, #a38068, #EAE2D5);"></div>
        <!-- Step 1 -->
        <div style="display: flex; gap: 20px; margin-bottom: 35px; position: relative;">
            <div style="width: 44px; height: 44px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center; z-index: 1;
                        box-shadow: 0 2px 8px rgba(163,128,104,0.3);">
                <span style="color: #fff; font-size: 14px; font-weight: 700;">01</span>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">지퍼를 열어 주세요</div>
                <div style="font-size: 14px; color: #888; line-height: 1.7; margin-bottom: 14px;">
                    하단 지퍼를 완전히 열어 아기를 편하게 눕힐 수 있도록 준비합니다.
                </div>
                <div style="border-radius: 12px; overflow: hidden;">
                    <img src="https://dummyimage.com/480x280" alt="Step 1"
                         style="width: 100%; display: block;">
                </div>
            </div>
        </div>
        <!-- Step 2 -->
        <div style="display: flex; gap: 20px; margin-bottom: 35px; position: relative;">
            <div style="width: 44px; height: 44px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center; z-index: 1;
                        box-shadow: 0 2px 8px rgba(163,128,104,0.3);">
                <span style="color: #fff; font-size: 14px; font-weight: 700;">02</span>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">아기를 눕히세요</div>
                <div style="font-size: 14px; color: #888; line-height: 1.7; margin-bottom: 14px;">
                    아기의 팔을 팔 구멍에 넣고 편안하게 눕혀주세요.
                </div>
                <div style="border-radius: 12px; overflow: hidden;">
                    <img src="https://dummyimage.com/480x280" alt="Step 2"
                         style="width: 100%; display: block;">
                </div>
            </div>
        </div>
        <!-- Step 3 -->
        <div style="display: flex; gap: 20px; position: relative;">
            <div style="width: 44px; height: 44px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center; z-index: 1;
                        box-shadow: 0 2px 8px rgba(163,128,104,0.3);">
                <span style="color: #fff; font-size: 14px; font-weight: 700;">03</span>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">지퍼를 올려 주세요</div>
                <div style="font-size: 14px; color: #888; line-height: 1.7; margin-bottom: 14px;">
                    턱 아래까지 지퍼를 올리면 완성! 포근한 수면을 시작하세요.
                </div>
                <div style="border-radius: 12px; overflow: hidden;">
                    <img src="https://dummyimage.com/480x280" alt="Step 3"
                         style="width: 100%; display: block;">
                </div>
            </div>
        </div>
    </div>
</div>
```

---

## CATEGORY 4: 신뢰/증거 섹션

---

### 4-1. 리뷰 캐러셀

**용도**: 고객 리뷰를 수평 스크롤 캐러셀로 보여주는 소셜 프루프 섹션
**특징**: 별점 + 이름 + 리뷰 텍스트의 카드형 수평 스크롤, CSS scroll-snap

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 0;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 10px; padding: 0 20px;">
        실제 사용 후기
    </div>
    <div class="desc_small txtcenter" style="color: #888; margin-bottom: 30px; padding: 0 20px;">
        10,000명 이상의 맘들이 선택했어요
    </div>
    <div class="sh_review-carousel" style="display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory;
                padding: 0 20px 20px; -webkit-overflow-scrolling: touch;">
        <!-- Review Card 1 -->
        <div style="min-width: 280px; max-width: 280px; scroll-snap-align: start; background: #fff;
                    border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="color: #ff8605; font-size: 14px; letter-spacing: 2px; margin-bottom: 10px;">★★★★★</div>
            <div style="font-size: 14px; color: #2d2420; line-height: 1.7; margin-bottom: 16px;">
                "잠투정이 심했던 아기가 슬리핑백 사용 후 확실히 푹 자게 됐어요. 소재도 너무 부드럽고 세탁도 편해요!"
            </div>
            <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid #f0f0f0; padding-top: 14px;">
                <div style="width: 36px; height: 36px; background: #EAE2D5; border-radius: 50%;
                            display: flex; align-items: center; justify-content: center;
                            font-size: 14px; font-weight: 600; color: #a38068;">김</div>
                <div>
                    <div style="font-size: 13px; font-weight: 600; color: #2d2420;">김**맘</div>
                    <div style="font-size: 11px; color: #aaa;">6개월 아기</div>
                </div>
            </div>
        </div>
        <!-- Review Card 2 -->
        <div style="min-width: 280px; max-width: 280px; scroll-snap-align: start; background: #fff;
                    border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="color: #ff8605; font-size: 14px; letter-spacing: 2px; margin-bottom: 10px;">★★★★★</div>
            <div style="font-size: 14px; color: #2d2420; line-height: 1.7; margin-bottom: 16px;">
                "이불 걷어차는 게 걱정이었는데 슬리핑백 덕분에 밤새 따뜻하게 잘 자요. 재구매 확정!"
            </div>
            <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid #f0f0f0; padding-top: 14px;">
                <div style="width: 36px; height: 36px; background: #d7eae4; border-radius: 50%;
                            display: flex; align-items: center; justify-content: center;
                            font-size: 14px; font-weight: 600; color: #5a8a7a;">이</div>
                <div>
                    <div style="font-size: 13px; font-weight: 600; color: #2d2420;">이**맘</div>
                    <div style="font-size: 11px; color: #aaa;">12개월 아기</div>
                </div>
            </div>
        </div>
        <!-- Review Card 3 -->
        <div style="min-width: 280px; max-width: 280px; scroll-snap-align: start; background: #fff;
                    border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="color: #ff8605; font-size: 14px; letter-spacing: 2px; margin-bottom: 10px;">★★★★☆</div>
            <div style="font-size: 14px; color: #2d2420; line-height: 1.7; margin-bottom: 16px;">
                "디자인이 정말 예쁘고 아기가 편안해하는 게 느껴져요. 선물용으로도 좋을 것 같아요."
            </div>
            <div style="display: flex; align-items: center; gap: 10px; border-top: 1px solid #f0f0f0; padding-top: 14px;">
                <div style="width: 36px; height: 36px; background: #eaccca; border-radius: 50%;
                            display: flex; align-items: center; justify-content: center;
                            font-size: 14px; font-weight: 600; color: #a06b68;">박</div>
                <div>
                    <div style="font-size: 13px; font-weight: 600; color: #2d2420;">박**맘</div>
                    <div style="font-size: 11px; color: #aaa;">9개월 아기</div>
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

**용도**: 전체 리뷰 평점과 별점 분포를 한눈에 보여주는 요약 카드
**특징**: 대형 평균 평점 + 별점 분포 막대 차트 (5점~1점)

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 30px;">
        고객 만족도
    </div>
    <div style="max-width: 500px; margin: 0 auto; background: #fff; border-radius: 20px; padding: 35px 30px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <div style="display: flex; align-items: center; gap: 30px; margin-bottom: 25px;">
            <!-- Big Score -->
            <div style="text-align: center; flex-shrink: 0;">
                <div style="font-size: 52px; font-weight: 800; color: #2d2420; line-height: 1;">4.8</div>
                <div style="color: #ff8605; font-size: 18px; margin: 6px 0;">★★★★★</div>
                <div style="font-size: 12px; color: #aaa;">3,247개 리뷰</div>
            </div>
            <!-- Rating Bars -->
            <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-size: 12px; color: #888; width: 30px;">5점</span>
                    <div style="flex: 1; height: 8px; background: #f0ebe5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 82%; height: 100%; background: #a38068; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 30px; text-align: right;">82%</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-size: 12px; color: #888; width: 30px;">4점</span>
                    <div style="flex: 1; height: 8px; background: #f0ebe5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 12%; height: 100%; background: #c6b198; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 30px; text-align: right;">12%</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-size: 12px; color: #888; width: 30px;">3점</span>
                    <div style="flex: 1; height: 8px; background: #f0ebe5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 4%; height: 100%; background: #d5c8b8; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 30px; text-align: right;">4%</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-size: 12px; color: #888; width: 30px;">2점</span>
                    <div style="flex: 1; height: 8px; background: #f0ebe5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 1%; height: 100%; background: #ddd; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 30px; text-align: right;">1%</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 12px; color: #888; width: 30px;">1점</span>
                    <div style="flex: 1; height: 8px; background: #f0ebe5; border-radius: 4px; overflow: hidden;">
                        <div style="width: 1%; height: 100%; background: #ddd; border-radius: 4px;"></div>
                    </div>
                    <span style="font-size: 11px; color: #aaa; width: 30px; text-align: right;">1%</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

### 4-3. 인증마크 가로 배열

**용도**: 제품의 인증 마크나 안전 배지를 가로로 나열하는 신뢰 섹션
**특징**: 그레이스케일 로고 배열, 호버 시 컬러 전환 효과

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter" style="font-size: 14px; letter-spacing: 3px; color: #888; margin-bottom: 12px;">
        CERTIFIED
    </div>
    <div class="title font-w700 txtcenter" style="margin-bottom: 35px;">
        안전 인증 현황
    </div>
    <div style="display: flex; justify-content: center; align-items: center; gap: 30px; flex-wrap: wrap; max-width: 560px; margin: 0 auto;">
        <div class="sh_cert-badge" style="text-align: center; opacity: 0.6; transition: opacity 0.3s; cursor: default;">
            <div style="width: 70px; height: 70px; background: #f5f5f5; border-radius: 50%; display: flex;
                        align-items: center; justify-content: center; margin: 0 auto 8px;">
                <img src="https://dummyimage.com/50x50" alt="KC인증" style="width: 40px; height: 40px; object-fit: contain;">
            </div>
            <div style="font-size: 11px; font-weight: 600; color: #888;">KC 인증</div>
        </div>
        <div class="sh_cert-badge" style="text-align: center; opacity: 0.6; transition: opacity 0.3s; cursor: default;">
            <div style="width: 70px; height: 70px; background: #f5f5f5; border-radius: 50%; display: flex;
                        align-items: center; justify-content: center; margin: 0 auto 8px;">
                <img src="https://dummyimage.com/50x50" alt="OEKO-TEX" style="width: 40px; height: 40px; object-fit: contain;">
            </div>
            <div style="font-size: 11px; font-weight: 600; color: #888;">OEKO-TEX</div>
        </div>
        <div class="sh_cert-badge" style="text-align: center; opacity: 0.6; transition: opacity 0.3s; cursor: default;">
            <div style="width: 70px; height: 70px; background: #f5f5f5; border-radius: 50%; display: flex;
                        align-items: center; justify-content: center; margin: 0 auto 8px;">
                <img src="https://dummyimage.com/50x50" alt="GOTS" style="width: 40px; height: 40px; object-fit: contain;">
            </div>
            <div style="font-size: 11px; font-weight: 600; color: #888;">GOTS</div>
        </div>
        <div class="sh_cert-badge" style="text-align: center; opacity: 0.6; transition: opacity 0.3s; cursor: default;">
            <div style="width: 70px; height: 70px; background: #f5f5f5; border-radius: 50%; display: flex;
                        align-items: center; justify-content: center; margin: 0 auto 8px;">
                <img src="https://dummyimage.com/50x50" alt="SGS" style="width: 40px; height: 40px; object-fit: contain;">
            </div>
            <div style="font-size: 11px; font-weight: 600; color: #888;">SGS 테스트</div>
        </div>
    </div>
</div>
```

**추가 CSS**:
```css
.sh_cert-badge:hover {
    opacity: 1 !important;
}
```

---

### 4-4. 전문가 추천 프로필

**용도**: 전문가(소아과 의사, 수면 전문가 등)의 추천 코멘트를 보여주는 프로필 카드
**특징**: 전문가 사진 + 자격 + 인용문의 프로페셔널 카드 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-oat" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter" style="font-size: 14px; letter-spacing: 3px; color: #a38068; margin-bottom: 12px;">
        EXPERT REVIEW
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        전문가가 추천합니다
    </div>
    <div style="max-width: 500px; margin: 0 auto; background: #fff; border-radius: 20px; padding: 35px 30px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="width: 90px; height: 90px; border-radius: 50%; overflow: hidden; margin: 0 auto 14px;
                        border: 3px solid #EAE2D5;">
                <img src="https://dummyimage.com/90x90" alt="전문가 프로필" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">김영수 원장</div>
            <div style="font-size: 13px; color: #a38068; font-weight: 500;">소아청소년과 전문의 | 15년 경력</div>
        </div>
        <div style="position: relative; padding: 20px 0;">
            <div style="position: absolute; top: 0; left: 0; font-size: 48px; color: #EAE2D5; font-family: Georgia, serif; line-height: 1;">"</div>
            <div style="font-size: 15px; color: #555; line-height: 1.8; text-align: center; padding: 0 20px;">
                영유아의 숙면을 위해서는 체온 조절이 가장 중요합니다.
                썬데이허그 슬리핑백은 적정 온도를 유지하면서 아이의 자연스러운 움직임을 방해하지 않는
                우수한 제품입니다.
            </div>
        </div>
    </div>
</div>
```

---

### 4-5. 미디어/언론 로고 섹션

**용도**: 미디어 노출 이력을 로고로 보여주는 "As Seen In" 섹션
**특징**: 로고 가로 배열, 음소거(muted) 스타일

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="desc_small font-w500 txtcenter" style="color: #bbb; letter-spacing: 3px; font-size: 12px; margin-bottom: 25px;">
        AS SEEN IN
    </div>
    <div style="display: flex; justify-content: center; align-items: center; gap: 25px; flex-wrap: wrap;
                max-width: 560px; margin: 0 auto; opacity: 0.4;">
        <img src="https://dummyimage.com/100x40" alt="미디어1" style="height: 30px; object-fit: contain; filter: grayscale(100%);">
        <img src="https://dummyimage.com/100x40" alt="미디어2" style="height: 30px; object-fit: contain; filter: grayscale(100%);">
        <img src="https://dummyimage.com/100x40" alt="미디어3" style="height: 30px; object-fit: contain; filter: grayscale(100%);">
        <img src="https://dummyimage.com/100x40" alt="미디어4" style="height: 30px; object-fit: contain; filter: grayscale(100%);">
        <img src="https://dummyimage.com/100x40" alt="미디어5" style="height: 30px; object-fit: contain; filter: grayscale(100%);">
    </div>
</div>
```

---

### 4-6. 수상 내역 배지

**용도**: 브랜드나 제품의 수상 내역을 그리드로 보여주는 섹션
**특징**: 연도 + 수상명 + 기관의 배지 형태 그리드 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-1" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        수상 및 인증 이력
    </div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 560px; margin: 0 auto;">
        <!-- Award 1 -->
        <div style="background: #fff; border-radius: 16px; padding: 24px 16px; text-align: center;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #a38068, #8b6b56);
                        border-radius: 50%; display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px;">
                <span style="color: #fff; font-size: 20px;">🏆</span>
            </div>
            <div style="font-size: 20px; font-weight: 800; color: #a38068; margin-bottom: 4px;">2024</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 4px;">맘앤베이비<br/>어워드 대상</div>
            <div style="font-size: 11px; color: #aaa;">한국육아협회</div>
        </div>
        <!-- Award 2 -->
        <div style="background: #fff; border-radius: 16px; padding: 24px 16px; text-align: center;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #a38068, #8b6b56);
                        border-radius: 50%; display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px;">
                <span style="color: #fff; font-size: 20px;">🥇</span>
            </div>
            <div style="font-size: 20px; font-weight: 800; color: #a38068; margin-bottom: 4px;">2023</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 4px;">우수육아용품<br/>선정</div>
            <div style="font-size: 11px; color: #aaa;">소비자보호원</div>
        </div>
        <!-- Award 3 -->
        <div style="background: #fff; border-radius: 16px; padding: 24px 16px; text-align: center;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #a38068, #8b6b56);
                        border-radius: 50%; display: flex; align-items: center; justify-content: center;
                        margin: 0 auto 12px;">
                <span style="color: #fff; font-size: 20px;">⭐</span>
            </div>
            <div style="font-size: 20px; font-weight: 800; color: #a38068; margin-bottom: 4px;">2024</div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 4px;">베스트<br/>셀러 1위</div>
            <div style="font-size: 11px; color: #aaa;">네이버 쇼핑</div>
        </div>
    </div>
</div>
```

---

### 4-7. 고객 수 카운터

**용도**: 큰 숫자로 고객 수나 판매량을 강조하는 신뢰 구축 섹션
**특징**: 대형 카운터 숫자, IntersectionObserver로 애니메이션 가능

**HTML**:
```html
<div class="detail_section bg-color-black" style="margin-bottom: 0px; padding: 60px 20px;">
    <div style="text-align: center; margin-bottom: 15px;">
        <span style="display: inline-block; border: 1px solid rgba(255,255,255,0.3); color: #fff;
                     padding: 6px 20px; font-size: 12px; font-weight: 600; letter-spacing: 3px;">
            TRUST
        </span>
    </div>
    <div style="text-align: center; color: #fff; font-size: 28px; font-weight: 700; margin-bottom: 40px;">
        숫자가 증명합니다
    </div>
    <div style="display: flex; justify-content: center; gap: 40px; max-width: 560px; margin: 0 auto;">
        <div style="text-align: center;">
            <div class="sh_counter" style="font-size: 42px; font-weight: 800; color: #a38068; line-height: 1;" data-target="32000">
                32,000<span style="font-size: 22px;">+</span>
            </div>
            <div style="font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 8px;">누적 판매</div>
        </div>
        <div style="width: 1px; background: rgba(255,255,255,0.15);"></div>
        <div style="text-align: center;">
            <div class="sh_counter" style="font-size: 42px; font-weight: 800; color: #a38068; line-height: 1;" data-target="4.8">
                4.8
            </div>
            <div style="font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 8px;">평균 평점</div>
        </div>
        <div style="width: 1px; background: rgba(255,255,255,0.15);"></div>
        <div style="text-align: center;">
            <div class="sh_counter" style="font-size: 42px; font-weight: 800; color: #a38068; line-height: 1;" data-target="97">
                97<span style="font-size: 22px;">%</span>
            </div>
            <div style="font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 8px;">재구매율</div>
        </div>
    </div>
</div>
```


## CATEGORY 5: 제품 상세 정보

---

### 5-1. 스펙 테이블 - 모던 카드형

**용도**: 제품 스펙 정보를 아이콘+라벨+값 카드 형식으로 보여주는 모던 테이블
**특징**: 교차 배경색 카드 레이아웃, 아이콘 포함, 깔끔한 그리드 배치

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 3px; margin-bottom: 12px;">
        SPECIFICATION
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        제품 상세 스펙
    </div>
    <div style="max-width: 560px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px;">
        <!-- Row 1 -->
        <div class="sh_spec-card" style="display: flex; align-items: center; gap: 16px;
                    background: #fff; border-radius: 12px; padding: 18px 20px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 44px; height: 44px; background: #f5f0e8; border-radius: 10px;
                        display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="font-size: 20px;">📐</span>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 12px; color: #a38068; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 2px;">사이즈</div>
                <div style="font-size: 15px; color: #2d2420; font-weight: 600;">110 x 65 cm</div>
            </div>
        </div>
        <!-- Row 2 (alternate bg) -->
        <div class="sh_spec-card" style="display: flex; align-items: center; gap: 16px;
                    background: #f9f6f2; border-radius: 12px; padding: 18px 20px;">
            <div style="width: 44px; height: 44px; background: #ede3d8; border-radius: 10px;
                        display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="font-size: 20px;">⚖️</span>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 12px; color: #a38068; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 2px;">무게</div>
                <div style="font-size: 15px; color: #2d2420; font-weight: 600;">약 350g</div>
            </div>
        </div>
        <!-- Row 3 -->
        <div class="sh_spec-card" style="display: flex; align-items: center; gap: 16px;
                    background: #fff; border-radius: 12px; padding: 18px 20px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 44px; height: 44px; background: #f5f0e8; border-radius: 10px;
                        display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="font-size: 20px;">🧵</span>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 12px; color: #a38068; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 2px;">소재</div>
                <div style="font-size: 15px; color: #2d2420; font-weight: 600;">오가닉 코튼 100%</div>
            </div>
        </div>
        <!-- Row 4 (alternate bg) -->
        <div class="sh_spec-card" style="display: flex; align-items: center; gap: 16px;
                    background: #f9f6f2; border-radius: 12px; padding: 18px 20px;">
            <div style="width: 44px; height: 44px; background: #ede3d8; border-radius: 10px;
                        display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="font-size: 20px;">🌡️</span>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 12px; color: #a38068; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 2px;">적정 온도</div>
                <div style="font-size: 15px; color: #2d2420; font-weight: 600;">18~24°C (사계절용)</div>
            </div>
        </div>
        <!-- Row 5 -->
        <div class="sh_spec-card" style="display: flex; align-items: center; gap: 16px;
                    background: #fff; border-radius: 12px; padding: 18px 20px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="width: 44px; height: 44px; background: #f5f0e8; border-radius: 10px;
                        display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="font-size: 20px;">🏷️</span>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 12px; color: #a38068; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 2px;">인증</div>
                <div style="font-size: 15px; color: #2d2420; font-weight: 600;">KC 인증 / OEKO-TEX</div>
            </div>
        </div>
    </div>
</div>
```

---

### 5-2. 스펙 테이블 - 다크 테마

**용도**: 어두운 배경에 깔끔한 행 구조로 스펙을 표시하는 프리미엄 테이블
**특징**: 다크 배경, 화이트 텍스트, 구분선 기반 행 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-black" style="margin-bottom: 0px; padding: 50px 20px;">
    <div style="text-align: center; margin-bottom: 12px;">
        <span style="display: inline-block; border: 1px solid rgba(255,255,255,0.3); color: #fff;
                     padding: 6px 20px; font-size: 12px; font-weight: 600; letter-spacing: 3px;">
            SPEC
        </span>
    </div>
    <div class="feature_title font-w700 txtcenter color_white" style="margin-bottom: 40px;">
        제품 사양
    </div>
    <div style="max-width: 520px; margin: 0 auto;">
        <!-- Row -->
        <div style="display: flex; justify-content: space-between; align-items: center;
                    padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.5px;">소재</span>
            <span style="font-size: 15px; color: #fff; font-weight: 600;">오가닉 코튼 100%</span>
        </div>
        <!-- Row -->
        <div style="display: flex; justify-content: space-between; align-items: center;
                    padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.5px;">사이즈</span>
            <span style="font-size: 15px; color: #fff; font-weight: 600;">110 x 65 cm</span>
        </div>
        <!-- Row -->
        <div style="display: flex; justify-content: space-between; align-items: center;
                    padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.5px;">무게</span>
            <span style="font-size: 15px; color: #fff; font-weight: 600;">약 350g</span>
        </div>
        <!-- Row -->
        <div style="display: flex; justify-content: space-between; align-items: center;
                    padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.5px;">사용 연령</span>
            <span style="font-size: 15px; color: #fff; font-weight: 600;">0~24개월</span>
        </div>
        <!-- Row -->
        <div style="display: flex; justify-content: space-between; align-items: center;
                    padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.5px;">제조국</span>
            <span style="font-size: 15px; color: #fff; font-weight: 600;">대한민국</span>
        </div>
        <!-- Row -->
        <div style="display: flex; justify-content: space-between; align-items: center;
                    padding: 16px 0;">
            <span style="font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.5px;">인증</span>
            <span style="font-size: 15px; color: #fff; font-weight: 600;">KC 안전인증 완료</span>
        </div>
    </div>
</div>
```

---

### 5-3. 사이즈 가이드 (비주얼)

**용도**: 제품 이미지에 사이즈 주석선(callout)을 오버레이한 비주얼 사이즈 가이드
**특징**: 이미지 위에 치수 라인 오버레이, 다이어그램 스타일 주석

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 30px 15px;">
    <div class="sub_title font-w700 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 3px; margin-bottom: 12px;">
        SIZE GUIDE
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 30px;">
        사이즈 안내
    </div>
    <!-- Visual Size Diagram -->
    <div style="position: relative; max-width: 480px; margin: 0 auto 30px;">
        <img src="https://dummyimage.com/480x560" alt="사이즈 가이드"
             style="width: 100%; display: block; border-radius: 8px;">
        <!-- Width callout (top) -->
        <div class="sh_size-callout" style="position: absolute; top: 8%; left: 10%; right: 10%;
                    display: flex; align-items: center; gap: 0;">
            <div style="flex: 1; height: 1px; background: #a38068;"></div>
            <div style="background: #a38068; color: #fff; padding: 4px 12px; border-radius: 20px;
                        font-size: 12px; font-weight: 600; white-space: nowrap;">
                가로 65cm
            </div>
            <div style="flex: 1; height: 1px; background: #a38068;"></div>
        </div>
        <!-- Height callout (right) -->
        <div class="sh_size-callout" style="position: absolute; top: 15%; right: 5%; bottom: 15%;
                    display: flex; flex-direction: column; align-items: center; gap: 0; width: 40px;">
            <div style="flex: 1; width: 1px; background: #a38068;"></div>
            <div style="background: #a38068; color: #fff; padding: 4px 10px; border-radius: 20px;
                        font-size: 11px; font-weight: 600; white-space: nowrap;
                        writing-mode: vertical-rl; text-orientation: mixed;">
                세로 110cm
            </div>
            <div style="flex: 1; width: 1px; background: #a38068;"></div>
        </div>
        <!-- Detail callout (bottom-left) -->
        <div class="sh_size-callout" style="position: absolute; bottom: 12%; left: 8%;
                    display: flex; align-items: center; gap: 6px;">
            <div style="width: 8px; height: 8px; background: #ff8605; border-radius: 50%;"></div>
            <div style="background: rgba(45,36,32,0.85); color: #fff; padding: 5px 12px;
                        border-radius: 6px; font-size: 11px; font-weight: 500;">
                포켓 깊이 20cm
            </div>
        </div>
    </div>
    <!-- Size Table -->
    <div class="size_wrap3" style="margin-top: 20px;">
        <div class="sizeTable">
            <div class="size_cell sizetit">구분</div>
            <div class="size_cell sizetit">S (0~6M)</div>
            <div class="size_cell sizetit">M (6~18M)</div>
        </div>
        <div class="sizeTable">
            <div class="size_cell sizetit">총기장</div>
            <div class="size_cell">58 cm</div>
            <div class="size_cell">65 cm</div>
        </div>
        <div class="sizeTable">
            <div class="size_cell sizetit">가슴둘레</div>
            <div class="size_cell">32 cm</div>
            <div class="size_cell">36 cm</div>
        </div>
        <div class="sizeTable">
            <div class="size_cell sizetit">어깨너비</div>
            <div class="size_cell">24 cm</div>
            <div class="size_cell">27 cm</div>
        </div>
        <div class="sizetxt_wrap">
            <p class="sizetxt">※ 측정 방법에 따라 1~2cm 오차가 있을 수 있습니다.</p>
        </div>
    </div>
</div>
```

---

### 5-4. 소재/원단 탭 정보

**용도**: 탭 인터페이스로 다양한 원단/소재 정보를 전환하며 보여주는 섹션
**특징**: 기존 sh_fabric 탭 클래스 활용, 소재별 특성 카드 포함

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 3px; margin-bottom: 12px;">
        MATERIAL INFO
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 30px;">
        소재 & 원단 정보
    </div>
    <!-- Tab Buttons -->
    <div class="sh_fabric-tabs" style="display: flex; justify-content: center; gap: 8px; margin-bottom: 30px;">
        <button class="sh_fabric-tab-btn sh_tab-active"
                onclick="shFabricTab(0)"
                style="padding: 10px 22px; border-radius: 25px; border: 1px solid #a38068;
                       background: #a38068; color: #fff; font-size: 13px; font-weight: 600;
                       cursor: pointer; transition: all 0.3s ease;">
            오가닉 코튼
        </button>
        <button class="sh_fabric-tab-btn"
                onclick="shFabricTab(1)"
                style="padding: 10px 22px; border-radius: 25px; border: 1px solid #ccc;
                       background: #fff; color: #666; font-size: 13px; font-weight: 600;
                       cursor: pointer; transition: all 0.3s ease;">
            대나무 원단
        </button>
        <button class="sh_fabric-tab-btn"
                onclick="shFabricTab(2)"
                style="padding: 10px 22px; border-radius: 25px; border: 1px solid #ccc;
                       background: #fff; color: #666; font-size: 13px; font-weight: 600;
                       cursor: pointer; transition: all 0.3s ease;">
            모달
        </button>
    </div>
    <!-- Tab Contents -->
    <div class="sh_fabric-content">
        <!-- Tab 0: 오가닉 코튼 -->
        <div class="sh_fabric-content-item" data-sh-tab="0" style="display: block;">
            <div style="background: #fff; border-radius: 16px; overflow: hidden;
                        box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/560x300" alt="오가닉 코튼"
                     style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
                <div style="padding: 25px 20px;">
                    <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 15px;">
                        GOTS 인증 오가닉 코튼
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px;">
                        <span style="background: #f5f0e8; color: #a38068; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">통기성 우수</span>
                        <span style="background: #f5f0e8; color: #a38068; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">저자극</span>
                        <span style="background: #f5f0e8; color: #a38068; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">사계절</span>
                    </div>
                    <div style="font-size: 14px; color: #666; line-height: 1.8;">
                        무농약 재배 목화에서 추출한 100% 오가닉 코튼으로,
                        아기의 민감한 피부에도 안심하고 사용할 수 있습니다.
                        뛰어난 통기성과 흡습성으로 사계절 쾌적하게 유지됩니다.
                    </div>
                </div>
            </div>
        </div>
        <!-- Tab 1: 대나무 원단 -->
        <div class="sh_fabric-content-item" data-sh-tab="1" style="display: none;">
            <div style="background: #fff; border-radius: 16px; overflow: hidden;
                        box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/560x300" alt="대나무 원단"
                     style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
                <div style="padding: 25px 20px;">
                    <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 15px;">
                        프리미엄 뱀부 레이온
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px;">
                        <span style="background: #e8f5e9; color: #4caf50; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">항균 99.9%</span>
                        <span style="background: #e8f5e9; color: #4caf50; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">냉감 효과</span>
                        <span style="background: #e8f5e9; color: #4caf50; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">여름용</span>
                    </div>
                    <div style="font-size: 14px; color: #666; line-height: 1.8;">
                        자연에서 온 대나무 원단은 천연 항균 성분을 함유하고 있어
                        세균 번식을 억제합니다. 시원한 냉감 터치로 여름철 사용에 최적화되어 있습니다.
                    </div>
                </div>
            </div>
        </div>
        <!-- Tab 2: 모달 -->
        <div class="sh_fabric-content-item" data-sh-tab="2" style="display: none;">
            <div style="background: #fff; border-radius: 16px; overflow: hidden;
                        box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
                <img src="https://dummyimage.com/560x300" alt="모달"
                     style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
                <div style="padding: 25px 20px;">
                    <div style="font-size: 18px; font-weight: 700; color: #2d2420; margin-bottom: 15px;">
                        텐셀 모달 혼방
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px;">
                        <span style="background: #fce4ec; color: #e91e63; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">실크 터치</span>
                        <span style="background: #fce4ec; color: #e91e63; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">고탄력</span>
                        <span style="background: #fce4ec; color: #e91e63; padding: 5px 14px;
                                     border-radius: 20px; font-size: 12px; font-weight: 600;">간절기</span>
                    </div>
                    <div style="font-size: 14px; color: #666; line-height: 1.8;">
                        너도밤나무에서 추출한 모달 원단은 실크처럼 부드러운 터치감을 자랑합니다.
                        형태 안정성이 뛰어나 반복 세탁에도 변형이 적습니다.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

**추가 JS**:
```js
function shFabricTab(index) {
    var btns = document.querySelectorAll('.sh_fabric-tab-btn');
    var items = document.querySelectorAll('.sh_fabric-content-item');
    btns.forEach(function(btn, i) {
        if (i === index) {
            btn.style.background = '#a38068';
            btn.style.color = '#fff';
            btn.style.borderColor = '#a38068';
            btn.classList.add('sh_tab-active');
        } else {
            btn.style.background = '#fff';
            btn.style.color = '#666';
            btn.style.borderColor = '#ccc';
            btn.classList.remove('sh_tab-active');
        }
    });
    items.forEach(function(item, i) {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}
```

---

### 5-5. 컬러 선택 스와이퍼

**용도**: 컬러 칩을 눌러 제품 이미지를 전환하는 인터랙티브 컬러 선택 섹션
**특징**: 기존 c_btnbox/c_bgbox 클래스 활용, 컬러명 표시, 이미지 전환

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 3px; margin-bottom: 12px;">
        COLOR
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 30px;">
        컬러 선택
    </div>
    <!-- Color Swatches -->
    <div class="c_btnbox" style="display: flex; justify-content: center; gap: 12px;
                width: auto; max-width: 340px; margin: 0 auto 15px;">
        <li class="on" onclick="shColorSelect(0, this)"
            style="width: 40px; height: 40px; border-radius: 50%; background: #EAE2D5;
                   list-style: none; cursor: pointer; border: 2px solid #2d2420;
                   transition: border-color 0.3s ease;"></li>
        <li onclick="shColorSelect(1, this)"
            style="width: 40px; height: 40px; border-radius: 50%; background: #C9B8A8;
                   list-style: none; cursor: pointer; border: 2px solid transparent;
                   transition: border-color 0.3s ease;"></li>
        <li onclick="shColorSelect(2, this)"
            style="width: 40px; height: 40px; border-radius: 50%; background: #B3D5C9;
                   list-style: none; cursor: pointer; border: 2px solid transparent;
                   transition: border-color 0.3s ease;"></li>
        <li onclick="shColorSelect(3, this)"
            style="width: 40px; height: 40px; border-radius: 50%; background: #FFB4B8;
                   list-style: none; cursor: pointer; border: 2px solid transparent;
                   transition: border-color 0.3s ease;"></li>
    </div>
    <!-- Color Name -->
    <div class="colorTxt" style="text-align: center; margin-bottom: 20px;">
        <span class="colorName" id="sh_colorName"
              style="font-size: 16px; font-weight: 600; color: #2d2420;">오트 베이지</span>
    </div>
    <!-- Product Image -->
    <div class="c_bgbox" style="position: relative; width: 100%; padding-bottom: 100%;
                background-size: cover; background-position: center; border-radius: 12px; overflow: hidden;">
        <img id="sh_colorImg" src="https://dummyimage.com/560x560" alt="제품 이미지"
             style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    object-fit: cover; transition: opacity 0.4s ease;">
    </div>
</div>
```

**추가 JS**:
```js
(function() {
    var shColorData = [
        { name: '오트 베이지', img: 'https://dummyimage.com/560x560/EAE2D5/fff' },
        { name: '웜 브라운',  img: 'https://dummyimage.com/560x560/C9B8A8/fff' },
        { name: '제이드 그린', img: 'https://dummyimage.com/560x560/B3D5C9/fff' },
        { name: '베이비 핑크', img: 'https://dummyimage.com/560x560/FFB4B8/fff' }
    ];
    window.shColorSelect = function(index, el) {
        var items = el.parentElement.querySelectorAll('li');
        items.forEach(function(li) {
            li.style.borderColor = 'transparent';
            li.classList.remove('on');
        });
        el.style.borderColor = '#2d2420';
        el.classList.add('on');
        document.getElementById('sh_colorName').textContent = shColorData[index].name;
        var img = document.getElementById('sh_colorImg');
        img.style.opacity = '0';
        setTimeout(function() {
            img.src = shColorData[index].img;
            img.style.opacity = '1';
        }, 200);
    };
})();
```

---

### 5-6. 구성품 이미지 그리드

**용도**: 제품에 포함된 구성품을 이미지 그리드로 나열하는 섹션
**특징**: 3열 그리드, 수량 뱃지, 아이템명 표시

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w700 txtcenter" style="margin-bottom: 15px;">
        <span class="desc_btn" style="background: #000000;">구성품</span>
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 40px;">
        박스 안에 모두 들어있어요
    </div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 520px; margin: 0 auto;">
        <!-- Item 1 -->
        <div style="background: #fff; border-radius: 12px; padding: 15px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; background: #a38068; color: #fff;
                        padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 600;">
                1개
            </div>
            <div style="width: 80px; height: 80px; margin: 10px auto 12px; border-radius: 50%;
                        overflow: hidden; background: #f5f0e8;">
                <img src="https://dummyimage.com/80x80" alt="슬리핑백 본체"
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">슬리핑백 본체</div>
            <div style="font-size: 11px; color: #999; margin-top: 4px;">메인 제품</div>
        </div>
        <!-- Item 2 -->
        <div style="background: #fff; border-radius: 12px; padding: 15px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; background: #a38068; color: #fff;
                        padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 600;">
                2개
            </div>
            <div style="width: 80px; height: 80px; margin: 10px auto 12px; border-radius: 50%;
                        overflow: hidden; background: #f5f0e8;">
                <img src="https://dummyimage.com/80x80" alt="스와들 스트랩"
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">스와들 스트랩</div>
            <div style="font-size: 11px; color: #999; margin-top: 4px;">양쪽 고정</div>
        </div>
        <!-- Item 3 -->
        <div style="background: #fff; border-radius: 12px; padding: 15px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; background: #a38068; color: #fff;
                        padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 600;">
                1개
            </div>
            <div style="width: 80px; height: 80px; margin: 10px auto 12px; border-radius: 50%;
                        overflow: hidden; background: #f5f0e8;">
                <img src="https://dummyimage.com/80x80" alt="세탁망"
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">전용 세탁망</div>
            <div style="font-size: 11px; color: #999; margin-top: 4px;">케어 용품</div>
        </div>
        <!-- Item 4 -->
        <div style="background: #fff; border-radius: 12px; padding: 15px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; background: #a38068; color: #fff;
                        padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 600;">
                1개
            </div>
            <div style="width: 80px; height: 80px; margin: 10px auto 12px; border-radius: 50%;
                        overflow: hidden; background: #f5f0e8;">
                <img src="https://dummyimage.com/80x80" alt="케어 가이드"
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">케어 가이드</div>
            <div style="font-size: 11px; color: #999; margin-top: 4px;">사용 설명서</div>
        </div>
        <!-- Item 5 -->
        <div style="background: #fff; border-radius: 12px; padding: 15px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; background: #a38068; color: #fff;
                        padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 600;">
                1개
            </div>
            <div style="width: 80px; height: 80px; margin: 10px auto 12px; border-radius: 50%;
                        overflow: hidden; background: #f5f0e8;">
                <img src="https://dummyimage.com/80x80" alt="패키지 박스"
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">선물용 박스</div>
            <div style="font-size: 11px; color: #999; margin-top: 4px;">패키지</div>
        </div>
        <!-- Item 6 -->
        <div style="background: #fff; border-radius: 12px; padding: 15px; text-align: center;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06); position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; background: #a38068; color: #fff;
                        padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 600;">
                1개
            </div>
            <div style="width: 80px; height: 80px; margin: 10px auto 12px; border-radius: 50%;
                        overflow: hidden; background: #f5f0e8;">
                <img src="https://dummyimage.com/80x80" alt="보증서"
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="font-size: 13px; font-weight: 600; color: #2d2420;">품질 보증서</div>
            <div style="font-size: 11px; color: #999; margin-top: 4px;">1년 보증</div>
        </div>
    </div>
</div>
```

---

### 5-7. 상세 치수 다이어그램

**용도**: 제품 이미지 중앙에 치수 측정선과 라벨을 배치한 기술 다이어그램
**특징**: 중앙 제품 이미지에 측정 포인트 및 라벨이 화살표로 연결

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 15px;">
    <div class="sub_title font-w700 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 3px; margin-bottom: 12px;">
        DIMENSIONS
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        상세 치수 안내
    </div>
    <div style="position: relative; max-width: 500px; margin: 0 auto;">
        <!-- Central product image -->
        <img src="https://dummyimage.com/500x620" alt="치수 다이어그램"
             style="width: 100%; display: block; border-radius: 8px;">

        <!-- Dimension A: 총기장 (left side, full height) -->
        <div style="position: absolute; top: 5%; left: 3%; bottom: 8%;
                    display: flex; flex-direction: column; align-items: center; width: 2px;">
            <div style="width: 12px; height: 2px; background: #a38068;"></div>
            <div style="flex: 1; width: 1px; background: #a38068;"></div>
            <div style="width: 12px; height: 2px; background: #a38068;"></div>
        </div>
        <div style="position: absolute; top: 45%; left: -2px;
                    transform: translateY(-50%) rotate(-90deg);
                    background: #a38068; color: #fff; padding: 4px 14px; border-radius: 4px;
                    font-size: 11px; font-weight: 700; white-space: nowrap; letter-spacing: 0.5px;">
            총기장 65cm
        </div>

        <!-- Dimension B: 어깨너비 (top) -->
        <div style="position: absolute; top: 7%; left: 25%; right: 25%;
                    display: flex; align-items: center;">
            <div style="width: 2px; height: 10px; background: #2d2420;"></div>
            <div style="flex: 1; height: 1px; background: #2d2420;"></div>
            <div style="background: #2d2420; color: #fff; padding: 3px 10px; border-radius: 4px;
                        font-size: 10px; font-weight: 600; white-space: nowrap;">27cm</div>
            <div style="flex: 1; height: 1px; background: #2d2420;"></div>
            <div style="width: 2px; height: 10px; background: #2d2420;"></div>
        </div>
        <div style="position: absolute; top: 2%; left: 50%; transform: translateX(-50%);
                    font-size: 11px; color: #2d2420; font-weight: 600;">어깨너비</div>

        <!-- Dimension C: 가슴둘레 (right side callout) -->
        <div style="position: absolute; top: 28%; right: 5%;
                    display: flex; align-items: center; gap: 6px;">
            <div style="width: 30px; height: 1px; background: #ff8605;"></div>
            <div style="background: #ff8605; color: #fff; padding: 5px 12px; border-radius: 4px;
                        font-size: 11px; font-weight: 600; white-space: nowrap;">
                가슴둘레 36cm
            </div>
        </div>

        <!-- Dimension D: 밑단너비 (bottom) -->
        <div style="position: absolute; bottom: 5%; left: 20%; right: 20%;
                    display: flex; align-items: center;">
            <div style="width: 2px; height: 10px; background: #a38068;"></div>
            <div style="flex: 1; height: 1px; background: #a38068;"></div>
            <div style="background: #a38068; color: #fff; padding: 3px 10px; border-radius: 4px;
                        font-size: 10px; font-weight: 600; white-space: nowrap;">밑단 42cm</div>
            <div style="flex: 1; height: 1px; background: #a38068;"></div>
            <div style="width: 2px; height: 10px; background: #a38068;"></div>
        </div>
    </div>
    <!-- Legend -->
    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
        <div style="display: flex; align-items: center; gap: 6px;">
            <div style="width: 16px; height: 3px; background: #a38068; border-radius: 2px;"></div>
            <span style="font-size: 11px; color: #888;">외부 치수</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
            <div style="width: 16px; height: 3px; background: #2d2420; border-radius: 2px;"></div>
            <span style="font-size: 11px; color: #888;">상단 치수</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
            <div style="width: 16px; height: 3px; background: #ff8605; border-radius: 2px;"></div>
            <span style="font-size: 11px; color: #888;">둘레 치수</span>
        </div>
    </div>
</div>
```

---

### 6-1. 강조 배너 (할인/혜택)

**용도**: 대형 할인율과 가격 비교를 강조하는 프로모션 배너
**특징**: 대형 퍼센트 표시, 취소선 원가, 할인가 강조

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px;">
    <div style="background: linear-gradient(135deg, #2d2420 0%, #4a3a30 100%);
                padding: 40px 25px; text-align: center; position: relative; overflow: hidden;">
        <!-- Decorative circle -->
        <div style="position: absolute; top: -30px; right: -30px; width: 120px; height: 120px;
                    background: rgba(163,128,104,0.15); border-radius: 50%;"></div>
        <div style="position: absolute; bottom: -20px; left: -20px; width: 80px; height: 80px;
                    background: rgba(163,128,104,0.1); border-radius: 50%;"></div>
        <!-- Badge -->
        <div style="display: inline-block; background: #ff8605; color: #fff;
                    padding: 6px 18px; border-radius: 20px; font-size: 12px;
                    font-weight: 700; letter-spacing: 1px; margin-bottom: 16px;">
            SPECIAL OFFER
        </div>
        <!-- Discount -->
        <div style="color: #ff8605; font-size: 56px; font-weight: 900; line-height: 1; margin-bottom: 8px;">
            30<span style="font-size: 36px;">%</span>
        </div>
        <div style="color: rgba(255,255,255,0.5); font-size: 14px; font-weight: 400; margin-bottom: 16px;">
            오늘만 이 가격!
        </div>
        <!-- Price comparison -->
        <div style="display: flex; justify-content: center; align-items: baseline; gap: 12px;">
            <span style="color: rgba(255,255,255,0.4); font-size: 18px;
                         text-decoration: line-through; font-weight: 400;">89,000원</span>
            <span style="color: #fff; font-size: 32px; font-weight: 800;">62,300원</span>
        </div>
        <!-- Sub info -->
        <div style="color: rgba(255,255,255,0.6); font-size: 12px; margin-top: 12px;">
            무이자 3개월 할부 가능 | 무료배송
        </div>
    </div>
</div>
```

---

### 6-2. 타이머 긴급성 배너

**용도**: 카운트다운 타이머와 품절 임박 메시지로 긴급성을 유도하는 배너
**특징**: 실시간 카운트다운, SOLD OUT 임박 문구, 재고 표시

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px;">
    <div style="background: #2d2420; padding: 30px 20px; text-align: center;">
        <!-- Urgency badge -->
        <div style="display: inline-block; background: #E95769; color: #fff;
                    padding: 5px 16px; border-radius: 4px; font-size: 12px;
                    font-weight: 700; letter-spacing: 1px; margin-bottom: 16px;
                    animation: sh_pulse 2s ease-in-out infinite;">
            SOLD OUT 임박
        </div>
        <!-- Message -->
        <div style="color: #fff; font-size: 20px; font-weight: 700; line-height: 1.4; margin-bottom: 20px;">
            지금 주문하지 않으면<br>
            <span style="color: #ff8605;">다음 입고까지 2주</span> 소요!
        </div>
        <!-- Countdown Timer -->
        <div id="sh_countdown" style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
            <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 12px 16px; min-width: 64px;">
                <div id="sh_timer_hours" style="font-size: 28px; font-weight: 800; color: #fff; line-height: 1;">23</div>
                <div style="font-size: 10px; color: rgba(255,255,255,0.5); margin-top: 4px; letter-spacing: 1px;">HOURS</div>
            </div>
            <div style="color: #fff; font-size: 28px; font-weight: 300; align-self: flex-start; padding-top: 10px;">:</div>
            <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 12px 16px; min-width: 64px;">
                <div id="sh_timer_mins" style="font-size: 28px; font-weight: 800; color: #fff; line-height: 1;">59</div>
                <div style="font-size: 10px; color: rgba(255,255,255,0.5); margin-top: 4px; letter-spacing: 1px;">MINS</div>
            </div>
            <div style="color: #fff; font-size: 28px; font-weight: 300; align-self: flex-start; padding-top: 10px;">:</div>
            <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 12px 16px; min-width: 64px;">
                <div id="sh_timer_secs" style="font-size: 28px; font-weight: 800; color: #ff8605; line-height: 1;">45</div>
                <div style="font-size: 10px; color: rgba(255,255,255,0.5); margin-top: 4px; letter-spacing: 1px;">SECS</div>
            </div>
        </div>
        <!-- Stock bar -->
        <div style="max-width: 300px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 12px; color: rgba(255,255,255,0.6);">남은 수량</span>
                <span style="font-size: 12px; color: #E95769; font-weight: 700;">12개 남음</span>
            </div>
            <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                <div style="width: 15%; height: 100%; background: linear-gradient(90deg, #E95769, #ff8605);
                            border-radius: 3px; transition: width 0.3s ease;"></div>
            </div>
        </div>
    </div>
</div>
```

**추가 CSS**:
```css
@keyframes sh_pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}
```

**추가 JS**:
```js
(function() {
    var shEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    function shUpdateTimer() {
        var now = new Date().getTime();
        var diff = shEndTime - now;
        if (diff <= 0) return;
        var h = Math.floor(diff / (1000 * 60 * 60));
        var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((diff % (1000 * 60)) / 1000);
        var hEl = document.getElementById('sh_timer_hours');
        var mEl = document.getElementById('sh_timer_mins');
        var sEl = document.getElementById('sh_timer_secs');
        if (hEl) hEl.textContent = h < 10 ? '0' + h : h;
        if (mEl) mEl.textContent = m < 10 ? '0' + m : m;
        if (sEl) sEl.textContent = s < 10 ? '0' + s : s;
    }
    setInterval(shUpdateTimer, 1000);
})();
```

---

### 6-3. 세트 구매 유도 카드

**용도**: 번들/세트 상품 구매를 유도하는 가격 비교 카드
**특징**: 개별 vs 세트 가격 비교, 절약 금액 강조, 상품 썸네일

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 20px;">
    <div style="text-align: center; margin-bottom: 12px;">
        <span style="display: inline-block;
                     background: linear-gradient(135deg, #a38068 0%, #8b6b56 100%);
                     color: #fff; padding: 8px 22px; border-radius: 25px;
                     font-size: 13px; font-weight: 700; letter-spacing: 1px;">
            SET DEAL
        </span>
    </div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 8px;">
        세트로 사면 더 이득!
    </div>
    <div class="desc_small txtcenter" style="color: #888; margin-bottom: 30px;">
        개별 구매보다 <span style="color: #E95769; font-weight: 700;">최대 25%</span> 저렴해요
    </div>

    <!-- Set Card -->
    <div style="background: #fff; border: 2px solid #a38068; border-radius: 16px;
                overflow: hidden; max-width: 520px; margin: 0 auto 15px;
                box-shadow: 0 4px 20px rgba(163,128,104,0.15);">
        <!-- Best badge -->
        <div style="background: #a38068; color: #fff; text-align: center;
                    padding: 8px; font-size: 13px; font-weight: 700; letter-spacing: 1px;">
            BEST 세트 구성
        </div>
        <!-- Products -->
        <div style="padding: 20px;">
            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <div style="flex: 1; text-align: center;">
                    <div style="aspect-ratio: 1/1; background: #f9f6f2; border-radius: 10px; overflow: hidden; margin-bottom: 8px;">
                        <img src="https://dummyimage.com/150x150" alt="슬리핑백" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="font-size: 12px; font-weight: 600; color: #2d2420;">슬리핑백</div>
                    <div style="font-size: 11px; color: #999;">59,000원</div>
                </div>
                <div style="display: flex; align-items: center; font-size: 20px; color: #ccc; font-weight: 300;">+</div>
                <div style="flex: 1; text-align: center;">
                    <div style="aspect-ratio: 1/1; background: #f9f6f2; border-radius: 10px; overflow: hidden; margin-bottom: 8px;">
                        <img src="https://dummyimage.com/150x150" alt="스와들" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="font-size: 12px; font-weight: 600; color: #2d2420;">스와들</div>
                    <div style="font-size: 11px; color: #999;">39,000원</div>
                </div>
                <div style="display: flex; align-items: center; font-size: 20px; color: #ccc; font-weight: 300;">+</div>
                <div style="flex: 1; text-align: center;">
                    <div style="aspect-ratio: 1/1; background: #f9f6f2; border-radius: 10px; overflow: hidden; margin-bottom: 8px;">
                        <img src="https://dummyimage.com/150x150" alt="이불" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="font-size: 12px; font-weight: 600; color: #2d2420;">속싸개</div>
                    <div style="font-size: 11px; color: #999;">29,000원</div>
                </div>
            </div>
            <!-- Price comparison -->
            <div style="background: #FFFBF5; border-radius: 10px; padding: 16px; text-align: center;">
                <div style="display: flex; justify-content: center; align-items: baseline; gap: 10px; margin-bottom: 4px;">
                    <span style="font-size: 14px; color: #999; text-decoration: line-through;">127,000원</span>
                    <span style="font-size: 24px; color: #2d2420; font-weight: 800;">95,000원</span>
                </div>
                <div style="font-size: 13px; color: #E95769; font-weight: 600;">
                    32,000원 절약! (25% 할인)
                </div>
            </div>
        </div>
    </div>

    <!-- Single purchase card (less emphasis) -->
    <div style="background: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 12px;
                padding: 16px; max-width: 520px; margin: 0 auto;
                display: flex; justify-content: space-between; align-items: center;">
        <div>
            <div style="font-size: 13px; color: #999; margin-bottom: 2px;">개별 구매 시</div>
            <div style="font-size: 16px; color: #666; font-weight: 600;">127,000원</div>
        </div>
        <div style="font-size: 12px; color: #bbb;">정가 기준</div>
    </div>
</div>
```

---

### 6-4. 쿠폰 다운로드 박스

**용도**: 할인 쿠폰을 시각적으로 표현하고 다운로드 버튼을 제공하는 섹션
**특징**: 점선 테두리 쿠폰 카드, 할인 금액 강조, 다운로드 버튼

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 40px; padding: 40px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 8px;">
        특별 쿠폰 혜택
    </div>
    <div class="desc_small txtcenter" style="color: #888; margin-bottom: 30px;">
        지금 받고 바로 사용하세요
    </div>

    <!-- Coupon Card 1 -->
    <div style="max-width: 480px; margin: 0 auto 15px; background: #FFFBF5;
                border: 2px dashed #a38068; border-radius: 16px; overflow: hidden;
                position: relative;">
        <!-- Ticket notch left -->
        <div style="position: absolute; top: 50%; left: -12px; transform: translateY(-50%);
                    width: 24px; height: 24px; background: #fff; border-radius: 50%;"></div>
        <!-- Ticket notch right -->
        <div style="position: absolute; top: 50%; right: -12px; transform: translateY(-50%);
                    width: 24px; height: 24px; background: #fff; border-radius: 50%;"></div>
        <div style="display: flex; align-items: center; padding: 24px 30px; gap: 20px;">
            <div style="flex-shrink: 0; text-align: center; padding-right: 20px;
                        border-right: 1px dashed #d4c4b0;">
                <div style="font-size: 36px; font-weight: 900; color: #a38068; line-height: 1;">
                    5,000
                </div>
                <div style="font-size: 14px; font-weight: 600; color: #a38068;">원 할인</div>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 4px;">
                    신규 회원 웰컴 쿠폰
                </div>
                <div style="font-size: 12px; color: #999; line-height: 1.5;">
                    30,000원 이상 구매 시 사용 가능<br>
                    발급일로부터 7일간 유효
                </div>
            </div>
        </div>
        <button onclick="alert('쿠폰이 다운로드되었습니다!')"
                style="display: block; width: 100%; padding: 14px; background: #a38068;
                       color: #fff; border: none; font-size: 14px; font-weight: 700;
                       cursor: pointer; letter-spacing: 0.5px; transition: background 0.3s ease;"
                onmouseover="this.style.background='#8b6b56'"
                onmouseout="this.style.background='#a38068'">
            쿠폰 받기
        </button>
    </div>

    <!-- Coupon Card 2 -->
    <div style="max-width: 480px; margin: 0 auto; background: #2d2420;
                border-radius: 16px; overflow: hidden; position: relative;">
        <div style="position: absolute; top: 50%; left: -12px; transform: translateY(-50%);
                    width: 24px; height: 24px; background: #fff; border-radius: 50%;"></div>
        <div style="position: absolute; top: 50%; right: -12px; transform: translateY(-50%);
                    width: 24px; height: 24px; background: #fff; border-radius: 50%;"></div>
        <div style="display: flex; align-items: center; padding: 24px 30px; gap: 20px;">
            <div style="flex-shrink: 0; text-align: center; padding-right: 20px;
                        border-right: 1px dashed rgba(255,255,255,0.2);">
                <div style="font-size: 36px; font-weight: 900; color: #ff8605; line-height: 1;">
                    15%
                </div>
                <div style="font-size: 14px; font-weight: 600; color: #ff8605;">할인</div>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 4px;">
                    세트 구매 추가 할인
                </div>
                <div style="font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.5;">
                    2개 이상 구매 시 사용 가능<br>
                    최대 20,000원 할인
                </div>
            </div>
        </div>
        <button onclick="alert('쿠폰이 다운로드되었습니다!')"
                style="display: block; width: 100%; padding: 14px; background: #ff8605;
                       color: #fff; border: none; font-size: 14px; font-weight: 700;
                       cursor: pointer; letter-spacing: 0.5px; transition: background 0.3s ease;"
                onmouseover="this.style.background='#e67800'"
                onmouseout="this.style.background='#ff8605'">
            쿠폰 받기
        </button>
    </div>
</div>
```

---

### 6-5. 플로팅 하단 바

**용도**: 화면 하단에 고정되는 구매 유도 바
**특징**: 가격 정보 + 구매하기 버튼, 고정 포지션, 그림자 효과

**HTML**:
```html
<!-- Floating Bottom Bar -->
<div id="sh_floating_bar"
     style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
            background: #fff; border-top: 1px solid #eee;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
            padding: 12px 20px;
            transform: translateY(100%); transition: transform 0.4s ease;">
    <div style="max-width: 600px; margin: 0 auto;
                display: flex; justify-content: space-between; align-items: center;">
        <!-- Price Info -->
        <div>
            <div style="display: flex; align-items: baseline; gap: 6px;">
                <span style="font-size: 12px; color: #E95769; font-weight: 700;">30%</span>
                <span style="font-size: 13px; color: #bbb; text-decoration: line-through;">89,000원</span>
            </div>
            <div style="font-size: 20px; font-weight: 800; color: #2d2420; line-height: 1.2;">
                62,300원
            </div>
        </div>
        <!-- CTA Button -->
        <button onclick="alert('구매 페이지로 이동합니다.')"
                style="background: linear-gradient(135deg, #a38068 0%, #8b6b56 100%);
                       color: #fff; border: none; padding: 14px 36px; border-radius: 10px;
                       font-size: 16px; font-weight: 700; cursor: pointer;
                       box-shadow: 0 4px 12px rgba(163,128,104,0.4);
                       transition: box-shadow 0.3s ease;"
                onmouseover="this.style.boxShadow='0 6px 20px rgba(163,128,104,0.5)'"
                onmouseout="this.style.boxShadow='0 4px 12px rgba(163,128,104,0.4)'">
            구매하기
        </button>
    </div>
</div>
```

**추가 JS**:
```js
(function() {
    var shBar = document.getElementById('sh_floating_bar');
    var shBarShown = false;
    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > 400 && !shBarShown) {
            shBar.style.transform = 'translateY(0)';
            shBarShown = true;
        } else if (scrollY <= 400 && shBarShown) {
            shBar.style.transform = 'translateY(100%)';
            shBarShown = false;
        }
    });
})();
```

---

### 6-6. 관련 상품 추천 카드

**용도**: 수평 스크롤로 관련 제품을 추천하는 카드 슬라이더
**특징**: 가로 스크롤 카드, 이미지+상품명+가격 구조

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 50px; padding: 40px 0;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 8px; padding: 0 20px;">
        함께 구매하면 좋은 상품
    </div>
    <div class="desc_small txtcenter" style="color: #888; margin-bottom: 25px; padding: 0 20px;">
        다른 고객님들이 함께 구매한 인기 상품이에요
    </div>
    <!-- Horizontal scroll container -->
    <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;
                padding: 0 20px 10px; scroll-snap-type: x mandatory;">
        <div style="display: flex; gap: 14px; width: max-content;">
            <!-- Card 1 -->
            <div style="width: 160px; flex-shrink: 0; scroll-snap-align: start;">
                <div style="aspect-ratio: 1/1; border-radius: 12px; overflow: hidden;
                            margin-bottom: 10px; background: #f5f0e8;">
                    <img src="https://dummyimage.com/160x160" alt="스와들 스트랩"
                         style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 4px;
                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    스와들 스트랩
                </div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">오가닉 코튼</div>
                <div style="display: flex; align-items: baseline; gap: 4px;">
                    <span style="font-size: 14px; font-weight: 700; color: #a38068;">39,000원</span>
                </div>
            </div>
            <!-- Card 2 -->
            <div style="width: 160px; flex-shrink: 0; scroll-snap-align: start;">
                <div style="aspect-ratio: 1/1; border-radius: 12px; overflow: hidden;
                            margin-bottom: 10px; background: #f5f0e8;">
                    <img src="https://dummyimage.com/160x160" alt="아기 이불"
                         style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 4px;
                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    사계절 아기 이불
                </div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">뱀부 레이온</div>
                <div style="display: flex; align-items: baseline; gap: 4px;">
                    <span style="font-size: 12px; color: #E95769; font-weight: 700;">20%</span>
                    <span style="font-size: 14px; font-weight: 700; color: #a38068;">45,000원</span>
                </div>
            </div>
            <!-- Card 3 -->
            <div style="width: 160px; flex-shrink: 0; scroll-snap-align: start;">
                <div style="aspect-ratio: 1/1; border-radius: 12px; overflow: hidden;
                            margin-bottom: 10px; background: #f5f0e8;">
                    <img src="https://dummyimage.com/160x160" alt="속싸개"
                         style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 4px;
                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    신생아 속싸개
                </div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">오가닉 코튼</div>
                <div style="display: flex; align-items: baseline; gap: 4px;">
                    <span style="font-size: 12px; color: #E95769; font-weight: 700;">15%</span>
                    <span style="font-size: 14px; font-weight: 700; color: #a38068;">29,000원</span>
                </div>
            </div>
            <!-- Card 4 -->
            <div style="width: 160px; flex-shrink: 0; scroll-snap-align: start;">
                <div style="aspect-ratio: 1/1; border-radius: 12px; overflow: hidden;
                            margin-bottom: 10px; background: #f5f0e8;">
                    <img src="https://dummyimage.com/160x160" alt="수면조끼"
                         style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 4px;
                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    수면 조끼
                </div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">거즈 코튼</div>
                <div style="display: flex; align-items: baseline; gap: 4px;">
                    <span style="font-size: 14px; font-weight: 700; color: #a38068;">35,000원</span>
                </div>
            </div>
            <!-- Card 5 -->
            <div style="width: 160px; flex-shrink: 0; scroll-snap-align: start;">
                <div style="aspect-ratio: 1/1; border-radius: 12px; overflow: hidden;
                            margin-bottom: 10px; background: #f5f0e8;">
                    <img src="https://dummyimage.com/160x160" alt="턱받이"
                         style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="font-size: 13px; font-weight: 600; color: #2d2420; margin-bottom: 4px;
                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    방수 턱받이 3종세트
                </div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">대나무 원단</div>
                <div style="display: flex; align-items: baseline; gap: 4px;">
                    <span style="font-size: 12px; color: #E95769; font-weight: 700;">10%</span>
                    <span style="font-size: 14px; font-weight: 700; color: #a38068;">18,000원</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

**추가 CSS**:
```css
/* Hide scrollbar but keep functionality */
div[style*="overflow-x: auto"]::-webkit-scrollbar {
    display: none;
}
div[style*="overflow-x: auto"] {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
```

---

### 6-7. 구매 혜택 요약 배너

**용도**: 무료배송, 보증, 교환 등 구매 혜택을 아이콘과 함께 요약하는 배너
**특징**: 아이콘+텍스트 수평 배치, 깔끔한 그리드 구조

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; margin-top: 40px;">
    <div style="background: #FFFBF5; border: 1px solid #EAE2D5; border-radius: 16px;
                padding: 28px 20px; max-width: 560px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 22px;">
            <span style="font-size: 16px; font-weight: 700; color: #2d2420;">
                구매 혜택 한눈에 보기
            </span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
            <!-- Benefit 1 -->
            <div style="text-align: center;">
                <div style="width: 48px; height: 48px; background: #fff; border-radius: 50%;
                            margin: 0 auto 10px; display: flex; align-items: center;
                            justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                    <span style="font-size: 22px;">🚚</span>
                </div>
                <div style="font-size: 12px; font-weight: 700; color: #2d2420; margin-bottom: 2px;">무료배송</div>
                <div style="font-size: 10px; color: #999; line-height: 1.3;">전 상품<br>무료배송</div>
            </div>
            <!-- Benefit 2 -->
            <div style="text-align: center;">
                <div style="width: 48px; height: 48px; background: #fff; border-radius: 50%;
                            margin: 0 auto 10px; display: flex; align-items: center;
                            justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                    <span style="font-size: 22px;">🔄</span>
                </div>
                <div style="font-size: 12px; font-weight: 700; color: #2d2420; margin-bottom: 2px;">무료교환</div>
                <div style="font-size: 10px; color: #999; line-height: 1.3;">30일 이내<br>무료 교환</div>
            </div>
            <!-- Benefit 3 -->
            <div style="text-align: center;">
                <div style="width: 48px; height: 48px; background: #fff; border-radius: 50%;
                            margin: 0 auto 10px; display: flex; align-items: center;
                            justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                    <span style="font-size: 22px;">🛡️</span>
                </div>
                <div style="font-size: 12px; font-weight: 700; color: #2d2420; margin-bottom: 2px;">1년 보증</div>
                <div style="font-size: 10px; color: #999; line-height: 1.3;">품질보증<br>1년</div>
            </div>
            <!-- Benefit 4 -->
            <div style="text-align: center;">
                <div style="width: 48px; height: 48px; background: #fff; border-radius: 50%;
                            margin: 0 auto 10px; display: flex; align-items: center;
                            justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                    <span style="font-size: 22px;">🎁</span>
                </div>
                <div style="font-size: 12px; font-weight: 700; color: #2d2420; margin-bottom: 2px;">사은품</div>
                <div style="font-size: 10px; color: #999; line-height: 1.3;">리뷰 작성 시<br>증정</div>
            </div>
        </div>
    </div>
</div>
```

---

All 14 templates are complete. Here is a summary of what was delivered:

**CATEGORY 5 -- 제품 상세 정보 (7 templates)**:
- **5-1**: Modern card-style spec table with alternating white/#f9f6f2 backgrounds, icon+label+value per row
- **5-2**: Dark theme spec table on black background with clean flex rows and white typography
- **5-3**: Visual size guide with annotation callout lines overlaid on a product image, plus `.size_wrap3` table below
- **5-4**: Fabric/material tab interface using `sh_fabric-*` classes with tab switching JS, three material tabs with property tags
- **5-5**: Color swatch selector using `.c_btnbox`/`.c_bgbox` classes with image transition on color selection
- **5-6**: 3-column component grid with circular images, quantity badges (top-right), and item descriptions
- **5-7**: Detailed dimension diagram with measurement lines, color-coded callout labels, and a legend

**CATEGORY 6 -- CTA/전환 유도 섹션 (7 templates)**:
- **6-1**: Bold discount banner with gradient dark background, large percentage, strikethrough vs sale price
- **6-2**: Countdown timer with live JS, urgency badge with pulse animation, stock progress bar
- **6-3**: Bundle set deal card with product thumbnails, + signs, original vs set price comparison
- **6-4**: Coupon download cards with ticket-notch design, dashed borders, and download buttons
- **6-5**: Fixed-position floating bottom bar with price info and purchase button, scroll-triggered JS
- **6-6**: Horizontal scrolling product recommendation cards with snap scrolling, hidden scrollbar CSS
- **6-7**: Purchase benefits summary with 4-column icon grid (free shipping, exchange, warranty, gift)

All templates follow the constraints: `max-width: 600px` mobile-first, existing CSS classes where applicable, `sh_` prefix for new classes, `https://dummyimage.com/WIDTHxHEIGHT` for dummy images, `.detail_section` wrapper with `margin-bottom: 0px`, brand colors (#A38068, #2d2420, #ff8605, #FFFBF5, #EAE2D5), smooth transitions only, and copy-paste ready.

## CATEGORY 7: FAQ/정보 섹션

---

### 7-1. 기본 아코디언 FAQ

**용도**: 자주 묻는 질문을 접었다 펼 수 있는 기본 아코디언 형태로 제공
**특징**: 클릭 시 펼치기/접기, 화살표 회전 애니메이션, border-bottom 구분

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w700 txtleft">
        <span class="desc_btn" style="background: #000000;">FAQ</span>
    </div>
    <div class="title font-w700 txtleft" style="font-size: 28px; margin: 15px 0 30px;">
        자주 묻는 질문
    </div>
    <div style="max-width: 560px; margin: 0 auto;">
        <!-- FAQ Item 1 -->
        <div class="sh_faq-item" style="border-bottom: 1px solid #eee;">
            <div class="sh_faq-question" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 20px 0; cursor: pointer;">
                <span style="font-size: 15px; font-weight: 600; color: #2d2420; flex: 1; padding-right: 15px;">
                    Q. 슬리핑백 사이즈는 어떻게 선택하나요?
                </span>
                <span class="sh_faq-arrow" style="font-size: 12px; color: #a38068; transition: transform 0.3s;
                            display: inline-block; flex-shrink: 0;">▼</span>
            </div>
            <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                <div style="padding: 0 0 20px; font-size: 14px; color: #666; line-height: 1.8;">
                    아기의 키를 기준으로 선택해 주세요. S(0~6개월/~68cm), M(6~18개월/~85cm),
                    L(18~36개월/~100cm)으로 구분됩니다. 여유있는 사이즈를 권장드립니다.
                </div>
            </div>
        </div>
        <!-- FAQ Item 2 -->
        <div class="sh_faq-item" style="border-bottom: 1px solid #eee;">
            <div class="sh_faq-question" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 20px 0; cursor: pointer;">
                <span style="font-size: 15px; font-weight: 600; color: #2d2420; flex: 1; padding-right: 15px;">
                    Q. 세탁은 어떻게 하나요?
                </span>
                <span class="sh_faq-arrow" style="font-size: 12px; color: #a38068; transition: transform 0.3s;
                            display: inline-block; flex-shrink: 0;">▼</span>
            </div>
            <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                <div style="padding: 0 0 20px; font-size: 14px; color: #666; line-height: 1.8;">
                    30도 이하 저온에서 중성 세제로 세탁기 세탁이 가능합니다.
                    건조기 사용은 피하시고 그늘에서 자연 건조해 주세요.
                </div>
            </div>
        </div>
        <!-- FAQ Item 3 -->
        <div class="sh_faq-item" style="border-bottom: 1px solid #eee;">
            <div class="sh_faq-question" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 20px 0; cursor: pointer;">
                <span style="font-size: 15px; font-weight: 600; color: #2d2420; flex: 1; padding-right: 15px;">
                    Q. 여름에도 사용할 수 있나요?
                </span>
                <span class="sh_faq-arrow" style="font-size: 12px; color: #a38068; transition: transform 0.3s;
                            display: inline-block; flex-shrink: 0;">▼</span>
            </div>
            <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                <div style="padding: 0 0 20px; font-size: 14px; color: #666; line-height: 1.8;">
                    네, 사계절용 제품입니다. 통기성이 뛰어난 오가닉 코튼 소재로
                    여름 에어컨 환경에서도 쾌적하게 사용할 수 있습니다.
                </div>
            </div>
        </div>
        <!-- FAQ Item 4 -->
        <div class="sh_faq-item" style="border-bottom: 1px solid #eee;">
            <div class="sh_faq-question" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 20px 0; cursor: pointer;">
                <span style="font-size: 15px; font-weight: 600; color: #2d2420; flex: 1; padding-right: 15px;">
                    Q. 교환/반품은 가능한가요?
                </span>
                <span class="sh_faq-arrow" style="font-size: 12px; color: #a38068; transition: transform 0.3s;
                            display: inline-block; flex-shrink: 0;">▼</span>
            </div>
            <div class="sh_faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                <div style="padding: 0 0 20px; font-size: 14px; color: #666; line-height: 1.8;">
                    수령 후 7일 이내 미사용 제품에 한해 교환/반품이 가능합니다.
                    단, 택 제거 또는 세탁한 제품은 교환/반품이 불가합니다.
                </div>
            </div>
        </div>
    </div>
</div>
```

**추가 JS**:
```js
document.querySelectorAll('.sh_faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
        var answer = this.nextElementSibling;
        var arrow = this.querySelector('.sh_faq-arrow');
        var isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
        // Close all
        document.querySelectorAll('.sh_faq-answer').forEach(function(a) { a.style.maxHeight = '0px'; });
        document.querySelectorAll('.sh_faq-arrow').forEach(function(a) { a.style.transform = 'rotate(0deg)'; });
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            arrow.style.transform = 'rotate(180deg)';
        }
    });
});
```

---

### 7-2. 카드형 FAQ

**용도**: 각 FAQ를 개별 카드로 분리하여 시각적 구분을 강조
**특징**: 라운드 카드, 그림자 효과, 독립적 펼침/접기

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        궁금한 점이 있으신가요?
    </div>
    <div style="max-width: 560px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px;">
        <!-- Card FAQ 1 -->
        <div class="sh_faq-card" style="background: #fff; border-radius: 14px; padding: 0; overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div class="sh_faq-card-q" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 18px 20px; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 28px; height: 28px; background: #a38068; border-radius: 50%; color: #fff;
                                display: flex; align-items: center; justify-content: center; font-size: 13px;
                                font-weight: 700; flex-shrink: 0;">Q</span>
                    <span style="font-size: 14px; font-weight: 600; color: #2d2420;">몇 개월부터 사용 가능한가요?</span>
                </div>
                <span class="sh_faq-card-icon" style="font-size: 18px; color: #a38068; transition: transform 0.3s;">+</span>
            </div>
            <div class="sh_faq-card-a" style="max-height: 0; overflow: hidden; transition: max-height 0.3s;">
                <div style="padding: 0 20px 18px 60px; font-size: 14px; color: #666; line-height: 1.8;">
                    신생아(0개월)부터 사용 가능합니다. S사이즈는 0~6개월, M사이즈는 6~18개월, L사이즈는 18~36개월 아기에게 적합합니다.
                </div>
            </div>
        </div>
        <!-- Card FAQ 2 -->
        <div class="sh_faq-card" style="background: #fff; border-radius: 14px; padding: 0; overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div class="sh_faq-card-q" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 18px 20px; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 28px; height: 28px; background: #a38068; border-radius: 50%; color: #fff;
                                display: flex; align-items: center; justify-content: center; font-size: 13px;
                                font-weight: 700; flex-shrink: 0;">Q</span>
                    <span style="font-size: 14px; font-weight: 600; color: #2d2420;">소재가 안전한가요?</span>
                </div>
                <span class="sh_faq-card-icon" style="font-size: 18px; color: #a38068; transition: transform 0.3s;">+</span>
            </div>
            <div class="sh_faq-card-a" style="max-height: 0; overflow: hidden; transition: max-height 0.3s;">
                <div style="padding: 0 20px 18px 60px; font-size: 14px; color: #666; line-height: 1.8;">
                    GOTS 인증 오가닉 코튼 100%로, 유해물질 불검출 테스트를 완료했습니다. KC 안전인증과 OEKO-TEX 인증도 획득했습니다.
                </div>
            </div>
        </div>
        <!-- Card FAQ 3 -->
        <div class="sh_faq-card" style="background: #fff; border-radius: 14px; padding: 0; overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div class="sh_faq-card-q" style="display: flex; justify-content: space-between; align-items: center;
                        padding: 18px 20px; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 28px; height: 28px; background: #a38068; border-radius: 50%; color: #fff;
                                display: flex; align-items: center; justify-content: center; font-size: 13px;
                                font-weight: 700; flex-shrink: 0;">Q</span>
                    <span style="font-size: 14px; font-weight: 600; color: #2d2420;">배송은 얼마나 걸리나요?</span>
                </div>
                <span class="sh_faq-card-icon" style="font-size: 18px; color: #a38068; transition: transform 0.3s;">+</span>
            </div>
            <div class="sh_faq-card-a" style="max-height: 0; overflow: hidden; transition: max-height 0.3s;">
                <div style="padding: 0 20px 18px 60px; font-size: 14px; color: #666; line-height: 1.8;">
                    평일 오후 2시 이전 주문 시 당일 발송되며, 배송은 발송 후 1~2일 소요됩니다. 도서산간 지역은 1~2일 추가될 수 있습니다.
                </div>
            </div>
        </div>
    </div>
</div>
```

**추가 JS**:
```js
document.querySelectorAll('.sh_faq-card-q').forEach(function(q) {
    q.addEventListener('click', function() {
        var answer = this.nextElementSibling;
        var icon = this.querySelector('.sh_faq-card-icon');
        var isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
        if (isOpen) {
            answer.style.maxHeight = '0px';
            icon.textContent = '+';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.textContent = '−';
        }
    });
});
```

---

### 7-3. 아이콘 + FAQ

**용도**: 아이콘으로 카테고리를 구분한 시각적 FAQ 섹션
**특징**: 각 질문 앞에 카테고리 아이콘, 시각적 그룹핑

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        자주 묻는 질문
    </div>
    <div style="max-width: 560px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px;">
        <div style="display: flex; gap: 14px; align-items: flex-start; background: #f9f7f5; border-radius: 12px; padding: 18px;">
            <div style="width: 40px; height: 40px; background: #fff; border-radius: 10px; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center; font-size: 20px;
                        box-shadow: 0 1px 4px rgba(0,0,0,0.06);">📏</div>
            <div>
                <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 6px;">사이즈 관련</div>
                <div style="font-size: 13px; color: #666; line-height: 1.7;">
                    <strong>Q. 사이즈 교환이 가능한가요?</strong><br>
                    A. 미사용 제품에 한해 수령 후 7일 이내 교환 가능합니다.
                </div>
            </div>
        </div>
        <div style="display: flex; gap: 14px; align-items: flex-start; background: #f9f7f5; border-radius: 12px; padding: 18px;">
            <div style="width: 40px; height: 40px; background: #fff; border-radius: 10px; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center; font-size: 20px;
                        box-shadow: 0 1px 4px rgba(0,0,0,0.06);">🧺</div>
            <div>
                <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 6px;">세탁 관련</div>
                <div style="font-size: 13px; color: #666; line-height: 1.7;">
                    <strong>Q. 건조기 사용해도 되나요?</strong><br>
                    A. 건조기 사용은 권장하지 않습니다. 그늘에서 자연건조 해주세요.
                </div>
            </div>
        </div>
        <div style="display: flex; gap: 14px; align-items: flex-start; background: #f9f7f5; border-radius: 12px; padding: 18px;">
            <div style="width: 40px; height: 40px; background: #fff; border-radius: 10px; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center; font-size: 20px;
                        box-shadow: 0 1px 4px rgba(0,0,0,0.06);">🚚</div>
            <div>
                <div style="font-size: 14px; font-weight: 600; color: #2d2420; margin-bottom: 6px;">배송 관련</div>
                <div style="font-size: 13px; color: #666; line-height: 1.7;">
                    <strong>Q. 해외 배송도 가능한가요?</strong><br>
                    A. 현재 국내 배송만 지원합니다. 해외 배송은 준비 중입니다.
                </div>
            </div>
        </div>
    </div>
</div>
```

---

### 7-4. 배송/교환 정보 박스

**용도**: 배송, 교환, 반품 정책을 아이콘과 함께 정리한 정보 섹션
**특징**: 아이콘 + 제목 + 상세 정보의 그리드 레이아웃

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        배송 · 교환 · 반품 안내
    </div>
    <div style="max-width: 560px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <!-- 배송 -->
        <div style="background: #fff; border-radius: 14px; padding: 24px 18px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="font-size: 28px; margin-bottom: 10px;">📦</div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">배송 안내</div>
            <div style="font-size: 13px; color: #666; line-height: 1.7;">
                평일 오후 2시 이전 결제 완료 시 당일 발송<br>
                배송비: 무료 (제주/도서산간 3,000원 추가)
            </div>
        </div>
        <!-- 교환 -->
        <div style="background: #fff; border-radius: 14px; padding: 24px 18px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="font-size: 28px; margin-bottom: 10px;">🔄</div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">교환 안내</div>
            <div style="font-size: 13px; color: #666; line-height: 1.7;">
                수령 후 7일 이내 신청<br>
                미사용 · 택 부착 상태에서만 가능
            </div>
        </div>
        <!-- 반품 -->
        <div style="background: #fff; border-radius: 14px; padding: 24px 18px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="font-size: 28px; margin-bottom: 10px;">↩️</div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">반품 안내</div>
            <div style="font-size: 13px; color: #666; line-height: 1.7;">
                수령 후 7일 이내 신청<br>
                반품 배송비 고객 부담 (불량 시 무료)
            </div>
        </div>
        <!-- A/S -->
        <div style="background: #fff; border-radius: 14px; padding: 24px 18px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);">
            <div style="font-size: 28px; margin-bottom: 10px;">🛠️</div>
            <div style="font-size: 15px; font-weight: 700; color: #2d2420; margin-bottom: 8px;">A/S 안내</div>
            <div style="font-size: 13px; color: #666; line-height: 1.7;">
                구매일로부터 1년 품질 보증<br>
                고객센터: 1588-0000
            </div>
        </div>
    </div>
</div>
```

---

### 7-5. 사용법/케어 가이드 스텝

**용도**: 제품 사용법이나 관리 방법을 단계별로 안내
**특징**: 번호 스텝 + 이미지 + 설명의 깔끔한 인스트럭션 레이아웃

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="sub_title font-w600 txtcenter color_dark_brown"
         style="font-size: 14px; letter-spacing: 3px; margin-bottom: 12px;">CARE GUIDE</div>
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 35px;">
        올바른 세탁 & 관리법
    </div>
    <div style="max-width: 560px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px;">
        <!-- Step 1 -->
        <div style="display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 36px; height: 36px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center;
                        font-size: 14px; font-weight: 700; color: #fff;">1</div>
            <div style="flex: 1;">
                <div style="font-size: 16px; font-weight: 600; color: #2d2420; margin-bottom: 6px;">세탁 전 지퍼를 잠가주세요</div>
                <div style="font-size: 13px; color: #888; line-height: 1.7; margin-bottom: 12px;">
                    세탁 시 지퍼가 원단을 손상시킬 수 있으므로 반드시 지퍼를 완전히 잠근 후 세탁해 주세요.
                </div>
                <div style="border-radius: 10px; overflow: hidden;">
                    <img src="https://dummyimage.com/500x280" alt="세탁 스텝1" style="width: 100%; display: block;">
                </div>
            </div>
        </div>
        <!-- Step 2 -->
        <div style="display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 36px; height: 36px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center;
                        font-size: 14px; font-weight: 700; color: #fff;">2</div>
            <div style="flex: 1;">
                <div style="font-size: 16px; font-weight: 600; color: #2d2420; margin-bottom: 6px;">30°C 이하 중성 세제로 세탁</div>
                <div style="font-size: 13px; color: #888; line-height: 1.7; margin-bottom: 12px;">
                    세탁기 약한 모드(울/손세탁 코스)로 저온 세탁하시면 원단 손상을 최소화할 수 있습니다.
                </div>
                <div style="border-radius: 10px; overflow: hidden;">
                    <img src="https://dummyimage.com/500x280" alt="세탁 스텝2" style="width: 100%; display: block;">
                </div>
            </div>
        </div>
        <!-- Step 3 -->
        <div style="display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 36px; height: 36px; background: #a38068; border-radius: 50%; flex-shrink: 0;
                        display: flex; align-items: center; justify-content: center;
                        font-size: 14px; font-weight: 700; color: #fff;">3</div>
            <div style="flex: 1;">
                <div style="font-size: 16px; font-weight: 600; color: #2d2420; margin-bottom: 6px;">그늘에서 자연 건조</div>
                <div style="font-size: 13px; color: #888; line-height: 1.7;">
                    건조기 사용을 피하고 통풍이 잘 되는 그늘에서 평건조 해주세요. 직사광선은 변색의 원인이 됩니다.
                </div>
            </div>
        </div>
    </div>
</div>
```

---

### 7-6. 카테고리별 FAQ 탭

**용도**: 질문을 카테고리별로 분류하여 탭으로 필터링하는 고급 FAQ
**특징**: 탭 버튼으로 카테고리 전환, 해당 카테고리의 FAQ만 표시

**HTML**:
```html
<div class="detail_section bg-color-1" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 30px;">
        무엇이든 물어보세요
    </div>
    <!-- Category Tabs -->
    <div style="display: flex; gap: 8px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap;">
        <button class="sh_faq-tab sh_faq-tab--active" data-faq-cat="all"
                style="padding: 8px 18px; border-radius: 20px; border: 1px solid #a38068;
                       background: #a38068; color: #fff; font-size: 13px; font-weight: 600; cursor: pointer;">전체</button>
        <button class="sh_faq-tab" data-faq-cat="product"
                style="padding: 8px 18px; border-radius: 20px; border: 1px solid #ddd;
                       background: #fff; color: #666; font-size: 13px; font-weight: 600; cursor: pointer;">제품</button>
        <button class="sh_faq-tab" data-faq-cat="shipping"
                style="padding: 8px 18px; border-radius: 20px; border: 1px solid #ddd;
                       background: #fff; color: #666; font-size: 13px; font-weight: 600; cursor: pointer;">배송</button>
        <button class="sh_faq-tab" data-faq-cat="exchange"
                style="padding: 8px 18px; border-radius: 20px; border: 1px solid #ddd;
                       background: #fff; color: #666; font-size: 13px; font-weight: 600; cursor: pointer;">교환/반품</button>
    </div>
    <!-- FAQ Items -->
    <div style="max-width: 560px; margin: 0 auto;">
        <div class="sh_faq-tab-item" data-cat="product" style="border-bottom: 1px solid #e8e4de; padding: 16px 0;">
            <div style="font-size: 14px; font-weight: 600; color: #2d2420;">Q. 슬리핑백과 수면조끼의 차이는?</div>
            <div style="font-size: 13px; color: #888; margin-top: 8px; line-height: 1.7;">슬리핑백은 발까지 감싸는 형태이고, 수면조끼는 상체만 감싸는 형태입니다.</div>
        </div>
        <div class="sh_faq-tab-item" data-cat="product" style="border-bottom: 1px solid #e8e4de; padding: 16px 0;">
            <div style="font-size: 14px; font-weight: 600; color: #2d2420;">Q. 사이즈 선택 기준은?</div>
            <div style="font-size: 13px; color: #888; margin-top: 8px; line-height: 1.7;">아기의 키를 기준으로 선택하세요. 체중보다 키가 더 정확한 기준입니다.</div>
        </div>
        <div class="sh_faq-tab-item" data-cat="shipping" style="border-bottom: 1px solid #e8e4de; padding: 16px 0;">
            <div style="font-size: 14px; font-weight: 600; color: #2d2420;">Q. 배송 기간은 얼마나 걸리나요?</div>
            <div style="font-size: 13px; color: #888; margin-top: 8px; line-height: 1.7;">평일 14시 이전 주문 시 당일 발송, 배송은 1~2일 소요됩니다.</div>
        </div>
        <div class="sh_faq-tab-item" data-cat="exchange" style="border-bottom: 1px solid #e8e4de; padding: 16px 0;">
            <div style="font-size: 14px; font-weight: 600; color: #2d2420;">Q. 교환/반품 절차는 어떻게 되나요?</div>
            <div style="font-size: 13px; color: #888; margin-top: 8px; line-height: 1.7;">고객센터로 연락 후 반품 접수 → 제품 회수 → 검수 후 교환/환불 처리됩니다.</div>
        </div>
    </div>
</div>
```

**추가 JS**:
```js
document.querySelectorAll('.sh_faq-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        var cat = this.getAttribute('data-faq-cat');
        // Reset tabs
        document.querySelectorAll('.sh_faq-tab').forEach(function(t) {
            t.style.background = '#fff'; t.style.color = '#666'; t.style.borderColor = '#ddd';
        });
        this.style.background = '#a38068'; this.style.color = '#fff'; this.style.borderColor = '#a38068';
        // Filter items
        document.querySelectorAll('.sh_faq-tab-item').forEach(function(item) {
            item.style.display = (cat === 'all' || item.getAttribute('data-cat') === cat) ? 'block' : 'none';
        });
    });
});
```

---

## CATEGORY 8: 소셜 프루프/UGC 섹션

---

### 8-1. 인스타 피드 스타일 그리드

**용도**: 인스타그램 피드처럼 3열 그리드로 고객/브랜드 사진을 보여줌
**특징**: 정사각형 이미지 3열 그리드, @핸들명, 호버 효과

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 0;">
    <div style="text-align: center; margin-bottom: 25px; padding: 0 20px;">
        <div style="font-size: 24px; margin-bottom: 8px;">📸</div>
        <div class="title font-w700 txtcenter" style="margin-bottom: 6px;">
            @sundayhug_official
        </div>
        <div class="desc_small txtcenter" style="color: #888;">
            팔로우하고 육아 꿀팁 받아가세요
        </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; max-width: 600px; margin: 0 auto;">
        <div style="aspect-ratio: 1/1; overflow: hidden;">
            <img src="https://dummyimage.com/200x200" alt="인스타1" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s;">
        </div>
        <div style="aspect-ratio: 1/1; overflow: hidden;">
            <img src="https://dummyimage.com/200x200" alt="인스타2" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s;">
        </div>
        <div style="aspect-ratio: 1/1; overflow: hidden;">
            <img src="https://dummyimage.com/200x200" alt="인스타3" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s;">
        </div>
        <div style="aspect-ratio: 1/1; overflow: hidden;">
            <img src="https://dummyimage.com/200x200" alt="인스타4" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s;">
        </div>
        <div style="aspect-ratio: 1/1; overflow: hidden;">
            <img src="https://dummyimage.com/200x200" alt="인스타5" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s;">
        </div>
        <div style="aspect-ratio: 1/1; overflow: hidden;">
            <img src="https://dummyimage.com/200x200" alt="인스타6" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s;">
        </div>
    </div>
</div>
```

---

### 8-2. 고객 포토 리뷰 갤러리

**용도**: 고객 포토 리뷰를 수평 스크롤 갤러리로 보여줌
**특징**: 별점 + 고객명 + 구매 정보가 포함된 수평 스크롤 카드

**HTML**:
```html
<div class="detail_section bg-color-dailycream" style="margin-bottom: 0px; padding: 50px 0;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 10px; padding: 0 20px;">
        고객 포토 리뷰
    </div>
    <div class="desc_small txtcenter" style="color: #888; margin-bottom: 30px; padding: 0 20px;">
        실제 구매 고객님들의 생생한 후기
    </div>
    <div style="display: flex; gap: 14px; overflow-x: auto; scroll-snap-type: x mandatory;
                padding: 0 20px 20px; -webkit-overflow-scrolling: touch;"
         class="sh_photo-gallery">
        <!-- Photo Review 1 -->
        <div style="min-width: 240px; max-width: 240px; scroll-snap-align: start; background: #fff;
                    border-radius: 14px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="aspect-ratio: 1/1; overflow: hidden;">
                <img src="https://dummyimage.com/240x240" alt="포토리뷰1" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 14px;">
                <div style="color: #ff8605; font-size: 12px; margin-bottom: 6px;">★★★★★</div>
                <div style="font-size: 13px; color: #2d2420; line-height: 1.6; margin-bottom: 8px;">
                    소재가 정말 부드럽고 아기가 편안하게 잘 자요!
                </div>
                <div style="font-size: 11px; color: #aaa;">김** · 슬리핑백 M 구매</div>
            </div>
        </div>
        <!-- Photo Review 2 -->
        <div style="min-width: 240px; max-width: 240px; scroll-snap-align: start; background: #fff;
                    border-radius: 14px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="aspect-ratio: 1/1; overflow: hidden;">
                <img src="https://dummyimage.com/240x240" alt="포토리뷰2" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 14px;">
                <div style="color: #ff8605; font-size: 12px; margin-bottom: 6px;">★★★★★</div>
                <div style="font-size: 13px; color: #2d2420; line-height: 1.6; margin-bottom: 8px;">
                    디자인이 너무 예쁘고 세탁도 편해요. 재구매 확정!
                </div>
                <div style="font-size: 11px; color: #aaa;">이** · 스와들 스트랩 구매</div>
            </div>
        </div>
        <!-- Photo Review 3 -->
        <div style="min-width: 240px; max-width: 240px; scroll-snap-align: start; background: #fff;
                    border-radius: 14px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="aspect-ratio: 1/1; overflow: hidden;">
                <img src="https://dummyimage.com/240x240" alt="포토리뷰3" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 14px;">
                <div style="color: #ff8605; font-size: 12px; margin-bottom: 6px;">★★★★☆</div>
                <div style="font-size: 13px; color: #2d2420; line-height: 1.6; margin-bottom: 8px;">
                    선물용으로 샀는데 포장도 예쁘고 만족합니다.
                </div>
                <div style="font-size: 11px; color: #aaa;">박** · 슬리핑백 S 구매</div>
            </div>
        </div>
    </div>
</div>
```

**추가 CSS**:
```css
.sh_photo-gallery::-webkit-scrollbar { display: none; }
.sh_photo-gallery { -ms-overflow-style: none; scrollbar-width: none; }
```

---

### 8-3. 해시태그 클라우드

**용도**: 브랜드 관련 해시태그를 클라우드 형태로 보여주는 소셜 섹션
**특징**: 다양한 크기의 해시태그 태그, 브랜드 컬러 적용

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="title font-w700 txtcenter" style="margin-bottom: 25px;">
        #썬데이허그 이야기
    </div>
    <div style="max-width: 560px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
        <span style="padding: 8px 16px; background: #a38068; color: #fff; border-radius: 20px;
                     font-size: 15px; font-weight: 600;">#썬데이허그</span>
        <span style="padding: 6px 14px; background: #f5f0e8; color: #a38068; border-radius: 20px;
                     font-size: 13px; font-weight: 500;">#슬리핑백</span>
        <span style="padding: 8px 16px; background: #EAE2D5; color: #2d2420; border-radius: 20px;
                     font-size: 14px; font-weight: 600;">#아기수면</span>
        <span style="padding: 6px 14px; background: #f5f0e8; color: #a38068; border-radius: 20px;
                     font-size: 12px; font-weight: 500;">#육아템</span>
        <span style="padding: 7px 15px; background: #d7eae4; color: #2d2420; border-radius: 20px;
                     font-size: 13px; font-weight: 500;">#오가닉코튼</span>
        <span style="padding: 6px 14px; background: #eaccca; color: #2d2420; border-radius: 20px;
                     font-size: 12px; font-weight: 500;">#신생아선물</span>
        <span style="padding: 8px 16px; background: #f5f0e8; color: #a38068; border-radius: 20px;
                     font-size: 14px; font-weight: 600;">#숙면필수템</span>
        <span style="padding: 6px 14px; background: #EAE2D5; color: #2d2420; border-radius: 20px;
                     font-size: 11px; font-weight: 500;">#베이비수면</span>
        <span style="padding: 7px 15px; background: #f5f0e8; color: #a38068; border-radius: 20px;
                     font-size: 13px; font-weight: 500;">#맘스초이스</span>
        <span style="padding: 6px 14px; background: #d7eae4; color: #2d2420; border-radius: 20px;
                     font-size: 12px; font-weight: 500;">#KCBC인증</span>
    </div>
</div>
```

---

### 8-4. 인플루언서 추천 카드

**용도**: 인플루언서나 육아 블로거의 제품 추천을 카드로 보여줌
**특징**: 프로필 사진 + 이름 + 팔로워 수 + 추천 코멘트

**HTML**:
```html
<div class="detail_section bg-color-oat" style="margin-bottom: 0px; padding: 50px 20px;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 10px;">
        육아 인플루언서 추천
    </div>
    <div class="desc_small txtcenter" style="color: #888; margin-bottom: 30px;">
        실제 사용하고 추천하는 제품이에요
    </div>
    <div style="max-width: 560px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
        <!-- Influencer Card 1 -->
        <div style="background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
                <div style="width: 52px; height: 52px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
                            border: 2px solid #EAE2D5;">
                    <img src="https://dummyimage.com/52x52" alt="인플루언서1" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 15px; font-weight: 700; color: #2d2420;">육아맘 하니</div>
                    <div style="font-size: 12px; color: #a38068;">@hani_mom · 팔로워 12.5만</div>
                </div>
                <div style="background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af);
                            padding: 5px 12px; border-radius: 12px;">
                    <span style="color: #fff; font-size: 10px; font-weight: 700;">Instagram</span>
                </div>
            </div>
            <div style="font-size: 14px; color: #555; line-height: 1.7; padding-left: 66px;">
                "우리 아기 처음으로 밤잠 5시간 연속으로 잔 날! 비결은 썬데이허그 슬리핑백이었어요.
                이불 걷어차는 걱정 없이 편안하게 재울 수 있어요 💛"
            </div>
        </div>
        <!-- Influencer Card 2 -->
        <div style="background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
                <div style="width: 52px; height: 52px; border-radius: 50%; overflow: hidden; flex-shrink: 0;
                            border: 2px solid #EAE2D5;">
                    <img src="https://dummyimage.com/52x52" alt="인플루언서2" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 15px; font-weight: 700; color: #2d2420;">쌍둥이맘 소율</div>
                    <div style="font-size: 12px; color: #a38068;">@soyul_twins · 팔로워 8.3만</div>
                </div>
                <div style="background: #000; padding: 5px 12px; border-radius: 12px;">
                    <span style="color: #fff; font-size: 10px; font-weight: 700;">YouTube</span>
                </div>
            </div>
            <div style="font-size: 14px; color: #555; line-height: 1.7; padding-left: 66px;">
                "쌍둥이 둘 다 슬리핑백 사용 중인데 확실히 수면의 질이 달라졌어요.
                소재도 부드럽고 세탁해도 안 변해요. 강력 추천! 👶👶"
            </div>
        </div>
    </div>
</div>
```

---

### 8-5. SNS 팔로우 유도 배너

**용도**: 브랜드 SNS 팔로우를 유도하는 CTA 배너
**특징**: 플랫폼 아이콘 + 팔로워 수 + 브랜드 컬러 CTA

**HTML**:
```html
<div class="detail_section" style="margin-bottom: 0px;">
    <div style="background: linear-gradient(135deg, #2d2420 0%, #4a3830 100%); padding: 40px 20px; text-align: center;">
        <div style="color: #a38068; font-size: 13px; font-weight: 600; letter-spacing: 3px; margin-bottom: 10px;">
            FOLLOW US
        </div>
        <div style="color: #fff; font-size: 24px; font-weight: 700; margin-bottom: 8px;">
            썬데이허그와 함께해요
        </div>
        <div style="color: rgba(255,255,255,0.6); font-size: 14px; margin-bottom: 25px;">
            육아 꿀팁 · 신제품 소식 · 이벤트
        </div>
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 25px;">
            <div style="text-align: center;">
                <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 50%;
                            display: flex; align-items: center; justify-content: center; margin: 0 auto 6px;">
                    <span style="color: #fff; font-size: 22px;">📷</span>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.5);">15.2만</div>
            </div>
            <div style="text-align: center;">
                <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 50%;
                            display: flex; align-items: center; justify-content: center; margin: 0 auto 6px;">
                    <span style="color: #fff; font-size: 22px;">▶️</span>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.5);">8.7만</div>
            </div>
            <div style="text-align: center;">
                <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 50%;
                            display: flex; align-items: center; justify-content: center; margin: 0 auto 6px;">
                    <span style="color: #fff; font-size: 22px;">📝</span>
                </div>
                <div style="font-size: 11px; color: rgba(255,255,255,0.5);">3.5만</div>
            </div>
        </div>
        <a href="#" style="display: inline-block; background: #a38068; color: #fff; padding: 14px 40px;
                          border-radius: 30px; font-size: 14px; font-weight: 700; text-decoration: none;
                          letter-spacing: 0.5px;">
            팔로우하기
        </a>
    </div>
</div>
```

---

### 8-6. 고객 후기 하이라이트 슬라이더

**용도**: 대표 리뷰를 대형 카드로 수평 슬라이더로 보여줌
**특징**: 큰 인용문, 고객 사진, 인증 뱃지, CSS scroll-snap

**HTML**:
```html
<div class="detail_section bg-color-1" style="margin-bottom: 0px; padding: 50px 0;">
    <div class="feature_title font-w700 txtcenter" style="margin-bottom: 10px; padding: 0 20px;">
        BEST 후기
    </div>
    <div class="desc_small txtcenter" style="color: #888; margin-bottom: 30px; padding: 0 20px;">
        구매 고객님들의 솔직 리뷰
    </div>
    <div style="display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory;
                padding: 0 20px 20px; -webkit-overflow-scrolling: touch;"
         class="sh_highlight-slider">
        <!-- Highlight Card 1 -->
        <div style="min-width: 320px; max-width: 320px; scroll-snap-align: center; background: #fff;
                    border-radius: 20px; padding: 30px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px;">
                <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
                    <img src="https://dummyimage.com/48x48" alt="고객1" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 14px; font-weight: 600; color: #2d2420;">정**맘</div>
                    <div style="font-size: 11px; color: #aaa;">슬리핑백 M · 구매 인증</div>
                </div>
                <div style="background: #d7eae4; color: #2d6e5e; padding: 3px 10px; border-radius: 10px;
                            font-size: 10px; font-weight: 600;">✓ 구매확인</div>
            </div>
            <div style="color: #ff8605; font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">★★★★★</div>
            <div style="font-size: 15px; color: #2d2420; line-height: 1.8; font-weight: 400;">
                "3개월째 매일 사용하고 있어요. 아기가 정말 편안하게 자고, 이불 걷어차는 걱정이 완전히 사라졌어요.
                세탁해도 형태가 잘 유지되고 소재가 정말 부드럽습니다."
            </div>
        </div>
        <!-- Highlight Card 2 -->
        <div style="min-width: 320px; max-width: 320px; scroll-snap-align: center; background: #fff;
                    border-radius: 20px; padding: 30px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); flex-shrink: 0;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px;">
                <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
                    <img src="https://dummyimage.com/48x48" alt="고객2" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div style="flex: 1;">
                    <div style="font-size: 14px; font-weight: 600; color: #2d2420;">최**맘</div>
                    <div style="font-size: 11px; color: #aaa;">스와들 스트랩 · 구매 인증</div>
                </div>
                <div style="background: #d7eae4; color: #2d6e5e; padding: 3px 10px; border-radius: 10px;
                            font-size: 10px; font-weight: 600;">✓ 구매확인</div>
            </div>
            <div style="color: #ff8605; font-size: 14px; letter-spacing: 2px; margin-bottom: 12px;">★★★★★</div>
            <div style="font-size: 15px; color: #2d2420; line-height: 1.8; font-weight: 400;">
                "출산 선물로 받았는데 이렇게 좋은 줄 몰랐어요! 착용이 간편하고 아기가 놀라서 깨는 횟수가 확 줄었습니다.
                두 번째 구매 합니다."
            </div>
        </div>
    </div>
</div>
```

**추가 CSS**:
```css
.sh_highlight-slider::-webkit-scrollbar { display: none; }
.sh_highlight-slider { -ms-overflow-style: none; scrollbar-width: none; }
```
