export const breakerSymptoms = [
  {
    symptom: 'Breaker Trips Immediately Upon Reset',
    cause: 'Direct line-to-neutral or line-to-ground short circuit in branch wiring or appliance',
    action: 'Leave breaker OFF; do not force reset — call for short-circuit isolation',
    badge: 'Urgent Short'
  },
  {
    symptom: 'Breaker Trips After 5–30 Minutes',
    cause: 'Circuit amp overload (too many appliances) or weak thermal trip coil',
    action: 'Unplug high-wattage loads and schedule amp-draw testing',
    badge: 'Overload'
  },
  {
    symptom: 'Buzzing, Crackling, or Warm Breaker',
    cause: 'Loose terminal lug, oxidized bus bar stab, or internal contact arcing',
    action: 'Shut off circuit if safe and request same-day thermal inspection',
    badge: 'Fire Hazard'
  },
  {
    symptom: 'AFCI / GFCI Trips With Light Load',
    cause: 'Shared neutral, moisture intrusion in outlet box, or pinched Romex cable',
    action: 'Requires ground-fault / arc-fault diagnostic tracing',
    badge: 'Protection'
  },
  {
    symptom: 'Main Breaker Trips / Half House Out',
    cause: 'Failing 100A–200A main disconnect, loose service lug, or dropped utility leg',
    action: 'Call 24/7 dispatch for main breaker & service lug testing',
    badge: '24/7 Priority'
  },
  {
    symptom: 'Double-Tapped or Scorched Breaker',
    cause: 'Two wires clamped under single lug causing uneven torque and overheating',
    action: 'Correct with UL-listed tandem breaker, pigtail, or subpanel',
    badge: 'Code Violation'
  }
];

export const panelBrands = [
  { name: 'Square D QO & Homeline', note: 'Single-pole, tandem, AFCI/GFCI & main breakers' },
  { name: 'Eaton BR & CH', note: 'Plug-on neutral, arc-fault & heavy-duty breakers' },
  { name: 'Siemens & Murray', note: 'Residential load centers & dedicated 240V breakers' },
  { name: 'GE PowerMark Gold', note: 'Thin/standard replacement breakers & main disconnects' },
  { name: 'Federal Pacific (FPE) & Zinsco', note: 'Full code-compliant safety panel replacements' },
  { name: 'Leviton & Smart Panels', note: 'Modern smart circuit breakers & whole-home monitoring' }
];

export const regionalProfiles = {
  northeast: {
    states: ['ME', 'NH', 'VT', 'MA', 'RI', 'CT', 'NY', 'NJ', 'PA'],
    title: 'Older Housing Stock & Heavy Winter Loads',
    summary: (loc) => `Many homes across ${loc} still operate on aging 60A–100A panels, vintage fuse boxes, or older Square D/FPE load centers. Combined with winter electric space heaters, sump pumps, and storm surges, loose breaker lugs and overloaded 15A/20A circuits are common trouble spots.`
  },
  midwest: {
    states: ['OH', 'MI', 'IN', 'IL', 'WI', 'MN', 'IA', 'MO', 'ND', 'SD', 'NE', 'KS'],
    title: 'Seasonal Freeze Swings & Sump/Furnace Circuits',
    summary: (loc) => `Extreme winter cold and humid summer storms in ${loc} put heavy cycling stress on furnace blower circuits, basement sump pump GFCI breakers, and outdoor air-conditioner disconnects—often exposing weak thermal breakers and corroded panel neutrals.`
  },
  gulf: {
    states: ['FL', 'LA', 'MS', 'AL', 'GA', 'SC'],
    title: 'Lightning Surges, Humidity & High AC Draw',
    summary: (loc) => `Frequent Gulf and Atlantic lightning activity paired with high humidity in ${loc} accelerates terminal oxidation and surge damage inside load centers. Continuous central AC operation also stresses 40A–60A double-pole breakers and main disconnects.`
  },
  southwest: {
    states: ['TX', 'AZ', 'NV', 'NM', 'OK'],
    title: 'Peak Summer AC Amperage & Garage Panel Heat',
    summary: (loc) => `In ${loc}, garage-mounted electrical panels face extreme ambient heat while central AC compressors, pool pumps, and EV chargers pull high continuous amperage—causing thermal-magnetic breakers to trip prematurely or pit bus stabs.`
  },
  west: {
    states: ['CA', 'OR', 'WA', 'HI', 'AK'],
    title: '200A EV/Solar Heavy-Ups & Strict AFCI/GFCI Codes',
    summary: (loc) => `Property owners across ${loc} regularly encounter strict state AFCI/GFCI code updates, EV Level 2 charger 50A–60A circuit additions, and insurance inspections requiring replacement of legacy Zinsco or FPE panels.`
  },
  midatlantic: {
    states: ['DE', 'MD', 'DC', 'VA', 'WV', 'NC', 'KY', 'TN', 'AR'],
    title: 'Mixed Legacy Panels & Year-Round Heat Pump Loads',
    summary: (loc) => `Homes in ${loc} frequently balance dual heating/cooling heat-pump strips with older 100A–150A service panels. Verifying main lug torque, balanced breaker phases, and dedicated 240V circuits keeps panels running cool and reliable.`
  },
  mountain: {
    states: ['CO', 'UT', 'ID', 'MT', 'WY'],
    title: 'Electric Heating, Workshop Subpanels & Surge Defense',
    summary: (loc) => `Rapid temperature shifts and electric auxiliary heat loads in ${loc} frequently trigger nuisance trips on overworked branch breakers and detached garage subpanels, making thermal inspections and proper grounding essential.`
  }
};

export function getRegionalProfile(stateAbbr, locationName) {
  for (const key of Object.keys(regionalProfiles)) {
    if (regionalProfiles[key].states.includes(stateAbbr)) {
      return {
        title: regionalProfiles[key].title,
        text: regionalProfiles[key].summary(locationName)
      };
    }
  }
  return {
    title: 'Residential & Commercial Overcurrent Safety',
    text: `Properties across ${locationName} rely on properly calibrated circuit breakers, clean copper bus bars, and balanced 120V/240V circuits to prevent electrical overloads and fire hazards.`
  };
}
