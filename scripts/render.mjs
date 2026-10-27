const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const itemList = items => `<ul>${items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>`;
const route = (locale, slug) => `/${locale}/${locale === 'fr' ? 'projets' : 'projects'}/${slug}/`;
const PROJECT_ORDER = ['win-tms','zine-tms','gamma-transit','fuel-tracking'];
const orderedProjects = data => [...data.projects].sort((a,b) => PROJECT_ORDER.indexOf(a.slug) - PROJECT_ORDER.indexOf(b.slug));

function shell(content, data, {title, description, alternate, home = false}) {
  const l = data.locale;
  const base = `/${l}/`;
  return `<!doctype html><html lang="${l}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0b1830"><meta name="description" content="${escape(description)}"><title>${escape(title)}</title><link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="stylesheet" href="/assets/tokens.css"><link rel="stylesheet" href="/assets/site.css"></head><body class="${home ? 'home-page' : 'detail-page'}"><a class="skip-link" href="#main">${l === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a><header class="site-header"><div class="wrap header-inner"><a class="brand" href="${base}" aria-label="${escape(data.siteName)} — ${l === 'fr' ? 'accueil' : 'home'}"><span class="brand-mark">MRS<span>.</span></span><span class="brand-name">Mohammed Reda<br>Saadi</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="${escape(data.navigation.menuOpen)}" data-open-label="${escape(data.navigation.menuOpen)}" data-close-label="${escape(data.navigation.menuClose)}"><span></span><span></span></button><nav id="site-nav" class="site-nav" aria-label="${l === 'fr' ? 'Navigation principale' : 'Main navigation'}"><a href="${base}#projets">${escape(data.navigation.work)}</a><a href="${base}#apropos">${escape(data.navigation.about)}</a><a href="${base}#parcours">${escape(data.navigation.journey)}</a><a href="${base}#contact">${escape(data.navigation.contact)}</a><a class="lang-link" href="${alternate}" lang="${l === 'fr' ? 'en' : 'fr'}" hreflang="${l === 'fr' ? 'en' : 'fr'}">${l === 'fr' ? 'EN' : 'FR'} <span aria-hidden="true">↗</span></a></nav></div></header><main id="main">${content}</main><footer class="site-footer"><div class="wrap footer-inner"><span>${escape(data.footer.copyrightLabel)}</span><a href="#main">${escape(data.footer.backToTop)} ↑</a></div></footer><script src="/assets/main.js" defer></script></body></html>`;
}

export function renderProject(data, project) {
  const l = data.locale;
  const ordered = orderedProjects(data);
  const next = ordered[(ordered.findIndex(x => x.slug === project.slug) + 1) % ordered.length];
  const fields = [['challenge',data.labels.challenge],['contribution',data.labels.contribution],['solution',data.labels.solution],['results',data.labels.results],['limitations',data.labels.limitations]];
  const content = `<article class="case-study wrap"><a class="back-link" href="/${l}/#projets">← ${escape(data.labels.backToProjects)}</a><div class="case-header"><span class="eyebrow">${escape(project.organization)} / ${escape(project.category)}</span><h1>${escape(project.title)}<span>.</span></h1><p>${escape(project.summary)}</p><div class="tag-list">${project.tags.map(tag => `<span>${escape(tag)}</span>`).join('')}</div></div>${project.illustration ? `<figure class="case-figure"><a class="case-image-link" href="${escape(project.illustration)}" target="_blank" rel="noopener" aria-label="${escape(data.labels.zoomImage)}"><img src="${escape(project.illustration)}" alt="${escape(project.illustrationAlt)}"><span>${escape(data.labels.zoomImage)} ↗</span></a><figcaption>${escape(project.illustrationCaption)}</figcaption></figure>` : ''}${project.resultValue ? `<div class="case-result"><strong>${escape(project.resultValue)}</strong><span>${escape(project.resultContext)}</span></div>` : ''}<div class="case-sections">${fields.map(([key,label],i) => `<section><span class="eyebrow">0${i+1} / ${escape(label)}</span><h2>${escape(label)}</h2>${itemList(project[key])}</section>`).join('')}</div><a class="next-project" href="${route(l,next.slug)}"><span>${escape(data.labels.nextProject)}</span><strong>${escape(next.title)} <span aria-hidden="true">↗</span></strong></a></article>`;
  return shell(content,data,{title:`${project.title} — ${data.siteName}`,description:project.summary,alternate:route(l === 'fr' ? 'en' : 'fr',project.slug)});
}

export function render404(data) {
  return shell(`<section class="not-found wrap"><span class="eyebrow">404</span><h1>${escape(data.notFound.title)}</h1><p>${escape(data.notFound.description)}</p><a class="button button-primary" href="/${data.locale}/">${escape(data.notFound.homeLabel)} ↗</a></section>`,data,{title:`404 — ${data.siteName}`,description:data.notFound.description,alternate:'/en/'});
}

export { shell };
