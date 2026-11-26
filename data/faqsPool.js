export function getFaqsPool(city, state, brand, phone) {
  const cityName = city ? city.name : state.name;
  const stateName = state.name;
  const location = city ? `${city.name}, ${state.abbr}` : state.name;

  return [
    {
      q: `How quickly can a licensed electrician arrive for circuit breaker repair in ${cityName}?`,
      a: `Response times vary by availability and local traffic, but urgent electrical calls in ${location} are prioritized for same-day or emergency dispatch—often within 60 to 90 minutes for metro areas. Call ${phone} to check immediate technician availability.`,
    },
    {
      q: `Why does my circuit breaker keep tripping in ${location}?`,
      a: `Frequent breaker trips usually stem from four causes: an overloaded circuit drawing more amperage than rated, a direct short circuit in branch wiring or an appliance, a ground fault, or a worn internal breaker trip mechanism. An electrician can isolate the exact cause safely.`,
    },
    {
      q: `Is a warm, buzzing, or burning-smelling breaker an electrical emergency?`,
      a: `Yes. Heat, buzzing, crackling, or a burnt plastic odor at the panel indicates loose wire terminals, arcing contacts, or an oxidized bus bar. If safe to do so, shut off the affected breaker, stay clear of sparking panels, call 911 if fire is visible, and contact ${brand} at ${phone}.`,
    },
    {
      q: `Are electricians dispatched in ${stateName} licensed and insured?`,
      a: `${brand} connects callers with independent local electrical contractors who carry applicable ${stateName} licensing, liability insurance, and training on the National Electrical Code (NEC). Customers should always confirm contractor license details prior to authorizing work.`,
    },
    {
      q: `How much does circuit breaker repair or replacement cost in ${cityName}?`,
      a: `Pricing depends on breaker amperage and type (standard single-pole vs. dual-function AFCI/GFCI vs. 100A–200A main disconnect), panel brand availability, and whether branch wiring or bus bar repair is needed. Participating pros provide an upfront written estimate before starting work in ${location}.`,
    },
    {
      q: `Can a failing main breaker be replaced without changing the entire panel?`,
      a: `Often yes—provided the main bus bars show no arcing or heat pitting and a UL-listed replacement main breaker is still manufactured for your load center. A licensed electrician inspects the main lugs and enclosure in ${location} first to verify safe repairability.`,
    },
    {
      q: `What if a circuit breaker feels loose or snaps right back off when reset?`,
      a: `A breaker that trips instantaneously with all appliances unplugged usually indicates either a hard short circuit on the branch wiring or a failed internal spring latch. Do not repeatedly force the handle; have the circuit resistance tested.`,
    },
    {
      q: `Do contractors replace recalled Federal Pacific (FPE) and Zinsco panels in ${cityName}?`,
      a: `Yes. Federal Pacific Stab-Lok and Zinsco panels have documented breaker trip-failure risks and are commonly flagged by insurers. Participating ${location} electricians handle permits and full code-compliant panel replacements.`,
    },
    {
      q: `When is a 100-amp to 200-amp electrical panel upgrade recommended?`,
      a: `A 200A panel upgrade is recommended in ${location} if your panel is out of slots, has double-tapped breakers, experiences frequent overloads when running AC and major appliances, or if you plan to add an EV charger, heat pump, or detached workshop subpanel.`,
    },
    {
      q: `Why do AFCI and GFCI breakers nuisance-trip more often than older breakers?`,
      a: `AFCI and GFCI breakers monitor micro-level arc signatures and current leakage down to milliamps. Shared neutral wires between circuits, damp exterior boxes, damaged Romex staples, or aging motor appliances can trigger protective trips.`,
    },
    {
      q: `What is a double-tapped breaker and how is it corrected?`,
      a: `A double tap occurs when two hot conductors are landed under one breaker terminal screw designed for a single wire, creating loose connections and heat risk. Electricians resolve this using UL-listed tandem breakers, rated wire pigtails, or a subpanel.`,
    },
    {
      q: `Can you add a dedicated 240V breaker for an AC condenser, dryer, or EV charger in ${cityName}?`,
      a: `Yes. High-draw 240V equipment requires a dedicated double-pole breaker, properly sized copper/aluminum conductors, and an NEC load calculation confirming adequate panel capacity in ${location}.`,
    },
    {
      q: `Do local electricians install garage, basement, or ADU subpanels in ${location}?`,
      a: `Yes. When a main panel lacks breaker slots or a detached structure needs a local disconnect, pros install 60A–125A subpanels with properly isolated neutral and equipment ground bars per NEC rules.`,
    },
    {
      q: `Which breaker panel brands are commonly stocked on service vans?`,
      a: `Most service vans carry UL-listed breakers for Square D (QO and Homeline), Eaton (BR and CH), Siemens, Murray, GE, and Leviton load centers so standard replacements can be completed promptly.`,
    },
    {
      q: `Do you handle commercial 3-phase breaker panels and disconnects in ${cityName}?`,
      a: `Yes, commercial electricians in the network troubleshoot 3-phase panels, heavy bolt-on breakers, rooftop unit disconnects, and phase imbalances for businesses across ${location}.`,
    },
    {
      q: `How does thermal imaging help during a breaker panel inspection?`,
      a: `Infrared thermal imaging identifies abnormal heat spots on breaker stabs, main lugs, and neutral bars under load—catching loose connections and resistance buildup long before visible charring occurs.`,
    }
  ];
}
