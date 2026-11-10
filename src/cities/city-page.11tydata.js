import statesData from '../../data/states.js';
import { getFaqsPool } from '../../data/faqsPool.js';
import { getTestimonialsPool } from '../../data/testimonialsPool.js';
import { getWhyChoosePool } from '../../data/whyChoosePool.js';
import { getWhoWeArePool } from '../../data/whoWeArePool.js';

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
    metaTitle: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`title-${data.item.city.slug}`);
      const titles = [
        `Furnace Repair & Heating in ${city}, ${state} - ${data.site.BRAND}`,
        `Emergency Furnace Repair ${city}, ${state} | 24/7 Heating Service`,
        `Furnace Service ${city}, ${state} | Same Day Heating Dispatch`,
        `Local Heating & Furnace Repair ${city}, ${state} | 24/7 Experts`
      ];
      return titles[Math.floor(rand() * titles.length)];
    },
    metaDesc: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`desc-${data.item.city.slug}`);
      const descs = [
        `Looking for furnace repair in ${city}, ${state}? Contact ${data.site.BRAND} at ${data.site.PHONE} for 24/7 emergency heating service, furnace tune-ups, and heat pump repair.`,
        `Emergency furnace repair and heating services in ${city}, ${state}. Available 24/7 for no-heat emergencies, pilot light issues, and burner replacements. Call now!`,
        `Need reliable heating or furnace service in ${city}, ${state}? Our certified HVAC technicians offer same day furnace diagnostics, tune-ups, and repairs. Call 24/7.`,
        `Top-rated local furnace repair in ${city}, ${state}. We specialize in 24/7 emergency heating restoration, heat pump repair, and furnace installation. Fast service today!`
      ];
      return descs[Math.floor(rand() * descs.length)];
    },
    h1Title: (data) => {
      const city = data.item.city.name;
      const state = data.item.state.abbr;
      const rand = getSeededRandom(`h1-${data.item.city.slug}`);
      const h1s = [
        `Emergency Furnace Repair in ${city}, ${state}`,
        `Your Trusted ${city} Heating & Furnace Pros`,
        `Furnace Repair & Heating Services in ${city}, ${state}`,
      ];
      return h1s[Math.floor(rand() * h1s.length)];
    },
    nearbyCities: (data) => {
      const stateObj = statesData.find(s => s.slug === data.item.state.slug);
      if (!stateObj) return [];
      return stateObj.cities.filter(c => c.slug !== data.item.city.slug).slice(0, 14);
    },
    faqs: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      const allFaqs = getFaqsPool(city, state, data.site.BRAND, data.site.PHONE);
      return shuffleArray(allFaqs, rand).slice(0, 10);
    },
    testimonials: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      const allTestimonials = getTestimonialsPool(city, state, data.site.BRAND);
      return shuffleArray(allTestimonials, rand).slice(0, 3);
    },
    whyChooseContent: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      const allWhyChoose = getWhyChoosePool(city, state, data.site.BRAND);
      return allWhyChoose[Math.floor(rand() * allWhyChoose.length)];
    },
    whoWeAreContent: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      const allWhoWeAre = getWhoWeArePool(city, state, data.site.BRAND);
      return allWhoWeAre[Math.floor(rand() * allWhoWeAre.length)];
    },
    contentVariation: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      return Math.floor(rand() * 3);
    },
    titleVariation: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      const rand = getSeededRandom(`${city.slug}-${state.slug}`);
      return Math.floor(rand() * 2);
    },
    titleSuffix: (data) => {
      return data.titleVariation === 0 ? 'Same Day Service' : 'Emergency Service';
    },
    localRiskText: (data) => {
      const city = data.item.city;
      const state = data.item.state;
      let text = `${city.name} homeowners and businesses trust our licensed HVAC technicians for all heating needs — from emergency furnace repairs and heat pump service to seasonal tune-ups and full system replacements.`;
      const coldStates = ['WI','MN','MI','NY','IL','ND','SD','OH','PA','ME','VT','NH','IA','MA','MT','WY','CO','ID'];
      const hotStates = ['FL','TX','AZ','NV','NM'];
      if (coldStates.includes(state.abbr)) {
        text = `During severe winter cold snaps, ${city.name} homes are especially vulnerable to furnace flame failures, frozen heat pumps, and cracked heat exchangers. Our technicians respond fast with 24/7 emergency furnace repairs, OEM parts replacements, and carbon monoxide testing to protect your family.`;
      } else if (hotStates.includes(state.abbr)) {
        text = `When sudden winter cold fronts sweep into ${city.name}, heating systems and heat pumps that have been neglected often fail, trip breakers, or produce electrical burning odors. Our certified HVAC specialists provide rapid emergency diagnostics, heating tune-ups, and heat pump repairs in this climate.`;
      }
      return text;
    },
    ratingValue: (data) => {
      const rand = getSeededRandom(`rating-${data.item.city.slug}`);
      return (4.7 + rand() * 0.28).toFixed(1);
    },
    reviewCount: (data) => {
      const rand = getSeededRandom(`rating-${data.item.city.slug}`);
      return (80 + Math.floor(rand() * 320)).toString();
    }
  }
};
