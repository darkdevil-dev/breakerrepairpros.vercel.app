// Global site constants — available as {{ site.PHONE }}, {{ site.BRAND }}, etc. in all templates
export default {
  PHONE: '(877) 739-2492',
  PHONE_HREF: 'tel:+18777392492',
  BRAND: 'Breaker Repair Pros',
  EMAIL: 'support@breakerrepairpros.com',
  DOMAIN: 'https://breakerrepairpros.com',
  YEAR: new Date().getFullYear(),
  BUILD_DATE: new Date().toISOString().split('T')[0],
};
