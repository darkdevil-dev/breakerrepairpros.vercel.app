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
      const stateName = data.state.name;
      const rand = getSeededRandom(data.state.slug);
      const variation = Math.floor(rand() * 4);
      
      const titles = [
        `Furnace Repair & Heating Services in ${stateName} - ${data.site.BRAND}`,
        `Emergency Furnace Repair ${stateName} | 24/7 Heating Service`,
        `Furnace Service & Heating in ${stateName} | Same Day Dispatch`,
        `Local Heating & Furnace Repair ${stateName} | 24/7 Experts`
      ];
      return titles[variation];
    },
    metaDesc: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(data.state.slug);
      const variation = Math.floor(rand() * 4);
      
      const descs = [
        `Need furnace repair in ${stateName}? Contact ${data.site.BRAND} at ${data.site.PHONE} for 24/7 emergency furnace service, heating tune-ups, and heat pump repairs. Fast local dispatch!`,
        `Looking for emergency heating or furnace repair in ${stateName}? We provide 24/7 winter heating restoration, heat exchanger checks, and burner service. Call now for same day service!`,
        `Top-rated furnace repair & heating service in ${stateName}. Our certified HVAC technicians offer same day service for gas furnaces, heat pumps, and boilers. Call 24/7.`,
        `Reliable furnace repair and heating specialists across ${stateName}. 24/7 emergency heating response, upfront flat-rate pricing, and guaranteed parts & labor.`
      ];
      return descs[variation];
    },
    h1Title: (data) => {
      const stateName = data.state.name;
      const rand = getSeededRandom(data.state.slug);
      const variation = Math.floor(rand() * 3);
      
      const h1s = [
        `Furnace Repair & Heating Services in ${stateName}`,
        `Top Rated Heating & Furnace Experts in ${stateName}`,
        `24/7 Emergency Furnace Repair in ${stateName}`
      ];
      return h1s[variation];
    },
    
    faqs: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allFaqs = getFaqsPool(null, state, data.site.BRAND, data.site.PHONE);
      return shuffleArray(allFaqs, rand).slice(0, 5);
    },
    testimonials: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allTestimonials = getTestimonialsPool(null, state, data.site.BRAND);
      return shuffleArray(allTestimonials, rand).slice(0, 3);
    },
    whyChooseContent: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allWhyChoose = getWhyChoosePool(null, state, data.site.BRAND);
      return allWhyChoose[Math.floor(rand() * allWhyChoose.length)];
    },
    whoWeAreContent: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allWhoWeAre = getWhoWeArePool(null, state, data.site.BRAND);
      return allWhoWeAre[Math.floor(rand() * allWhoWeAre.length)];
    },
    localRiskText: (data) => {
      const state = data.state;
      let text = `${state.name} homeowners and businesses rely on our licensed HVAC technicians for all heating and furnace needs — from emergency burner repairs and igniter replacements to complete seasonal tune-ups and system replacements.`;
      const coldStates = ['WI','MN','MI','NY','IL','ND','SD','OH','PA','ME','VT','NH','IA','MA','MT','WY','CO','ID'];
      const hotStates = ['FL','TX','AZ','NV','NM'];
      if (coldStates.includes(state.abbr)) {
        text = `During severe winter storms and sub-zero freezes, ${state.name} homes are especially vulnerable to furnace lockouts, cracked heat exchangers, and frozen heat pumps. Our certified technicians respond fast with 24/7 emergency heating repairs, OEM igniter replacements, and safety testing to keep your home warm and safe.`;
      } else if (hotStates.includes(state.abbr)) {
        text = `When sudden winter cold fronts strike ${state.name}, heating systems and heat pumps that have sat idle during long hot summers frequently fail, blow cold air, or emit burning smells. Our HVAC specialists provide rapid emergency diagnostics, heating tune-ups, and heat pump reversing valve service.`;
      }
      return text;
    }
  }
};
