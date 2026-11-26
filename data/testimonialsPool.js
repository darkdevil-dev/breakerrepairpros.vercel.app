export function getTestimonialsPool(city, state, brand) {
  const location = city ? city.name : state.name;

  return [
    {
      text: `Our 200-amp main breaker started buzzing and half the house lost power in ${location}. Calling ${brand} got a licensed electrician out the same evening to replace the failing main breaker and torque every lug cleanly.`,
      author: `S. Miller · Homeowner`
    },
    {
      text: `Our AC breaker kept tripping every hot afternoon in ${location}. The dispatched tech found a pitted bus stab and weak 40-amp double-pole breaker, swapped in an OEM unit, and verified the amp draw.`,
      author: `D. Patel · Residential Client`
    },
    {
      text: `We noticed a burnt smell near our utility closet and a warm 20-amp breaker. An emergency electrician traced a loose terminal wire, replaced the damaged breaker, and ran a thermal check with upfront pricing.`,
      author: `J. Lopez · Homeowner`
    },
    {
      text: `A pre-closing inspection flagged double-tapped breakers and an old Federal Pacific panel in ${location}. ${brand} connected us with a contractor who completed a clean 200-amp upgrade with surge protection.`,
      author: `M. Thompson · Property Buyer`
    },
    {
      text: `Our bedroom AFCI breaker kept tripping unpredictably. Instead of guessing, the electrician traced a pinched wire inside a wall outlet box in ${location} and resolved the arc fault permanently.`,
      author: `R. Kim · Homeowner`
    },
    {
      text: `After heavy rain, our kitchen GFCI breaker wouldn't reset in ${location}. The pro found moisture inside an exterior receptacle tied to that circuit and replaced the faulty GFCI breaker on the spot.`,
      author: `A. Brooks · Homeowner`
    },
    {
      text: `Had a dedicated 50-amp breaker and Level 2 EV circuit added to our garage panel in ${location}. Neat conduit work, proper load check, and clear circuit directory labeling.`,
      author: `T. Wright · EV Owner`
    },
    {
      text: `Our commercial walk-in cooler breaker tripped repeatedly during a busy Friday service in ${location}. A commercial electrician arrived quickly, replaced the failing bolt-on breaker, and checked phase balance.`,
      author: `J. Rivera · Restaurant Manager`
    },
    {
      text: `Another quote suggested full rewiring for a tripping living room breaker. The electrician dispatched through ${brand} found a shorted dimmer switch and weak 15A breaker and fixed it the same day.`,
      author: `D. Carter · Homeowner`
    },
    {
      text: `Our 1960s house in ${location} still had screw-in fuses blowing whenever kitchen appliances ran together. Upgrading to a modern 200-amp breaker box with proper grounding solved it completely.`,
      author: `E. Sanders · Homeowner`
    },
    {
      text: `Needed a 100-amp subpanel installed in our detached workshop in ${location} because our main breaker panel was out of space. Clean wiring, isolated ground/neutral bars, and passed inspection.`,
      author: `C. Hayes · Workshop Owner`
    },
    {
      text: `Storm surges took out two branch breakers in ${location}. The electrician replaced the damaged breakers and added a Type 2 panel-mounted surge protector right inside the load center.`,
      author: `M. Grant · Homeowner`
    }
  ];
}
