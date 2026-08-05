const SLIDES = window.__SLIDES__ || [];

const MENU_SVG='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-5 w-5"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>';
const X_SVG='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-5 w-5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('mobile-nav');
  var header = document.querySelector('header');
  if (header) {
    var transparent = header.getAttribute('data-transparent') === 'true';
    var onScroll = function () {
      var scrolled = window.scrollY > 20;
      var menuOpen = nav && !nav.hidden;
      var solid = !transparent || scrolled || menuOpen;
      header.classList.toggle('bg-background', solid);
      header.classList.toggle('bg-transparent', !solid);
      header.classList.toggle('shadow-card', solid && scrolled);
    };
    header.__sync = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var btn = document.getElementById('menu-toggle');
  if (nav && btn) {
    nav.hidden = true;
    btn.innerHTML = MENU_SVG;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    btn.addEventListener('click', function () {
      nav.hidden = !nav.hidden;
      btn.innerHTML = nav.hidden ? MENU_SVG : X_SVG;
      btn.setAttribute('aria-expanded', String(!nav.hidden));
      btn.setAttribute('aria-label', nav.hidden ? 'Open menu' : 'Close menu');
      if (header.__sync) header.__sync();
    });
    nav.querySelectorAll('button[aria-expanded]').forEach(function (sub) {
      var list = sub.nextElementSibling;
      if (!list) return;
      list.hidden = true;
      sub.setAttribute('aria-expanded', 'false');
      var chev = sub.querySelector('svg');
      if (chev) chev.classList.remove('rotate-180');
      sub.addEventListener('click', function () {
        list.hidden = !list.hidden;
        sub.setAttribute('aria-expanded', String(!list.hidden));
        if (chev) chev.classList.toggle('rotate-180', !list.hidden);
      });
    });
  }

  if (header && header.__sync) header.__sync();

  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var el = e.target;
        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null, dur = 1600;
        var step = function (t) {
          if (!start) start = t;
          var p = Math.min((t - start) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { io.observe(c); });
  }

  var fig = document.getElementById('testimonial-figure');
  var dots = Array.prototype.slice.call(document.querySelectorAll('[data-dot]'));
  if (fig && SLIDES.length) {
    var i = 0, paused = false;
    var render = function () {
      fig.innerHTML = SLIDES[i];
      dots.forEach(function (dd, idx) {
        dd.classList.toggle('bg-primary', idx === i);
        dd.classList.toggle('bg-border', idx !== i);
      });
    };
    dots.forEach(function (dd, idx) { dd.addEventListener('click', function () { i = idx; render(); }); });
    var prev = document.getElementById('testimonial-prev');
    var next = document.getElementById('testimonial-next');
    if (prev) prev.addEventListener('click', function () { i = (i - 1 + SLIDES.length) % SLIDES.length; render(); });
    if (next) next.addEventListener('click', function () { i = (i + 1) % SLIDES.length; render(); });
    var wrap = fig.parentElement;
    wrap.addEventListener('mouseenter', function () { paused = true; });
    wrap.addEventListener('mouseleave', function () { paused = false; });
    setInterval(function () { if (!paused) { i = (i + 1) % SLIDES.length; render(); } }, 7000);
    render();
  }

  document.querySelectorAll('[data-typed]').forEach(function (el) {
    var text = el.getAttribute('data-typed') || '';
    var out = el.querySelector('span[aria-hidden="true"]');
    if (!out) return;
    out.textContent = '';
    var i = 0;
    var t = setInterval(function () {
      i++;
      out.textContent = text.slice(0, i);
      if (i >= text.length) clearInterval(t);
    }, 55);
  });
});
