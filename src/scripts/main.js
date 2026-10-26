const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', toggle.dataset[open ? 'closeLabel' : 'openLabel']);
  nav.classList.toggle('is-open',open);
});
nav?.addEventListener('click', event => {
  if (event.target.closest('a')) { toggle?.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); }
});
document.querySelector('.copy-button')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  const status = document.querySelector('.copy-status');
  try { await navigator.clipboard.writeText(button.dataset.email); status.textContent = button.dataset.success; }
  catch { status.textContent = button.dataset.failure; }
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.intro-nav a')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => {
      const current = link.hash === `#${visible.target.id}`;
      link.classList.toggle('is-current',current);
      if (current) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-10% 0px -55% 0px',threshold:[0,.2,.5]});
  document.querySelectorAll('#apropos,#projets,#parcours,#contact').forEach(section => observer.observe(section));
}
