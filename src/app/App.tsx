import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  ExternalLink,
  Mic,
  Play,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const GREEN = '#25D366';
const GREEN_DARK = '#128C7E';
const GREEN_DEEP = '#075E54';
const CHARCOAL = '#0E1511';
const CHARCOAL_2 = '#1A2018';

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'pitch', 'contact'];
      const pos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Education', 'Pitch', 'Contact'];

  const skills = [
    "Statistical Analysis & Modeling",
    "Advanced SQL",
    "Python",
    "Excel",
    "Data Visualization",
    "Revenue Forecasting",
    "KPI / KRI Monitoring",
    "Dashboard Development",
    "Oracle · PostgreSQL · MySQL",
    "Survey Design",
    "Agile Collaboration",
  ];

  const projects = [
    {
      title: "Generative AI RAG System",
      tag: "Gen AI · Python",
      bullets: [
        "Built a Retrieval-Augmented Generation pipeline combining LLMs with a vector knowledge base",
        "Implemented document ingestion, embedding, and semantic search for context-aware responses",
        "Designed for real-world Q&A use cases with accurate, grounded answer generation",
      ],
      github: "https://github.com/lumumbastephanie3-svg/Generative-AI-RAG",
    },
    {
      title: "Wine Classification Model Comparison",
      tag: "Machine Learning · Python",
      bullets: [
        "Compared Logistic Regression, Decision Tree, Random Forest, and SVM on wine quality data",
        "Performed feature engineering, hyperparameter tuning, and cross-validation",
        "Evaluated with accuracy, precision, recall, and F1-score metrics",
      ],
      github: "https://github.com/lumumbastephanie3-svg/-Wine_Classification_Model_Comparison",
    },
    {
      title: "Titanic Insights Analysis",
      tag: "EDA · Python",
      bullets: [
        "In-depth exploratory analysis uncovering survival patterns across demographics",
        "Visualized correlations between passenger class, age, gender, and survival rates",
        "Applied data cleaning, statistical analysis, and insight storytelling through charts",
      ],
      github: "https://github.com/lumumbastephanie3-svg/TITANIC_INSIGHTS_ANALYSIS",
    },
    {
      title: "California Housing Price Prediction",
      tag: "MLOps · Python",
      bullets: [
        "End-to-end MLOps pipeline from raw data ingestion to model evaluation",
        "Data preprocessing, feature engineering, and hyperparameter tuning",
        "Statistical validation and benchmarking across multiple regression algorithms",
      ],
      github: "https://github.com/lumumbastephanie3-svg/California-Housing-dataset-for-MLOPS",
    },
    {
      title: "Advanced SQL Database Analysis",
      tag: "SQL · Database Management",
      bullets: [
        "Complex queries, window functions, and statistical aggregations on large relational databases",
        "Derived key business insights through exploratory data analysis",
        "Optimized query performance for analytical workloads",
      ],
      github: "https://github.com/lumumbastephanie3-svg/SQL-Practice",
    },
  ];

  return (
    <div style={{ fontFamily: "'Figtree', system-ui, sans-serif", backgroundColor: '#F6F8F6', color: '#111612' }}>

      {/* ── Navigation ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(246,248,246,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(17,22,18,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-[68px]">
            <motion.button
              onClick={() => go('home')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: GREEN }}
              />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{
                  fontFamily: "'Figtree', sans-serif",
                  color: scrolled ? CHARCOAL : '#ffffff',
                  letterSpacing: '0.04em',
                }}
              >
                STEPHANNIE LUMUMBA
              </span>
            </motion.button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => {
                const active = activeSection === item.toLowerCase();
                return (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => go(item.toLowerCase())}
                    className="relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      color: active
                        ? GREEN
                        : scrolled
                        ? '#4A5A4C'
                        : 'rgba(255,255,255,0.75)',
                    }}
                  >
                    {item}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-md"
                        style={{ backgroundColor: 'rgba(37,211,102,0.1)', border: `1px solid rgba(37,211,102,0.25)` }}
                        transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${CHARCOAL} 0%, ${CHARCOAL_2} 60%, #0F1F15 100%)` }}
      >
        {/* Background texture lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)'
        }} />

        {/* Green accent glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
          style={{ background: GREEN }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 w-full">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px" style={{ backgroundColor: GREEN }} />
                <span
                  className="text-xs font-medium tracking-[0.18em] uppercase"
                  style={{ color: GREEN, fontFamily: "'DM Mono', monospace" }}
                >
                  Data Analyst · Economist
                </span>
              </div>

              {/* Name */}
              <h1
                className="mb-6 leading-[1.05]"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: '#F4F7F4' }}
              >
                Stephannie<br />
                <em style={{ color: GREEN, fontStyle: 'italic', fontWeight: 300 }}>Awuor</em>{' '}
                Lumumba
              </h1>

              <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(244,247,244,0.6)', fontWeight: 300 }}>
                Transforming complex datasets into actionable insights that drive evidence-based decision making across tax, economic, and public sector domains.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="mailto:awuorstephanie3@gmail.com"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: GREEN, color: '#0C1A10' }}
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
                <button
                  onClick={() => go('projects')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-white/10"
                  style={{ color: '#F4F7F4', border: '1px solid rgba(244,247,244,0.2)' }}
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-6" style={{ color: 'rgba(244,247,244,0.45)' }}>
                <a href="tel:+254704168882" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +254 704 168 882
                </a>
                <span className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  Nairobi, Kenya
                </span>
              </div>
            </motion.div>

            {/* Right: Photo + social rail */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Green frame accent */}
                <div
                  className="absolute -top-3 -left-3 w-full h-full rounded-2xl"
                  style={{ border: `1px solid rgba(37,211,102,0.25)` }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: 480 }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=840&h=960&q=80"
                    alt="Data analytics workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(14,21,17,0.1) 0%, rgba(14,21,17,0.55) 100%)' }} />
                </div>

                {/* Stats pill */}
                <div
                  className="absolute -bottom-5 -left-6 rounded-xl px-5 py-4 shadow-2xl"
                  style={{ backgroundColor: CHARCOAL_2, border: '1px solid rgba(37,211,102,0.15)' }}
                >
                  <p className="text-xs font-medium mb-1" style={{ color: GREEN, fontFamily: "'DM Mono', monospace" }}>Currently at</p>
                  <p className="text-sm font-semibold" style={{ color: '#F4F7F4' }}>Kenya Revenue Authority</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(244,247,244,0.4)' }}>Data Management & Analytics Division</p>
                </div>
              </div>

              {/* Social rail */}
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                {[
                  { href: 'https://linkedin.com/in/stephannie-lumumba', bg: '#0A66C2', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                  { href: 'https://github.com/lumumbastephanie3-svg', bg: '#24292E', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
                  { href: 'mailto:awuorstephanie3@gmail.com', bg: '#EA4335', icon: <Mail className="w-4 h-4" />, label: 'Email' },
                  { href: 'https://wa.me/254704168882', bg: GREEN, icon: WA_ICON, label: 'WhatsApp' },
                ].map(({ href, bg, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    title={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-110 hover:brightness-110"
                    style={{ backgroundColor: bg }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col items-center gap-2 mt-20"
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(244,247,244,0.3)', fontFamily: "'DM Mono', monospace" }}>Scroll</span>
            <div className="w-px h-10 relative overflow-hidden" style={{ backgroundColor: 'rgba(244,247,244,0.12)' }}>
              <motion.div
                className="absolute top-0 left-0 w-full"
                style={{ backgroundColor: GREEN, height: '40%' }}
                animate={{ y: ['-100%', '300%'] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-28 px-6 lg:px-10" style={{ backgroundColor: '#F6F8F6' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Professional Profile</SectionLabel>
            <h2 className="section-heading mb-8" style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: CHARCOAL, lineHeight: 1.15 }}>
              Economist. Analyst.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: GREEN_DARK }}>Data Storyteller.</em>
            </h2>

            <p className="text-lg leading-relaxed mb-16 max-w-3xl" style={{ color: '#3D4F3E', fontWeight: 300 }}>
              Economist and Data Analyst with a strong academic foundation in Economics and Statistics and practical experience in official data management, revenue analytics, statistical modeling, and performance monitoring. Adept at transforming complex datasets into actionable insights that drive evidence-based decision making.
            </p>

            <h3 className="text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: GREEN_DARK, fontFamily: "'DM Mono', monospace" }}>
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: '#EBF5EC',
                    color: '#1A3D20',
                    border: '1px solid rgba(37,211,102,0.2)',
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-28 px-6 lg:px-10" style={{ backgroundColor: CHARCOAL, color: '#F4F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel dark>Professional Experience</SectionLabel>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#F4F7F4', lineHeight: 1.15, marginBottom: '4rem' }}>
              Where I've worked
            </h2>

            <div className="space-y-10">
              {/* KRA */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 rounded-2xl p-8 transition-all duration-300"
                style={{ backgroundColor: CHARCOAL_2, borderLeft: `3px solid ${GREEN}` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1.5rem', color: '#F4F7F4', marginBottom: '0.25rem' }}>
                      Data Analyst Intern
                    </h3>
                    <p className="font-semibold text-base" style={{ color: GREEN }}>Kenya Revenue Authority (KRA)</p>
                    <p className="text-sm mt-1" style={{ color: 'rgba(244,247,244,0.45)' }}>Data Management and Analytics Division, Nairobi</p>
                  </div>
                  <span
                    className="shrink-0 text-xs px-3 py-1.5 rounded-full self-start"
                    style={{ backgroundColor: 'rgba(37,211,102,0.12)', color: GREEN, fontFamily: "'DM Mono', monospace", border: '1px solid rgba(37,211,102,0.2)' }}
                  >
                    May 2025 – Present
                  </span>
                </div>

                <div className="space-y-6">
                  <ExperienceSubSection label="Reporting and Analytics (DTD)" items={[
                    "Extracted and analyzed large-scale domestic tax revenue datasets using SQL and Python to track trends and divisional performance.",
                    "Produced daily, weekly, monthly, and quarterly statistical reports for leadership decision-making.",
                    "Monitored KPIs and KRIs related to tax compliance and revenue accuracy.",
                    "Conducted revenue forecasting, target setting, and performance gap analysis using statistical techniques.",
                    "Developed taxpayer risk profiles and built interactive BI dashboards.",
                  ]} />
                  <ExperienceSubSection label="Data Management and Analytics Operations" items={[
                    "Maintained accurate records and documentation to ensure data integrity and compliance.",
                    "Tracked and reported divisional performance metrics to support operational efficiency.",
                    "Managed staff facilities, logistics, and administrative support within the department.",
                    "Served as a key liaison between the department and various divisions.",
                    "Facilitated internal staff communication and information flow.",
                    "Handled incoming calls and provided timely support to stakeholders.",
                  ]} />
                </div>
              </motion.div>

              {/* NYS */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="relative pl-8 rounded-2xl p-8 transition-all duration-300"
                style={{ backgroundColor: CHARCOAL_2, borderLeft: `3px solid ${GREEN_DARK}` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1.5rem', color: '#F4F7F4', marginBottom: '0.25rem' }}>
                      Economist / Statistician Trainee
                    </h3>
                    <p className="font-semibold text-base" style={{ color: GREEN }}>National Youth Service (NYS) Headquarters</p>
                    <p className="text-sm mt-1" style={{ color: 'rgba(244,247,244,0.45)' }}>Nairobi, Kenya</p>
                  </div>
                  <span
                    className="shrink-0 text-xs px-3 py-1.5 rounded-full self-start"
                    style={{ backgroundColor: 'rgba(37,211,102,0.12)', color: GREEN, fontFamily: "'DM Mono', monospace", border: '1px solid rgba(37,211,102,0.2)' }}
                  >
                    Oct – Dec 2022
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Performed statistical planning, budgeting, and cost analysis for organizational programs.",
                    "Managed institutional databank including data cleaning, processing, and reporting.",
                    "Developed Performance Contracts, AWPs, and supported MTEF preparation.",
                    "Compiled monitoring & evaluation reports using statistical indicators.",
                  ].map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: 'rgba(244,247,244,0.65)' }}>
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GREEN_DARK }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-28 px-6 lg:px-10" style={{ backgroundColor: '#F6F8F6' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Selected Work</SectionLabel>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: CHARCOAL, lineHeight: 1.15, marginBottom: '3.5rem' }}>
              Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, i) => (
                <motion.article
                  key={proj.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white rounded-2xl p-7 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ border: '1px solid rgba(17,22,18,0.07)' }}
                >
                  {/* Top accent line on hover */}
                  <div
                    className="absolute top-0 left-7 right-7 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: GREEN }}
                  />

                  <div className="mb-4">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: '#EBF5EC', color: GREEN_DARK, fontFamily: "'DM Mono', monospace" }}
                    >
                      {proj.tag}
                    </span>
                  </div>

                  <h3
                    className="mb-4 leading-snug"
                    style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1.125rem', color: CHARCOAL }}
                  >
                    {proj.title}
                  </h3>

                  <ul className="space-y-2 flex-1 mb-6">
                    {proj.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm" style={{ color: '#4A5A4C' }}>
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: GREEN }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                    style={{ color: GREEN_DARK }}
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="py-28 px-6 lg:px-10" style={{ backgroundColor: CHARCOAL, color: '#F4F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel dark>Credentials</SectionLabel>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#F4F7F4', lineHeight: 1.15, marginBottom: '3.5rem' }}>
              Education &amp; Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Degree */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: CHARCOAL_2, border: '1px solid rgba(37,211,102,0.1)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.2)' }}>
                  <GraduationCap className="w-5 h-5" style={{ color: GREEN }} />
                </div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1.25rem', color: '#F4F7F4', marginBottom: '0.5rem' }}>
                  Bachelor of Economics and Statistics
                </h3>
                <p className="font-semibold mb-1" style={{ color: GREEN }}>Mount Kenya University, Thika</p>
                <p className="text-sm mb-1" style={{ color: 'rgba(244,247,244,0.45)', fontFamily: "'DM Mono', monospace" }}>May 2019 – Dec 2023</p>
                <p className="text-sm" style={{ color: 'rgba(244,247,244,0.45)' }}>Second Class Honours — Lower Division</p>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: CHARCOAL_2, border: '1px solid rgba(37,211,102,0.1)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.2)' }}>
                  <Award className="w-5 h-5" style={{ color: GREEN }} />
                </div>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1.25rem', color: '#F4F7F4', marginBottom: '1.5rem' }}>
                  Professional Certifications
                </h3>
                <div className="space-y-5">
                  {[
                    { title: 'CPA Foundation Level', org: 'KASNEB', year: '2025' },
                    { title: 'Data and AI', org: 'Cyber Shujaa', year: '2025' },
                  ].map(({ title, org, year }) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: GREEN }} />
                      <div>
                        <p className="font-semibold text-sm" style={{ color: '#F4F7F4' }}>{title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(244,247,244,0.45)', fontFamily: "'DM Mono', monospace" }}>{org} · {year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Elevator Pitch ── */}
      <section id="pitch" className="py-28 px-6 lg:px-10" style={{ backgroundColor: '#F6F8F6' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <SectionLabel center>Coming Soon</SectionLabel>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: CHARCOAL, lineHeight: 1.15, marginBottom: '1rem' }}>
              Elevator Pitch
            </h2>
            <p className="mb-12" style={{ color: '#5A6B5C' }}>Hear directly from Stephannie.</p>

            <div
              className="rounded-3xl p-16 flex flex-col items-center gap-8"
              style={{ backgroundColor: '#EBF5EC', border: `1.5px dashed rgba(37,211,102,0.4)` }}
            >
              <div className="relative">
                <span
                  className="absolute inset-0 rounded-full animate-ping opacity-25"
                  style={{ backgroundColor: GREEN }}
                />
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: GREEN }}
                >
                  <Mic className="w-8 h-8" style={{ color: '#0C1A10' }} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-1.5" style={{ color: CHARCOAL }}>Video coming soon</p>
                <p className="text-sm" style={{ color: '#5A6B5C' }}>
                  Stephannie's elevator pitch will be embedded here once ready.
                </p>
              </div>

              <button
                disabled
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold opacity-50 cursor-not-allowed"
                style={{ backgroundColor: GREEN, color: '#0C1A10' }}
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Pitch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-28 px-6 lg:px-10" style={{ background: `linear-gradient(160deg, ${CHARCOAL} 0%, ${GREEN_DEEP} 100%)` }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <SectionLabel dark>Say Hello</SectionLabel>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, color: '#F4F7F4', lineHeight: 1.15, marginBottom: '1rem' }}>
              Let's Connect
            </h2>
            <p className="text-lg mb-16 max-w-xl mx-auto" style={{ color: 'rgba(244,247,244,0.55)', fontWeight: 300 }}>
              Open to new opportunities, collaborations, and data challenges.
            </p>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-3 gap-5 mb-14 max-w-3xl mx-auto">
              {[
                { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'awuorstephanie3@gmail.com', href: 'mailto:awuorstephanie3@gmail.com' },
                { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+254 704 168 882', href: 'tel:+254704168882' },
                { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Nairobi, Kenya', href: undefined },
              ].map(({ icon, label, value, href }) => {
                const Inner = (
                  <div
                    key={label}
                    className="rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-200 hover:brightness-110"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <span style={{ color: GREEN }}>{icon}</span>
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(244,247,244,0.4)', fontFamily: "'DM Mono', monospace" }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: '#F4F7F4' }}>{value}</p>
                  </div>
                );
                return href ? <a key={label} href={href}>{Inner}</a> : <div key={label}>{Inner}</div>;
              })}
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { href: 'https://linkedin.com/in/stephannie-lumumba', bg: '#0A66C2', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                { href: 'https://github.com/lumumbastephanie3-svg', bg: 'rgba(255,255,255,0.12)', icon: <Github className="w-5 h-5" />, label: 'GitHub', border: 'rgba(255,255,255,0.2)' },
                { href: 'mailto:awuorstephanie3@gmail.com', bg: '#EA4335', icon: <Mail className="w-5 h-5" />, label: 'Email' },
                { href: 'https://wa.me/254704168882', bg: GREEN, icon: WA_ICON, label: 'WhatsApp' },
              ].map(({ href, bg, icon, label, border }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  title={label}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:brightness-110 shadow-lg"
                  style={{ backgroundColor: bg, border: border ? `1px solid ${border}` : undefined }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-6 px-6 text-center" style={{ backgroundColor: '#060E08' }}>
        <p className="text-xs" style={{ color: 'rgba(244,247,244,0.25)', fontFamily: "'DM Mono', monospace" }}>
          © 2026 Stephannie Awuor Lumumba — Nairobi, Kenya
        </p>
      </footer>
    </div>
  );
}

/* ── Helpers ── */

function SectionLabel({ children, dark, center }: { children: React.ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
      <span className="w-6 h-px" style={{ backgroundColor: '#25D366' }} />
      <span
        className="text-xs font-medium tracking-[0.16em] uppercase"
        style={{ color: '#25D366', fontFamily: "'DM Mono', monospace" }}
      >
        {children}
      </span>
    </div>
  );
}

function ExperienceSubSection({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-3 pb-2"
        style={{ color: 'rgba(37,211,102,0.7)', fontFamily: "'DM Mono', monospace", borderBottom: '1px solid rgba(37,211,102,0.1)' }}
      >
        {label}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm" style={{ color: 'rgba(244,247,244,0.65)' }}>
            <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: '#25D366' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
