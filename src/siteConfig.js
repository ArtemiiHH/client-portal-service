/** Add real contact details before publishing. No invented identity or destination. */
export const siteConfig = {
  brand: 'BrokerUX',
  bookingUrl: import.meta.env.VITE_BOOKING_URL || '',
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
