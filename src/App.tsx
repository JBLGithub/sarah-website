const Arrow = () => <span aria-hidden="true">↗</span>

function Hero() {
  return <section className="hero-simple" id="top">
    <div className="hero-simple-grid" aria-hidden="true" />
    <header className="site-header wrap">
      <a className="wordmark" href="#top"><span className="mark">S.</span> Sarah <small>Materials engineer</small></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact" className="nav-contact">Contact <Arrow /></a></nav>
    </header>
    <main className="hero-simple-main wrap">
      <div className="hero-simple-copy">
        <span className="eyebrow">MATERIALS ENGINEER</span>
        <h1>Sarah</h1>
        <p>Materials · Modelling · Process</p>
        <a className="button button-dark" href="#work">View selected work <span>↓</span></a>
      </div>
      <div className="hero-simple-art">
        <img src="/sarah-cartoon.jpg" alt="Cartoon illustration of Sarah" />
      </div>
    </main>
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
