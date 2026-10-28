import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  List,
  X,
  MagnifyingGlass,
  Stack,
  MapTrifold,
  EnvelopeSimple,
  Phone,
  ChatCircle,
  ClipboardText,
  User,
} from "@phosphor-icons/react";
import { siteConfig, safeUrl, safeEmail, safePhone } from "./siteConfig";
import s from "./App.module.css";
import { usePageNavigation } from "./usePageNavigation";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
const headerNav = [nav[0], ["Pricing", "/#pricing"], nav[1], nav[2]];
const steps = [
  [
    MagnifyingGlass,
    "We Audit Your Portal",
    "We review up to 10 screens and 3 critical user journeys, identifying usability issues, confusing flows, and why you keep losing deposits.",
  ],
  [
    Stack,
    "We Prioritize Improvements",
    "Every finding is documented and assessed by severity, with recommended fixes and a prioritized backlog for your team.",
  ],
  [
    MapTrifold,
    "We Deliver Your Roadmap",
    "You receive selected screen redesigns in Figma, a competitor benchmark, and a suggested 90-day improvement roadmap.",
  ],
];
const deliverables = [
  [
    "UX Audit Report",
    "Annotated screenshots, usability issues, severity ratings, and recommendations.",
  ],
  [
    "Competitor Benchmark",
    "Comparison against 2–3 accessible competitor experiences.",
  ],
  [
    "Prioritized Backlog",
    "Clear improvement recommendations, suggested effort, and selected acceptance criteria.",
  ],
  [
    "Figma Redesign",
    "Two high-impact screens or one contained workflow redesigned.",
  ],
  [
    "90-Day Roadmap",
    "A suggested implementation plan, plus a final presentation and one feedback round.",
  ],
];
const inclusions = [
  "Audit of up to 10 portal screens",
  "Review of 3 key user journeys",
  "Competitor benchmark (2–3 accessible experiences)",
  "Detailed UX findings and priorities",
  "2 redesigned screens or 1 contained workflow",
  "Suggested 90-day improvement roadmap",
  "Final presentation + 1 feedback round",
];
function Button({
  children = "Book a Discovery Call",
  compact = false,
  className = "",
  onClick,
  href = "/contact",
}) {
  const Icon = compact ? ArrowUpRight : ArrowRight;
  return (
    <a
      className={`${s.button} ${compact ? s.compact : ""} ${className}`}
      href={href}
      onClick={onClick}
    >
      <span>{children}</span>
      <span className={s.buttonIcon}>
        <Icon size={18} aria-hidden="true" />
      </span>
    </a>
  );
}
function Brand() {
  return (
    <a className={s.brand} href="/" aria-label="BrokerUX home">
      Broker<span>UX</span>
      <span className={s.brandDot} aria-hidden="true">
        .
      </span>
    </a>
  );
}
function Header({ path }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className={s.header}>
      <div className={s.navBar}>
        <Brand />
        <nav className={s.desktopNav} aria-label="Main navigation">
          {headerNav.map(([label, id]) => (
            <a
              key={id}
              href={id}
              aria-current={path === id ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <Button compact className={s.navCta}>
          Book a Call
        </Button>
        <button
          className={s.menuToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className={s.mobileNav}
          aria-label="Mobile navigation"
        >
          {headerNav.map(([label, id]) => (
            <a
              key={id}
              href={id}
              aria-current={path === id ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
          <Button compact onClick={() => setOpen(false)}>
            Book a Call
          </Button>
        </nav>
      )}
    </header>
  );
}
function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <p className={s.availabilityTag}>
        <span className={s.availabilityDot} aria-hidden="true" />
        {siteConfig.availabilityMessage}
      </p>
      <div className={s.heroFrame}>
        <p className={s.eyebrow}>UX CONSULTING FOR FOREX &amp; CFD BROKERS</p>
        <h1 id="hero-title">
          Stop Losing Traders Between
          <br />
          <span>Sign-Up and First Deposit</span>
        </h1>
        <p className={s.heroCopy}>
          Identify Why Your Client Portal Keeps Losing Clients
        </p>
      </div>
      <div className={s.heroActions}>
        <Button />
        <a className={s.textLink} href="/#process">
          View Our Process <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
function Process() {
  return (
    <section
      className={`${s.section} ${s.process}`}
      id="process"
      aria-labelledby="process-title"
    >
      <h2 id="process-title">How BrokerUX Works</h2>
      <div className={s.processGrid}>
        {steps.map(([Icon, title, text], i) => (
          <article className={s.glassCard} key={title}>
            <div className={s.cardTop}>
              <span className={s.stepNumber}>0{i + 1}</span>
              <Icon size={25} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className={s.reassurance}>
        Everything is designed to help your existing product, design, and
        development teams move forward — without replacing them.
      </p>
    </section>
  );
}
function Deliverables() {
  return (
    <section
      className={`${s.section} ${s.deliverables}`}
      id="deliverables"
      aria-labelledby="deliverables-title"
    >
      <h2 id="deliverables-title">What You Get</h2>
      <figure className={s.deliverablePreview}>
        <a
          href="/images/dashboard-analysis-mockup.png"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the annotated UX analysis example at full size (opens in a new tab)"
        >
          <img
            src="/images/dashboard-analysis-mockup.png"
            alt="Example portal UX analysis connecting onboarding, account hierarchy, and deposit journey issues to annotated dashboard screenshots."
            width="2321"
            height="1278"
            loading="lazy"
            decoding="async"
          />
        </a>
        <figcaption>
          <strong>See what an audit reveals.</strong>
          <p>
            Illustrative analysis showing where traders encounter friction and
            why it matters.
          </p>
          <a
            href="/images/dashboard-analysis-mockup.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            View full-size example <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </figcaption>
      </figure>
      <ul className={s.deliverableList}>
        {deliverables.map(([title, text]) => (
          <li key={title}>
            <CheckCircle size={23} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
function Pricing() {
  return (
    <section
      className={`${s.section} ${s.pricing}`}
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <h2 id="pricing-title">One Clear Package</h2>
      <article className={s.priceCard}>
        <div className={s.priceSummary}>
          <div className={s.priceTop}>
            <p className={s.eyebrow}>BROKERUX CORE PACKAGE</p>
          </div>
          <h3>Client Portal UX Audit &amp; Improvement Roadmap</h3>
          <p className={s.price}>
            €3,000 <span>/ project</span>
          </p>
          <p className={s.timing}>Delivered in under 2 weeks</p>
          <Button>Discuss Your Portal</Button>
        </div>
        <ul className={s.included}>
          {inclusions.map((item) => (
            <li key={item}>
              <CheckCircle size={19} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className={s.scopeNote}>
          Larger scopes available upon request. Production implementation,
          complete portal rebuilds, regulatory audits, and guaranteed conversion
          improvements are not included.
        </p>
      </article>
    </section>
  );
}
function HomeFinalCTA() {
  return (
    <section
      className={`${s.section} ${s.contact}`}
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">
        Your Client Portal
        <br />
        Can Be Better.
      </h2>
      <p className={s.contactCopy}>
        Let's identify what's holding it back and discuss how BrokerUX can help
        your team improve it.
      </p>
      <Button />
    </section>
  );
}
function Footer() {
  const email = safeEmail(siteConfig.contactEmail);
  const linkedin = safeUrl(siteConfig.linkedInUrl);
  const privacy = safeUrl(siteConfig.privacyUrl);
  return (
    <footer className={s.footer}>
      <Brand />
      <div className={s.footerLinks}>
        {nav.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        {email && <a href={`mailto:${email}`}>{email}</a>}
        {linkedin && <a href={linkedin}>LinkedIn</a>}
        {privacy && <a href={privacy}>Privacy Policy</a>}
      </div>
      <span className={s.copyright}>© {new Date().getFullYear()} BrokerUX</span>
    </footer>
  );
}
function HomePage() {
  return (
    <>
      <Hero />
      <div className={s.container}>
        <Process />
        <Deliverables />
        <Pricing />
        <HomeFinalCTA />
      </div>
    </>
  );
}
const approach = [
  [
    ChatCircle,
    "Discovery",
    "We discuss your portal, its users, and the workflows that need attention.",
  ],
  [
    MagnifyingGlass,
    "Audit & Research",
    "We review selected screens, examine user journeys, and benchmark competitors.",
  ],
  [
    ClipboardText,
    "Recommendations",
    "We document issues, propose redesigns, and prioritize improvements.",
  ],
  [
    MapTrifold,
    "Delivery",
    "You receive the audit findings, Figma designs, and a suggested 90-day roadmap.",
  ],
];
function DemoTestimonials() {
  if (!siteConfig.showDemoTestimonials) return null;
  return (
    <section
      className={`${s.section} ${s.testimonials}`}
      aria-labelledby="testimonials-title"
    >
      <div className={s.centerHeading}>
        <p className={s.eyebrow}>CLIENT FEEDBACK</p>
        <h2 id="testimonials-title">What Clients Say</h2>
      </div>
      <div className={s.testimonialGrid}>
        {[
          [
            "BrokerUX helped us understand where clients were getting stuck after signing up. The changes to onboarding and the deposit flow made the next steps clearer, helping us convert more registrations into clients making their first deposit.",
            "Antreas Kyriakou",
            "Head of Product",
            "/images/testimonial-image1.png",
          ],
          [
            "We had people opening accounts but never funding them. BrokerUX gave our team practical recommendations to simplify the journey from registration to first deposit. After we made those changes, more new clients followed through and funded their accounts.",
            "Dricus Khumalo",
            "COO",
            "/images/testimonial-image2.png",
          ],
        ].map(([quote, name, position, photo]) => (
          <figure
            className={`${s.glassCard} ${s.testimonialCard}`}
            key={name}
          >
            <blockquote>“{quote}”</blockquote>
            <figcaption className={s.callHost}>
              <div className={s.callHostAvatar}>
                <img src={photo} alt="" loading="lazy" />
              </div>
              <div className={s.callHostDetails}>
                <p className={s.callHostName}><strong>{name}</strong></p>
                <p className={s.callHostRole}>{position}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
function AboutPage() {
  return (
    <>
      <section
        className={`${s.hero} ${s.innerHero}`}
        aria-labelledby="about-label"
      >
        <div className={`${s.heroFrame} ${s.aboutHeroLayout}`}>
          <div>
            <h1 id="about-label" className={`${s.eyebrow} ${s.aboutEyebrow}`}>
              ABOUT BROKERUX
            </h1>
            <p className={s.heroCopy}>
              We audit your brokerage’s client portal to find friction in
              sign-up, verification, and deposits. Your team gets prioritized
              fixes, Figma redesigns, and a roadmap to put them into practice.
              The goal is to turn more sign-ups into funded accounts and keep
              clients from dropping off before their first deposit.
            </p>
          </div>
          <img
            className={s.aboutJourneyImage}
            src="/images/broker-client-journey.png"
            alt="Broker client journey: registration, verification, first deposit, trading, and ongoing use. Friction at any step can lead to lost deposits."
            width={1828}
            height={860}
          />
        </div>
      </section>
      <div className={s.container}>
        <section
          className={`${s.section} ${s.approach}`}
          aria-labelledby="approach-title"
        >
          <div className={s.centerHeading}>
            <p className={s.eyebrow}>OUR APPROACH</p>
            <h2 id="approach-title">How We Work</h2>
            <p>A simple, transparent process from start to finish.</p>
          </div>
          <div className={s.approachGrid}>
            {approach.map(([Icon, title, text], i) => (
              <article className={s.glassCard} key={title}>
                <div className={s.cardTop}>
                  <span className={s.stepNumber}>0{i + 1}</span>
                  <Icon size={25} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <DemoTestimonials />
      </div>
    </>
  );
}
function ContactDetails() {
  const email = safeEmail(siteConfig.contactEmail);
  const phone = safePhone(siteConfig.contactPhone);
  return (
    <dl className={s.contactDetails}>
      <div>
        <EnvelopeSimple size={21} aria-hidden="true" />
        <dt>Email</dt>
        <dd>
          {email ? (
            <a href={`mailto:${email}`}>{email}</a>
          ) : (
            <>
              <span>artemii@brokerux.com</span>
            </>
          )}
        </dd>
      </div>
      <div>
        <Phone size={21} aria-hidden="true" />
        <dt>Phone</dt>
        <dd>
          {phone ? (
            <a href={`tel:${phone}`}>{siteConfig.contactPhone}</a>
          ) : (
            <>
              <span>+XXX XX XXX XXX</span>
            </>
          )}
        </dd>
      </div>
    </dl>
  );
}
const calendlyUrl =
  "https://calendly.com/artemii-barashkov-dev/free-30-minute-ux-consultation?hide_event_type_details=1&hide_gdpr_banner=1";

export function BookingCalendar() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const container = widgetRef.current;
    let disposed = false;
    const initialize = () => {
      if (disposed || !window.Calendly) return;
      container.replaceChildren();
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: container,
      });
    };

    const scriptUrl = "https://assets.calendly.com/assets/external/widget.js";
    let script = document.querySelector(`script[src="${scriptUrl}"]`);
    if (window.Calendly) {
      initialize();
    } else {
      const needsScript = !script;
      if (needsScript) {
        script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
      }
      script.addEventListener("load", initialize);
      if (needsScript) document.body.appendChild(script);
    }

    return () => {
      disposed = true;
      script?.removeEventListener("load", initialize);
      container.replaceChildren();
    };
  }, []);

  return (
    <aside
      className={s.bookingCalendar}
      id="booking"
      aria-label="Book a free 30-minute UX consultation"
      tabIndex={-1}
    >
      <div
        ref={widgetRef}
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        data-auto-load="false"
        style={{ minWidth: "320px", height: "600px" }}
      />
    </aside>
  );
}
function ContactPage() {
  const hostPhoto = siteConfig.callHostPhoto.startsWith("/images/")
    ? siteConfig.callHostPhoto
    : safeUrl(siteConfig.callHostPhoto);
  return (
    <div className={`${s.container} ${s.contactLayout}`}>
      <section
        className={s.contactInvitation}
        aria-labelledby="contact-page-title"
      >
        <p className={s.eyebrow}>CONTACT BROKERUX</p>
        <h1 id="contact-page-title">Ready to Convert More Clients?</h1>
        <p className={s.invitationCopy}>
          Find out what could be preventing more of your traders from funding
          their accounts. Start with a conversation, then get a clear plan to
          address the friction in under 2 weeks.
        </p>
        <h2>What we'll discuss:</h2>
        <ul className={s.discussionList}>
          {[
            "Your existing client portal",
            "The workflows that need improvement",
            "Our audit process and deliverables",
            "Scope, timeline, and next steps",
          ].map((item) => (
            <li key={item}>
              <CheckCircle size={20} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className={s.callHost}>
          <div className={s.callHostAvatar}>
            {hostPhoto ? (
              <img src={hostPhoto} alt="" />
            ) : (
              <User size={28} weight="regular" aria-hidden="true" />
            )}
          </div>
          <div className={s.callHostDetails}>
            <p className={s.callHostName}>{siteConfig.callHostName}</p>
            <p className={s.callHostRole}>{siteConfig.callHostRole}</p>
          </div>
        </div>
        <ContactDetails />
      </section>
      <BookingCalendar />
    </div>
  );
}
const pageTitles = {
  "/": "BrokerUX | Audit & Improvement Roadmap",
  "/about": "About Us | BrokerUX",
  "/contact": "Contact | BrokerUX",
};
export default function App({
  path = typeof window === "undefined" ? "/" : window.location.pathname,
}) {
  const { location, navigate } = usePageNavigation(path);
  const route = location.pathname.replace(/\/$/, "") || "/";
  useEffect(() => {
    document.title = pageTitles[route] || pageTitles["/"];
    const frame = requestAnimationFrame(() => {
      let targetId = location.hash.slice(1);
      try {
        targetId = decodeURIComponent(targetId);
      } catch {
        /* Keep malformed hashes inert. */
      }
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        target.scrollIntoView();
        if (target.hasAttribute("tabindex"))
          target.focus({ preventScroll: true });
      } else if (location.revision > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [route, location.hash, location.revision]);
  return (
    <div className={s.page} id="top" onClick={navigate}>
      <a className={s.skipLink} href="#main">
        Skip to content
      </a>
      <Header key={route} path={route} />
      <main id="main" tabIndex={-1}>
        {route === "/about" ? (
          <AboutPage />
        ) : route === "/contact" ? (
          <ContactPage />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
    </div>
  );
}
