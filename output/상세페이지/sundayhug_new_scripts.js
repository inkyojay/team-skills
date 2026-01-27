/*
 * ============================================
 * 썬데이허그 확장 섹션 템플릿 - 신규 JS
 * sundayhug_new_scripts.js
 * ============================================
 * 기존 userJS.js와 함께 사용
 * 인터랙티브 섹션 (탭, 아코디언, FAQ, 카운터 등)
 * ============================================
 */

document.addEventListener('DOMContentLoaded', function() {

  // === Script Block 1 ===
  (function() {
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
  })();

  // === Script Block 2 ===
  (function() {
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
  })();

  // === Script Block 3 ===
  (function() {
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
  })();

  // === Script Block 4 ===
  (function() {
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
  })();

  // === Script Block 5 ===
  (function() {
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
  })();

  // === Script Block 6 ===
  (function() {
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
  })();

  // === Script Block 7 ===
  (function() {
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
  })();

  // === Script Block 8 ===
  (function() {
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
  })();

  // === Script Block 9 ===
  (function() {
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
  })();

  // === Script Block 10 ===
  (function() {
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
  })();

  // === Script Block 11 ===
  (function() {
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
  })();

});
