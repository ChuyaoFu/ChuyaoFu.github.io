---
layout: page
title: industry experience
permalink: /projects/
description: Industry research experience in embodied AI, VLA systems, and world models.
nav: true
nav_order: 2
---

<p class="industry-intro">
  I work across data, models, and real-robot deployment, with an emphasis on turning
  embodied-AI research into systems that operate reliably in the physical world.
</p>

<div class="industry-experience">
  <section id="baai" class="industry-card" aria-labelledby="baai-heading">
    <header class="industry-card__header">
      <div class="industry-logo-panel">
        <img
          src="{{ '/assets/img/industry/baai-logo.png' | relative_url }}"
          alt="Beijing Academy of Artificial Intelligence logo"
          loading="eager"
        >
      </div>
      <div class="industry-card__heading">
        <p class="industry-eyebrow">Research Internship</p>
        <h2 id="baai-heading">Beijing Academy of Artificial Intelligence</h2>
        <p class="industry-role">Embodied Multimodal Large Models Research Center</p>
        <div class="industry-meta" aria-label="Internship details">
          <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> Jun. 2025 – Sep. 2025</span>
          <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Beijing</span>
        </div>
      </div>
    </header>

    <div class="industry-card__body">
      <div class="industry-workstreams">
        <article class="industry-workstream">
          <p class="industry-workstream__index">01</p>
          <h3>VLA pretraining and data pipelines</h3>
          <p>
            Processed large-scale real-robot datasets, including AgiBot-World and DROID,
            through action normalization, tokenization, and structured conversion for
            cross-embodiment VLA pretraining.
          </p>
          <a class="industry-link" href="https://github.com/FlagOpen/RoboBrain-X0" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            RoboBrain-X0
          </a>
        </article>

        <article class="industry-workstream">
          <p class="industry-workstream__index">02</p>
          <h3>VLA reinforcement post-training</h3>
          <p>
            Reproduced and evaluated robot-policy post-training pipelines on real-robot
            manipulation tasks, contributing experiments to FORCE.
          </p>
          <a class="industry-link" href="https://arxiv.org/abs/2606.26006" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-file-lines" aria-hidden="true"></i>
            FORCE
          </a>
        </article>
      </div>

      <div class="industry-media-grid" aria-label="BAAI robot demonstrations">
        <figure class="industry-video-card">
          <video
            controls
            playsinline
            preload="metadata"
            poster="{{ '/assets/img/industry/baai-usb-insertion-poster.png' | relative_url }}"
          >
            <source src="{{ '/assets/video/industry/baai-usb-insertion.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <figcaption>RL post-training · USB insertion</figcaption>
        </figure>

        <figure class="industry-video-card">
          <video
            controls
            playsinline
            preload="metadata"
            poster="{{ '/assets/img/industry/baai-cup-pickup-poster.png' | relative_url }}"
          >
            <source src="{{ '/assets/video/industry/baai-cup-pickup.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <figcaption>RL post-training · Cup pickup</figcaption>
        </figure>
      </div>
    </div>

  </section>

  <section id="xtalpi" class="industry-card" aria-labelledby="xtalpi-heading">
    <header class="industry-card__header">
      <div class="industry-logo-panel">
        <img
          src="{{ '/assets/img/industry/xtalpi-logo.png' | relative_url }}"
          alt="XtalPi logo"
          loading="lazy"
        >
      </div>
      <div class="industry-card__heading">
        <p class="industry-eyebrow">Research Internship</p>
        <h2 id="xtalpi-heading">XtalPi</h2>
        <p class="industry-role">Future Chemistry Department</p>
        <div class="industry-meta" aria-label="Internship details">
          <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> Mar. 2026 – Apr. 2026</span>
          <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Shenzhen</span>
        </div>
      </div>
    </header>

    <div class="industry-card__body">
      <div class="industry-workstreams industry-workstreams--single">
        <article class="industry-workstream">
          <p class="industry-workstream__index">01</p>
          <h3>Biological-laboratory VLA deployment</h3>
          <p>
            Trained and deployed VLA policies, including LingBot-VLA, π<sub>0</sub>, and
            π<sub>0.5</sub>, for laboratory automation. Integrated perception, policy
            inference, and control on real robot platforms, followed by iterative
            evaluation and failure analysis.
          </p>
        </article>
      </div>

      <div class="industry-media-grid" aria-label="XtalPi robot demonstrations">
        <figure class="industry-video-card">
          <video
            controls
            playsinline
            preload="metadata"
            poster="{{ '/assets/img/industry/xtalpi-demo-1-poster.png' | relative_url }}"
          >
            <source src="{{ '/assets/video/industry/xtalpi-demo-1.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <figcaption>Laboratory manipulation · Demo I</figcaption>
        </figure>

        <figure class="industry-video-card">
          <video
            controls
            playsinline
            preload="metadata"
            poster="{{ '/assets/img/industry/xtalpi-demo-2-poster.png' | relative_url }}"
          >
            <source src="{{ '/assets/video/industry/xtalpi-demo-2.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <figcaption>Laboratory manipulation · Demo II</figcaption>
        </figure>
      </div>
    </div>

  </section>

  <section id="muka" class="industry-card" aria-labelledby="muka-heading">
    <header class="industry-card__header">
      <div class="industry-logo-panel industry-logo-panel--dark">
        <img
          src="{{ '/assets/img/industry/muka-robotics-logo.png' | relative_url }}"
          alt="Muka Robotics logo"
          loading="lazy"
        >
      </div>
      <div class="industry-card__heading">
        <p class="industry-eyebrow">Research Internship</p>
        <h2 id="muka-heading">Muka Robotics</h2>
        <p class="industry-role">World Models and Foundation Pretraining</p>
        <div class="industry-meta" aria-label="Internship details">
          <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> Jul. 2026 – Present</span>
          <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Beijing</span>
        </div>
      </div>
    </header>

    <div class="industry-card__body">
      <div class="industry-workstreams">
        <article class="industry-workstream">
          <p class="industry-workstream__index">01</p>
          <h3>World-model representation learning</h3>
          <p>
            Developing representation-learning methods and data-cleaning pipelines for
            foundational world-action-model pretraining. I also organize a collaborative
            knowledge base on representations for world models.
          </p>
          <a
            class="industry-link"
            href="https://github.com/ChuyaoFu/Awesome-Representation-for-World-Models"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            Awesome Representation for World Models
          </a>
        </article>

        <article class="industry-workstream">
          <p class="industry-workstream__index">02</p>
          <h3>Physical world model · Tabletop curling</h3>
          <p>
            Built a closed-loop demo in which a robot observes an evolving game state,
            predicts physical outcomes, and competes against a human player.
          </p>
        </article>
      </div>

      <div class="industry-media-grid industry-media-grid--single" aria-label="Muka Robotics demonstration">
        <figure class="industry-video-card">
          <video
            controls
            playsinline
            preload="metadata"
            poster="{{ '/assets/img/industry/muka-tabletop-curling-poster.png' | relative_url }}"
          >
            <source src="{{ '/assets/video/industry/muka-tabletop-curling.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <figcaption>Physical world model · Human–robot tabletop curling</figcaption>
        </figure>
      </div>
    </div>

  </section>
</div>
