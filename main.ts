// ─── TYPES ───────────────────────────────────────────────
interface CarouselState {
  current: number;
  total: number;
  autoInterval: ReturnType<typeof setInterval> | null;
}

// ─── NAV ─────────────────────────────────────────────────
function initNav(): void {
  const nav = document.getElementById('site-nav') as HTMLElement;
  const hamburger = document.getElementById('nav-hamburger') as HTMLButtonElement;
  const mobileMenu = document.getElementById('nav-mobile') as HTMLElement;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const cur = window.scrollY;
    if (cur > 100) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
    if (cur > lastScroll && cur > 300) nav.classList.add('hidden');
    else nav.classList.remove('hidden');
    lastScroll = cur;
    updateActiveLinks();
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function updateActiveLinks(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id], div[id]');
  const links = document.querySelectorAll<HTMLAnchorElement>('.nav-links a[href^="#"]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  links.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
}

// ─── FAQ ACCORDION ────────────────────────────────────────
function initFaq(): void {
  document.querySelectorAll<HTMLButtonElement>('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling as HTMLElement;

      document.querySelectorAll<HTMLButtonElement>('.faq-question').forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          (other.nextElementSibling as HTMLElement)?.classList.remove('open');
        }
      });

      btn.setAttribute('aria-expanded', String(!expanded));
      answer?.classList.toggle('open', !expanded);
    });
  });
}

// ─── GLOSSÁRIO FILTER ─────────────────────────────────────
function initGlossario(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.glos-cat-btn');
  const cards = document.querySelectorAll<HTMLElement>('.glos-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      cards.forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ─── VIDEO CAROUSEL ───────────────────────────────────────
function initCarousel(): void {
  const state: CarouselState = { current: 0, total: 4, autoInterval: null };
  const items = document.querySelectorAll<HTMLElement>('.depo-video-item');
  const dots = document.querySelectorAll<HTMLElement>('.depo-dot');
  const prevBtn = document.querySelector<HTMLButtonElement>('.carousel-btn.prev');
  const nextBtn = document.querySelector<HTMLButtonElement>('.carousel-btn.next');

  if (!items.length) return;

  function getOrder(idx: number, cur: number, total: number): number {
    return ((idx - cur) % total + total) % total;
  }

  function render(): void {
    items.forEach((item, i) => {
      const order = getOrder(i, state.current, state.total);
      item.classList.remove('main', 'side', 'hidden-item');
      if (order === 0) item.classList.add('main');
      else if (order === 1 || order === state.total - 1) item.classList.add('side');
      else { item.classList.add('hidden-item'); (item as HTMLElement).style.display = 'none'; return; }
      (item as HTMLElement).style.display = '';
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === state.current));
  }

  function next(): void {
    state.current = (state.current + 1) % state.total;
    render();
  }
  function prev(): void {
    state.current = (state.current - 1 + state.total) % state.total;
    render();
  }

  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', next);
  dots.forEach((d, i) => d.addEventListener('click', () => { state.current = i; render(); }));

  items.forEach(item => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('main')) {
        const idx = Array.from(items).indexOf(item);
        state.current = idx;
        render();
      } else {
        const video = item.querySelector('video');
        const overlay = item.querySelector<HTMLElement>('.depo-video-overlay');
        if (video && overlay) {
          if (video.paused) { video.play(); overlay.style.opacity = '0'; }
          else { video.pause(); overlay.style.opacity = '1'; }
        }
      }
    });
  });

  state.autoInterval = setInterval(next, 5000);
  const track = document.querySelector('.depo-carousel');
  track?.addEventListener('mouseenter', () => { if (state.autoInterval) clearInterval(state.autoInterval); });
  track?.addEventListener('mouseleave', () => { state.autoInterval = setInterval(next, 5000); });

  render();
}

// ─── VSL PLAYER ───────────────────────────────────────────
function initVsl(): void {
  const playBtn = document.getElementById('vsl-play') as HTMLElement;
  const video = document.getElementById('vsl-video') as HTMLVideoElement;

  if (!playBtn || !video) return;
  playBtn.addEventListener('click', () => {
    video.play();
    playBtn.classList.add('hidden');
  });
  video.addEventListener('pause', () => playBtn.classList.remove('hidden'));
  video.addEventListener('ended', () => playBtn.classList.remove('hidden'));
}

// ─── CONTACT FORM ─────────────────────────────────────────
function initForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  if (!form) return;
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const success = document.querySelector<HTMLElement>('.form-success');
    form.style.display = 'none';
    if (success) success.classList.add('visible');
  });
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────
function initScrollAnimations(): void {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ─── SMOOTH SCROLL OFFSET FOR FIXED NAV ───────────────────
function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href')?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = (document.getElementById('site-nav')?.offsetHeight ?? 68) + 8;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });
}

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFaq();
  initGlossario();
  initCarousel();
  initVsl();
  initForm();
  initScrollAnimations();
  initSmoothScroll();
});
