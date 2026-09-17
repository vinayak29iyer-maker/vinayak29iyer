'use client';

import { useEffect, useState } from 'react';

const projects = [
  { no: '01', title: 'Agentic Web Analysis', type: 'AI SYSTEMS', text: 'Browser-aware agents that observe, reason, plan and validate to reproduce web experiences as React applications.', tags: ['LangGraph', 'FastAPI', 'React'] },
  { no: '02', title: 'Cloud Migration Assessment', type: 'ENTERPRISE CLOUD', text: 'Target AWS architectures spanning containers, data, network security, observability and regional DR — backed by grounded TCO models.', tags: ['AWS', 'EKS', 'HA / DR'] },
  { no: '03', title: 'AWS → Azure Migration', type: 'MODERNIZATION', text: 'Migration of 6+ microservices and 14+ Lambda functions to Azure Functions, Blob Storage and Event Grid.', tags: ['Azure', 'Node.js', 'Serverless'] },
];

const capabilities = [
  ['01', 'AI / Agentic Systems', 'Designing autonomous, multi-step workflows with clear separation of reasoning, orchestration and validation.'],
  ['02', 'Cloud Architecture', 'Secure, scalable AWS and Azure foundations designed for reliability, cost and growth.'],
  ['03', 'Modernization', 'Turning legacy constraints into practical, phased paths toward cloud-native systems.'],
  ['04', 'Technical Leadership', 'Guiding teams from discovery to production with sound architecture and shared ownership.'],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const update = () => {
      const sections = ['work', 'capabilities', 'experience', 'contact'];
      setActive(sections.find(id => document.getElementById(id)?.getBoundingClientRect().top > 0 && document.getElementById(id).getBoundingClientRect().top < innerHeight * .55) || '');
    };
    addEventListener('scroll', update); update(); return () => removeEventListener('scroll', update);
  }, []);
  const close = () => setMenu(false);
  return <main>
    <header className="nav"><a href="#top" className="brand" onClick={close}><i></i> VI<span>///</span></a><button className="menu" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}><b></b><b></b></button><nav className={menu ? 'open' : ''}>{['work', 'capabilities', 'experience', 'contact'].map(x => <a key={x} className={active === x ? 'current' : ''} href={'#' + x} onClick={close}>{x}</a>)}</nav></header>

    <section id="top" className="hero grid-bg">
      <div className="eyebrow"><span></span> AVAILABLE FOR SELECTED OPPORTUNITIES</div>
      <p className="hero-index">01 — INTRODUCTION</p>
      <h1>Building the<br/><em>intelligent</em> systems<br/>behind what’s next.</h1>
      <div className="hero-bottom"><p>AI & Cloud Solution Architect with 13+ years shaping secure, scalable systems from first question to production reality.</p><a href="#work" className="circle-link">EXPLORE<br/>WORK <span>↓</span></a></div>
      <div className="orbit"><div></div><span>AI<br/>SYSTEMS</span></div>
    </section>

    <section className="marquee" aria-label="Areas of expertise"><div>AI ARCHITECTURE <b>✦</b> CLOUD MODERNIZATION <b>✦</b> AGENTIC SYSTEMS <b>✦</b> TECHNICAL LEADERSHIP <b>✦</b> AI ARCHITECTURE <b>✦</b></div></section>

    <section id="work" className="section work"><div className="section-head"><p>02 — SELECTED WORK</p><h2>Architecture<br/>with <em>intent.</em></h2><span>2024 — NOW</span></div><div className="project-list">{projects.map((p, i) => <article className="project" key={p.no}><div className="project-no">{p.no}</div><div><p className="project-type">{p.type}</p><h3>{p.title}</h3><p className="project-text">{p.text}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div><div className={'project-mark mark-' + i}>↗</div></article>)}</div></section>

    <section id="capabilities" className="section capabilities"><div className="section-head"><p>03 — WHAT I DO</p><h2>From complex<br/>to <em>clear.</em></h2></div><div className="cap-list">{capabilities.map(([n,t,d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></article>)}</div></section>

    <section id="experience" className="section experience grid-bg"><div className="section-head"><p>04 — EXPERIENCE</p><h2>Thirteen years<br/>of <em>momentum.</em></h2></div><div className="timeline"><article><time>2024 — PRESENT</time><h3>Architect / Technical Lead</h3><p>Persistent Systems Pvt Ltd · Mumbai</p></article><article><time>2023 — 2024</time><h3>Technology Lead</h3><p>Sahacharya Digital Solutions · Thane</p></article><article><time>2015 — 2023</time><h3>Solution Architect</h3><p>Applied Cloud Computing · Thane</p></article></div><div className="credentials"><span>AI-900</span><p>Microsoft Azure<br/>AI Fundamentals</p><span>B.TECH</span><p>Computer Engineering<br/>KSOU, 2013</p></div></section>

    <section id="contact" className="contact"><p className="eyebrow"><span></span> LET’S MAKE IT REAL</p><h2>Have a complex<br/>problem in mind?</h2><a href="mailto:vinayak_iyer@persistent.com" className="email">vinayak_iyer@persistent.com <b>↗</b></a><div className="footer"><p>© {new Date().getFullYear()} VINAYAK IYER</p><div><a href="https://www.linkedin.com/in/vinayak-iyer-65610b17" target="_blank">LINKEDIN ↗</a><a href="https://github.com/vinayak29iyer" target="_blank">GITHUB ↗</a></div><p>MUMBAI / THANE, INDIA</p></div></section>
  </main>;
}
