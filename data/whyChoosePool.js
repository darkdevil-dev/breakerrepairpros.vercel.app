export function getWhyChoosePool(city, state, brand) {
  const location = city ? `${city.name}, ${state.abbr}` : state.name;
  const countyNote = city && city.county ? ` in ${city.county} County` : '';

  return [
    `<p>When a circuit breaker keeps tripping, hums loudly, or feels hot in <strong>${location}</strong>, the repair demands a licensed electrician—not trial-and-error guesswork. <strong>${brand}</strong> connects you with vetted electrical pros${countyNote} who focus on root-cause diagnostics, NEC safety compliance, and upfront flat-rate pricing.</p>
    <p>Participating service trucks stock common UL-listed OEM breakers from Square D, Eaton, Siemens, Murray, and GE alongside thermal imaging cameras and digital clamp meters, allowing most standard and AFCI/GFCI breaker replacements to be finished on the first visit.</p>`,

    `<p>Using a mismatched breaker brand or cramming two conductors under one terminal lug creates arc hazards and can void property insurance in <strong>${location}</strong>. Electricians reached through <strong>${brand}</strong> strictly match UL panel listings, torque terminals to specification, and verify wire gauge before restoring power.</p>
    <p>Whether you need a single worn 20A breaker replaced, a double-tapped breaker corrected for a home sale, or a complete 200A panel upgrade${countyNote}, you receive a clear written estimate prior to work starting.</p>`,

    `<p>Intermittent breaker trips often stem from loose neutral bars, oxidized bus stabs, or failing appliance motors rather than the breaker handle itself. Specialists in the <strong>${brand}</strong> network serving <strong>${location}</strong> test circuit amp draw and inspect panel interiors thermally to catch hidden heat damage before insulation melts.</p>
    <p>If a targeted repair solves the problem safely, you will never be pressured into an unnecessary full-panel replacement.</p>`,

    `<p>Burning electrical odors, flickering lights when large appliances start, or sudden partial-house power loss in <strong>${location}</strong> can signal a failing main breaker or compromised service lug. <strong>${brand}</strong> maintains 24/7 dispatch availability across ${state.name} so urgent electrical hazards are addressed promptly—evenings, weekends, and holidays included.</p>
    <p>All work is carried out by independent licensed contractors following local municipal inspection and permitting rules.</p>`,

    `<p>Homes across <strong>${location}</strong> increasingly run high-draw equipment like heat pumps, EV chargers, tankless water heaters, and home workshops. Electricians connected via <strong>${brand}</strong> perform proper NEC load calculations before adding dedicated 240V breakers or subpanels so your main service never runs overloaded.</p>
    <p>Every repaired circuit is labeled cleanly on your panel directory and verified for safe voltage stability.</p>`,

    `<p>Obsolete Federal Pacific (FPE) Stab-Lok, Zinsco, and fuse-box panels create well-documented fire risks and insurance headaches in <strong>${location}</strong>. Through <strong>${brand}</strong>, homeowners${countyNote} gain fast access to electrical contractors experienced in code-compliant load center conversions, grounding rod upgrades, and utility coordination.</p>
    <p>Clean drop cloths, organized wiring, and full post-repair safety testing come standard on every call.</p>`,

    `<p>Commercial kitchens, retail suites, and offices in <strong>${location}</strong> lose revenue every minute refrigeration or HVAC equipment stays offline. <strong>${brand}</strong> also connects business owners with commercial electricians equipped for 3-phase bolt-on breaker swaps, main disconnect repairs, and phase load balancing.</p>
    <p>Clear communication and rapid dispatch minimize operational downtime without compromising workplace electrical safety.</p>`,

    `<p>From simple tripping bedroom AFCI breakers to scorched copper bus bars in <strong>${location}</strong>, <strong>${brand}</strong> makes reaching a qualified local electrician straightforward. You get fast callback coordination, licensed and insured contractor matching${countyNote}, and transparent repair options with zero obligation.</p>
    <p>Protect your property's wiring with precision diagnostics done right the first time.</p>`
  ];
}
