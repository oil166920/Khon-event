/* =========================================================
   KHON RONG NAI PRESENTATION
   style.css
   ========================================================= */

:root {
  --bg: #0b0b0d;
  --bg-soft: #111116;
  --card: #17171d;
  --card-2: #1d1d24;

  --gold: #d8ad55;
  --gold-light: #f0d58a;
  --gold-dark: #9d762e;

  --text: #f7f2e8;
  --text-soft: #c8c1b5;
  --muted: #8e887d;

  --border: rgba(216, 173, 85, 0.25);

  --shadow:
    0 20px 60px rgba(0, 0, 0, 0.35);

  --radius: 20px;

  --serif: "Noto Serif Thai", serif;
  --sans: "Prompt", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(216, 173, 85, 0.08),
      transparent 35%
    ),
    var(--bg);

  color: var(--text);

  font-family: var(--sans);

  line-height: 1.8;

  overflow-x: hidden;
}

body.light {
  --bg: #f5f1e8;
  --bg-soft: #ebe4d6;
  --card: #fffdf7;
  --card-2: #f4eee1;

  --text: #191714;
  --text-soft: #514c43;
  --muted: #746e63;

  --border: rgba(125, 90, 24, 0.2);
}


/* =========================================================
   GLOBAL
   ========================================================= */

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  font-family: inherit;
}

.container {
  width: min(1150px, calc(100% - 40px));
  margin: auto;
}

.section {
  position: relative;
  padding: 110px 0;
}

.section.dark {
  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.015),
      rgba(216,173,85,0.025)
    ),
    var(--bg-soft);
}

.section.gold {
  background:
    radial-gradient(
      circle at center,
      rgba(216,173,85,0.15),
      transparent 60%
    ),
    #17130c;
}

.section-title {
  display: flex;
  align-items: flex-start;
  gap: 22px;
  margin-bottom: 60px;
}

.section-title.center {
  justify-content: center;
  text-align: center;
}

.section-title .number {
  color: var(--gold);
  font-family: var(--serif);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  border: 1px solid var(--border);
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.section-title span {
  display: block;
  color: var(--gold);
  font-size: 0.75rem;
  letter-spacing: 4px;
  font-weight: 600;
  margin-bottom: 5px;
}

.section-title h2 {
  font-family: var(--serif);
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.3;
}

p {
  color: var(--text-soft);
}

.lead {
  font-family: var(--serif);
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 25px;
}

strong {
  color: var(--gold-light);
}


/* =========================================================
   PROGRESS
   ========================================================= */

#progress {
  position: fixed;
  top: 0;
  left: 0;

  width: 0;
  height: 3px;

  background:
    linear-gradient(
      90deg,
      var(--gold-dark),
      var(--gold-light),
      var(--gold)
    );

  z-index: 9999;

  box-shadow:
    0 0 12px rgba(216,173,85,0.7);
}


/* =========================================================
   NAVBAR
   ========================================================= */

.navbar {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  z-index: 5000;

  background:
    rgba(11,11,13,0.78);

  backdrop-filter: blur(18px);

  border-bottom:
    1px solid rgba(216,173,85,0.12);
}

.nav-inner {
  width: min(1250px, calc(100% - 30px));
  margin: auto;

  min-height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: var(--serif);

  font-size: 1.15rem;
  font-weight: 700;

  color: var(--gold-light);
}

.brand span {
  color: var(--gold);
  font-size: 1.4rem;
}

nav {
  display: flex;
  align-items: center;
  gap: 20px;
}

nav a {
  color: var(--text-soft);
  font-size: 0.82rem;
  transition: 0.25s;
}

nav a:hover {
  color: var(--gold-light);
}

.menu-button {
  display: none;

  width: 45px;
  height: 45px;

  border: 1px solid var(--border);

  background: transparent;

  color: var(--gold-light);

  border-radius: 12px;

  font-size: 1.2rem;
}


/* =========================================================
   HERO
   ========================================================= */

.hero {
  position: relative;

  min-height: 100vh;

  display: grid;
  place-items: center;

  text-align: center;

  padding: 120px 20px 70px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at center,
      rgba(216,173,85,0.13),
      transparent 35%
    ),
    radial-gradient(
      circle at 20% 30%,
      rgba(216,173,85,0.05),
      transparent 30%
    ),
    var(--bg);
}

.hero-pattern {
  position: absolute;

  inset: 0;

  opacity: 0.12;

  background-image:
    linear-gradient(
      45deg,
      transparent 45%,
      rgba(216,173,85,0.2) 50%,
      transparent 55%
    );

  background-size: 55px 55px;

  mask-image:
    radial-gradient(
      circle,
      black,
      transparent 75%
    );
}

.hero-content {
  position: relative;
  z-index: 2;

  width: min(800px, 100%);
}

.hero-symbol {
  color: var(--gold);

  font-size: 4rem;

  margin-bottom: 20px;

  animation:
    float 4s ease-in-out infinite;
}

.eyebrow {
  color: var(--gold);

  font-size: 0.75rem;

  letter-spacing: 6px;

  font-weight: 600;

  margin-bottom: 10px;
}

.hero h1 {
  font-family: var(--serif);

  font-size: clamp(4rem, 13vw, 8rem);

  line-height: 1;

  background:
    linear-gradient(
      180deg,
      #fff4d1,
      var(--gold),
      #8e6420
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;

  text-shadow:
    0 20px 50px rgba(216,173,85,0.12);
}

.hero h2 {
  font-family: var(--serif);

  font-size: clamp(1.1rem, 3vw, 1.8rem);

  margin: 18px 0;

  color: var(--text);
}

.hero-content > p:not(.eyebrow) {
  max-width: 650px;

  margin: auto;

  color: var(--text-soft);

  font-size: 1rem;
}

.ornament-line {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 15px;

  color: var(--gold);

  margin: 22px 0;
}

.ornament-line span {
  width: 100px;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      var(--gold)
    );
}

.ornament-line span:last-child {
  background:
    linear-gradient(
      90deg,
      var(--gold),
      transparent
    );
}

.hero-buttons {
  display: flex;

  justify-content: center;

  gap: 15px;

  flex-wrap: wrap;

  margin-top: 35px;
}

.button {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-height: 50px;

  padding: 0 25px;

  border-radius: 999px;

  border: 1px solid var(--border);

  cursor: pointer;

  font-weight: 600;

  transition:
    transform 0.25s,
    box-shadow 0.25s,
    background 0.25s;
}

.button:hover {
  transform: translateY(-3px);
}

.button.gold {
  color: #17120a;

  background:
    linear-gradient(
      135deg,
      var(--gold-light),
      var(--gold)
    );

  border-color: transparent;

  box-shadow:
    0 12px 35px rgba(216,173,85,0.2);
}

.button.outline {
  background: transparent;

  color: var(--gold-light);
}

.button.outline:hover {
  background: rgba(216,173,85,0.08);
}

.scroll-indicator {
  position: absolute;

  bottom: 25px;

  left: 50%;

  transform: translateX(-50%);

  color: var(--muted);

  font-size: 0.75rem;

  letter-spacing: 1px;
}


/* =========================================================
   TWO COLUMN
   ========================================================= */

.two-column {
  display: grid;

  grid-template-columns:
    1.4fr 0.8fr;

  gap: 60px;

  align-items: center;
}

.text-content p {
  margin-bottom: 20px;
}

.info-panel {
  padding: 35px;

  border:
    1px solid var(--border);

  background:
    linear-gradient(
      145deg,
      rgba(216,173,85,0.08),
      rgba(255,255,255,0.02)
    );

  border-radius: var(--radius);

  box-shadow: var(--shadow);
}

.panel-icon {
  font-size: 3rem;

  margin-bottom: 15px;
}

.info-panel h3 {
  font-family: var(--serif);

  font-size: 1.5rem;

  margin-bottom: 20px;
}

.info-panel ul {
  list-style: none;
}

.info-panel li {
  color: var(--text-soft);

  padding: 10px 0;

  border-bottom:
    1px solid rgba(216,173,85,0.1);
}

.info-panel li::before {
  content: "✦";

  color: var(--gold);

  margin-right: 10px;
}


/* =========================================================
   TIMELINE
   ========================================================= */

.timeline {
  position: relative;

  max-width: 900px;

  margin: auto;
}

.timeline::before {
  content: "";

  position: absolute;

  left: 25px;

  top: 0;
  bottom: 0;

  width: 1px;

  background:
    linear-gradient(
      var(--gold),
      transparent
    );
}

.timeline-item {
  display: grid;

  grid-template-columns: 52px 1fr;

  gap: 25px;

  margin-bottom: 45px;

  position: relative;
}

.timeline-number {
  width: 52px;
  height: 52px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: var(--bg);

  border:
    1px solid var(--gold);

  color: var(--gold);

  z-index: 2;

  font-weight: 700;
}

.timeline-item h3 {
  font-family: var(--serif);

  font-size: 1.35rem;

  margin-bottom: 7px;
}


/* =========================================================
   FEATURE BOX
   ========================================================= */

.feature-box {
  display: grid;

  grid-template-columns: 100px 1fr;

  gap: 35px;

  padding: 45px;

  border-radius: var(--radius);

  border:
    1px solid var(--border);

  background:
    linear-gradient(
      120deg,
      rgba(216,173,85,0.1),
      rgba(255,255,255,0.02)
    );

  margin-bottom: 40px;
}

.feature-icon {
  font-size: 4rem;

  text-align: center;
}

.feature-box h3 {
  font-family: var(--serif);

  font-size: 1.7rem;

  margin-bottom: 15px;
}

.feature-box p {
  margin-bottom: 12px;
}

.comparison {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 25px;
}

.compare-card {
  padding: 30px;

  background: var(--card);

  border:
    1px solid var(--border);

  border-radius: var(--radius);
}

.compare-card > span {
  font-size: 2.5rem;
}

.compare-card h3 {
  font-family: var(--serif);

  font-size: 1.4rem;

  margin: 12px 0 15px;
}

.compare-card ul {
  list-style: none;
}

.compare-card li {
  color: var(--text-soft);

  padding: 7px 0;
}

.compare-card li::before {
  content: "✦";

  color: var(--gold);

  margin-right: 10px;
}


/* =========================================================
   TYPES
   ========================================================= */

.type-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 15px;

  margin-bottom: 50px;
}

.type-card {
  padding: 28px 20px;

  min-height: 270px;

  border:
    1px solid var(--border);

  border-radius: var(--radius);

  background: var(--card);

  transition: 0.3s;
}

.type-card:hover {
  transform: translateY(-7px);

  border-color:
    rgba(216,173,85,0.55);
}

.type-card.featured {
  background:
    linear-gradient(
      145deg,
      rgba(216,173,85,0.2),
      rgba(216,173,85,0.04)
    );

  border-color:
    var(--gold);
}

.type-card small {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;
}

.type-card h3 {
  font-family: var(--serif);

  margin: 20px 0 10px;

  font-size: 1.3rem;
}

.type-card p {
  font-size: 0.9rem;
}


/* =========================================================
   TABLE
   ========================================================= */

.table-wrapper {
  overflow-x: auto;

  border:
    1px solid var(--border);

  border-radius: var(--radius);
}

table {
  width: 100%;

  border-collapse: collapse;

  min-width: 650px;
}

th,
td {
  padding: 17px 20px;

  text-align: left;

  border-bottom:
    1px solid rgba(216,173,85,0.1);
}

th {
  color: var(--gold-light);

  background:
    rgba(216,173,85,0.08);

  font-family: var(--serif);
}

td {
  color: var(--text-soft);
}

.highlight-row td {
  color: var(--gold-light);

  background:
    rgba(216,173,85,0.08);
}


/* =========================================================
   INFO CARDS
   ========================================================= */

.card-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}

.info-card {
  padding: 30px;

  border:
    1px solid var(--border);

  background: var(--card);

  border-radius: var(--radius);

  transition: 0.3s;
}

.info-card:hover {
  transform: translateY(-5px);

  box-shadow: var(--shadow);
}

.info-card > div {
  font-size: 2.4rem;

  margin-bottom: 10px;
}

.info-card h3 {
  font-family: var(--serif);

  font-size: 1.3rem;

  margin-bottom: 8px;
}


/* =========================================================
   CHARACTERS
   ========================================================= */

.character-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}

.character-card {
  text-align: center;

  padding: 30px 20px;

  border:
    1px solid var(--border);

  border-radius: var(--radius);

  background:
    linear-gradient(
      145deg,
      rgba(216,173,85,0.05),
      rgba(255,255,255,0.01)
    );

  transition: 0.3s;
}

.character-card:hover {
  transform:
    translateY(-8px)
    scale(1.01);

  border-color: var(--gold);
}

.character-card > div {
  font-size: 3.5rem;

  margin-bottom: 10px;
}

.character-card h3 {
  font-family: var(--serif);

  color: var(--gold-light);

  margin-bottom: 8px;
}

.character-card p {
  font-size: 0.88rem;
}


/* =========================================================
   COSTUME
   ========================================================= */

.costume-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;
}

.costume-card {
  padding: 35px 25px;

  text-align: center;

  border:
    1px solid var(--border);

  border-radius: var(--radius);

  background: var(--card);
}

.big-icon {
  font-size: 4rem;

  margin-bottom: 15px;
}

.costume-card h3 {
  font-family: var(--serif);

  margin-bottom: 10px;
}


/* =========================================================
   MUSIC
   ========================================================= */

.large-text {
  max-width: 800px;

  font-family: var(--serif);

  font-size: 1.4rem;

  color: var(--text);

  margin-bottom: 45px;
}

.music-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;
}

.music-grid article {
  padding: 30px;

  background:
    rgba(255,255,255,0.04);

  border:
    1px solid rgba(216,173,85,0.2);

  border-radius: var(--radius);
}

.music-grid article > div {
  font-size: 2.4rem;

  margin-bottom: 10px;
}

.music-grid h3 {
  font-family: var(--serif);

  margin-bottom: 7px;
}


/* =========================================================
   STEPS
   ========================================================= */

.steps {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 15px;
}

.steps > div {
  padding: 25px;

  border:
    1px solid var(--border);

  border-radius: var(--radius);

  background: var(--card);
}

.steps span {
  color: var(--gold);

  font-weight: 700;
}

.steps h3 {
  font-family: var(--serif);

  margin: 15px 0 8px;

  font-size: 1.2rem;
}


/* =========================================================
   RAMAKIEN
   ========================================================= */

.ramakien-box {
  padding: 45px;

  border-radius: var(--radius);

  background:
    linear-gradient(
      135deg,
      rgba(216,173,85,0.1),
      transparent
    );

  border:
    1px solid var(--border);

  margin-bottom: 30px;
}

.ramakien-box h3 {
  font-family: var(--serif);

  font-size: 1.7rem;

  margin-bottom: 15px;
}

.ramakien-box p {
  margin-bottom: 12px;
}

.story-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 15px;
}

.story-grid > div {
  padding: 25px;

  border:
    1px solid var(--border);

  border-radius: var(--radius);
}

.story-grid span {
  color: var(--gold);

  font-weight: 700;
}

.story-grid h3 {
  font-family: var(--serif);

  margin: 10px 0;
}


/* =========================================================
   VALUE
   ========================================================= */

.value-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;
}

.value-grid article {
  padding: 35px 25px;

  border:
    1px solid var(--border);

  border-radius: var(--radius);

  background: var(--card);
}

.value-grid article > span {
  font-size: 2.5rem;
}

.value-grid h3 {
  font-family: var(--serif);

  margin: 15px 0 8px;
}


/* =========================================================
   CONSERVATION
   ========================================================= */

.conservation {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 50px;

  align-items: center;
}

.conservation h3 {
  font-family: var(--serif);

  font-size: 1.8rem;

  margin-bottom: 15px;
}

.conservation p {
  margin-bottom: 15px;
}

.conservation-list {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 15px;
}

.conservation-list div {
  padding: 25px;

  border:
    1px solid var(--border);

  border-radius: var(--radius);

  background: var(--card);

  color: var(--text);

  font-family: var(--serif);

  font-size: 1.1rem;
}

.conservation-list b {
  display: block;

  color: var(--gold);

  font-family: var(--sans);

  font-size: 0.75rem;

  margin-bottom: 10px;
}


/* =========================================================
   QUIZ
   ========================================================= */

.quiz-container {
  max-width: 850px;

  margin-bottom: 30px;
}

.quiz-question {
  padding: 30px;

  margin-bottom: 20px;

  background: var(--card);

  border:
    1px solid var(--border);

  border-radius: var(--radius);
}

.quiz-question h3 {
  font-family: var(--serif);

  font-size: 1.15rem;

  margin-bottom: 20px;
}

.quiz-option {
  display: block;

  padding: 13px 15px;

  margin: 8px 0;

  border:
    1px solid rgba(216,173,85,0.12);

  border-radius: 12px;

  cursor: pointer;

  color: var(--text-soft);

  transition: 0.2s;
}

.quiz-option:hover {
  background:
    rgba(216,173,85,0.08);

  border-color: var(--border);
}

.quiz-option input {
  margin-right: 8px;
}

#quizResult {
  margin-top: 25px;

  padding: 25px;

  border:
    1px solid var(--gold);

  border-radius: var(--radius);

  color: var(--gold-light);

  display: none;
}


/* =========================================================
   REFERENCES
   ========================================================= */

.references {
  max-width: 850px;

  margin: auto;
}

.references p {
  padding: 15px 0;

  border-bottom:
    1px solid var(--border);
}

.warning {
  margin-top: 25px;

  padding: 18px;

  border-radius: 12px;

  background:
    rgba(216,173,85,0.08);

  color: var(--text-soft);

  font-size: 0.9rem;
}


/* =========================================================
   MEMBERS
   ========================================================= */

.members {
  background:
    radial-gradient(
      circle at center,
      rgba(216,173,85,0.12),
      transparent 55%
    );
}

.member-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;

  max-width: 900px;

  margin: auto;
}

.member-grid article {
  padding: 30px;

  text-align: center;

  border:
    1px solid var(--border);

  border-radius: var(--radius);

  background: var(--card);

  transition: 0.3s;
}

.member-grid article:hover {
  transform: translateY(-5px);

  border-color: var(--gold);
}

.member-grid span {
  display: block;

  color: var(--gold);

  font-size: 0.75rem;

  letter-spacing: 2px;

  margin-bottom: 8px;
}

.member-grid h3 {
  font-family: var(--serif);

  font-size: 1.15rem;
}


/* =========================================================
   FOOTER
   ========================================================= */

footer {
  text-align: center;

  padding: 80px 20px;

  border-top:
    1px solid var(--border);

  background: #080809;
}

.footer-symbol {
  color: var(--gold);

  font-size: 3rem;

  margin-bottom: 15px;
}

footer h2 {
  font-family: var(--serif);

  font-size: 2.2rem;

  margin-bottom: 10px;
}

footer p {
  margin-bottom: 10px;
}

footer small {
  color: var(--muted);
}


/* =========================================================
   PRESENTATION CONTROLS
   ========================================================= */

.presentation-controls {
  position: fixed;

  right: 20px;
  bottom: 20px;

  z-index: 4000;

  display: flex;

  flex-direction: column;

  gap: 7px;
}

.presentation-controls button {
  width: 42px;
  height: 42px;

  border:
    1px solid var(--border);

  border-radius: 50%;

  background:
    rgba(11,11,13,0.85);

  color: var(--gold-light);

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition: 0.25s;
}

.presentation-controls button:hover {
  background: var(--gold);

  color: #111;
}


/* =========================================================
   ANIMATION
   ========================================================= */

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

}

.reveal {
  opacity: 0;

  transform:
    translateY(30px);

  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal.active {
  opacity: 1;

  transform:
    translateY(0);
}


/* =========================================================
   PRESENTATION MODE
   ========================================================= */

body.presentation-mode {
  overflow: hidden;
}

body.presentation-mode section {
  display: none;

  min-height: 100vh;

  padding-top: 120px;
}

body.presentation-mode section.presentation-active {
  display: flex;

  align-items: center;

  justify-content: center;
}

body.presentation-mode .navbar,
body.presentation-mode .presentation-controls {
  display: none;
}

body.presentation-mode footer {
  display: none;
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1100px) {

  nav {
    gap: 12px;
  }

  nav a {
    font-size: 0.75rem;
  }

  .type-grid {
    grid-template-columns:
      repeat(3, 1fr);
  }

  .steps {
    grid-template-columns:
      repeat(3, 1fr);
  }

}

@media (max-width: 850px) {

  .menu-button {
    display: block;
  }

  nav {
    position: absolute;

    top: 70px;

    left: 15px;
    right: 15px;

    display: none;

    flex-direction: column;

    align-items: stretch;

    padding: 15px;

    border:
      1px solid var(--border);

    border-radius: 16px;

    background:
      rgba(11,11,13,0.96);

    backdrop-filter: blur(20px);
  }

  nav.open {
    display: flex;
  }

  nav a {
    padding: 10px 12px;

    border-radius: 8px;
  }

  nav a:hover {
    background:
      rgba(216,173,85,0.08);
  }

  .two-column,
  .conservation {
    grid-template-columns: 1fr;
  }

  .character-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .costume-grid,
  .music-grid,
  .value-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .card-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .story-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .member-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

}

@media (max-width: 600px) {

  .container {
    width: min(
      100% - 28px,
      1150px
    );
  }

  .section {
    padding: 80px 0;
  }

  .section-title {
    margin-bottom: 40px;

    gap: 14px;
  }

  .section-title .number {
    width: 40px;
    height: 40px;

    font-size: 0.8rem;
  }

  .section-title h2 {
    font-size: 1.8rem;
  }

  .section-title span {
    letter-spacing: 2px;

    font-size: 0.65rem;
  }

  .hero {
    min-height: 100svh;

    padding-top: 100px;
  }

  .hero h1 {
    font-size: 4rem;
  }

  .hero-symbol {
    font-size: 3rem;
  }

  .hero-buttons {
    flex-direction: column;

    width: 100%;
  }

  .button {
    width: 100%;
  }

  .feature-box {
    grid-template-columns: 1fr;

    padding: 30px;

    text-align: center;
  }

  .comparison {
    grid-template-columns: 1fr;
  }

  .type-grid {
    grid-template-columns: 1fr;
  }

  .card-grid,
  .character-grid,
  .costume-grid,
  .music-grid,
  .value-grid,
  .steps,
  .story-grid,
  .member-grid {
    grid-template-columns: 1fr;
  }

  .conservation-list {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns:
      45px 1fr;
  }

  .timeline-number {
    width: 45px;
    height: 45px;
  }

  .timeline::before {
    left: 22px;
  }

  .ramakien-box {
    padding: 30px;
  }

  .presentation-controls {
    right: 10px;
    bottom: 10px;
  }

  .presentation-controls button {
    width: 38px;
    height: 38px;
  }

}


/* =========================================================
   ACCESSIBILITY
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;

    animation-duration: 0.01ms !important;

    animation-iteration-count: 1 !important;

    transition-duration: 0.01ms !important;
  }

}
