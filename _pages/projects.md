---
layout: page
title: Projects
permalink: /projects/
description: Research projects organized into frameworks and systems. Frameworks focus on novel architectures and protocols, while systems represent deployed applications and platforms.
nav: true
nav_order: 3
---

<div class="projects-page">
  <div class="projects-intro">
    <p class="lead">Research projects organized into <strong>frameworks</strong> and <strong>systems</strong>. Frameworks focus on novel architectures and protocols, while systems represent deployed applications and platforms.</p>
  </div>

  {% assign systems = site.data.projects | where: "category", "systems" | sort: "importance" %}
  {% assign frameworks = site.data.projects | where: "category", "frameworks" | sort: "importance" %}

  {% if systems.size > 0 %}
  <section class="projects-section">
    <div class="section-header">
      <h2 class="section-title">
        <i class="fa-solid fa-server"></i>
        Systems
      </h2>
      <p class="section-subtitle">Deployed applications and platforms</p>
    </div>
    <div class="row">
      {% for project in systems %}
        {% include projects_modern.liquid project=project %}
      {% endfor %}
    </div>
  </section>
  {% endif %}

  {% if frameworks.size > 0 %}
  <section class="projects-section">
    <div class="section-header">
      <h2 class="section-title">
        <i class="fa-solid fa-cube"></i>
        Frameworks
      </h2>
      <p class="section-subtitle">Novel architectures and protocols for decentralized systems</p>
    </div>
    <div class="row">
      {% for project in frameworks %}
        {% include projects_modern.liquid project=project %}
      {% endfor %}
    </div>
  </section>
  {% endif %}
</div>

<style>
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.projects-intro {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--global-divider-color);
}

.projects-intro .lead {
  font-size: 1.15rem;
  color: var(--global-text-color);
  line-height: 1.8;
  margin: 0;
}

.projects-section {
  margin-bottom: 4rem;
}

.section-header {
  margin-bottom: 2rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.section-title i {
  color: var(--global-theme-color);
  font-size: 1.75rem;
}

.section-subtitle {
  color: var(--global-text-color-light);
  font-size: 1rem;
  margin: 0;
}

/* Project Card Styles */
.project-card {
  height: 100%;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: var(--global-theme-color);
}

.project-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: var(--global-bg-color);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-category-badge,
.project-status-badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
}

.project-category-badge {
  background: rgba(255, 255, 255, 0.9);
  color: var(--global-theme-color);
}

.project-status-badge {
  background: rgba(255, 255, 255, 0.9);
  color: var(--global-text-color);
}

.project-status-badge.status-active {
  background: rgba(76, 175, 80, 0.9);
  color: white;
}

.project-status-badge.status-completed {
  background: rgba(33, 150, 243, 0.9);
  color: white;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.project-card:hover .project-title {
  color: var(--global-theme-color);
}

.project-description {
  font-size: 0.95rem;
  color: var(--global-text-color-light);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
}

.project-period,
.project-patent,
.project-publication {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--global-text-color-light);
}

.project-period i,
.project-patent i,
.project-publication i {
  color: var(--global-theme-color);
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--global-divider-color);
}

.project-github {
  color: var(--global-text-color-light);
  font-size: 1.1rem;
  transition: color 0.2s ease;
}

.project-github:hover {
  color: var(--global-theme-color);
}

/* Responsive */
@media (max-width: 768px) {
  .projects-page {
    padding: 1rem 0.5rem;
  }

  .projects-intro {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .project-image-wrapper {
    height: 180px;
  }

  .project-content {
    padding: 1.25rem;
  }

  .project-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.25rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
