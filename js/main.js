(function(){
  "use strict";

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav scroll state
  var nav = document.getElementById('nav');
  function onScroll(){
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile drawer
  var toggle = document.getElementById('navToggle');
  var drawer = document.getElementById('navDrawer');
  var scrim = document.getElementById('navScrim');
  function closeDrawer(){
    drawer.classList.remove('open');
    scrim.classList.remove('open');
  }
  if (toggle) {
    toggle.addEventListener('click', function(){
      drawer.classList.toggle('open');
      scrim.classList.toggle('open');
    });
  }
  if (scrim) scrim.addEventListener('click', closeDrawer);
  document.querySelectorAll('.nav-drawer a').forEach(function(a){
    a.addEventListener('click', closeDrawer);
  });

  // Active nav link on scroll (offsets cached to avoid layout reflow on every scroll event)
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  var sectionOffsets = [];
  function cacheSectionOffsets(){
    sectionOffsets = Array.prototype.map.call(sections, function(sec){
      return { id: sec.id, top: sec.offsetTop };
    });
  }
  cacheSectionOffsets();
  window.addEventListener('resize', cacheSectionOffsets);

  function setActive(){
    var pos = window.scrollY + 160;
    var current = 'home';
    sectionOffsets.forEach(function(s){
      if (pos >= s.top) current = s.id;
    });
    navLinks.forEach(function(a){
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
    activeTicking = false;
  }
  var activeTicking = false;
  function onActiveScroll(){
    if (!activeTicking) {
      window.requestAnimationFrame(setActive);
      activeTicking = true;
    }
  }
  window.addEventListener('scroll', onActiveScroll, { passive: true });
  setActive();

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  // Count-up stats (runs once, when the block scrolls into view)
  var counters = document.querySelectorAll('[data-count]');
  function runCounter(el){
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1600;
    var start = null;
    function frame(ts){
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      // ease-out so it decelerates into the final number
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  if (counters.length) {
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      counters.forEach(function(el){
        el.textContent = (parseFloat(el.getAttribute('data-count')) || 0).toLocaleString('en-US') + (el.getAttribute('data-suffix') || '');
      });
    } else {
      var co = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            runCounter(entry.target);
            co.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function(el){ co.observe(el); });
    }
  }

  // Lightbox
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');

  var lightboxVideo = document.getElementById('lightboxVideo');
  var lightboxError = document.getElementById('lightboxError');

  document.querySelectorAll('.gallery-item').forEach(function(item){
    item.addEventListener('click', function(){
      var img = item.querySelector('img');
      var videoSrc = item.getAttribute('data-video');
      lightboxCaption.textContent = item.getAttribute('data-caption') || (img ? img.alt : '');

      if (lightboxError) lightboxError.classList.remove('show');

      if (videoSrc && lightboxVideo) {
        lightboxImg.style.display = 'none';
        lightboxImg.src = '';
        lightboxVideo.style.display = 'block';
        lightboxVideo.src = videoSrc;
        if (img) lightboxVideo.poster = img.src;
        lightboxVideo.play().catch(function(){ /* autoplay may be blocked; controls remain */ });
      } else {
        if (lightboxVideo) { lightboxVideo.pause(); lightboxVideo.removeAttribute('src'); lightboxVideo.style.display = 'none'; }
        lightboxImg.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      lightbox.classList.add('open');
    });
  });

  if (lightboxVideo) {
    lightboxVideo.addEventListener('error', function(){
      lightboxVideo.style.display = 'none';
      if (lightboxError) lightboxError.classList.add('show');
    });
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    if (lightboxVideo) { lightboxVideo.pause(); lightboxVideo.removeAttribute('src'); lightboxVideo.load(); }
    if (lightboxError) lightboxError.classList.remove('show');
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function(e){
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeLightbox();
  });

  // Quote form -> WhatsApp handoff
  var form = document.getElementById('quoteForm');
  var success = document.getElementById('formSuccess');
  if (form) {
    var val = function(id){
      var el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };

    form.addEventListener('submit', function(e){
      e.preventDefault();

      var required = ['fName', 'fPhone', 'fEmail', 'fType'];
      var firstInvalid = null;
      required.forEach(function(id){
        var el = document.getElementById(id);
        if (!el || !el.hasAttribute('required')) return;
        if (!el.value.trim()) {
          el.classList.add('invalid');
          if (!firstInvalid) firstInvalid = el;
        } else {
          el.classList.remove('invalid');
        }
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      var fields = [
        ['Name', val('fName')],
        ['Phone', val('fPhone')],
        ['Email', val('fEmail')],
        ['Trailer Type', val('fType')],
        ['Details', val('fMsg')]
      ];

      var lines = ['Quotation request from trailers-solution.com'];
      fields.forEach(function(f){
        if (f[1]) lines.push(f[0] + ': ' + f[1]);
      });

      var text = encodeURIComponent(lines.join('\n'));
      success.classList.add('show');

      window.open('https://wa.me/971544619553?text=' + text, '_blank', 'noopener');

      setTimeout(function(){
        success.classList.remove('show');
        form.reset();
      }, 4000);
    });

    form.addEventListener('input', function(e){
      if (e.target.classList.contains('invalid') && e.target.value.trim()) {
        e.target.classList.remove('invalid');
      }
    });
  }
})();

/* ============ FOOTER CONTACT POPOVERS ============ */
(function(){
  var wrap = document.querySelector('.footer-social');
  if (!wrap) return;

  var open = null;

  function labelFor(a){
    var href = a.getAttribute('href') || '';
    if (href.indexOf('mailto:') === 0) return href.slice(7);
    if (href.indexOf('instagram.com') > -1) return '@trailersolution.ae';
    return '+971 54 461 9553';
  }

  function actionFor(a){
    var href = a.getAttribute('href') || '';
    if (href.indexOf('mailto:') === 0) return 'Request a Quote';
    if (href.indexOf('tel:') === 0) return 'Call now';
    if (href.indexOf('instagram.com') > -1) return 'Open Instagram';
    return 'Open WhatsApp';
  }

  function close(){
    if (!open) return;
    open.classList.remove('is-open');
    open = null;
  }

  Array.prototype.forEach.call(wrap.querySelectorAll('a'), function(a){
    var pop = document.createElement('div');
    pop.className = 'contact-pop';
    pop.innerHTML =
      '<span class="contact-pop-value"></span>' +
      '<div class="contact-pop-actions">' +
        '<a class="contact-pop-go" target="_blank" rel="noopener"></a>' +
        '<button type="button" class="contact-pop-copy">Copy</button>' +
      '</div>';

    var value = labelFor(a);
    pop.querySelector('.contact-pop-value').textContent = value;

    var go = pop.querySelector('.contact-pop-go');
    var isMail = (a.getAttribute('href') || '').indexOf('mailto:') === 0;
    go.setAttribute('href', isMail ? 'quote.html' : a.getAttribute('href'));
    if (isMail) go.removeAttribute('target');
    go.textContent = actionFor(a);

    var holder = document.createElement('div');
    holder.className = 'contact-pop-wrap';
    a.parentNode.insertBefore(holder, a);
    holder.appendChild(a);
    holder.appendChild(pop);

    a.addEventListener('click', function(e){
      e.preventDefault();
      var wasOpen = holder.classList.contains('is-open');
      close();
      if (!wasOpen) {
        holder.classList.add('is-open');
        open = holder;
      }
    });

    pop.querySelector('.contact-pop-copy').addEventListener('click', function(){
      var btn = this;
      var orig = btn.textContent;
      var done = function(){
        btn.textContent = document.documentElement.lang === 'ar' ? 'تم النسخ' : 'Copied';
        setTimeout(function(){ btn.textContent = orig; }, 1800);
      };
      var legacy = function(){
        var ta = document.createElement('textarea');
        ta.value = value;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(ta);
        done();
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, legacy);
      } else {
        legacy();
      }
    });

    pop.addEventListener('click', function(e){ e.stopPropagation(); });
  });

  document.addEventListener('click', function(e){
    if (open && !open.contains(e.target)) close();
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') close();
  });
})();
