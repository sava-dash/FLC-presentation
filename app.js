const challengeCards = [
  {
    step: "01",
    title: "Users Expect Intelligent Products",
    text: "The bar has shifted. Users no longer tolerate static experiences and now expect products that learn, adapt, and surface insights on their behalf.",
  },
  {
    step: "02",
    title: "AI Creates Competitive Moats",
    text: "When embedded deeply in a product's architecture, AI becomes a true differentiator that is difficult to replicate and compounds in value over time.",
  },
  {
    step: "03",
    title: "FuseLab Bridges Design & AI",
    text: "Most agencies do design or AI. FuseLab does both simultaneously, shaping the AI experience from the first click to the final output.",
  },
  {
    step: "04",
    title: "Product-Layer Intelligence",
    text: "FuseLab embeds AI at the product design layer, not as an afterthought, but as a structural capability that changes how users work.",
  },
];

const opportunityCards = [
  {
    tag: "Step 1",
    title: "Identify the Friction",
    text: "Map where users lose time, struggle for answers, or face decision overload. These are the AI opportunity zones.",
  },
  {
    tag: "Step 2",
    title: "Map AI Solutions",
    text: "Match each friction point to the right AI capability, whether that means LLMs, ML models, NLP, or predictive analytics.",
  },
  {
    tag: "Step 3",
    title: "Design the AI Experience",
    text: "Build interfaces that make AI outputs feel natural, trustworthy, and immediately useful to real users.",
  },
];

const roadmapSteps = [
  {
    label: "Method 1",
    title: "Human-Centered Design",
    text: "Every AI interaction is designed for real users, with a focus on how intelligence feels, not just what it does.",
  },
  {
    label: "Method 2",
    title: "AI-First Architecture",
    text: "FuseLab integrates intelligence before the first wireframe so the product structure itself is designed around AI capability.",
  },
  {
    label: "Method 3",
    title: "Measurable Impact",
    text: "Design decisions are tied to adoption, efficiency, and business outcomes because good design should move the needle.",
  },
  {
    label: "Method 4",
    title: "Measure the Result",
    text: "Success metrics are defined upfront, from time saved to decision quality to customer adoption and business value.",
  },
];

const templatePages = [
  {
    tag: "Commercial Real Estate",
    title: "Avison Young",
    text: "AI-powered business development and CRM tooling that helps brokers prioritize outreach, automate research, and focus on closing deals.",
    bullets: [
      "AI-driven lead scoring",
      "Automated prospect research",
      "Smart CRM recommendations",
    ],
  },
  {
    tag: "Analytics Platform",
    title: "AI Insights",
    text: "An LLM-powered analytics experience that lets any user surface trends, ask questions in plain language, and get instant reporting support.",
    bullets: [
      "Automated insight surfacing",
      "Natural language querying",
      "Predictive analytics and reporting",
    ],
  },
  {
    tag: "Collaboration Tool",
    title: "RealTime Canvas",
    text: "An AI-assisted real-time collaboration canvas with smart layout suggestions, workflow intelligence, and in-context assistance.",
    bullets: [
      "Smart layout suggestions",
      "Auto-layout and arrange",
      "Workflow intelligence in context",
    ],
  },
];

const impactMetrics = [
  { label: "Avison Young", value: "73%", note: "BD time reclaimed so brokers spend more time closing deals." },
  { label: "FuseDash RTI", value: "3×", note: "Faster workflows through AI-assisted interface guidance and layout support." },
  { label: "Drill Sense", value: "5×", note: "Faster analysis through natural language querying and automated insights." },
];

const projectProfiles = {
  avison: {
    overviewTitle: "Full Project Details",
    overviewText:
      "FuseLab designed an AI-powered business development experience for commercial real estate brokers, combining lead intelligence, prospect research, and relationship guidance into a single product workflow.",
    cards: [
      {
        label: "Project Goal",
        value:
          "Reduce manual BD work and help brokers prioritize the right relationships at the right time.",
      },
      {
        label: "Services",
        value:
          "Product strategy, UX design, AI workflow design, dashboard design, and CRM interaction design.",
      },
      {
        label: "Sector",
        value: "Commercial Real Estate",
      },
      {
        label: "Year",
        value: "2025",
      },
      {
        label: "Timeline",
        value: "3 product phases",
      },
    ],
  },
  fusedash: {
    overviewTitle: "Full Project Details",
    overviewText:
      "FuseDash RTI is a real-time interface concept where AI actively reduces layout burden, supports decision-making inside the workflow, and improves how teams interact with dense operational data.",
    cards: [
      {
        label: "Project Goal",
        value:
          "Create an intelligent interface that helps users move through complex collaborative workflows with less friction.",
      },
      {
        label: "Services",
        value:
          "Interface design, workflow mapping, component systems, AI co-pilot patterns, and interaction design.",
      },
      {
        label: "Sector",
        value: "Real-Time Interface",
      },
      {
        label: "Year",
        value: "2025",
      },
      {
        label: "Timeline",
        value: "Concept to prototype",
      },
    ],
  },
  drillSense: {
    overviewTitle: "Full Project Details",
    overviewText:
      "Drill Sense turns complex operational telemetry into an actionable intelligence experience, using AI to surface patterns, support exploration, and accelerate decision-making for technical users.",
    cards: [
      {
        label: "Project Goal",
        value:
          "Help teams move from overwhelming data volume to clear recommendations, insight surfacing, and proactive action.",
      },
      {
        label: "Services",
        value:
          "Data experience design, information architecture, insight workflows, dashboard UX, and AI-assisted reporting.",
      },
      {
        label: "Sector",
        value: "Operational Intelligence",
      },
      {
        label: "Year",
        value: "2025",
      },
      {
        label: "Timeline",
        value: "Multi-release platform evolution",
      },
    ],
  },
};

const nextSteps = [
  {
    title: "Ready to embed AI into your next product?",
    text: "FuseLab Creative combines design thinking and intelligent systems to shape AI into something users can actually feel and trust.",
  },
  {
    title: "Design the intelligence, not just the interface",
    text: "FuseLab treats AI as part of the product experience itself, from architecture and workflows to decision-making and interaction design.",
  },
  {
    title: "fuselabcreative.com",
    text: "Use this closing panel for your CTA, contact path, and one-line statement of how AI will change the next product experience.",
  },
];

const challengeGrid = document.getElementById("challengeGrid");
const opportunityGrid = document.getElementById("opportunityGrid");
const roadmapContainer = document.getElementById("roadmapSteps");
const templatePagesContainer = document.getElementById("templatePages");
const impactMetricsContainer = document.getElementById("impactMetrics");
const nextStepsContainer = document.getElementById("nextSteps");
const tocList = document.getElementById("tocList");
const avisonOverview = document.getElementById("avisonOverview");
const avisonProfileGrid = document.getElementById("avisonProfileGrid");
const fusedashOverview = document.getElementById("fusedashOverview");
const fusedashProfileGrid = document.getElementById("fusedashProfileGrid");
const drillSenseOverview = document.getElementById("drillSenseOverview");
const drillSenseProfileGrid = document.getElementById("drillSenseProfileGrid");

const deck = document.getElementById("deck");
const slides = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".rail-nav a")];
const topbarTitle = document.getElementById("topbarTitle");
const slideIndex = document.getElementById("slideIndex");
const slideTotal = document.getElementById("slideTotal");
const progressFill = document.getElementById("progressFill");
const prevSlideButton = document.getElementById("prevSlide");
const nextSlideButton = document.getElementById("nextSlide");

function renderProjectProfile(profile, overviewContainer, gridContainer) {
  overviewContainer.innerHTML = `
    <span>Overview</span>
    <h4>${profile.overviewTitle}</h4>
    <p>${profile.overviewText}</p>
  `;

  gridContainer.innerHTML = profile.cards
    .map(
      (card) => `
        <article class="project-profile-card">
          <span>${card.label}</span>
          <h4>${card.value}</h4>
        </article>
      `
    )
    .join("");
}

function renderCards() {
  challengeGrid.innerHTML = challengeCards
    .map(
      (card) => `
        <article class="challenge-card">
          <span>${card.step}</span>
          <h4>${card.title}</h4>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");

  opportunityGrid.innerHTML = opportunityCards
    .map(
      (card) => `
        <article class="opportunity-card">
          <span>${card.tag}</span>
          <h4>${card.title}</h4>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");

  roadmapContainer.innerHTML = roadmapSteps
    .map(
      (item) => `
        <article class="timeline-item">
          <span>${item.label}</span>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

  templatePagesContainer.innerHTML = templatePages
    .map(
      (page) => `
        <article class="template-card">
          <div>
            <span>${page.tag}</span>
            <h4>${page.title}</h4>
            <p>${page.text}</p>
          </div>
          <ul class="browser-points">
            ${page.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  impactMetricsContainer.innerHTML = impactMetrics
    .map(
      (metric) => `
        <article class="impact-metric">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
          <p>${metric.note}</p>
        </article>
      `
    )
    .join("");

  nextStepsContainer.innerHTML = nextSteps
    .map(
      (step) => `
        <article class="next-step-item">
          <strong>${step.title}</strong>
          <p>${step.text}</p>
        </article>
      `
    )
    .join("");

  renderProjectProfile(projectProfiles.avison, avisonOverview, avisonProfileGrid);
  renderProjectProfile(projectProfiles.fusedash, fusedashOverview, fusedashProfileGrid);
  renderProjectProfile(projectProfiles.drillSense, drillSenseOverview, drillSenseProfileGrid);

  tocList.innerHTML = slides
    .map((slide, index) => {
      if (slide.id === "cover") {
        return "";
      }

      return `
        <li>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${slide.dataset.title}</strong>
        </li>
      `;
    })
    .join("");

  slideTotal.textContent = String(slides.length).padStart(2, "0");
}

function updateSlideState(activeId) {
  const activeIndex = slides.findIndex((slide) => slide.id === activeId);

  if (activeIndex === -1) {
    return;
  }

  const activeSlide = slides[activeIndex];
  const progress = ((activeIndex + 1) / slides.length) * 100;

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });

  topbarTitle.textContent = activeSlide.dataset.title;
  slideIndex.textContent = String(activeIndex + 1).padStart(2, "0");
  progressFill.style.width = `${progress}%`;

  prevSlideButton.disabled = activeIndex === 0;
  nextSlideButton.disabled = activeIndex === slides.length - 1;
}

function goToSlide(index) {
  const boundedIndex = Math.max(0, Math.min(index, slides.length - 1));
  slides[boundedIndex].scrollIntoView({ behavior: "smooth", block: "start" });
}

function getCurrentSlideIndex() {
  const viewportHeight = deck.clientHeight || window.innerHeight;

  return slides.findIndex((slide) => {
    const rect = slide.getBoundingClientRect();
    return rect.top >= -viewportHeight * 0.25 && rect.top < viewportHeight * 0.35;
  });
}

function getObserverRoot() {
  return getComputedStyle(deck).overflowY === "auto" ? deck : null;
}

function bindEvents() {
  prevSlideButton.addEventListener("click", () => {
    const currentIndex = getCurrentSlideIndex();
    goToSlide((currentIndex === -1 ? 0 : currentIndex) - 1);
  });

  nextSlideButton.addEventListener("click", () => {
    const currentIndex = getCurrentSlideIndex();
    goToSlide((currentIndex === -1 ? 0 : currentIndex) + 1);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault();
      const currentIndex = getCurrentSlideIndex();
      goToSlide((currentIndex === -1 ? 0 : currentIndex) + 1);
    }

    if (event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      const currentIndex = getCurrentSlideIndex();
      goToSlide((currentIndex === -1 ? 0 : currentIndex) - 1);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href")?.replace("#", "");
      const targetIndex = slides.findIndex((slide) => slide.id === targetId);
      goToSlide(targetIndex);
    });
  });
}

function observeSlides() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio)[0];

      if (visibleEntry) {
        updateSlideState(visibleEntry.target.id);
      }
    },
    {
      root: getObserverRoot(),
      threshold: [0.35, 0.55, 0.75],
    }
  );

  slides.forEach((slide) => observer.observe(slide));
}

renderCards();
bindEvents();
observeSlides();
updateSlideState(slides[0].id);
