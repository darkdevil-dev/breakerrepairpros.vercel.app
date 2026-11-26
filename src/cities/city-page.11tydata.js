import statesData from '../../data/states.js';
import { getFaqsPool } from '../../data/faqsPool.js';
import { getTestimonialsPool } from '../../data/testimonialsPool.js';
import { getWhyChoosePool } from '../../data/whyChoosePool.js';
import { getWhoWeArePool } from '../../data/whoWeArePool.js';
import { breakerSymptoms, panelBrands, getRegionalProfile } from '../../data/breakerGuides.js';

function getSeededRandom(seedString) {
  let seed = 0;
  for (let i = 0; i < seedString.length; i++) {
    seed = (seed * 31 + seedString.charCodeAt(i)) % 2147483647;
  }
  if (seed <= 0) seed += 2147483646;
  return function() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function shuffleArray(array, randomFunc) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(randomFunc() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default {
  eleventyComputed: {
    geoRegion: (data) => `US-${data.item.state.abbr}`,
    geoPlacename: (data) => `${data.item.city.name}, ${data.item.state.abbr}, United States`,
    metaTitle: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`title-${data.item.state.slug}-${data.item.city.slug}`);
      const titles = [
        `Circuit Breaker Repair in ${city}, ${state} | ${data.site.BRAND}`,
        `Emergency Breaker Repair ${city}, ${state} — 24/7 Electricians`,
        `Tripping Breaker & Panel Repair in ${city}, ${state}`,
        `Licensed Breaker Box Repair ${city}, ${state} | Same-Day Help`
      ];
      return titles[Math.floor(rand() * titles.length)];
    },
    metaDesc: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const zip = data.item.city.zip ? ` (ZIP ${data.item.city.zip})` : '';
      const rand = getSeededRandom(`desc-${data.item.state.slug}-${data.item.city.slug}`);
      const descs = [
        `Need circuit breaker repair in ${city}, ${state}${zip}? Call ${data.site.PHONE} to connect with licensed electricians for tripping breakers, main breaker swaps & panel upgrades.`,
        `Fast 24/7 breaker repair in ${city}, ${state}. Troubleshoot buzzing panels, warm breakers, AFCI/GFCI trips, and dead circuits with upfront local estimates.`,
        `Connect with licensed ${city}, ${state} electricians for circuit breaker replacement, burnt bus bar repair, subpanels, and 200-amp electrical panel upgrades.`,
        `Dealing with a breaker that won't reset in ${city}, ${state}? Reach local electrical pros 24/7 at ${data.site.PHONE} for safe NEC-compliant diagnostics.`
      ];
      return descs[Math.floor(rand() * descs.length)];
    },
    h1Title: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`h1-${data.item.state.slug}-${data.item.city.slug}`);
      const h1s = [
        `Circuit Breaker Repair in ${city}, ${state}`,
        `24/7 Breaker & Panel Service in ${city}, ${state}`,
        `Licensed Circuit Breaker Electricians in ${city}, ${state}`,
        `Tripping Breaker & Panel Repair in ${city}, ${state}`
      ];
      return h1s[Math.floor(rand() * h1s.length)];
    },
    heroDesc: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const county = data.item.city.county ? `${data.item.city.county} County` : data.item.state.name;
      const zipCount = data.item.city.zipCodes ? data.item.city.zipCodes.length : 1;
      const zipNote = zipCount > 1 ? `all ${zipCount} local ZIP codes` : `ZIP ${data.item.city.zip}`;
      const rand = getSeededRandom(`hero-${data.item.state.slug}-${data.item.city.slug}`);
      const intros = [
        `Experiencing tripping breakers, buzzing panels, or partial power loss in ${city}, ${state}? Connect with state-licensed electricians serving ${county} (${zipNote}) for same-day diagnostics, OEM breaker swaps, and 200A panel upgrades.`,
        `Get fast, code-compliant circuit breaker repair across ${city}, ${state}. Local electrical pros serving ${zipNote} handle short circuits, AFCI/GFCI trips, main disconnect failures, and thermal panel safety checks 24/7.`,
        `Don't ignore warm or repeatedly tripping breakers in ${city}, ${state}. ${data.site.BRAND} connects ${county} homeowners and businesses with insured electricians for safe breaker replacements and load-center repairs.`,
        `From dead 15A/20A outlets to 200-amp main breaker failures in ${city}, ${state}, reach licensed technicians covering ${zipNote} for upfront flat-rate estimates and 24/7 emergency breaker dispatch.`,
        `Need a trusted electrician for breaker box issues in ${city}, ${state}? Local pros across ${county} stock Square D, Eaton, Siemens, and GE breakers for rapid, NEC-compliant single-visit repairs.`,
        `Whether your ${city}, ${state} home has a sparking breaker, double-tapped inspection flag, or outdated FPE/Zinsco panel, connect 24/7 with local electricians serving ${zipNote}.`
      ];
      return intros[Math.floor(rand() * intros.length)];
    },
    ctaCopy: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`cta-${data.item.state.slug}-${data.item.city.slug}`);
      const ctas = [
        {
          title: `Breaker Tripping or Buzzing in ${city}, ${state}?`,
          desc: `Speak with a live dispatcher 24/7 to connect with a licensed local electrician serving ${city}.`
        },
        {
          title: `Need Same-Day Breaker Repair in ${city}?`,
          desc: `Licensed electricians across ${state} are available day and night for emergency breaker & panel repairs.`
        },
        {
          title: `Restore Safe Power to Your ${city} Property Today`,
          desc: `Call now for upfront flat-rate diagnostics on tripping breakers, main disconnects, and 200A upgrades.`
        },
        {
          title: `24/7 Emergency Electrical Panel Help in ${city}, ${state}`,
          desc: `Connect immediately with an insured electrician carrying UL-listed OEM replacement breakers.`
        }
      ];
      return ctas[Math.floor(rand() * ctas.length)];
    },
    nearbyCities: (data) => {
      const stateObj = statesData.find(s => s.slug === data.item.state.slug);
      if (!stateObj || stateObj.cities.length <= 1) return [];
      const all = stateObj.cities;
      const curSlug = data.item.city.slug;
      const curCounty = data.item.city.county;
      const curIdx = all.findIndex(c => c.slug === curSlug);

      const selected = [];
      const seen = new Set([curSlug]);

      // 1. Prefer same-county neighboring cities first for strong local relevance
      if (curCounty) {
        const countyPeers = all.filter(c => c.county === curCounty && c.slug !== curSlug);
        const startOffset = curIdx >= 0 ? curIdx % Math.max(1, countyPeers.length) : 0;
        for (let i = 0; i < countyPeers.length && selected.length < 10; i++) {
          const cand = countyPeers[(startOffset + i) % countyPeers.length];
          if (!seen.has(cand.slug)) {
            seen.add(cand.slug);
            selected.push(cand);
          }
        }
      }

      // 2. Fill remaining slots up to 14 using a circular neighbor window around curIdx (avoids orphan cities)
      const len = all.length;
      const base = curIdx >= 0 ? curIdx : 0;
      for (let step = 1; step < len && selected.length < 14; step++) {
        const forward = all[(base + step) % len];
        if (!seen.has(forward.slug)) {
          seen.add(forward.slug);
          selected.push(forward);
        }
        if (selected.length >= 14) break;
        const backward = all[(base - step + len) % len];
        if (!seen.has(backward.slug)) {
          seen.add(backward.slug);
          selected.push(backward);
        }
      }

      return selected;
    },
    faqs: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`faq-${state.slug}-${city.slug}`);
      const allFaqs = getFaqsPool(city, state, data.site.BRAND, data.site.PHONE);
      return shuffleArray(allFaqs, rand).slice(0, 8);
    },
    testimonials: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`testi-${state.slug}-${city.slug}`);
      const allTestimonials = getTestimonialsPool(city, state, data.site.BRAND);
      return shuffleArray(allTestimonials, rand).slice(0, 3);
    },
    whyChooseContent: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`why-${state.slug}-${city.slug}`);
      const allWhyChoose = getWhyChoosePool(city, state, data.site.BRAND);
      return allWhyChoose[Math.floor(rand() * allWhyChoose.length)];
    },
    whoWeAreContent: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`who-${state.slug}-${city.slug}`);
      const allWhoWeAre = getWhoWeArePool(city, state, data.site.BRAND);
      return allWhoWeAre[Math.floor(rand() * allWhoWeAre.length)];
    },
    regionalRisk: (data) => {
      return getRegionalProfile(data.item.state.abbr, `${data.item.city.name}, ${data.item.state.abbr}`);
    },
    citySymptoms: (data) => {
      const rand = getSeededRandom(`sym-${data.item.state.slug}-${data.item.city.slug}`);
      return shuffleArray(breakerSymptoms, rand).slice(0, 4);
    },
    cityBrands: () => panelBrands
  }
};
