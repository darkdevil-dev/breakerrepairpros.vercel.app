// Global site constants — available as {{ site.PHONE }}, {{ site.BRAND }}, etc. in all templates
export default {
  PHONE: '+1',
  PHONE_HREF: 'tel:+1',
  BRAND: 'Breaker Repair Pros',
  EMAIL: 'support@breakerrepairpros.com',
  DOMAIN: 'https://breakerrepairpros.vercel.app',
  YEAR: new Date().getFullYear(),
  BUILD_DATE: new Date().toISOString().split('T')[0],
};
