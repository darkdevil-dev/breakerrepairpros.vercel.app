export function getWhoWeArePool(city, state, brand) {
  const location = city ? city.name : state.name;
  const countyText = city && city.county ? `${city.county} County` : `${state.name}`;
  const zipLabel = city && city.zip ? `ZIP ${city.zip}` : state.abbr;

  if (city) {
    return [
      `<p>Homeowners and property managers across <strong>${location}, ${state.abbr}</strong> rely on <strong>${brand}</strong> to connect quickly with state-licensed electricians for safe circuit breaker repair. From single-pole branch breakers that keep tripping to warm 200-amp main disconnects in ${countyText}, local technicians perform load-amp testing, thermal bus bar inspections, and National Electrical Code (NEC) compliant repairs.</p>`,

      `<p>When a breaker box starts buzzing, smells like hot plastic, or leaves part of a home in <strong>${location}, ${state.abbr}</strong> without power, fast diagnostics matter. <strong>${brand}</strong> routes requests to insured electricians serving ${zipLabel} and nearby ${countyText} neighborhoods with stocked vans carrying UL-listed Square D, Eaton, Siemens, and GE replacement breakers.</p>`,

      `<p><strong>${brand}</strong> connects residents and businesses in <strong>${location}, ${state.abbr}</strong> with specialists focused on breaker box diagnostics rather than guesswork. Whether the issue is an overloaded 15A/20A kitchen circuit, a sensitive AFCI/GFCI trip, or an outdated panel needing capacity upgrades, technicians measure branch current and tighten terminal lugs to manufacturer torque specs.</p>`,

      `<p>Protecting homes in <strong>${location}, ${state.abbr}</strong> from electrical fire hazards starts inside the load center. Through <strong>${brand}</strong>, local electricians serving ${countyText} troubleshoot short circuits, ground faults, double-tapped breakers, and corroded bus stabs—always delivering clear upfront quotes before work begins.</p>`,

      `<p>Across <strong>${location}, ${state.abbr}</strong>, aging residential panels often struggle under modern appliances, central air conditioning, and EV charging loads. <strong>${brand}</strong> helps property owners in ${zipLabel} connect with licensed pros equipped for main breaker replacements, 100A-to-200A heavy-ups, and dedicated 240V circuits.</p>`,

      `<p>If your circuit breaker in <strong>${location}, ${state.abbr}</strong> trips repeatedly or feels loose when resetting, forcing it back on can damage bus bars and insulation. <strong>${brand}</strong> pairs ${countyText} homeowners with vetted electricians who isolate the underlying fault and install properly rated OEM breakers.</p>`,

      `<p>Both residential homes and commercial storefronts in <strong>${location}, ${state.abbr}</strong> depend on reliable overcurrent protection. Electricians in the <strong>${brand}</strong> network service everything from residential plug-on breakers and garage subpanels to commercial 3-phase bolt-on breaker panels around ${zipLabel}.</p>`,

      `<p>Obsolete panels like Federal Pacific (FPE) Stab-Lok, Zinsco, and vintage screw-in fuse boxes remain common in older ${countyText} properties. <strong>${brand}</strong> connects homeowners in <strong>${location}, ${state.abbr}</strong> with licensed electrical contractors experienced in safe panel replacements that satisfy modern insurance and inspection requirements.</p>`,

      `<p>Storm surges, loose neutral connections, and oxidized terminals can silently stress a breaker panel in <strong>${location}, ${state.abbr}</strong>. Local specialists reached via <strong>${brand}</strong> inspect grounding electrodes, install Type 1/Type 2 panel surge arrestors, and verify voltage stability across ${countyText}.</p>`,

      `<p>Finding a dependable local electrician in <strong>${location}, ${state.abbr}</strong> shouldn't mean waiting days for a callback. <strong>${brand}</strong> offers 24/7 dispatch support across ${zipLabel} and ${state.name} so urgent breaker hazards, dead circuits, and sparking panels receive prompt, code-compliant attention.</p>`
    ];
  }

  return [
    `<p>Welcome to <strong>${brand}</strong>, a nationwide referral network connecting property owners across <strong>${location}</strong> with state-licensed electricians specializing in circuit breaker repair and electrical panel safety. When a breaker trips repeatedly, buzzes, or shuts down critical circuits, fast and accurate fault diagnosis protects both your wiring and your household.</p>
    <p>Every circuit breaker is designed to interrupt overloads and short circuits in milliseconds before heat builds up behind drywall. Our participating electricians in ${location} use calibrated digital clamp meters, circuit tracers, and infrared thermal cameras to inspect bus bars, neutral lugs, and branch conductors under real load.</p>
    <h3>Code-Compliant Diagnostics Over Guesswork</h3>
    <p>Installing an oversized breaker on undersized wire is a serious fire hazard. Licensed pros connected through ${brand} verify conductor gauge, manufacturer UL compatibility, and NEC 2023/2026 AFCI and GFCI requirements before replacing any breaker or upgrading panel capacity in ${location}.</p>`,

    `<p>Across <strong>${location}</strong>, residential and commercial electrical systems work harder than ever—powering multi-ton HVAC condensers, induction ranges, heat pumps, home offices, and Level 2 EV chargers. Older 60A fuse boxes and 100A panels frequently run near capacity, causing nuisance trips, warm breakers, and flickering lights.</p>
    <p><strong>${brand}</strong> connects ${location} homeowners with local electricians stocked with OEM plug-on and bolt-on breakers from Square D (QO &amp; Homeline), Eaton (BR &amp; CH), Siemens, Murray, and GE, enabling single-visit repairs for most faulty breakers.</p>
    <h3>Upgrading Obsolete &amp; Recalled Panels</h3>
    <p>If your ${location} home still relies on a recalled Federal Pacific (FPE) Stab-Lok or Zinsco panel—or has double-tapped breakers flagged during an inspection—our network connects you with contractors who manage permits, utility coordination, and clean 200-amp service upgrades.</p>`,

    `<p>Electrical emergencies rarely happen during business hours. Whether a main breaker fails during a heatwave or a kitchen GFCI breaker refuses to reset on a weekend evening, <strong>${brand}</strong> provides 24/7 dispatch access to licensed local electricians across <strong>${location}</strong>.</p>
    <p>Technicians follow strict safety procedures: isolating faulted branch circuits, measuring insulation resistance, torquing aluminum and copper lugs to spec, and confirming balanced amperage across both hot legs.</p>
    <h3>Transparent Flat-Rate Estimates</h3>
    <p>Before work begins in ${location}, your electrician explains the root cause of the breaker failure in plain language and presents an upfront written quote so you remain in full control of the repair.</p>`,

    `<p>From small residential repairs to commercial 3-phase switchgear troubleshooting, <strong>${brand}</strong> helps property owners throughout <strong>${location}</strong> maintain safe, dependable electrical distribution.</p>
    <p>Modern AFCI and combination dual-function breakers detect subtle parallel and series arc faults that older thermal-magnetic breakers missed. Pinpointing shared neutrals or pinched conductors takes real electrical diagnostic expertise.</p>
    <h3>Long-Term Protection &amp; Surge Defense</h3>
    <p>Beyond repairing tripped or burnt breakers, electricians in our ${location} network install garage and ADU subpanels, dedicated 240V circuits, grounding upgrades, and whole-panel surge protective devices tailored to regional grid conditions.</p>`
  ];
}
