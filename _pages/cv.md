---
layout: page
permalink: /cv/
title: CV
description:
nav: true
nav_order: 4
---

<p>
  <a class="btn-cv" href="{{ '/assets/pdf/cv.pdf' | relative_url }}" target="_blank" rel="noopener">Download the PDF</a>
</p>

<div class="cv-embed">
  <object data="{{ '/assets/pdf/cv.pdf' | relative_url }}" type="application/pdf" width="100%" height="100%" aria-label="CV PDF">
    <p>Your browser cannot display the embedded PDF — you can <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}">download it directly</a>, or read the summary below.</p>
  </object>
</div>

### Education

<div class="cv-entry">
  <div class="cv-entry-head">
    <span class="cv-entry-title">PhD — Nokia Bell Labs &amp; University of Cambridge</span>
    <span class="cv-entry-date">2022 – present</span>
  </div>
  <div class="cv-entry-sub">Jesus College · Math &amp; Algorithms Group (Bell Labs) and Theoretical Condensed Matter Group (Cambridge)</div>
  <p>Thesis: <em>Learning by Relaxation: Equilibrium Propagation for Neuromorphic Generative Modelling</em>. Supervisors: Prof. Claudio Castelnovo (Cambridge), Dr Joachim Wabnig (Nokia Bell Labs). Thesis submission May 2027.</p>
</div>

<div class="cv-entry">
  <div class="cv-entry-head">
    <span class="cv-entry-title">MMathPhys &amp; BA Physics — University of Oxford</span>
    <span class="cv-entry-date">2018 – 2022</span>
  </div>
  <div class="cv-entry-sub">Lincoln College</div>
  <p>Master of Mathematical and Theoretical Physics, Distinction. BA Physics, First Class — ranked 1st in a cohort of ~200 in second-year examinations.</p>
</div>

### Experience

<div class="cv-entry">
  <div class="cv-entry-head">
    <span class="cv-entry-title">PhD Researcher — Nokia Bell Labs &amp; University of Cambridge</span>
    <span class="cv-entry-date">2022 – present</span>
  </div>
  <p>Proved that a predictive-coding network with one added linear energy term carries the gradient of an Energy Matching potential, and trained it entirely by Equilibrium Propagation to 3.64 FID on CIFAR-10 (3.54 for backprop), the first backprop-free generative model at this quality (<strong>PotentialEP</strong>). Introduced <strong>GradEP</strong>, extending EP from shaping energy minima to training energy gradients, and built <strong>FlowEqProp</strong>, the first EP-trained flow-matching generative model (Best Paper, ICONS '26). Developed EP training for <strong>Oscillator Ising Machines</strong> matching backprop on MNIST under realistic hardware constraints; a hardware implementation is under way with Nokia and TU Eindhoven. Uncovered a saddles-to-minima topological crossover governing glassy dynamics on rugged energy landscapes (submitted to <em>Nature Communications</em>).</p>
</div>

<div class="cv-entry">
  <div class="cv-entry-head">
    <span class="cv-entry-title">ML Technical Project Lead — Alan Turing Institute &amp; UK Ministry of Justice</span>
    <span class="cv-entry-date">2025 – 2026</span>
  </div>
  <p>Led short-horizon risk forecasting: gradient-boosted and interpretable EBM models over 1,500+ engineered features and 20M+ records, improving recall by 50% over prior baselines, plus LLM pipelines for semantic incident categorisation and case-note surfacing.</p>
</div>

<div class="cv-entry">
  <div class="cv-entry-head">
    <span class="cv-entry-title">Research Fellow — MARS Alignment Research Programme, Cambridge AI Safety Hub</span>
    <span class="cv-entry-date">2024 – 2025</span>
  </div>
  <p>Evaluated frontier LLM abilities in model compression, mechanistic interpretability, and feature steering for ML R&amp;D tasks.</p>
</div>

<div class="cv-entry">
  <div class="cv-entry-head">
    <span class="cv-entry-title">Research Assistant — Quantum Matter in High Magnetic Fields Group, Oxford</span>
    <span class="cv-entry-date">2021 – 2022</span>
  </div>
  <p>Co-authored two <em>Physical Review B</em> papers on multi-band superconductivity and impurity effects in FeSe.</p>
</div>

<div class="cv-entry">
  <div class="cv-entry-head">
    <span class="cv-entry-title">Nuclear Analysis Summer Student — ISIS Neutronics Group, STFC</span>
    <span class="cv-entry-date">2020</span>
  </div>
  <p>Enhanced the FETCH2 radiation modelling codebase; presented benchmarking results at Imperial College.</p>
</div>

### Teaching &amp; supervision

<div class="cv-entry">
  <p>Supervised undergraduate <strong>Statistical Mechanics</strong> and <strong>Mathematical Methods</strong> at Cambridge for three years (sole instructor, ~20 students). Supervised a Master’s dissertation on saddles-to-minima crossovers in kinetically constrained Ising models (2024–25); co-supervising a second from 2026.</p>
</div>

### Service

<div class="cv-entry">
  <p>Reviewer, NeurIPS Workshop on Machine Learning and the Physical Sciences (ML4PS), 2025–2026.</p>
</div>

### Awards

<div class="cv-entry">
<ul>
  <li><strong>Best Paper Award</strong>, International Conference on Neuromorphic Systems (ICONS '26) — FlowEqProp</li>
  <li><strong>Selected participant</strong>, ELLIS Cambridge Summer School on Probabilistic Machine Learning, 2026</li>
  <li><strong>G-Research Grant</strong> (£2,000), 2025</li>
  <li><strong>ICONS Student Travel Award</strong> ($1,000), 2025</li>
  <li><strong>EPSRC CASE PhD Studentship</strong> with Nokia UK, 2022</li>
  <li><strong>Winton Capital Prize</strong>, 1st of ~200 in Oxford Physics second-year examinations, 2020</li>
</ul>
</div>

### Technical skills

<div class="cv-entry">
  <p><strong>Languages:</strong> Python, Julia, MATLAB, C++, Java, R, FORTRAN. </p>
  <p><strong>ML:</strong> PyTorch, JAX, NumPy, Hugging Face, XGBoost, LightGBM, InterpretML.</p>
  <p><strong>Infrastructure:</strong> SLURM/HPC, AWS, Git, Bash.</p>
</div>

<p class="cv-footnote">Full publication list on the <a href="{{ '/publications/' | relative_url }}">publications page</a>.</p>