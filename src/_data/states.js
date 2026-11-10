import statesData from '../../data/states.js';

let exportedStates = statesData;

if (process.env.BUILD_STATE && process.env.BUILD_STATE !== 'none') {
  exportedStates = statesData.filter(s => s.slug === process.env.BUILD_STATE);
} else if (process.env.BUILD_TYPE === 'base') {
  exportedStates = statesData;
} else {
  // As requested, no limits. Full website build (all states & cities)
  exportedStates = statesData;
}

export default exportedStates;
