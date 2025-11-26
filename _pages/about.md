---
layout: about
title: About
permalink: /
nav: true
nav_order: 1
cv_pdf: Samuel_CV.pdf
subtitle: Research Engineer & Scientist. Sydney, Australia.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p><b>Research & Innovation Consultant</b></p>
    <p>Secure Decentralized Systems</p>
    <p>Sydney, Australia</p>
    <p></p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # set to false to hide blog posts on landing page
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="about-page-content">

<p class="tagline">Privacy-focused architect of decentralized, secure systems in AI and blockchain.</p>

<p class="intro-text">I am a researcher in distributed systems and ubiquitous computing, with a focus on secure protocols and privacy-preserving architectures. My work examines blockchain security, secure multiparty computation, and context-aware systems. I have contributed to national research programs through work at CSIRO and previously held roles with IBM and UNSW that centered on protocol design for data integrity and cross-system interoperability. My publications address federated learning, zero-knowledge proofs, blockchain consensus mechanisms, and context-aware computing in ubiquitous environments. I work across African and Australian research ecosystems on cryptographic protocols and privacy-preserving system design.</p>

<h2>Research Focus</h2>

<p>I architect <strong>privacy-by-design systems</strong> that embed trust into the foundation of digital ecosystems. My work spans distributed systems (70%) and ubiquitous computing (30%):</p>

<div class="research-areas">
  <div class="research-item">
    <strong>Distributed Systems</strong> - Blockchain security, consensus mechanisms, and cross-chain interoperability
  </div>
  <div class="research-item">
    <strong>Ubiquitous Computing</strong> - Context-aware systems, mobile computing, and embedded system integration
  </div>
  <div class="research-item">
    <strong>Privacy-Preserving Computation</strong> - Secure multiparty computation and zero-knowledge proofs
  </div>
  <div class="research-item">
    <strong>Federated Learning</strong> - Privacy-preserving machine learning in distributed environments
  </div>
</div>

<h2>Current Work</h2>

<p>As a <strong>Research & Innovation Consultant</strong> specializing in secure decentralized systems, I design and deploy blockchain-based data integrity systems and verifiable AI infrastructures for fintech and energy startups. My work focuses on architecting scalable, privacy-preserving, and interoperable blockchain solutions with applications in energy systems, carbon markets, and decentralized identity.</p>

<p><strong>Current research areas:</strong></p>
<ul>
<li>Blockchain-based data integrity systems for fintech and energy applications</li>
<li>Verifiable AI infrastructures with explainability and traceability</li>
<li>Hyperledger Fabric networks for identity management and permissioned data exchange</li>
<li>Scalability, performance, and cryptographic audits for blockchain ventures</li>
<li>DevOps pipelines for blockchain platforms with containerized testing and CI/CD</li>
</ul>

<h2>Research Contributions</h2>

<p>I completed my <strong>PhD at UNSW (2024)</strong> on "Blockchain-based Decentralized Energy Systems," developing four novel frameworks:</p>

<div class="frameworks-list">
  <div class="framework-item">
    <div class="framework-name">HARB</div>
    <div class="framework-desc">Hypergraph-Based Adaptive Consortium Blockchain</div>
    <div class="framework-venue">IEEE Internet of Things Journal</div>
  </div>
  <div class="framework-item">
    <div class="framework-name">PlexiChain</div>
    <div class="framework-desc">Secure Blockchain-Based Flexibility Aggregator</div>
    <div class="framework-venue">arXiv Preprint</div>
  </div>
  <div class="framework-item">
    <div class="framework-name">CypherChain</div>
    <div class="framework-desc">Privacy-Preserving Data Aggregation Framework</div>
    <div class="framework-venue">IEEE ICBC 2024</div>
  </div>
  <div class="framework-item">
    <div class="framework-name">BAILIF</div>
    <div class="framework-desc">Blockchain Agnostic Interoperability Framework</div>
    <div class="framework-venue">IEEE ICBC 2023</div>
  </div>
</div>

<div class="stats-row">
  <div class="stat-box">
    <div class="stat-number">12+</div>
    <div class="stat-text">Publications</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">60+</div>
    <div class="stat-text">Citations</div>
  </div>
  <div class="stat-box">
    <div class="stat-number">3</div>
    <div class="stat-text">Granted Patents</div>
  </div>
</div>

<p>Published in top-tier venues including <strong>IEEE Internet of Things Journal</strong>, <strong>Journal of Network and Computer Applications</strong>, <strong>ACM e-Energy</strong>, and <strong>IEEE ICBC</strong>.</p>

<h2>Core Philosophy</h2>

<blockquote class="philosophy-quote">
  <strong>Embed trust into the foundation of digital ecosystems. Architect privacy as a right, not a feature.</strong>
</blockquote>

<p>I believe in building systems that prioritize user privacy and data sovereignty from the ground up, ensuring that security and trust are fundamental properties rather than afterthoughts.</p>

<p class="contact-cta"><strong>Interested in collaboration?</strong> Feel free to reach out via <a href="mailto:{{ site.data.socials.email }}">email</a> or connect on <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}" target="_blank">LinkedIn</a>.</p>

</div>

<style>
.about-page-content {
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Tagline */
.tagline {
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--global-text-color);
  margin: 2rem 0 1.5rem;
  line-height: 1.6;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--global-divider-color);
}

/* Intro Text */
.intro-text {
  font-size: 1.1rem;
  color: var(--global-text-color);
  margin: 2rem 0;
  line-height: 1.9;
}

/* Research Areas */
.research-areas {
  margin: 1.5rem 0 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.research-item {
  padding: 0.75rem 0;
  color: var(--global-text-color);
  border-bottom: 1px solid var(--global-divider-color);
  transition: all 0.2s ease;
}

.research-item:last-child {
  border-bottom: none;
}

.research-item:hover {
  padding-left: 1rem;
  color: var(--global-theme-color);
}

.research-item strong {
  color: var(--global-theme-color);
  font-weight: 600;
}

/* Frameworks List */
.frameworks-list {
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.framework-item {
  padding: 1.5rem;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.framework-item:hover {
  border-color: var(--global-theme-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.framework-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
}

.framework-desc {
  font-size: 0.95rem;
  color: var(--global-text-color);
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.framework-venue {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  font-style: italic;
}

/* Stats Row */
.stats-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2.5rem 0;
  padding: 2rem 0;
  border-top: 1px solid var(--global-divider-color);
  border-bottom: 1px solid var(--global-divider-color);
}

.stat-box {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--global-theme-color);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-text {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Philosophy Quote */
.philosophy-quote {
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--global-text-color);
  border-left: 4px solid var(--global-theme-color);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  background: none;
}

.philosophy-quote strong {
  color: var(--global-theme-color);
  font-style: normal;
}

/* Contact CTA */
.contact-cta {
  text-align: center;
  padding: 2rem;
  margin: 3rem 0 2rem;
  background: var(--global-card-bg-color);
  border-radius: 8px;
  font-size: 1.05rem;
}

.contact-cta a {
  color: var(--global-theme-color);
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.contact-cta a:hover {
  border-bottom-color: var(--global-theme-color);
}

/* Section Headings */
.about-page-content h2 {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: var(--global-text-color);
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-divider-color);
}

.about-page-content h2:first-of-type {
  margin-top: 2rem;
}

/* Lists */
.about-page-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.about-page-content ul li {
  margin: 0.75rem 0;
  color: var(--global-text-color);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 768px) {
  .about-page-content {
    padding: 0 1rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .intro-text {
    font-size: 1rem;
  }
  
  .frameworks-list {
    grid-template-columns: 1fr;
  }
  
  .stats-row {
    flex-direction: column;
    gap: 2rem;
  }
  
  .philosophy-quote {
    font-size: 1.1rem;
    padding-left: 1rem;
  }
}

@media (max-width: 576px) {
  .tagline {
    font-size: 1.1rem;
  }
  
  .framework-name {
    font-size: 1.1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

</style>
