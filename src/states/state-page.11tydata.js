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
    geoRegion: (data) => `US-${data.state.abbr}`,
    geoPlacename: (data) => `${data.state.name}, United States`,
    metaTitle: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(`st-title-${data.state.slug}`);
      const titles = [
        `Circuit Breaker Repair & Panel Upgrades in ${stateName} | ${data.site.BRAND}`,
        `24/7 Emergency Breaker Repair in ${stateName} | Licensed Electricians`,
        `Breaker Box & Main Breaker Replacement in ${stateName}`,
        `Tripping Breaker Repair Across ${stateName} | ${data.site.BRAND}`
      ];
      return titles[Math.floor(rand() * titles.length)];
    },
    metaDesc: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(`st-desc-${data.state.slug}`);
      const descs = [
        `Need circuit breaker repair in ${stateName}? Call ${data.site.PHONE} to connect with licensed electricians across ${data.state.cities.length} cities for tripping breakers & 200A upgrades.`,
        `24/7 emergency breaker repair and electrical panel service in ${stateName}. Troubleshoot burnt breakers, buzzing panels, AFCI/GFCI trips, and main disconnect failures.`,
        `Licensed local breaker repair specialists serving ${stateName}. Square D, Eaton, Siemens, GE, FPE & Zinsco panel upgrades with upfront flat-rate quotes.`,
        `Reliable circuit breaker repair across ${stateName}. Same-day tripping breaker diagnostics, dedicated 240V circuits, and thermal load-center safety checks.`
      ];
      return descs[Math.floor(rand() * descs.length)];
    },
    h1Title: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(`st-h1-${data.state.slug}`);
      const h1s = [
        `Circuit Breaker Repair Services in ${stateName}`,
        `Licensed Breaker & Panel Specialists in ${stateName}`,
        `24/7 Emergency Breaker Repair Across ${stateName}`
      ];
      return h1s[Math.floor(rand() * h1s.length)];
    },
    faqs: (data) => {
      const state = data.state;
      const rand = getSeededRandom(`st-faq-${state.slug}`);
      const allFaqs = getFaqsPool(null, state, data.site.BRAND, data.site.PHONE);
      return shuffleArray(allFaqs, rand).slice(0, 6);
    },
    testimonials: (data) => {
      const state = data.state;
      const rand = getSeededRandom(`st-testi-${state.slug}`);
      const allTestimonials = getTestimonialsPool(null, state, data.site.BRAND);
      return shuffleArray(allTestimonials, rand).slice(0, 3);
    },
    whyChooseContent: (data) => {
      const state = data.state;
      const rand = getSeededRandom(`st-why-${state.slug}`);
      const allWhyChoose = getWhyChoosePool(null, state, data.site.BRAND);
      return allWhyChoose[Math.floor(rand() * allWhyChoose.length)];
    },
    whoWeAreContent: (data) => {
      const state = data.state;
      const rand = getSeededRandom(`st-who-${state.slug}`);
      const allWhoWeAre = getWhoWeArePool(null, state, data.site.BRAND);
      return allWhoWeAre[Math.floor(rand() * allWhoWeAre.length)];
    },
    regionalRisk: (data) => {
      return getRegionalProfile(data.state.abbr, data.state.name);
    },
    stateSymptoms: () => breakerSymptoms,
    stateBrands: () => panelBrands
  }
};
