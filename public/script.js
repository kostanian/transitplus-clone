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

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
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

  /* ========== HERO ANIMATIONS ========== */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .to('.hero__label', { opacity: 1, y: 0, duration: 0.8 })
    .to('.hero__title', { opacity: 1, y: 0, duration: 1 }, '-=0.5')
    .to('.hero__subtitle', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to('.hero__actions', { opacity: 1, y: 0, duration: 0.7 }, '-=0.4');

  // Set initial states
  gsap.set(['.hero__label', '.hero__title', '.hero__subtitle', '.hero__actions'], {
    y: 40
  });

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
  gsap.from('.about__text > *', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
  });

  gsap.from('.about__image', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.about__stat', {
    scrollTrigger: {
      trigger: '.about__stats',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  });

  /* ========== SERVICES SECTION ========== */
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.services__grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: {
      each: 0.1,
      grid: [2, 3],
      from: 'start'
    },
    ease: 'power3.out'
  });

  /* ========== ADVANTAGES SECTION ========== */
  gsap.from('.advantage-item', {
    scrollTrigger: {
      trigger: '.advantages__grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
  });

  /* ========== PROCESS TIMELINE ========== */
  const steps = document.querySelectorAll('.process__step');
  const lineFill = document.getElementById('processLineFill');

  if (steps.length && lineFill) {
    // Timeline progress with ScrollTrigger
    ScrollTrigger.create({
      trigger: '.process__timeline',
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        lineFill.style.height = `${progress * 100}%`;

        steps.forEach((step, i) => {
          const stepProgress = (i + 0.5) / steps.length;
          if (progress >= stepProgress) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });
      }
    });

    // Stagger reveal for step content
    gsap.from('.process__step-content', {
      scrollTrigger: {
        trigger: '.process__timeline',
        start: 'top 70%',
        toggleActions: 'play none none none'
      },
      x: -30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out'
    });
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

  gsap.from('.geography__city', {
    scrollTrigger: {
      trigger: '.geography__cities',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: 'back.out(1.7)'
  });

  gsap.from('.geography__route', {
    scrollTrigger: {
      trigger: '.geography__routes',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    x: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15
  });

  /* ========== CASES SECTION ========== */
  gsap.from('.case-card', {
    scrollTrigger: {
      trigger: '.cases__grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out'
  });

  /* ========== CTA SECTION ========== */
  gsap.from('.cta-block', {
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    scale: 0.95,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  // Rotating circles decoration
  gsap.to('.cta-block__circle--1', {
    rotation: 360,
    duration: 30,
    repeat: -1,
    ease: 'none'
  });

  gsap.to('.cta-block__circle--2', {
    rotation: -360,
    duration: 20,
    repeat: -1,
    ease: 'none'
  });

  /* ========== CONTACTS SECTION ========== */
  gsap.from('.contacts__channel', {
    scrollTrigger: {
      trigger: '.contacts__channels',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    x: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1
  });

  gsap.from('.contacts__form', {
    scrollTrigger: {
      trigger: '.contacts__form',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  /* ========== SECTION LABELS & TITLES ========== */
  document.querySelectorAll('.section-label, .section-title').forEach(el => {
    if (el.closest('.hero') || el.closest('.geography')) return; // skip hero & geography (handled separately)

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
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
});
