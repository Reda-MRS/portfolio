const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', toggle.dataset[open ? 'closeLabel' : 'openLabel']);
  nav.classList.toggle('is-open',open);
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    toggle?.setAttribute('aria-expanded','false');
    toggle?.setAttribute('aria-label',toggle.dataset.openLabel);
    nav.classList.remove('is-open');
  }
});
document.querySelector('.copy-button')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  const status = document.querySelector('.copy-status');
  try { await navigator.clipboard.writeText(button.dataset.email); status.textContent = button.dataset.success; }
  catch { status.textContent = button.dataset.failure; }
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.home-page .site-nav a[href*="#"]')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => {
      const current = link.hash === `#${visible.target.id}`;
      link.classList.toggle('is-current',current);
      if (current) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-22% 0px -62% 0px',threshold:[0,.2,.5]});
  document.querySelectorAll('#apropos,#projets,#parcours,#contact').forEach(section => observer.observe(section));
}

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const items = document.querySelectorAll('.home-page [data-reveal]');
  if (items.length) {
    const reveal = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    }, {rootMargin:'0px 0px -35px 0px',threshold:.05});
    items.forEach(item => reveal.observe(item));
    document.documentElement.classList.add('has-motion');
  }
}
