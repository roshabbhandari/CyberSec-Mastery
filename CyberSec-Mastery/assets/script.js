// CyberSec Mastery — shared interaction layer (vanilla JS, zero external APIs)
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  if (loader){
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('done'), 400);
    });
    // fallback in case 'load' already fired
    setTimeout(() => loader.classList.add('done'), 1800);
  }

  /* ---------- Custom cursor ---------- */
  const cursor = document.querySelector('.cyber-cursor');
  const cursorDot = document.querySelector('.cyber-cursor-dot');
  const glow = document.getElementById('mouse-glow');
  if (window.matchMedia('(hover: hover)').matches){
    window.addEventListener('mousemove', (e) => {
      if (cursor) { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; }
      if (cursorDot) { cursorDot.style.left = e.clientX + 'px'; cursorDot.style.top = e.clientY + 'px'; }
      if (glow) { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; }
    });
    document.querySelectorAll('a, button, .card, input, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'));
    });
  }

  /* ---------- Particles (CSS-driven, generated once) ---------- */
  const field = document.querySelector('.particles');
  if (field){
    const count = window.innerWidth < 700 ? 18 : 36;
    for (let i = 0; i < count; i++){
      const p = document.createElement('span');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = -20 + 'px';
      p.style.animationDuration = (10 + Math.random() * 14) + 's';
      p.style.animationDelay = (Math.random() * 14) + 's';
      p.style.opacity = (0.2 + Math.random() * 0.5).toString();
      field.appendChild(p);
    }
  }

  /* ---------- Nav scroll state + mobile toggle ---------- */
  const nav = document.querySelector('.navbar');
  if (nav){
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links){
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.cssText += open ? '' : 'position:absolute;top:64px;left:0;right:0;flex-direction:column;background:rgba(8,12,28,0.98);padding:20px;border-radius:16px;border:1px solid rgba(34,211,238,0.14);';
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const decimals = el.dataset.counter.includes('.') ? 1 : 0;
      let start = null;
      const dur = 1600;
      function step(ts){
        if (!start) start = ts;
        const progress = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => counterIO.observe(el));

  /* ---------- Skill bars ---------- */
  const bars = document.querySelectorAll('.skillbar-fill');
  const barIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.style.width = entry.target.dataset.level + '%';
        barIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(el => barIO.observe(el));

  /* ---------- Typing effect ---------- */
  const typeTarget = document.querySelector('[data-typing]');
  if (typeTarget){
    const phrases = JSON.parse(typeTarget.dataset.typing);
    let pIndex = 0, cIndex = 0, deleting = false;
    function tick(){
      const current = phrases[pIndex];
      if (!deleting){
        cIndex++;
        typeTarget.textContent = current.slice(0, cIndex);
        if (cIndex === current.length){ deleting = true; setTimeout(tick, 1400); return; }
      } else {
        cIndex--;
        typeTarget.textContent = current.slice(0, cIndex);
        if (cIndex === 0){ deleting = false; pIndex = (pIndex + 1) % phrases.length; }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }

  /* ---------- Card tilt ---------- */
  document.querySelectorAll('.card-tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* ---------- Contact form (local only, no external API) ---------- */
  const form = document.querySelector('#contact-form');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.querySelector('#form-status');
      if (status){
        status.textContent = '> Message queued locally. Connect a backend or email service to deliver it — this demo stores nothing and calls no external API.';
        status.style.color = 'var(--success)';
      }
      form.reset();
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q && q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
});
