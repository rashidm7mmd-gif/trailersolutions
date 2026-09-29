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

  // Quote form -> emailed to the office.
  //
  // The site is static, so the post goes to Web3Forms, which relays it to
  // whichever address the access key below is registered to. That key is a
  // public, per-form identifier and is meant to sit in client-side code.
  //
  // Web3Forms can answer 200 while still not having sent anything (bad key,
  // rate limit), and reports the real outcome in the body, so the response
  // body is what we check, never res.ok. Getting that wrong tells a customer
  // their enquiry was sent when it was not, which is worse than an error.
  var FORM_ENDPOINT = 'https://api.web3forms.com/submit';
  var FORM_KEY = '97af8910-e710-4bc8-b4da-e9fa3f53dde0';

  var form = document.getElementById('quoteForm');
  var success = document.getElementById('formSuccess');
  if (form) {
    var isAr = (document.documentElement.getAttribute('lang') || '').indexOf('ar') === 0;

    var TXT = isAr ? {
      sending: 'جارٍ الإرسال…',
      ok: 'شكرًا — تم استلام طلبك. سنرد عليك عبر البريد الإلكتروني.',
      fail: 'تعذّر إرسال الطلب. راسلنا على info@trailers-solution.com أو عبر واتساب 9553 461 54 971+.'
    } : {
      sending: 'Sending…',
      ok: 'Thanks — your request has been sent. We will reply by email.',
      fail: 'Sorry, that did not send. Please email info@trailers-solution.com or WhatsApp +971 54 461 9553.'
    };

    var val = function(id){
      var el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };

    // The success banner is a bare div on one page and an icon plus a span on
    // another, so write into the span where there is one.
    var setSuccessText = function(msg){
      if (!success) return;
      var span = success.querySelector('span');
      if (span) { span.textContent = msg; } else { success.textContent = msg; }
    };

    // Failures get their own banner, built here so the four pages carrying
    // this form do not each need the markup.
    var errorBox = null;
    var showError = function(){
      if (!errorBox) {
        errorBox = document.createElement('div');
        errorBox.className = 'form-error';
        errorBox.setAttribute('role', 'alert');
        if (success && success.parentNode) {
          success.parentNode.insertBefore(errorBox, success.nextSibling);
        } else {
          form.parentNode.insertBefore(errorBox, form);
        }
      }
      errorBox.textContent = TXT.fail;
      errorBox.classList.add('show');
    };
    var clearError = function(){
      if (errorBox) errorBox.classList.remove('show');
    };

    form.addEventListener('submit', function(e){
      e.preventDefault();
      clearError();

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

      var btn = form.querySelector('button[type="submit"]');
      var btnHTML = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.textContent = TXT.sending; }

      var payload = {
        Name: val('fName'),
        Phone: val('fPhone'),
        Email: val('fEmail'),
        'Trailer Type': val('fType'),
        Details: val('fMsg'),
        Page: (isAr ? 'Arabic' : 'English') + ' — ' + location.pathname,
        access_key: FORM_KEY,
        subject: 'Quotation request — ' + (val('fName') || 'website'),
        from_name: 'Trailer Solution website',
        // Hitting Reply in the inbox then answers the customer, not the relay.
        replyto: val('fEmail')
      };

      var restore = function(){
        if (btn) { btn.disabled = false; btn.innerHTML = btnHTML; }
      };

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function(res){
        return res.json().catch(function(){ return null; });
      }).then(function(data){
        // Web3Forms returns a boolean; some relays use the string form.
        if (!data || String(data.success) !== 'true') throw new Error('not sent');
        restore();
        setSuccessText(TXT.ok);
        success.classList.add('show');
        form.reset();
        setTimeout(function(){ success.classList.remove('show'); }, 6000);
      }).catch(function(){
        restore();
        showError();
      });
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
