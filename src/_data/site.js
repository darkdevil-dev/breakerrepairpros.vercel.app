// Global site constants — available as {{ site.PHONE }}, {{ site.BRAND }}, etc. in all templates
export default {
  PHONE: '(866) 945-9177',
  PHONE_HREF: 'tel:+18669459177',
  BRAND: 'Breaker Repair Pros',
  EMAIL: 'support@breakerrepairpros.com',
  DOMAIN: 'https://breakerrepairpros.vercel.app',
  YEAR: new Date().getFullYear(),
  BUILD_DATE: new Date().toISOString().split('T')[0],
};
