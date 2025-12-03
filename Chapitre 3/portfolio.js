// Utilitaires
const qs = (s, c = document) => c.querySelector(s);
const qsa = (s, c = document) => [...c.querySelectorAll(s)];
const debounce = (fn, delay = 100) => { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); }; };

// Année dynamique
qs('#year').textContent = new Date().getFullYear();

// Sticky header
const header = qs('.site-header');
const onScrollHeader = () => { if (window.scrollY > 12) header.classList.add('sticky'); else header.classList.remove('sticky'); };
window.addEventListener('scroll', onScrollHeader);
onScrollHeader();

// Menu burger
const burger = qs('.burger');
const nav = qs('.site-nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
qsa('.site-nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));

// Scroll fluide
qsa('a[href^=#]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = qs(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight + 6;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Scroll spy
const sections = ['#accueil', '#about', '#skills', '#education', '#experience', '#projects', '#certifications', '#contact', '#veille'];
const spy = () => {
  const y = window.scrollY + header.offsetHeight + 12;
  let current = sections[0];
  sections.forEach(id => { const el = qs(id); if (el && el.offsetTop <= y) current = id; });
  qsa('.site-nav a').forEach(a => { a.classList.toggle('active', a.getAttribute('href') === current); });
};
window.addEventListener('scroll', debounce(spy, 50));
spy();

// Reveal animations
const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.2 });
qsa('.reveal').forEach(el => observer.observe(el));

// Parallax léger
const hero = qs('.hero');
const onScrollParallax = () => { const off = window.scrollY * 0.3; hero.style.backgroundPosition = `center calc(50% + ${off}px)`; };
window.addEventListener('scroll', debounce(onScrollParallax, 10));

// Filtre projets
const filterButtons = qsa('.filter-btn');
const projectCards = qsa('.project-card');
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  projectCards.forEach(card => { const c = card.dataset.category; card.style.display = (f === 'all' || c === f) ? '' : 'none'; });
}));

// Lightbox
const lightbox = qs('#lightbox');
const lightboxImg = qs('#lightbox img');
const lightboxClose = qs('#lightbox .close');
qsa('.project-thumb img').forEach(img => img.addEventListener('click', () => {
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt || 'Projet';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}));
lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
});
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightboxClose.click(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('open')) lightboxClose.click(); });

// Bouton Haut de page
const toTop = qs('#toTop');
const onScrollTopBtn = () => { if (window.scrollY > 500) toTop.classList.add('show'); else toTop.classList.remove('show'); };
window.addEventListener('scroll', onScrollTopBtn);
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Formulaire avec honeypot et feedback
const contactForm = qs('#contactForm');
const status = qs('#formStatus');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = qs('#name').value.trim();
  const email = qs('#email').value.trim();
  const message = qs('#message').value.trim();
  const hp = qs('#hp').value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (hp) { status.textContent = 'Spam détecté'; status.style.color = '#b00020'; return; }
  if (!name || !email || !message) { status.textContent = 'Veuillez remplir tous les champs.'; status.style.color = '#b00020'; return; }
  if (!emailOk) { status.textContent = 'Adresse email invalide.'; status.style.color = '#b00020'; return; }
  status.textContent = 'Message prêt à être envoyé 👍';
  status.style.color = '#2e7d32';
  contactForm.reset();
});

// Toggle thème avec localStorage
const themeToggle = qs('#themeToggle');
const getTheme = () => localStorage.getItem('theme') || 'light';
const setTheme = (t) => localStorage.setItem('theme', t);
const applyTheme = (t) => { document.documentElement.classList.toggle('theme-dark', t === 'dark'); };
applyTheme(getTheme());
themeToggle.addEventListener('click', () => {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
  applyTheme(next);
});

// Compteur de téléchargements du CV (local)
const cvLinks = qsa('a[href$=cv.pdf]');
cvLinks.forEach(a => a.addEventListener('click', () => {
  const k = 'cv_downloads';
  const n = Number(localStorage.getItem(k) || 0) + 1;
  localStorage.setItem(k, String(n));
}));

// Copier email
qs('#copyEmail').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('contact@example.com');
    qs('#copyEmail').textContent = 'Email copié';
    setTimeout(() => qs('#copyEmail').textContent = 'Copier mon email', 1500);
  } catch {
    alert("Impossible de copier l'email");
  }
});

// Accessibilité: focus trap simplifié pour le menu (mobile)
const trapFocus = (container) => {
  const focusables = qsa('a, button, input, textarea', container);
  let idx = 0;
}
  const onKey = (e) => {
    if (e.key !== 'Tab') return;
    e.preventDefault();
    idx = (idx + (e.shiftKey ? -1 : 1) + focusables.length) % focusables.length;
    focusables[idx].focus();
  }