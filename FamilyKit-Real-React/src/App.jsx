import React, { useState } from "react";

import {
  House,
  Menu,
  X,
  ShieldCheck,
  UsersRound,
  Sparkles,
  FileText,
  Coins,
  Bell,
  Folder,
  CalendarDays,
  HeartPulse,
  ShoppingBasket,
  GraduationCap,
  LockKeyhole,
  MapPin,
  Cpu,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  ChevronDown,
  ClipboardCheck,
  Calculator,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

import family from "./assets/family.png";
import problem from "./assets/problem.png";
import dashboard from "./assets/dashboard.png";
import reminder from "./assets/reminder.png";
import utilities from "./assets/utilities.png";
import documentsImage from "./assets/Documents.jpeg";


/* =========================================================
   FEATURE DATA
   Used for the new circular family feature section
========================================================= */

const features = [
  {
    name: "Documents",
    desc: "IDs, certificates and records",
    Icon: FileText,
    color: "#3498c8",
    rgb: "52, 152, 200"
  },
  {
    name: "Insurance",
    desc: "Policies, renewals and claims",
    Icon: ShieldCheck,
    color: "#22a89b",
    rgb: "34, 168, 155"
  },
  {
    name: "Finance",
    desc: "Loans, EMIs & Investments",
    Icon: Coins,
    color: "#3857c8",
    rgb: "56, 87, 200"
  },
  {
    name: "Property",
    desc: "Home, Vehicles & Valuables",
    Icon: House,
    color: "#a52bc3",
    rgb: "165, 43, 195"
  },
  {
    name: "Health",
    desc: "Records & Prescriptions",
    Icon: HeartPulse,
    color: "#d52e86",
    rgb: "213, 46, 134"
  },
  {
    name: "Household",
    desc: "Bills & Service Contracts",
    Icon: ShoppingBasket,
    color: "#b99725",
    rgb: "185, 151, 37"
  },
  {
    name: "Education",
    desc: "School & Learning records",
    Icon: GraduationCap,
    color: "#43bc39",
    rgb: "67, 188, 57"
  },
  {
    name: "To do Lists",
    desc: "Shared to-do's and responsibilities",
    Icon: ClipboardCheck,
    color: "#7634bd",
    rgb: "118, 52, 189"
  }
];


/* =========================================================
   SOLUTION CARD DATA
========================================================= */

const benefits = [
  {
    title: "Organize",
    desc: "Keep all family information in one place.",
    Icon: Folder,
    cls: "lavender"
  },
  {
    title: "Get Insights",
    desc: "Let AI read, understand and summarize your documents.",
    Icon: Sparkles,
    cls: "lime"
  },
  {
    title: "Stay on Track",
    desc: "Never miss renewals, payments or important dates.",
    Icon: CalendarDays,
    cls: "blue"
  },
  {
    title: "Be Prepared",
    desc: "Access what you need, when your family needs it most.",
    Icon: ShieldCheck,
    cls: "yellow"
  }
];


/* =========================================================
   HOW IT WORKS DATA
========================================================= */

const steps = [
  {
    title: "Create Your Family Account",
    desc: "Set up your family space securely.",
    Icon: UsersRound
  },
  {
    title: "Add Your Documents",
    desc: "Upload or capture documents easily.",
    Icon: FileText
  },
  {
    title: "AI Organizes & Understands",
    desc: "We read, extract and organize key details.",
    Icon: Sparkles
  },
  {
    title: "Stay Notified & In Control",
    desc: "Get reminders, insights and quick actions.",
    Icon: Bell
  }
];


/* =========================================================
   FAQ DATA
========================================================= */

const questions = [
  [
    "What is FamilyKit?",
    "FamilyKit helps families organize important documents, reminders, assets and everyday information in one place."
  ],
  [
    "Is my data safe and private?",
    "FamilyKit is designed with privacy and security in mind."
  ],
  [
    "Where is my data stored?",
    "FamilyKit can use secure cloud infrastructure to store your information."
  ],
  [
    "Do you use my data to train AI models?",
    "Your private family information should remain under your control."
  ]
];


/* =========================================================
   BRAND
========================================================= */

function Brand() {
  return (
    <a href="#home" className="brand">

      <span className="brand-icon">

        <House
          size={23}
          strokeWidth={3}
        />

        <UsersRound
          size={12}
          className="brand-people"
        />

      </span>

      <span>
        FamilyKit
      </span>

    </a>
  );
}


/* =========================================================
   HEADER
========================================================= */

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Features", "#features"],
    ["How it Works", "#how"],
    ["Security", "#security"],
    ["FAQs", "#faqs"]
  ];

  return (
    <header className="header">

      <div className="container nav">

        <Brand />


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className={
            open
              ? "navlinks open"
              : "navlinks"
          }
        >

          {links.map(([name, href]) => (

            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>

          ))}

        </nav>


        {/* =================================================
            DESKTOP LOGIN / EARLY ACCESS
        ================================================= */}

        <div className="nav-actions">

          <a
            className="outline-btn"
            href="#login"
          >
            Log In
          </a>

          <a
            className="primary-btn small"
            href="#cta"
          >
            Get Early Access
          </a>

        </div>


        {/* =================================================
            MOBILE LOGIN + MENU
        ================================================= */}

        <div className="mobile-header-actions">

          <a
            className="mobile-header-login"
            href="#login"
          >
            Log In
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >

            {open ? <X /> : <Menu />}

          </button>

        </div>

      </div>

    </header>
  );
}


/* =========================================================
   HERO
========================================================= */

function Hero() {

  const floatingItems = [
    [FileText, "Documents"],
    [ShieldCheck, "Insurance"],
    [Coins, "Finances"],
    [House, "Assets"],
    [Bell, "Reminders"]
  ];

  return (
    <section
      className="hero"
      id="home"
    >

      <div className="container hero-grid">


        {/* =================================================
            HERO LEFT SIDE
        ================================================= */}

        <div className="hero-copy">

          <span className="eyebrow">
            Your Family, Well Organized
          </span>


          <h1>
            The <em>Smart</em> Family
            <br className="desktop-break" />
            {" "}
            Life Management App
          </h1>


          <p>
            Bring your family’s important documents,
            finances, assets, reminders and everyday
            tasks into one secure, easy-to-use space.
          </p>


          <div className="hero-actions">


            {/* DESKTOP BUTTON */}

            <a
              className="primary-btn hero-early-access"
              href="#cta"
            >
              Get Early Access

              <ArrowRight size={17} />
            </a>


            {/* =================================================
                MOBILE GET STARTED BUTTON
            ================================================= */}

            <div className="mobile-auth-buttons">

              <a
                className="mobile-signup-btn"
                href="#signup"
              >

                Get Started


                {/* WHITE THIN CHEVRON ARROW */}

                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "27px",
                    fontWeight: "400",
                    lineHeight: "1",
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "14px"
                  }}
                  aria-hidden="true"
                >
                  ›
                </span>

              </a>

            </div>


            {/* VIDEO LINK */}

            <a
              className="video-link"
              href="#how"
            >

              <PlayCircle size={30} />

              Watch 2-minute Overview

            </a>

          </div>


          {/* =================================================
              TRUST ITEMS
          ================================================= */}

          <div className="trust-row">

            <span>
              <ShieldCheck />
              Secure by Design
            </span>

            <span>
              <UsersRound />
              For Every Family
            </span>

            <span>
              <Sparkles />
              AI-Powered
            </span>

          </div>

        </div>


        {/* =================================================
            HERO RIGHT IMAGE
        ================================================= */}

        <div className="hero-art">

          <img
            src={family}
            alt="Family using FamilyKit"
          />


          <div className="floating-list">

            {floatingItems.map(([Icon, title]) => (

              <div key={title}>

                <Icon size={23} />

                <b>
                  {title}
                </b>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   PROBLEM SECTION
========================================================= */

function Problem() {

  return (
    <section className="problem">

      <div className="container problem-grid">

        <img
          src={problem}
          alt="Family managing important tasks"
        />


        <div>

          <span className="section-kicker">
            THE PROBLEM
          </span>

          <h2>
            Too Many Important Things
            <br />
            for a Family to Manage
          </h2>

          <p>
            Documents in different places,
            insurance renewal dates, EMI reminders,
            warranties, assets and so many small
            but important tasks — it’s easy to
            feel overwhelmed.
          </p>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SOLUTION SECTION
========================================================= */

function Solution() {

  return (
    <section className="solution container">


      {/* =================================================
          SOLUTION INTRO
      ================================================= */}

      <div className="solution-intro">

        <span className="section-kicker">
          THE SOLUTION
        </span>

        <h2>
          Meet <em>FamilyKit</em>
        </h2>

        <p>
          A single, secure app to organize,
          protect and manage everything that
          matters to your family — with the
          help of AI.
        </p>

      </div>


      {/* =================================================
          FOUR SOLUTION CARDS
      ================================================= */}

      <div className="benefits">

        {benefits.map(
          ({
            title,
            desc,
            Icon,
            cls
          }) => (

            <article
              className={`benefit ${cls}`}
              key={title}
            >

              <Icon />

              <h3>
                {title}
              </h3>

              <p>
                {desc}
              </p>

            </article>

          )
        )}

      </div>

    </section>
  );
}


/* =========================================================
   NEW CIRCULAR FAMILY FEATURES SECTION
========================================================= */

function Features() {

  return (
    <section
      className="features family-wheel-section"
      id="features"
    >

      <div className="container">


        {/* =================================================
            SECTION TITLE
        ================================================= */}

        <h2 className="family-wheel-title">

          Everything Your Family Needs,{" "}

          <em>
            Organised
          </em>

        </h2>


        {/* =================================================
            FAMILY WHEEL
        ================================================= */}

        <div className="family-wheel">


          {/* =================================================
              CONNECTOR LINES

              These 8 lines connect the center family
              to the 8 feature circles.
          ================================================= */}

          <div
            className="wheel-lines"
            aria-hidden="true"
          >

            <span className="wheel-line line-top" />

            <span className="wheel-line line-top-right" />

            <span className="wheel-line line-right" />

            <span className="wheel-line line-bottom-right" />

            <span className="wheel-line line-bottom" />

            <span className="wheel-line line-bottom-left" />

            <span className="wheel-line line-left" />

            <span className="wheel-line line-top-left" />

          </div>


          {/* =================================================
              CENTER FAMILY
          ================================================= */}

          <div className="wheel-center">

            <div
              className="wheel-family-glow"
              aria-hidden="true"
            />

            <img
              src={family}
              alt="FamilyKit family"
            />

          </div>


          {/* =================================================
              8 CIRCULAR FEATURE ITEMS
          ================================================= */}

          {features.map((feature, index) => {

            const Icon = feature.Icon;

            return (

              <article
                key={feature.name}
                className={
                  `feature-circle feature-circle-${index + 1}`
                }
                style={{
                  "--feature-color": feature.color,
                  "--feature-rgb": feature.rgb
                }}
              >

                {/* CATEGORY ICON */}

                <Icon
                  className="feature-circle-icon"
                  strokeWidth={2.2}
                />


                {/* CATEGORY NAME */}

                <h3>
                  {feature.name}
                </h3>


                {/* CATEGORY DESCRIPTION */}

                <p>
                  {feature.desc}
                </p>

              </article>

            );

          })}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   HOW FAMILYKIT WORKS
========================================================= */

function How() {

  return (
    <section
      className="how"
      id="how"
    >

      <div className="container how-inner">


        {/* =================================================
            INTRO
        ================================================= */}

        <div className="how-intro">

          <h2>
            How <em>FamilyKit</em> Works
          </h2>

          <p>
            Get started in minutes and let AI
            do the heavy lifting.
          </p>

        </div>


        {/* =================================================
            STEPS
        ================================================= */}

        <div className="steps">

          {steps.map(
            ({
              title,
              desc,
              Icon
            }, i) => (

              <React.Fragment key={title}>


                {/* STEP */}

                <article className="step">

                  <span className="step-icon">

                    <Icon />

                  </span>


                  <div>

                    <span className="step-number">
                      {i + 1}
                    </span>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {desc}
                    </p>

                  </div>

                </article>


                {/* ARROW BETWEEN STEPS */}

                {i < steps.length - 1 && (

                  <ArrowRight className="step-arrow" />

                )}

              </React.Fragment>

            )
          )}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FAMILY DASHBOARD
========================================================= */

function Dashboard() {

  const points = [
    "Quick access to everything",
    "Upcoming renewals and payments",
    "Family-wide visibility (with your permission)",
    "Works across mobile and web"
  ];


  return (
    <section className="dashboard">

      <div className="container dashboard-grid">


        {/* =================================================
            DASHBOARD IMAGE
        ================================================= */}

        <div className="dashboard-image">

          <img
            src={dashboard}
            alt="FamilyKit dashboard"
          />

        </div>


        {/* =================================================
            DASHBOARD TEXT
        ================================================= */}

        <div className="dashboard-copy">

          <span className="section-kicker">
            YOUR FAMILY DASHBOARD
          </span>

          <h2>
            A Clear View of
            <br />
            Your Family Life
          </h2>

          <p>
            A simple, beautiful dashboard that
            brings your documents, reminders
            and family essentials together —
            so you always know what’s next.
          </p>


          {/* =================================================
              CHECK LIST
          ================================================= */}

          <ul className="check-list">

            {points.map((point) => (

              <li key={point}>

                <CheckCircle2 />

                {point}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SMART REMINDERS + UTILITIES
========================================================= */

function Extras() {

  const reminderItems = [
    "Insurance renewals",
    "EMIs and bill payments",
    "Warranties and service reminders",
    "Health checkups and vaccinations"
  ];


  const utilityItems = [
    "EMI calculator",
    "Insurance premium calculator",
    "Document checklist",
    "Renewal and expiry tracker"
  ];


  const cards = [
    {
      title: "Smart Reminders",
      subtitle: "Never miss what matters.",
      Icon: Bell,
      iconClass: "gold",
      image: reminder,
      items: reminderItems
    },
    {
      title: "Everyday Utilities",
      subtitle:
        "Useful tools for your family’s day-to-day life.",
      Icon: Calculator,
      iconClass: "green",
      image: utilities,
      items: utilityItems
    }
  ];


  return (
    <section className="extras container">

      {cards.map((card) => (

        <article
          className="extra"
          key={card.title}
        >


          {/* =================================================
              TEXT SIDE
          ================================================= */}

          <div className="extra-text">

            <span
              className={`extra-icon ${card.iconClass}`}
            >

              <card.Icon />

            </span>


            <div>

              <h2>
                {card.title}
              </h2>

              <p>
                {card.subtitle}
              </p>


              {/* CHECK LIST */}

              <ul className="check-list">

                {card.items.map((item) => (

                  <li key={item}>

                    <CheckCircle2 />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          </div>


          {/* =================================================
              CARD IMAGE
          ================================================= */}

          <img
            src={card.image}
            alt={card.title}
          />

        </article>

      ))}

    </section>
  );
}


/* =========================================================
   SECURITY
========================================================= */

function Security() {

  const items = [
    {
      Icon: LockKeyhole,
      title: "AES-256 Encryption",
      desc:
        "Strong protection for your data."
    },
    {
      Icon: MapPin,
      title: "India Data Residency",
      desc:
        "Your data can be stored in AWS India regions."
    },
    {
      Icon: Cpu,
      title: "Private AI Processing",
      desc:
        "Family information remains private."
    },
    {
      Icon: UsersRound,
      title: "Your Control",
      desc:
        "You decide who can access family information."
    }
  ];


  return (
    <section
      className="security"
      id="security"
    >

      <div className="container security-inner">


        {/* =================================================
            SECURITY TITLE
        ================================================= */}

        <div className="security-title">

          <ShieldCheck size={48} />

          <h2>
            Your Family’s Data
            <br />
            Stays Private and Secure
          </h2>

        </div>


        {/* =================================================
            SECURITY ITEMS
        ================================================= */}

        <div className="security-items">

          {items.map(
            ({
              Icon,
              title,
              desc
            }) => (

              <article key={title}>

                <Icon />

                <h3>
                  {title}
                </h3>

                <p>
                  {desc}
                </p>

              </article>

            )
          )}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FAQ
========================================================= */

function FAQ() {

  const [active, setActive] =
    useState(-1);


  return (
    <section
      className="faq container"
      id="faqs"
    >


      {/* =================================================
          FAQ INTRO
      ================================================= */}

      <div>

        <h2>
          Frequently
          <br />
          Asked Questions
        </h2>

        <p>
          Have questions? We have answers.
        </p>

      </div>


      {/* =================================================
          FAQ QUESTIONS
      ================================================= */}

      <div className="faq-items">

        {questions.map(
          ([question, answer], i) => (

            <article
              className="faq-item"
              key={question}
            >

              <button
                onClick={() =>
                  setActive(
                    active === i
                      ? -1
                      : i
                  )
                }
                aria-expanded={active === i}
              >

                {question}

                <ChevronDown
                  className={
                    active === i
                      ? "rotated"
                      : ""
                  }
                />

              </button>


              {active === i && (

                <p>
                  {answer}
                </p>

              )}

            </article>

          )
        )}

      </div>

    </section>
  );
}


/* =========================================================
   CTA + FOOTER
========================================================= */

function Footer() {

  return (
    <>


      {/* =================================================
          EARLY ACCESS CTA
      ================================================= */}

      <section
        className="cta container"
        id="cta"
      >

        <div className="cta-house">

          <House size={62} />

          <HeartPulse size={27} />

        </div>


        <div>

          <h2>
            Be Among the First Families to
            <br />
            Experience <span>FamilyKit</span>
          </h2>

          <p>
            Join our early access program and
            help shape the future of family
            life management.
          </p>

        </div>


        <button className="cta-btn">

          Get Early Access

          <ArrowRight size={17} />

        </button>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer container">


        {/* BRAND */}

        <div className="footer-brand">

          <Brand />

          <span>
            A Medhaara Innovations Product
          </span>

        </div>


        {/* LINKS */}

        <div className="footer-links">

          <a href="#home">
            About
          </a>

          <a href="#security">
            Privacy
          </a>

          <a href="#faqs">
            Terms
          </a>

          <a href="#home">
            Contact
          </a>

        </div>


        {/* SOCIAL */}

        <div className="social">

          <Youtube />

          <Linkedin />

          <Instagram />

        </div>

      </footer>

    </>
  );
}


/* =========================================================
   MAIN APP
========================================================= */

export default function App() {

  return (
    <>

      <Header />


      <main>

        {/* HERO */}
        <Hero />


        {/* PROBLEM */}
        <Problem />


        {/* SOLUTION / FOUR CARDS */}
        <Solution />


        {/* NEW CIRCULAR FEATURE SECTION */}
        <Features />


        {/* HOW IT WORKS */}
        <How />


        {/* DASHBOARD */}
        <Dashboard />


        {/* REMINDERS + UTILITIES */}
        <Extras />


        {/* SECURITY */}
        <Security />


        {/* FAQ */}
        <FAQ />


        {/* CTA + FOOTER */}
        <Footer />

      </main>

    </>
  );
}