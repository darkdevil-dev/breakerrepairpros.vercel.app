export function getTestimonialsPool(city, state, brand) {
  const location = city ? city.name : state.name;

  return [
    {
      text: `Our furnace broke down during a freezing 15-degree night in ${location}. We called ${brand} at 2 AM, and an emergency technician arrived in 40 minutes. He replaced a broken hot surface igniter and had our home warm again by 3:30 AM. Absolute lifesavers!`,
      author: `Sarah M.`
    },
    {
      text: `We hired ${brand} to replace our noisy 20-year-old gas furnace with a new high-efficiency two-stage unit. The crew was on time, super respectful of our ${location} home, and the new heating system runs whisper quiet. Our gas bill dropped by nearly 30%!`,
      author: `David P.`
    },
    {
      text: `Our furnace started making a terrible screeching noise and then completely shut off. The technician identified a seized blower motor, had the replacement part right on his service truck, and fixed it the same afternoon. Honest pricing with zero hidden fees.`,
      author: `Jennifer L.`
    },
    {
      text: `I woke up to our carbon monoxide detector beeping. We called the fire department and then ${brand}. Their technician located a hairline crack in our furnace's heat exchanger that another contractor missed. They saved our family from serious danger.`,
      author: `Michael T.`
    },
    {
      text: `Upfront pricing and prompt service. The technician came out for a winter heating tune-up in ${location}, thoroughly cleaned the flame sensor, and dialed in the gas pressure. Outstanding professionalism and customer service.`,
      author: `Robert K.`
    },
    {
      text: `Our heat pump stopped heating and was blowing lukewarm air during a cold snap in ${location}. ${brand} diagnosed a stuck reversing valve and low refrigerant, repaired the leak, and got the system back to blowing toasty warm air.`,
      author: `Amanda B.`
    },
    {
      text: `Fast, clean, and reasonably priced. They installed a multi-zone ductless mini-split system in our new home addition in ${location}. The heating performance in winter has been flawless. Best HVAC contractor in the area!`,
      author: `Thomas W.`
    },
    {
      text: `I manage a commercial restaurant in ${location} and our rooftop heating unit shut down on a busy winter weekend. Their commercial HVAC emergency team arrived fast, diagnosed a blown control board, and had it running before dinner rush. Incredible reliability.`,
      author: `Jessica R.`
    },
    {
      text: `We called for a second opinion after another company claimed we needed a $9,000 new furnace. The technician from ${brand} inspected it and found it was simply a faulty flame sensor and dirty filter. Replaced for under $200! Incredible honesty and integrity.`,
      author: `Daniel C.`
    },
    {
      text: `I tried installing a smart thermostat myself and blew the low-voltage fuse on my furnace control board. The tech from ${brand} was so patient and understanding, replaced the fuse, wired the thermostat correctly with a C-wire, and tested the heat. Highly recommended!`,
      author: `Emily S.`
    },
    {
      text: `Our hydronic boiler started leaking water and losing pressure in the dead of winter. ${brand} dispatched a master heating technician to our ${location} home who replaced the failed expansion tank and air relief valve. Fantastic workmanship.`,
      author: `Christopher H.`
    },
    {
      text: `Installed a whole-home bypass humidifier and MERV-13 air cleaner on our existing furnace ductwork in ${location}. Our indoor winter air feels so much more comfortable, no more dry throats or static electricity.`,
      author: `Melissa G.`
    },
    {
      text: `When severe winter storms rolled through ${location}, our furnace wouldn't ignite due to frozen exterior vent pipes. Their on-call technician arrived swiftly, cleared the ice buildup, and installed protective pipe hoods to prevent future freezing.`,
      author: `Richard V.`
    },
    {
      text: `We bought a fixer-upper in ${location} with an ancient heating system. ${brand} came in, performed a full heating load calculation, and installed a modern high-efficiency furnace with new duct transitions. Complete peace of mind.`,
      author: `Laura N.`
    }
  ];
}
