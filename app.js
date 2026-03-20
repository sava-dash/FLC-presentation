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
    pictogram: "pictogram-design-thinking-team.svg",
  },
  {
    label: "Method 2",
    title: "AI-First Architecture",
    text: "FuseLab integrates intelligence before the first wireframe so the product structure itself is designed around AI capability.",
    pictogram: "pictogram-ai.svg",
  },
  {
    label: "Method 3",
    title: "Measurable Impact",
    text: "Design decisions are tied to adoption, efficiency, and business outcomes because good design should move the needle.",
    pictogram: "pictogram-chart-evaluation.svg",
  },
  {
    label: "Method 4",
    title: "Measure the Result",
    text: "Success metrics are defined upfront, from time saved to decision quality to customer adoption and business value.",
    pictogram: "pictogram-insights.svg",
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

const tocEntries = [
  { number: "03", title: "Who We Are" },
  { number: "04", title: "The Opportunity" },
  { number: "05", title: "FuseLab's AI Integration Approach" },
  { number: "06", title: "Product Impact" },
  { number: "07", title: "Avison Young" },
  { number: "08", title: "FuseDash Real Time Interface" },
  { number: "09", title: "Drill Sense" },
  { number: "10", title: "Portfolio Summary" },
];

const projectProfiles = {
  avison: {
    overviewText:
      "FuseLab designed an AI-powered business development experience for commercial real estate brokers, combining lead intelligence, prospect research, and relationship guidance into a single product workflow.",
    features: [
      "AI lead prioritization and broker scoring",
      "In-context prospect research summaries",
      "Relationship guidance built into daily workflow",
    ],
  },
  fusedash: {
    overviewText:
      "FuseDash RTI is a real-time interface concept where AI actively reduces layout burden, supports decision-making inside the workflow, and improves how teams interact with dense operational data.",
    features: [
      "AI-assisted layout and arrangement suggestions",
      "Context-aware co-pilot prompts during sessions",
      "Workflow guidance inside dense data views",
    ],
  },
  drillSense: {
    overviewText:
      "Drill Sense turns complex operational telemetry into an actionable intelligence experience, using AI to surface patterns, support exploration, and accelerate decision-making for technical users.",
    features: [
      "Automated anomaly and pattern surfacing",
      "Operational insight summaries from live telemetry",
      "Faster decision support for technical teams",
    ],
  },
};

const challengeGrid = document.getElementById("challengeGrid");
const opportunityGrid = document.getElementById("opportunityGrid");
const roadmapContainer = document.getElementById("roadmapSteps");
const templatePagesContainer = document.getElementById("templatePages");
const tocList = document.getElementById("tocList");
const avisonProfileGrid = document.getElementById("avisonProfileGrid");
const avisonFeatures = document.getElementById("avisonFeatures");
const fusedashProfileGrid = document.getElementById("fusedashProfileGrid");
const fusedashFeatures = document.getElementById("fusedashFeatures");
const drillSenseProfileGrid = document.getElementById("drillSenseProfileGrid");
const drillSenseFeatures = document.getElementById("drillSenseFeatures");

const deck = document.getElementById("deck");
const slides = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".rail-nav a")];
const topbarTitle = document.getElementById("topbarTitle");
const slideIndex = document.getElementById("slideIndex");
const slideTotal = document.getElementById("slideTotal");
const progressFill = document.getElementById("progressFill");
const prevSlideButton = document.getElementById("prevSlide");
const nextSlideButton = document.getElementById("nextSlide");

function renderProjectProfile(profile, gridContainer) {
  gridContainer.innerHTML = `
    <article class="project-profile-card project-profile-card--feature">
      <span>Approach</span>
      <p>${profile.overviewText}</p>
    </article>
  `;
}

function renderProjectFeatures(profile, container) {
  container.innerHTML = `
    <span>Key AI Interface Features</span>
    <ul class="project-feature-list">
      ${profile.features
        .map(
          (feature, index) => `
            <li>
              <strong>${String(index + 1).padStart(2, "0")}</strong>
              <p>${feature}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
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
          <img
            class="timeline-pictogram"
            src="${item.pictogram}"
            alt=""
            aria-hidden="true"
          />
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

  renderProjectProfile(projectProfiles.avison, avisonProfileGrid);
  renderProjectProfile(projectProfiles.fusedash, fusedashProfileGrid);
  renderProjectProfile(projectProfiles.drillSense, drillSenseProfileGrid);
  renderProjectFeatures(projectProfiles.avison, avisonFeatures);
  renderProjectFeatures(projectProfiles.fusedash, fusedashFeatures);
  renderProjectFeatures(projectProfiles.drillSense, drillSenseFeatures);

  tocList.innerHTML = tocEntries
    .map((slide, index) => {
      return `
        <li>
          <span>${slide.number}</span>
          <strong>${slide.title}</strong>
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
