import { useEffect, useRef, useState } from 'react'
import SarahCharacter from './SarahCharacter'

const Arrow = () => <span aria-hidden="true">↗</span>

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()
        const range = element.offsetHeight - window.innerHeight
        setProgress(Math.max(0, Math.min(1, -rect.top / Math.max(range, 1))))
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [ref])
  return progress
}

function Hero() {
  const scene = useRef<HTMLElement>(null)
  const progress = useScrollProgress(scene)
  const ropeStyle = { '--pull': `${progress * 92}px`, '--tension': `${progress}` } as React.CSSProperties
  return <section className="hero-scene" ref={scene} style={ropeStyle} id="top">
    <div className="hero-sticky">
      <div className="hero-grid" aria-hidden="true" />
      <header className="site-header wrap">
        <a className="wordmark" href="#top"><span className="mark">S.</span> Sarah <small>Materials engineer</small></a>
        <nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#contact" className="nav-contact">Get in touch <Arrow /></a></nav>
      </header>
      <main className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> MATERIALS · MODELLING · PROCESS</div>
          <h1>Making the invisible<br/><em>behave.</em></h1>
          <p className="hero-lede">I’m Sarah, a materials engineer working where physical chemistry, predictive modelling and real-world processes meet.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <span>↓</span></a><a className="text-link" href="#about">A little about me <Arrow /></a></div>
          <div className="hero-note"><span className="note-line"/>Research & development<br/>with a practical edge</div>
        </div>
        <div className="hero-art" aria-label="Sarah character illustration with material sample">
          <div className="art-label label-top"><span>01 / FIELD NOTES</span><i>NL · EU</i></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="sample-card"><div className="sample-heading"><span>MICROSTRUCTURE</span><b>× 240</b></div><svg viewBox="0 0 138 88" aria-label="Illustrated material microstructure"><rect x="1" y="1" width="136" height="86" rx="3" fill="#f1e7d2"/><path d="M0 37 31 9l31 26 30-33 47 33M0 76l29-34 33 32 31-30 44 38" fill="none" stroke="#759295" strokeWidth="1.5"/><g fill="#d5b373"><circle cx="31" cy="9" r="4"/><circle cx="62" cy="35" r="4"/><circle cx="92" cy="2" r="4"/><circle cx="29" cy="42" r="4"/><circle cx="62" cy="74" r="4"/><circle cx="93" cy="44" r="4"/></g></svg><div className="sample-caption">grain boundary / 14.2 μm</div></div>
          <div className="character-halo"/><SarahCharacter className="sarah-character"/>
          <div className="art-label label-bottom"><span>OBSERVE → MODEL → TEST</span><i>↘</i></div>
          <svg className="pull-rope" viewBox="0 0 80 360" aria-hidden="true"><path d="M39 0 C41 64 37 112 40 170 C43 228 38 287 40 360"/><circle cx="40" cy="338" r="10"/><circle cx="40" cy="338" r="3"/></svg>
          <div className="scroll-prompt"><span className="scroll-wheel"/> Scroll to pull <b>↓</b></div>
        </div>
      </main>
      <div className="hero-footer wrap"><span>THOUGHTFUL BY DESIGN</span><span>SCROLL TO EXPLORE <b>↓</b></span><span>01 — 04</span></div>
    </div>
  </section>
}

function Work() {
  return <section className="section work-section" id="work">
    <div className="wrap">
      <div className="section-head"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>From a surface<br/>to a <em>system.</em></h2></div><p className="section-intro">A research project that connects molecular behaviour to a useful prediction — and a workflow others can run.</p></div>
      <article className="project-card">
        <div className="project-visual"><div className="project-top"><span>MASTER’S THESIS / CANON R&D</span><span>01</span></div><div className="chart-wrap"><div className="chart-y">SURFACE TENSION</div><svg viewBox="0 0 590 290" role="img" aria-label="Illustrative predicted dynamic surface tension curve"><path d="M54 22v216h500M54 184h500M54 130h500M54 76h500" fill="none" stroke="#c8c4b8" strokeWidth="1" strokeDasharray="3 6"/><path d="M54 35v203M54 238h500" fill="none" stroke="#6a726d" strokeWidth="1.5"/><path d="M55 60 C86 62 82 98 116 112 C161 132 166 150 212 163 C274 181 335 185 396 192 C452 199 507 203 551 204" fill="none" stroke="#426c72" strokeWidth="5" strokeLinecap="round"/><path d="M55 69 C97 75 93 106 127 121 C169 140 193 153 226 169 C282 188 348 189 405 199 C452 205 504 206 551 209" fill="none" stroke="#d6a95f" strokeWidth="2" strokeDasharray="6 6"/><circle cx="212" cy="163" r="6" fill="#f5f1e8" stroke="#426c72" strokeWidth="3"/><text x="58" y="266">0</text><text x="510" y="266">TIME →</text><text x="65" y="48">Measured</text><text x="451" y="180">Model prediction</text></svg></div><div className="chart-legend"><span><i className="legend-solid"/> MODEL OUTPUT</span><span><i className="legend-dash"/> EXPERIMENTAL DATA</span></div><div className="visual-caption">Dynamic surface tension · aqueous inkjet formulations</div></div>
        <div className="project-copy"><div className="project-index">RESEARCH / 2025</div><h3>Predicting a surface<br/>as it forms.</h3><p>Developed a Python model for dynamic surface tension in aqueous inkjet systems, then designed experiments to determine its parameters and test predictions against measurements.</p><p>The result is a command-line workflow that turns formulation and physical inputs into a surface-tension curve over time — helping researchers assess conditions before running another experiment.</p><div className="tag-list"><span>Python</span><span>Physical modelling</span><span>Experimental validation</span></div><a href="#contact" className="project-link">Discuss this project <Arrow /></a></div>
      </article>
      <div className="project-footnote"><span>WHAT I ENJOY</span><p>Taking something difficult to measure and making it easier to reason about.</p><span>02 / 04</span></div>
    </div>
  </section>
}

function About() {
  return <section className="section about-section" id="about"><div className="wrap about-layout"><div className="about-marker"><span>02 / APPROACH</span><div className="molecule-mark"><i/><i/><i/><i/><b/><b/></div><span>CURIOUS, PRECISE,<br/>PRACTICAL.</span></div><div className="about-copy"><span className="eyebrow">ENGINEERING IS A WAY OF ASKING BETTER QUESTIONS</span><h2>Start with the<br/><em>real behaviour.</em></h2><p>I like work that moves between theory and application. A material has to be understood in context: what is happening at the interface, which variables matter, and what would make a prediction useful to the people designing the process?</p><p>My approach combines physical reasoning, careful experiments and small tools that make results easier to reuse. I’m especially interested in materials and process R&D where modelling can help teams spend their experimental effort well.</p><div className="principles"><div><b>01</b><span>Understand<br/>the mechanism</span></div><div><b>02</b><span>Test against<br/>the evidence</span></div><div><b>03</b><span>Make it<br/>usable</span></div></div></div></div></section>
}

function Experience() {
  return <section className="section experience-section"><div className="wrap"><div className="section-head compact"><div><span className="eyebrow">03 / EXPERIENCE & EDUCATION</span><h2>Grounded in<br/><em>the work.</em></h2></div><p className="section-intro">A foundation in materials science, strengthened by an applied R&D project.</p></div><div className="timeline"><article><span className="timeline-dot"/><div className="timeline-date">RESEARCH & DEVELOPMENT</div><div><h3>Master’s thesis — Canon</h3><p>Predictive modelling of dynamic surface tension in aqueous inkjet-printing systems. Model development, parameter experiments, validation, and an automated Python workflow.</p></div><span className="timeline-type">INDUSTRY</span></article><article><span className="timeline-dot"/><div className="timeline-date">INTEGRATED MASTER’S</div><div><h3>Materials engineering</h3><p>Materials-focused study with an interest in connecting composition, structure and process behaviour.</p></div><span className="timeline-type">EDUCATION</span></article></div><div className="skills-row"><span>AREAS I WORK IN</span><div>Physical chemistry <i/> Predictive modelling <i/> Experimental design <i/> Data analysis <i/> Process R&D</div></div></div></section>
}

function Contact() {
  return <footer className="contact-section" id="contact"><div className="wrap contact-wrap"><div><span className="eyebrow">04 / CONTACT</span><h2>Have a problem<br/>worth <em>understanding?</em></h2><p>I’m interested in materials and process engineering roles where careful research can lead to practical improvements.</p></div><div className="contact-cta"><a className="button button-light" href="mailto:hello@example.com">Start a conversation <Arrow /></a><span>Email address is a placeholder — replace before publishing.</span></div><div className="footer-line"><a href="#top">SARAH <span>↑</span></a><span>Materials · Modelling · Process</span><span>© 2026</span></div></div></footer>
}

export default function App() {
  return <><Hero/><Work/><About/><Experience/><Contact/></>
}
