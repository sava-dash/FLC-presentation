const tocEntries = [
  { title: "Real-Time Interface (Canvas)" },
  { title: "Simulation & Recommendation" },
  { title: "CLI (Command-Line Interface)" },
  { title: "Generative UI (Adaptive Widgets)" },
  { title: "Digital Twin" },
];

const patternProfiles = {
  canvas: {
    description:
      "A live, continuously updating visual surface where AI processes and renders output in real time, like collaborative whiteboards, live drawing assistants, or AI-augmented creative canvases.",
    benefits: [
      "Sub-100ms response loops for fluid interaction",
      "Stateful sessions that retain visual context",
      "Bi-directional co-creation between user and AI",
    ],
  },
  simulation: {
    description:
      "AI runs scenarios, models outcomes, and surfaces ranked, personalized recommendations directly inside the UI to close the loop between what might happen and what the user should do next.",
    benefits: [
      "Background modeling keeps the interface focused on outcomes",
      "Supports deterministic or probabilistic ranking logic",
      "Improves over time through user choice feedback",
    ],
  },
  cli: {
    description:
      "A text-driven interface where users issue natural language or structured commands to an AI and receive precise, structured output, bridging developer ergonomics with AI intelligence.",
    benefits: [
      "Fast, expressive control for technical users",
      "Composable workflows through chaining and piping",
      "Transparent execution with visible AI actions",
    ],
  },
  generative: {
    description:
      "UI components dynamically reconstruct themselves based on user intent and live data, so the interface itself becomes an AI output instead of just the content inside it.",
    benefits: [
      "Layouts adapt without hardcoded component choices",
      "Representation changes based on data shape and user role",
      "Widgets update themselves as context evolves",
    ],
  },
  twin: {
    description:
      "A live, AI-synchronized virtual replica of a real-world entity, machine, building, person, or system that reflects its current state and allows predictive interaction.",
    benefits: [
      "Continuous synchronization with real-world conditions",
      "AI explains what is happening and what happens next",
      "Actions in the twin can influence live systems",
    ],
  },
};

const comparisonMatrix = {
  columns: [
    "Canvas",
    "Simulation & Rec.",
    "CLI",
    "Generative UI",
    "Digital Twin",
  ],
  rows: [
    {
      dimension: "Primary user",
      values: ["Creators", "Analysts / shoppers", "Developers", "Business users", "Operations teams"],
    },
    {
      dimension: "Interaction style",
      values: ["Visual / gestural", "Parametric / passive", "Text commands", "Natural language", "Monitoring / query"],
    },
    {
      dimension: "AI role",
      values: ["Co-creator", "Modeler + Ranker", "Executor", "UI generator", "Interpreter"],
    },
    {
      dimension: "Data freshness",
      values: ["Real-time stream", "Synthetic + behavioral", "On-demand", "Live + historical", "Continuous sync"],
    },
    {
      dimension: "Output type",
      values: ["Visual render", "Ranked recommendations", "Text / structured", "Dynamic components", "3D state model"],
    },
    {
      dimension: "Complexity to build",
      values: ["High", "High", "Medium", "Medium", "Very High"],
    },
  ],
};

const decisionCards = [
  {
    step: "01",
    title: "Is the user creating something visually?",
    text: "Choose Canvas for live, gestural, visual co-creation.",
  },
  {
    step: "02",
    title: "Do you need to model outcomes and guide decisions?",
    text: "Choose Simulation & Recommendation.",
  },
  {
    step: "03",
    title: "Is your user technical and focused on speed and control?",
    text: "Choose CLI for direct, expressive command-driven interaction.",
  },
  {
    step: "04",
    title: "Does the UI need to adapt to different data shapes or users?",
    text: "Choose Generative UI that rebuilds itself on demand.",
  },
  {
    step: "05",
    title: "Do you have a real-world counterpart that needs monitoring?",
    text: "Choose a Digital Twin for synchronized, predictive interaction.",
  },
];

const takeawayCards = [
  {
    tag: "Takeaway 01",
    title: "AI can be the interface",
    text: "It is no longer just content inside UI. In many products, intelligence determines structure, behavior, and response loops.",
  },
  {
    tag: "Takeaway 02",
    title: "Each UI approach solves a different problem",
    text: "Canvas supports creation, simulation supports decisions, CLI supports control, adaptive widgets support flexibility, and digital twins support reflection.",
  },
  {
    tag: "Takeaway 03",
    title: "The right choice depends on context",
    text: "User type, data freshness, interface output, and implementation complexity should drive the UI approach selection.",
  },
  {
    tag: "Takeaway 04",
    title: "Hybrid systems are powerful",
    text: "Combining UI approaches often creates the strongest user experience, especially in complex operational or data-heavy products.",
  },
  {
    tag: "Takeaway 05",
    title: "All five UI approaches are viable today",
    text: "Current tooling already supports production-ready implementations across streaming, ranking, terminal, dynamic UI, and twin architectures.",
  },
];

const challengeGrid = document.getElementById("decisionGrid");
const roadmapContainer = document.getElementById("comparisonTable");
const templatePagesContainer = document.getElementById("takeawayGrid");
const tocList = document.getElementById("tocList");

const canvasCards = document.getElementById("canvasCards");
const simulationCards = document.getElementById("simulationCards");
const cliCards = document.getElementById("cliCards");
const generativeCards = document.getElementById("generativeCards");
const twinCards = document.getElementById("twinCards");

const deck = document.getElementById("deck");
const slides = [...document.querySelectorAll(".slide")];
const navLinks = [...document.querySelectorAll(".rail-nav a")];
const topbarTitle = document.getElementById("topbarTitle");
const slideIndex = document.getElementById("slideIndex");
const slideTotal = document.getElementById("slideTotal");
const progressFill = document.getElementById("progressFill");
const prevSlideButton = document.getElementById("prevSlide");
const nextSlideButton = document.getElementById("nextSlide");
const videoFullscreenButtons = [...document.querySelectorAll("[data-video-fullscreen]")];

function renderPatternCards(profile, container) {
  container.innerHTML = `
    <article class="project-profile-card project-profile-card--detail">
      <p class="detail-summary">${profile.description}</p>
      ${
        profile.benefits
          ? `<div class="detail-stack">
              <span>Key benefits</span>
              <ul class="detail-benefits">
                ${profile.benefits.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>`
          : ""
      }
    </article>
  `;
}

function renderComparisonTable() {
  roadmapContainer.innerHTML = `
    <thead>
      <tr>
        <th>Dimension</th>
        ${comparisonMatrix.columns.map((column) => `<th>${column}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${comparisonMatrix.rows
        .map(
          (row) => `
            <tr>
              <th>${row.dimension}</th>
              ${row.values.map((value) => `<td>${value}</td>`).join("")}
            </tr>
          `
        )
        .join("")}
    </tbody>
  `;
}

function renderCards() {
  tocList.innerHTML = tocEntries
    .map(
      (entry) => `
        <li>
          <strong>${entry.title}</strong>
        </li>
      `
    )
    .join("");

  renderPatternCards(patternProfiles.canvas, canvasCards);

  renderPatternCards(patternProfiles.simulation, simulationCards);

  renderPatternCards(patternProfiles.cli, cliCards);

  renderPatternCards(patternProfiles.generative, generativeCards);

  renderPatternCards(patternProfiles.twin, twinCards);

  renderComparisonTable();

  challengeGrid.innerHTML = decisionCards
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

  templatePagesContainer.innerHTML = takeawayCards
    .map(
      (card) => `
        <article class="template-card">
          <div>
            <span>${card.tag}</span>
            <h4>${card.title}</h4>
            <p>${card.text}</p>
          </div>
        </article>
      `
    )
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

function requestVideoFullscreen(video) {
  if (video.requestFullscreen) {
    video.requestFullscreen();
    return;
  }

  if (video.webkitEnterFullscreen) {
    video.webkitEnterFullscreen();
    return;
  }

  if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
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

  videoFullscreenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const media = button.closest(".project-profile-media");
      const video = media?.querySelector("video");

      if (video) {
        requestVideoFullscreen(video);
      }
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
