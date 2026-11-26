// scripts/generate-sitemap.mjs
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SITE_DIR = resolve(ROOT, '_site');

const { default: states } = await import('../data/states.js');
const { default: services } = await import('../data/services.js');
const { default: site } = await import('../src/_data/site.js');

const DOMAIN = (site.DOMAIN || 'https://breakerrepairpros.com').replace(/\/+$/, '');
const LASTMOD = site.BUILD_DATE || new Date().toISOString().split('T')[0];

function writeToSite(filename, content) {
  if (!existsSync(SITE_DIR)) {
    mkdirSync(SITE_DIR, { recursive: true });
  }
  writeFileSync(resolve(SITE_DIR, filename), content, 'utf8');
}

console.log(`🗺️ Generating sitemaps for ${DOMAIN}...`);

let coreXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
coreXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

const staticPages = ['', 'about/', 'contact/', 'services/', 'privacy-policy/', 'terms/'];
staticPages.forEach((p) => {
  coreXml += `  <url><loc>${DOMAIN}/${p}</loc><lastmod>${LASTMOD}</lastmod></url>\n`;
});

services.forEach((svc) => {
  coreXml += `  <url><loc>${DOMAIN}/services/${svc.slug}/</loc><lastmod>${LASTMOD}</lastmod></url>\n`;
});

coreXml += '</urlset>\n';
writeToSite('sitemap-core.xml', coreXml);

let totalCityUrls = 0;
states.forEach((st) => {
  let stateXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  stateXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  stateXml += `  <url><loc>${DOMAIN}/${st.slug}/</loc><lastmod>${LASTMOD}</lastmod></url>\n`;
  st.cities.forEach((city) => {
    totalCityUrls++;
    stateXml += `  <url><loc>${DOMAIN}/${st.slug}/${city.slug}/</loc><lastmod>${LASTMOD}</lastmod></url>\n`;
  });
  stateXml += '</urlset>\n';
  writeToSite(`sitemap-${st.slug}.xml`, stateXml);
});

let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
indexXml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
indexXml += `  <sitemap><loc>${DOMAIN}/sitemap-core.xml</loc></sitemap>\n`;
states.forEach((st) => {
  indexXml += `  <sitemap><loc>${DOMAIN}/sitemap-${st.slug}.xml</loc></sitemap>\n`;
});
indexXml += '</sitemapindex>\n';
writeToSite('sitemap.xml', indexXml);

console.log(`✓ Generated sitemaps (${states.length} states, ${totalCityUrls} cities)`);
