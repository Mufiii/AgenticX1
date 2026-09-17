'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X, Network, BrainCircuit, Sparkles } from 'lucide-react'

export const nav = [
  { label: 'Solutions', items: [['Campus', '/solutions/campus'], ['Corporate', '/solutions/corporate'], ['Community', '/solutions/community']] },
  { label: 'Services', items: [['Personalized Agents', '/services/personalized-agents'], ['Agentic Brain', '/services/agentic-brain'], ['Agentic Enterprises', '/services/agentic-enterprises']] },
  { label: 'Research', items: [['Agentic Brain', '/research/agentic-brain'], ['AI Digital Twin', '/research/ai-digital-twin'], ['Photonic Brain', '/research/photonic-brain']] },
  { label: 'Company', items: [['About us', '/company/about'], ['Trust center', '/company/trust-center'], ['Contact', '/company/contact']] },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 32)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
    <div className="nav-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">A</span><span>AGENTIC<span className="brand-x">X</span></span></Link>
      <nav className="desktop-nav">{nav.map(item => <div className="nav-group" key={item.label}><button>{item.label}<ChevronDown size={13}/></button><div className="nav-menu">{item.items.map(([label, href]) => <Link key={href} href={href}><span>{label}</span><ArrowUpRight size={14}/></Link>)}</div></div>)}</nav>
      <Link href="/company/contact" className="nav-cta">Build your future <ArrowUpRight size={15}/></Link>
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="mobile-menu">{nav.map(item => <div key={item.label} className="mobile-group"><button onClick={() => setExpanded(expanded === item.label ? null : item.label)}>{item.label}<ChevronDown size={16}/></button>{expanded === item.label && <div>{item.items.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</div>}</div>)}<Link href="/company/contact" className="mobile-cta" onClick={() => setOpen(false)}>Build your future <ArrowUpRight size={16}/></Link></div>}
  </header>
}

export function GraphVisual({ compact = false }: { compact?: boolean }) {
  const nodes = [{x:50,y:15},{x:20,y:30},{x:80,y:35},{x:35,y:62},{x:68,y:70},{x:50,y:90}]
  return <div className={`graph-visual ${compact ? 'compact' : ''}`} aria-label="Abstract knowledge graph visualization" role="img"><div className="graph-glow"/><svg viewBox="0 0 100 100" aria-hidden="true">{[[50,15,20,30],[50,15,80,35],[20,30,35,62],[80,35,68,70],[35,62,50,90],[68,70,50,90],[35,62,68,70]].map((l,i)=><line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} />)}{nodes.map((n,i)=><circle key={i} cx={n.x} cy={n.y} r={i === 0 ? 3 : 2}/>)}</svg><span className="graph-label label-top">human direction</span><span className="graph-label label-bottom">connected intelligence</span></div>
}

export function Footer() { return <footer><div className="footer-top"><div><Link href="/" className="brand"><span className="brand-mark">A</span><span>AGENTIC<span className="brand-x">X</span></span></Link><p>Human intelligence,<br/>augmented responsibly.</p></div><div className="footer-links"><div><b>Explore</b><Link href="/solutions">Solutions</Link><Link href="/services">Services</Link><Link href="/research">Research</Link></div><div><b>Company</b><Link href="/company/about">About us</Link><Link href="/company/trust-center">Trust center</Link><Link href="/company/contact">Contact</Link></div></div></div><div className="footer-bottom"><span>© 2026 AgenticX Global Business Transformation</span><span>Responsible intelligence for the agentic era.</span></div></footer> }

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Navbar/><main>{children}</main><Footer/></> }

export function SectionLabel({ children }: { children: React.ReactNode }) { return <span className="section-label"><i/> {children}</span> }

export function CTA({ label = 'Secure your place in the AI economy' }: { label?: string }) { return <Link href="/company/contact" className="button-primary">{label} <ArrowUpRight size={16}/></Link> }

type RoadmapVariant = 'agentic' | 'digital-twin' | 'photonic'

const journeyMilestones: Array<{ year: string; phase: string; title: string; subtitle: string; description: string; color: string; variant: RoadmapVariant }> = [
  { year: '2026', phase: 'TODAY', title: 'Agentic Brain', subtitle: 'PERSONALIZED INTELLIGENCE THAT ACTS.', description: 'AI that understands your context, goals and workflows — then reasons, plans and acts alongside you.', color: '#8B5CF6', variant: 'agentic' },
  { year: '2030', phase: 'NEXT PHASE', title: 'AI Digital Twin', subtitle: 'INTELLIGENCE THAT MIRRORS YOU.', description: 'A persistent digital counterpart capable of representing your knowledge, preferences, capabilities and decision patterns across contexts.', color: '#60A5FA', variant: 'digital-twin' },
  { year: '2033', phase: 'BEYOND', title: 'Photonic Brain', subtitle: 'INTELLIGENCE AT THE SPEED OF LIGHT.', description: 'Exploring photonic computing as a pathway toward radically faster, more energy-efficient intelligence and new computational architectures.', color: '#F59E0B', variant: 'photonic' },
]

export function RoadmapOrb({ color, variant }: { year?: string; color: string; variant: RoadmapVariant }) {
  return <div className={`roadmap-orb roadmap-orb-${variant}`} style={{ '--orb-color': color } as React.CSSProperties} aria-hidden="true"><span className="orb-grid"/><span className="orb-core"/><span className="orb-ring orb-ring-one"/><span className="orb-ring orb-ring-two"/></div>
}

export function JourneySection() {
  return <section className="journey-section" id="journey"><div className="journey-heading"><SectionLabel>OUR JOURNEY</SectionLabel><h2>From Intelligence to <em>What&apos;s Next</em></h2><p>A long-term vision to build personalized, persistent and radically faster intelligence for everyone.</p></div><div className="journey-timeline">{journeyMilestones.map((milestone, index) => <article className="journey-milestone" key={milestone.year}><div className="milestone-meta"><strong>{milestone.year}</strong><span>{milestone.phase}</span></div><div className="milestone-node" style={{ '--node-color': milestone.color } as React.CSSProperties}/><RoadmapOrb year={milestone.year} color={milestone.color} variant={milestone.variant}/><h3>{milestone.title}</h3><span className="milestone-subtitle">{milestone.subtitle}</span><p>{milestone.description}</p></article>)}</div></section>
}

export function HomePage() { return <SiteShell><section className="hero hero-reimagined"><div className="hero-copy"><SectionLabel>AI · WELLNESS · DEEPTECH</SectionLabel><p className="hero-kicker">Human-centred transformation<br/>for the Agentic and AGI era</p><h1>Personalized<br/><em>Agentic AI Brain</em></h1><div className="hero-context"><span>For</span><b>Campus<small>Students</small></b><b>Corporate<small>Employees</small></b><b>Community<small>Entrepreneurs</small></b></div><div className="hero-actions"><CTA label="Secure Your Place in the AI Economy"/><Link href="#agentic-brain" className="text-link">Explore Agentic Brain <ArrowUpRight size={15}/></Link></div></div><div className="hero-product"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A6BO4yPO1JcvnDYFIxy3rnOul6FxHM.png" alt="Personalized Agentic AI Brain with an AI wellness device and modular purple computing hardware"/></div></section><section className="statement"><SectionLabel>THE OPPORTUNITY</SectionLabel><h2>From fragmented tools to <em>connected capability.</em></h2><p>AgenticX equips people and organizations to thrive responsibly in a world where intelligence technologies are everywhere.</p></section><JourneySection/><section id="agentic-brain" className="dark-panel"><div><SectionLabel>2026 · TECHNOLOGY ROADMAP</SectionLabel><h2>Agentic <em>Brain</em></h2><p>Your personalized intelligence orchestration layer. Connect goals, knowledge, personality, mental models, AI agents and approved tools into one human-directed system.</p><div className="principles"><span><b>01</b> Human directed</span><span><b>02</b> Context aware</span><span><b>03</b> Agent powered</span></div></div><GraphVisual compact/></section><section className="three-up"><SectionLabel>ONE MISSION · THREE ENVIRONMENTS</SectionLabel><div className="card-grid">{[['Campus','Learn · Build · Innovate','/solutions/campus','01'],['Corporate','Perform · Adapt · Grow','/solutions/corporate','02'],['Community','Create · Automate · Scale','/solutions/community','03']].map(([title,sub,href,num])=><Link href={href} className="feature-card" key={title}><span className="card-number">{num}</span><h3>{title}</h3><p>{sub}</p><ArrowUpRight/></Link>)}</div></section><section className="split-section"><div><SectionLabel>KNOWLEDGE GRAPH</SectionLabel><h2>Knowledge becomes <em>agency.</em></h2></div><div><p>Personal, academic, professional and organizational knowledge can be structured into a connected graph—so AI understands relationships, not simply documents.</p><Link href="/research/agentic-brain" className="text-link">Explore the research <ArrowUpRight size={15}/></Link></div></section><section className="final-cta"><SectionLabel>THE NEXT CHAPTER IS HUMAN</SectionLabel><h2>Build a future<br/><em>worth becoming.</em></h2><CTA/></section></SiteShell> }

export function ContentPage({ title, eyebrow, intro, items, year }: { title: string; eyebrow: string; intro: string; items: string[]; year?: string }) { return <SiteShell><section className="page-hero"><SectionLabel>{eyebrow}</SectionLabel>{year && <span className="roadmap-tag">{year}</span>}<h1>{title}</h1><p>{intro}</p><CTA/></section><section className="content-grid">{items.map((item, i) => <article className="content-card" key={item}><span>0{i + 1}</span><h3>{item}</h3><p>Designing practical, responsible pathways that connect people, context and intelligence with clear human oversight.</p><ArrowUpRight size={18}/></article>)}</section><section className="final-cta compact-cta"><SectionLabel>CONTINUE THE CONVERSATION</SectionLabel><h2>Intelligence in service<br/><em>of human potential.</em></h2><CTA label="Talk to AgenticX"/></section></SiteShell> }

export function NotFoundContent() { return <ContentPage eyebrow="AGENTICX" title="A new path is taking shape." intro="Explore our solutions, research and ecosystem for a human-centred approach to the agentic era." items={['Solutions','Services','Research','Ecosystem']}/> }

export const pageContent: Record<string, Omit<React.ComponentProps<typeof ContentPage>, 'eyebrow'>> = {
  solutions: {title:'Transformation for every context.',intro:'Human-centred systems for the people, organizations and communities navigating the next era of work.',items:['Campus','Corporate','Community']},
  'solutions/campus': {title:'From AI learner to DeepTech innovator.',intro:'Transform students through AI and DeepTech leadership, multidisciplinary learning, innovation studios and real-world projects.',items:['AI & DeepTech Leadership','Innovation Studios','AI-powered learning','Industry bridge','Educator enablement','Innovation readiness']},
  'solutions/corporate': {title:'Build a healthier, AI-powered workforce.',intro:'Prepare people and processes for agentic work through workforce enablement, voluntary wellness insights and ethical governance.',items:['AI-powered employee','Wellness intelligence','Performance enablement','Responsible AI governance','Inclusive value models']},
  'solutions/community': {title:'Turn local enterprise into an agentic ecosystem.',intro:'Move from isolated digital tools to connected agentic enterprises where people orchestrate specialized AI systems around measurable goals.',items:['Entrepreneur AI literacy','Agentic enterprise design','MSME transformation','Founder studios','Shared ecosystem']},
  services:{title:'Transformation from readiness to execution.',intro:'Every engagement begins with context. We assess objectives, people, processes, knowledge, data and risk; then design, pilot and scale.',items:['Personalized agents','Agentic Brain','Agentic enterprises','PolymathGround startups','QaQ Passport','Agentic ARMY']},
  products:{title:'Tools for human-directed intelligence.',intro:'Purpose-built systems that turn knowledge into agency while keeping people accountable and in control.',items:['AI Employees','Agentic Brain','AI Business Engine','Custom AI Systems']},
  'services/personalized-agents':{title:'Personalized agents, grounded in context.',intro:'Purpose-built assistants grounded in a person’s role, goals, approved knowledge and boundaries.',items:['Role context','Approved knowledge','Clear boundaries','Human review']},
  'services/agentic-brain':{title:'Your human-directed AI operating layer.',intro:'A secure orchestration layer for memory, goals, agents, tools and human decisions.',items:['Identity & permissions','Context & memory','Agent orchestration','Decision workspace','Wellness connections']},
  'services/agentic-enterprises':{title:'Redesign work for coordinated intelligence.',intro:'Business redesign for coordinated human–AI workflows, governance and new value creation.',items:['Map workflows','Design governance','Pilot responsibly','Scale evidence-backed value']},
  research:{title:'Researching the shape of intelligence.',intro:'Explorations and roadmaps for a more capable, secure and human-centred intelligence infrastructure.',items:['Agentic Brain','AI Digital Twin','Photonic Brain','Human transformation']},
  'research/agentic-brain':{title:'From knowledge base to knowledge graph.',intro:'Organize goals, knowledge, preferences and agents in a connected architecture that supports better decisions.',items:['Contextual memory','Personality-aware intelligence','Specialized agents','Decision support']},
  'research/ai-digital-twin':{title:'A trusted model of context—not a copy of a person.',intro:'A 2030 roadmap for identity-preserving, consent-based digital twins. Not a currently available product.',items:['Identity vault','Context model','Voice & likeness controls','Specialist twins','Economic agency'],year:'2030 · ROADMAP'},
  'research/photonic-brain':{title:'Exploring light-speed intelligence infrastructure.',intro:'A 2033 research direction exploring photonic acceleration for efficient AI inference and secure personal intelligence services.',items:['Photonic acceleration','Hybrid architecture','Secure intelligence infrastructure','Wellness research','Energy and scale'],year:'2033 · RESEARCH DIRECTION'},
  ecosystem:{title:'An ecosystem for the agentic era.',intro:'Connect learners, founders, institutions, solution providers and opportunities through shared infrastructure.',items:['AGIx','PolymathGround','QaQ Passport','Agentic ARMY','Marketplace']},
  company:{title:'Building responsibly, in public.',intro:'AgenticX Global Business Transformation is shaping a human-centred approach to the agentic and AGI era.',items:['About us','Careers','Trust center','Partnerships','Workshops','Contact']},
}
