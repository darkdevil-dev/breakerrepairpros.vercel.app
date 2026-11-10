export function getFaqsPool(city, state, brand, phone) {
  const cityName = city ? city.name : state.name;
  const stateName = state.name;
  const location = city ? `${city.name}, ${state.abbr}` : state.name;

  return [
    {
      q: `How quickly can an HVAC technician arrive for furnace repair in ${cityName}?`,
      a: `${brand} provides rapid same-day and 24/7 emergency furnace repair throughout ${location}. During freezing winter temperatures, our on-call technicians can typically reach your home within 60 to 90 minutes. Call ${phone} for immediate emergency dispatch.`,
    },
    {
      q: `What are the most common signs my furnace needs emergency repair in ${location}?`,
      a: `Key warning signs include blowing cold air instead of warm air, persistent clicking or banging noises, a yellow burner flame (instead of crisp blue), frequent short-cycling, high gas or electric bills, and any smell of gas or burning plastic. If you notice any of these, call ${phone} right away.`,
    },
    {
      q: `Do you provide 24/7 emergency heating services in ${cityName}?`,
      a: `Yes! ${brand} operates 24 hours a day, 7 days a week, 365 days a year for emergency heating restoration across ${location}. We know that losing heat in winter is a safety risk for families and pipes, so we never leave you out in the cold.`,
    },
    {
      q: `Are your HVAC heating technicians licensed and certified in ${stateName}?`,
      a: `Every technician dispatched by ${brand} is fully licensed, EPA-certified, background-checked, and extensively trained on modern gas, electric, and heat pump heating systems across ${stateName}. We carry comprehensive liability insurance and adhere strictly to local building codes.`,
    },
    {
      q: `How much does furnace repair typically cost in ${cityName}?`,
      a: `Furnace repair costs depend on the diagnosis (e.g., flame sensor cleaning, igniter replacement, blower motor, or control board). ${brand} utilizes transparent, upfront flat-rate pricing. We perform a thorough diagnostic inspection and provide a firm written estimate before any work begins in ${location}.`,
    },
    {
      q: `What should I do if my furnace is blowing cold air?`,
      a: `First, verify that your thermostat is set to 'HEAT' and the fan is on 'AUTO' (not 'ON'). Check that your air filter isn't clogged and that your circuit breaker hasn't tripped. If the furnace still blows cold, the flame sensor, thermocouple, or electronic igniter may have failed. Call ${phone} for fast service in ${location}.`,
    },
    {
      q: `How often should I have my heating system serviced in ${location}?`,
      a: `We strongly recommend an annual heating tune-up and safety inspection every autumn before cold weather arrives. Regular maintenance cleans critical sensors, lubricates motors, checks heat exchangers for dangerous cracks, and saves up to 20% on monthly heating bills.`,
    },
    {
      q: `Do you repair and install heat pumps in ${cityName}?`,
      a: `Yes. We provide complete heat pump services throughout ${location}, including troubleshooting reversing valves, repairing defrost boards, recharging refrigerant, and installing high-efficiency cold-climate heat pump systems.`,
    },
    {
      q: `How do I know whether to repair or replace my furnace in ${location}?`,
      a: `If your furnace is over 15 to 20 years old, requires frequent costly repairs, or has a cracked heat exchanger, replacement is usually the safest and most economical choice. Newer 96%+ AFUE furnaces dramatically reduce heating costs and eliminate safety concerns.`,
    },
    {
      q: `What is a cracked heat exchanger and why is it dangerous?`,
      a: `A heat exchanger separates toxic combustion exhaust gases from the breathable indoor air inside your home. If it cracks, lethal, odorless carbon monoxide (CO) gas can leak into your living spaces. Our technicians use sensitive digital CO analyzers and inspection cameras to verify heat exchanger safety in ${location}.`,
    },
    {
      q: `Do you service boilers and radiant floor heating in ${cityName}?`,
      a: `Yes. ${brand} has boiler specialists experienced with both steam and hot water hydronic boiler systems in ${location}. We service circulator pumps, expansion tanks, air vents, radiator valves, and radiant heating manifolds.`,
    },
    {
      q: `Can you install smart thermostats like Nest or Ecobee with my furnace?`,
      a: `Absolutely. We install, wire, and configure all major smart thermostat models in ${location}. We ensure proper C-wire (common wire) power delivery so your heating system operates seamlessly with remote smartphone controls.`,
    },
    {
      q: `Why does my furnace turn on and off rapidly (short-cycling)?`,
      a: `Short-cycling is frequently caused by a severely restricted air filter, an oversized furnace, a faulty high-limit safety switch, or a malfunctioning thermostat. Our technicians in ${location} can quickly pinpoint the cause to prevent premature equipment breakdown.`,
    },
    {
      q: `Do you offer commercial HVAC and heating repairs in ${cityName}?`,
      a: `Yes, ${brand} provides commercial rooftop heating unit (RTU) maintenance, commercial boiler repair, and heating system replacement for businesses, offices, and retail spaces in ${location}. We understand downtime hurts business and offer priority emergency dispatch.`,
    },
    {
      q: `What brand furnaces do you repair and install?`,
      a: `We service and repair all major furnace and heating manufacturers, including Carrier, Trane, Lennox, Goodman, Rheem, York, Bryant, Amana, American Standard, Heil, and more. Our trucks carry common universal replacement parts for same-day repairs.`,
    },
    {
      q: `Why does my furnace smell like it is burning when I turn it on?`,
      a: `If it is the very first time turning on your heating for the season, a brief burning dust odor is normal. However, if you smell rotten eggs (natural gas), electrical burning, or smoke, immediately evacuate your home, call your gas company, and call ${brand} at ${phone} for emergency inspection in ${location}.`,
    }
  ];
}
