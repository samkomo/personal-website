---
layout: page
permalink: /publications/
title: Publications
description: Research publications in blockchain, privacy-preserving computation, and decentralized energy systems. Includes journal articles, conference papers, book chapters, and patents.
nav: true
nav_order: 2
---

<div class="publications-page">

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<h2>Journal Articles</h2>

<div class="publications">
{% bibliography --query @article --group_by none %}
</div>

<h2>Conference Papers</h2>

<div class="publications">
{% bibliography --query @inproceedings --group_by none %}
</div>

<h2>Book Chapters</h2>

<div class="publications">
{% bibliography --query @incollection --group_by none %}
</div>

<h2>Theses</h2>

<div class="publications">
{% bibliography --query @phdthesis --group_by none %}
{% bibliography --query @mastersthesis --group_by none %}
</div>

<h2>Preprints & Reports</h2>

<div class="publications">
{% bibliography --query @misc[abbr!=Patent] --group_by none %}
</div>

<h2>Patents</h2>

<div class="patents-section">
  <div class="patent-item">
    <div class="patent-header">
      <div class="patent-title">
        <strong>US11497156B2</strong> - Farm Cultivation Quality
      </div>
      <span class="patent-badge">Granted: November 2022</span>
    </div>
    <div class="patent-details">
      <a href="https://patents.google.com/patent/US11497156B2/en" target="_blank" class="patent-link">
        <i class="fa-solid fa-external-link"></i> View Patent
      </a>
    </div>
  </div>
  
  <div class="patent-item">
    <div class="patent-header">
      <div class="patent-title">
        <strong>US9961139B2</strong> - Cooperative Download Among Low-End Devices Under Resource-Constrained Environment
      </div>
      <span class="patent-badge">Granted: May 2018</span>
    </div>
    <div class="patent-details">
      <a href="https://patents.google.com/patent/US9961139B2/en" target="_blank" class="patent-link">
        <i class="fa-solid fa-external-link"></i> View Patent
      </a>
    </div>
  </div>
  
  <div class="patent-item">
    <div class="patent-header">
      <div class="patent-title">
        <strong>US20180189449A1</strong> - Tracking Items Used for Providing Medical Services
      </div>
      <span class="patent-badge">Granted: July 2018</span>
    </div>
    <div class="patent-details">
      <a href="https://patents.google.com/patent/US20180189449A1/en" target="_blank" class="patent-link">
        <i class="fa-solid fa-external-link"></i> View Patent
      </a>
    </div>
  </div>
</div>

</div>

<style>
.publications-page {
  max-width: 1000px;
  margin: 0 auto;
}

.publications-page h2 {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: var(--global-text-color);
  font-weight: 600;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--global-divider-color);
}

.publications-page h2:first-of-type {
  margin-top: 2rem;
}

/* Publications styling */
.publications {
  margin: 1.5rem 0 3rem;
}

/* Patents Section */
.patents-section {
  margin: 2rem 0;
}

.patent-item {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
}

.patent-item:hover {
  border-color: var(--global-theme-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.patent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  gap: 1rem;
}

.patent-title {
  flex: 1;
  min-width: 0;
}

.patent-header strong {
  color: var(--global-text-color);
  font-size: 1.05rem;
}

.patent-badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-theme-color);
  border-radius: 15px;
  font-size: 0.85rem;
  color: var(--global-theme-color);
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}


.patent-details {
  margin-top: 0.5rem;
}

.patent-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--global-theme-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.patent-link:hover {
  color: var(--global-theme-color);
  text-decoration: underline;
}

.patent-link i {
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .patent-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .patent-header strong {
    min-width: auto;
  }
}

</style>
