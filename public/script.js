/* ===================================
   CHINAPARTNER — Premium Static Site
   script.js — GSAP & ScrollTrigger
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Header scroll ---------- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 60);
  });

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
  const mobileClose = document.getElementById('mobileMenuClose');

  function closeMobileMenu() {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ========== UTILITY: Reveal animation helper ========== */
  function reveal(selector, fromVars, triggerEl, staggerVal) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    gsap.set(elements, { opacity: 1, clearProps: 'transform' }); // ensure visible by default

    gsap.fromTo(elements,
      { opacity: 0, ...fromVars },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: staggerVal || 0,
        scrollTrigger: {
          trigger: triggerEl || elements[0],
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  /* ========== HERO ANIMATIONS ========== */
  // Hero elements start with opacity:0 in CSS
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .fromTo('.hero__label',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 })
    .fromTo('.hero__title',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    .fromTo('.hero__subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .fromTo('.hero__infinity',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    .fromTo('.hero__actions',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 }, '-=0.3');

  /* Infinity loop — animate icons along the SVG path */
  const infinityPath = document.getElementById('infinityPath');
  const flowIcons = document.querySelectorAll('.flow-icon');

  if (infinityPath && flowIcons.length) {
    // Get the SVG path d attribute to use as offset-path
    const pathD = infinityPath.getAttribute('d');
    const svgEl = infinityPath.closest('svg');
    const svgRect = svgEl.getBoundingClientRect();
    const containerRect = document.querySelector('.hero__infinity').getBoundingClientRect();

    // Calculate scale factors
    const viewBox = svgEl.viewBox.baseVal;
    const scaleX = containerRect.width / viewBox.width;
    const scaleY = containerRect.height / viewBox.height;

    // Animate each icon using MotionPathPlugin fallback — manually sample path
    const pathLen = infinityPath.getTotalLength();
    const totalIcons = flowIcons.length;

    flowIcons.forEach((icon, i) => {
      const startPercent = i / totalIcons;
      const duration = 8000; // ms per full loop

      function animateIcon() {
        const startTime = performance.now() - (startPercent * duration);

        function step(now) {
          const elapsed = (now - startTime) % duration;
          const progress = elapsed / duration;
          const point = infinityPath.getPointAtLength(progress * pathLen);

          // Map SVG coords to container coords
          const x = point.x * scaleX;
          const y = point.y * scaleY;

          icon.style.left = x + 'px';
          icon.style.top = y + 'px';
          icon.style.transform = 'translate(-50%, -50%)';
          icon.style.opacity = '0.85';

          requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      }

      animateIcon();
    });
  }

  /* Infinity glow stroke animation */
  const infinityGlow = document.getElementById('infinityGlow');
  if (infinityGlow) {
    const len = infinityGlow.getTotalLength();
    gsap.set(infinityGlow, { strokeDasharray: len * 0.3 + ' ' + len * 0.7, strokeDashoffset: len });
    gsap.to(infinityGlow, { strokeDashoffset: -len, duration: 5, repeat: -1, ease: 'none' });
  }

  // Hero parallax on scroll
  gsap.to('.hero__bg-img', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  /* ========== ABOUT SECTION ========== */
  reveal('.about__text > *', { y: 40 }, '.about', 0.15);

  // Animate about visual image reveal
  const aboutVisual = document.querySelector('.about__visual');
  if (aboutVisual) {
    gsap.fromTo(aboutVisual,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutVisual,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    gsap.fromTo('.about__visual-tag',
      { opacity: 0, y: 10 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1,
        scrollTrigger: {
          trigger: aboutVisual,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  reveal('.about__stat', { y: 30 }, '.about__stats', 0.2);

  /* ========== SERVICES SECTION ========== */
  gsap.fromTo('.service-card',
    { opacity: 0, y: 50 },
    {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      stagger: { each: 0.1, grid: [2, 3], from: 'start' },
      scrollTrigger: {
        trigger: '.services__grid',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );

  /* ========== ADVANTAGES SECTION ========== */
  gsap.fromTo('.advantage-item',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.advantages__grid',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );

  /* ========== PROCESS TIMELINE ========== */
  const steps = document.querySelectorAll('.process__step');
  const lineFill = document.getElementById('processLineFill');

  if (steps.length && lineFill) {
    // Make step content visible initially
    gsap.set('.process__step-content', { opacity: 1 });

    // Timeline progress with ScrollTrigger
    ScrollTrigger.create({
      trigger: '.process__timeline',
      start: 'top 70%',
      end: 'bottom 50%',
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        lineFill.style.height = `${progress * 100}%`;

        steps.forEach((step, i) => {
          const stepProgress = (i + 0.3) / steps.length;
          if (progress >= stepProgress) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });
      }
    });

    // Stagger reveal for step content
    gsap.fromTo('.process__step-content',
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.process__timeline',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  /* ========== GEOGRAPHY SECTION ========== */
  // Parallax background
  gsap.to('.geography__bg-img', {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.geography',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  gsap.fromTo('.geography__city',
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)',
      stagger: 0.08,
      scrollTrigger: {
        trigger: '.geography__cities',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );

  gsap.fromTo('.geography__route',
    { opacity: 0, x: -30 },
    {
      opacity: 1, x: 0, duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.geography__routes',
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    }
  );

  /* ========== CASES SECTION ========== */
  gsap.fromTo('.case-card',
    { opacity: 0, y: 50 },
    {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.cases__grid',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );

  /* ========== CTA SECTION ========== */
  gsap.fromTo('.cta-block',
    { opacity: 0, scale: 0.95 },
    {
      opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Rotating circles decoration
  gsap.to('.cta-block__circle--1', {
    rotation: 360, duration: 30, repeat: -1, ease: 'none'
  });

  gsap.to('.cta-block__circle--2', {
    rotation: -360, duration: 20, repeat: -1, ease: 'none'
  });

  /* ========== CONTACTS SECTION ========== */
  gsap.fromTo('.contacts__channel',
    { opacity: 0, x: -30 },
    {
      opacity: 1, x: 0, duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.contacts__channels',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );

  gsap.fromTo('.contacts__form',
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contacts__form',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );

  /* ========== SECTION LABELS & TITLES ========== */
  document.querySelectorAll('.section-label, .section-title').forEach(el => {
    if (el.closest('.hero') || el.closest('.geography')) return;

    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  /* ========== FORM SUBMISSION ========== */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Отправлено ✓';
      btn.style.background = '#2d8a6e';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        form.reset();
      }, 2500);
    });
  }

  /* ========== REFRESH ON LOAD ========== */
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});
