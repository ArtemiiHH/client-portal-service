import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, CheckCircle, List, X, MagnifyingGlass, Stack, MapTrifold } from '@phosphor-icons/react';
import { siteConfig, safeUrl, safeEmail } from './siteConfig';
import s from './App.module.css';

const nav = [['How It Works', 'process'], ['Pricing', 'pricing'], ['Contact', 'contact']];
const steps = [
  [MagnifyingGlass, 'We Audit Your Portal', 'We review up to 10 screens and 3 critical user journeys, identifying usability issues, confusing flows, and friction points.'],
  [Stack, 'We Prioritize Improvements', 'Every finding is documented and assessed by severity, with recommended fixes and a prioritized backlog for your team.'],
  [MapTrifold, 'We Deliver Your Roadmap', 'You receive selected screen redesigns in Figma, a competitor benchmark, and a suggested 90-day improvement roadmap.'],
];
const deliverables = [
  ['UX Audit Report', 'Annotated screenshots, usability issues, severity ratings, and recommendations.'],
  ['Competitor Benchmark', 'Comparison against 2–3 accessible competitor experiences.'],
  ['Prioritized Backlog', 'Clear improvement recommendations, suggested effort, and selected acceptance criteria.'],
  ['Figma Redesign', 'Two high-impact screens or one contained workflow redesigned.'],
  ['90-Day Roadmap', 'A suggested implementation plan, plus a final presentation and one feedback round.'],
];
const inclusions = ['Audit of up to 10 portal screens', 'Review of 3 key user journeys', 'Competitor benchmark (2–3 accessible experiences)', 'Detailed UX findings and priorities', '2 redesigned screens or 1 contained workflow', 'Suggested 90-day improvement roadmap', 'Final presentation + 1 feedback round'];
const bookingUrl = safeUrl(siteConfig.bookingUrl);
function Button({ children = 'Book a Discovery Call', compact = false, className = '', onClick }) {
  const Icon = compact ? ArrowUpRight : ArrowRight;
  return <a className={`${s.button} ${compact ? s.compact : ''} ${className}`} href={bookingUrl || '#booking-placeholder'} onClick={onClick}><span>{children}</span><span className={s.buttonIcon}><Icon size={18} aria-hidden="true" /></span></a>;
}
function Brand() { return <a className={s.brand} href="#top" aria-label="BrokerUX home">Broker<span>UX</span><span className={s.brandDot} aria-hidden="true">.</span></a>; }
function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = e => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  return <header className={s.header}><div className={s.navBar}><Brand /><nav className={s.desktopNav} aria-label="Main navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><Button compact className={s.navCta}>Book a Call</Button><button className={s.menuToggle} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <List size={24} />}</button></div>{open && <nav id="mobile-menu" className={s.mobileNav} aria-label="Mobile navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}<Button compact onClick={() => setOpen(false)}>Book a Call</Button></nav>}</header>;
}
function Hero() {
  return <section className={s.hero} aria-labelledby="hero-title"><div className={s.heroFrame}><p className={s.eyebrow}>UX CONSULTING FOR FOREX &amp; CFD BROKERS</p><h1 id="hero-title">Better Client Portals<br />for <span>Forex Brokers.</span></h1><p className={s.heroCopy}>We audit your client portal, identify usability issues, and deliver a prioritized improvement plan your product and development teams can execute.</p></div><div className={s.heroActions}><Button /><a className={s.textLink} href="#process">View Our Process <ArrowDown size={16} aria-hidden="true" /></a></div><ul className={s.trustRow}><li>Fixed project pricing</li><li>2–3 week delivery</li><li>Built for brokers</li></ul></section>;
}
function Process() {
  return <section className={`${s.section} ${s.process}`} id="process" aria-labelledby="process-title"><h2 id="process-title">How BrokerUX Works</h2><div className={s.processGrid}>{steps.map(([Icon, title, text], i) => <article className={s.glassCard} key={title}><div className={s.cardTop}><span className={s.stepNumber}>0{i + 1}</span><Icon size={25} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div><p className={s.reassurance}>Everything is designed to help your existing product, design, and development teams move forward — without replacing them.</p></section>;
}
function Deliverables() {
  return <section className={`${s.section} ${s.deliverables}`} id="deliverables" aria-labelledby="deliverables-title"><h2 id="deliverables-title">What You Get</h2><ul className={s.deliverableList}>{deliverables.map(([title, text]) => <li key={title}><CheckCircle size={23} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></li>)}</ul></section>;
}
function Pricing() {
  return <section className={`${s.section} ${s.pricing}`} id="pricing" aria-labelledby="pricing-title"><h2 id="pricing-title">One Clear Package</h2><article className={s.priceCard}><div className={s.priceSummary}><div className={s.priceTop}><p className={s.eyebrow}>BROKERUX CORE PACKAGE</p><span className={s.badge}>Fixed Scope</span></div><h3>Client Portal UX Audit &amp; Improvement Roadmap</h3><p className={s.price}>€2,500 <span>/ project</span></p><p className={s.timing}>Delivered in approximately 2–3 weeks.</p><Button>Discuss Your Portal</Button></div><ul className={s.included}>{inclusions.map(item => <li key={item}><CheckCircle size={19} aria-hidden="true" /><span>{item}</span></li>)}</ul><p className={s.scopeNote}>Larger scopes available upon request. Production implementation, complete portal rebuilds, regulatory audits, and guaranteed conversion improvements are not included.</p></article></section>;
}
function Contact() {
  return <section className={`${s.section} ${s.contact}`} id="contact" aria-labelledby="contact-title"><h2 id="contact-title">Your Client Portal<br />Can Be Better.</h2><p className={s.contactCopy}>Let's identify what's holding it back and discuss how BrokerUX can help your team improve it.</p><Button /><p className={s.contactReassurance}>No commitment. Just a conversation about your portal.</p>{!bookingUrl && <p className={s.bookingPlaceholder} id="booking-placeholder" tabIndex={-1}>Booking link coming soon — discovery-call destination not yet configured.</p>}</section>;
}
function Footer() {
  const email = safeEmail(siteConfig.contactEmail);
  const linkedin = safeUrl(siteConfig.linkedInUrl);
  const privacy = safeUrl(siteConfig.privacyUrl);
  return <footer className={s.footer}><Brand /><div className={s.footerLinks}>{email && <a href={`mailto:${email}`}>{email}</a>}{linkedin && <a href={linkedin}>LinkedIn</a>}{privacy ? <a href={privacy}>Privacy Policy</a> : <span title="Privacy policy URL not yet configured">Privacy Policy — coming soon</span>}</div><span className={s.copyright}>© {new Date().getFullYear()} BrokerUX</span></footer>;
}
export default function App() { return <div className={s.page} id="top"><a className={s.skipLink} href="#main">Skip to content</a><Header /><main id="main"><Hero /><div className={s.container}><Process /><Deliverables /><Pricing /><Contact /></div></main><Footer /></div>; }
