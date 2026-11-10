// scripts/generate-sitemap.mjs
// Generates /public/sitemap.xml (index), /public/sitemap-core.xml,
// and /public/sitemap-[state].xml for each state, plus robots.txt
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SITE_DIR = resolve(ROOT, '_site');

// ── Import data ──────────────────────────────────────────────────────
const { default: states } = await import('../data/states.js');
const { default: services } = await import('../data/services.js');
const { default: site } = await import('../src/_data/site.js');

const DOMAIN = (site.DOMAIN || 'https://hvacexpertspros.link').replace(/\/+$/, '');

function writeToSite(filename, content) {
  if (!existsSync(SITE_DIR)) {
    mkdirSync(SITE_DIR, { recursive: true });
  }
  const sitePath = resolve(SITE_DIR, filename);
  writeFileSync(sitePath, content, 'utf8');
}

console.log(`🗺️ Generating sitemaps for ${DOMAIN}...`);

// ── 1. Generate sitemap-core.xml ─────────────────────────────────────
let coreXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
coreXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Static pages
const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'about/', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact/', priority: '0.8', changefreq: 'monthly' },
  { path: 'services/', priority: '0.9', changefreq: 'weekly' },
  { path: 'privacy-policy/', priority: '0.3', changefreq: 'monthly' },
  { path: 'terms/', priority: '0.3', changefreq: 'monthly' }
];

staticPages.forEach(({ path, priority, changefreq }) => {
  coreXml += '  <url>\n';
  coreXml += `    <loc>${DOMAIN}/${path}</loc>\n`;
  coreXml += `    <changefreq>${changefreq}</changefreq>\n`;
  coreXml += `    <priority>${priority}</priority>\n`;
  coreXml += '  </url>\n';
});

// Services single pages
services.forEach(svc => {
  coreXml += '  <url>\n';
  coreXml += `    <loc>${DOMAIN}/services/${svc.slug}/</loc>\n`;
  coreXml += '    <changefreq>monthly</changefreq>\n';
  coreXml += '    <priority>0.8</priority>\n';
  coreXml += '  </url>\n';
});

coreXml += '</urlset>\n';
writeToSite('sitemap-core.xml', coreXml);
console.log('✓ Created sitemap-core.xml');

// ── 2. Generate sitemap-[state.slug].xml for each state ──────────────
let totalCityUrls = 0;
states.forEach(st => {
  let stateXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  stateXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // State page
  stateXml += '  <url>\n';
  stateXml += `    <loc>${DOMAIN}/${st.slug}/</loc>\n`;
  stateXml += '    <changefreq>weekly</changefreq>\n';
  stateXml += '    <priority>0.9</priority>\n';
  stateXml += '  </url>\n';

  // City pages
  st.cities.forEach(city => {
    totalCityUrls++;
    stateXml += '  <url>\n';
    stateXml += `    <loc>${DOMAIN}/${st.slug}/${city.slug}/</loc>\n`;
    stateXml += '    <changefreq>monthly</changefreq>\n';
    stateXml += '    <priority>0.6</priority>\n';
    stateXml += '  </url>\n';
  });

  stateXml += '</urlset>\n';
  writeToSite(`sitemap-${st.slug}.xml`, stateXml);
});
console.log(`✓ Created ${states.length} state sitemaps (${totalCityUrls} cities total)`);

// ── 3. Generate sitemap.xml (Index) ──────────────────────────────────
let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
indexXml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Core sitemap
indexXml += '  <sitemap>\n';
indexXml += `    <loc>${DOMAIN}/sitemap-core.xml</loc>\n`;
indexXml += '  </sitemap>\n';

// State sitemaps
states.forEach(st => {
  indexXml += '  <sitemap>\n';
  indexXml += `    <loc>${DOMAIN}/sitemap-${st.slug}.xml</loc>\n`;
  indexXml += '  </sitemap>\n';
});

indexXml += '</sitemapindex>\n';
writeToSite('sitemap.xml', indexXml);
console.log('✓ Created sitemap.xml (Sitemap Index)');

// ── 4. Generate robots.txt ───────────────────────────────────────────
const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml\n`;
writeToSite('robots.txt', robotsTxt);
console.log('✓ Created robots.txt');

console.log('🎉 All sitemaps successfully generated!');
