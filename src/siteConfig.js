/** Add real contact details before publishing. No invented identity or destination. */
export const siteConfig = {
  brand: 'BrokerUX',
  // Reserved for a future scheduler; not used by the placeholder implementation.
  bookingUrl: import.meta.env.VITE_BOOKING_URL || '',
  // Fictional review cards appear in development only, never in a production build.
  showDemoTestimonials: !import.meta.env.PROD,
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || '',
  privacyUrl: import.meta.env.VITE_PRIVACY_URL || '',
  linkedInUrl: import.meta.env.VITE_LINKEDIN_URL || '',
};
export function safeUrl(value) {
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
  catch { return ''; }
}
export function safeEmail(value) {
  return /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value) ? value : '';
}

export function safePhone(value) {
  if (!/^[+\d\s().-]+$/.test(value)) return '';
  const compact = value.replace(/[\s().-]/g, '');
  return /^\+?[0-9]{7,15}$/.test(compact) ? compact : '';
}
