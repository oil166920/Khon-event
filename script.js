// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

});


// ================================
// SCROLL PROGRESS
// ================================

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  document.getElementById("progress").style.width =
    progress + "%";

});


// ================================
// PRESENTATION NAVIGATION
// ================================

const sections = [
  ...document.querySelectorAll("section")
];

let currentSection = 0;


function updateCurrentSection() {

  let closest = 0;

  let smallestDistance = Infinity;

  sections.forEach((section, index) => {

    const distance =
      Math.abs(section.getBoundingClientRect().top);

    if (distance < smallestDistance) {

      smallestDistance = distance;

      closest = index;

    }

  });

  currentSection = closest;
}


function previousSection() {

  updateCurrentSection();

  if (currentSection > 0) {

    sections[currentSection - 1]
      .scrollIntoView({
        behavior: "smooth"
      });

  }

}


function nextSection() {

  updateCurrentSection();

  if (currentSection < sections.length - 1) {

    sections[currentSection + 1]
      .scrollIntoView({
        behavior: "smooth"
      });

  }

}


function goTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


document
  .getElementById("prevBtn")
  .addEventListener("click", previousSection);


document
  .getElementById("nextBtn")
  .addEventListener("click", nextSection);


document
  .getElementById("topBtn")
  .addEventListener("click", goTop);


// ================================
// KEYBOARD PRESENTATION
// ================================

document.addEventListener("keydown", event => {

  if (
    event.key === "ArrowDown" ||
    event.key === "PageDown" ||
    event.key === " "
  ) {

    event.preventDefault();

    nextSection();

  }


  if (
    event.key === "ArrowUp" ||
    event.key === "PageUp"
  ) {

    event.preventDefault();

    previousSection();

  }


  if (event.key === "Home") {

    event.preventDefault();

    goTop();

  }

});


// ================================
// QUIZ
// ================================

document
  .getElementById("checkQuiz")
  .addEventListener("click", () => {

    let score = 0;

    const questions = [
      "q1",
      "q2",
      "q3"
    ];


    questions.forEach(question => {

      const answer =
        document.querySelector(
          `input[name="${question}"]:checked`
        );

      if (
        answer &&
        answer.value === "1"
      ) {

        score++;

      }

    });


    const complete =
      questions.every(question =>
        document.querySelector(
          `input[name="${question}"]:checked`
        )
      );


    const result =
      document.getElementById("quizResult");


    if (!complete) {

      result.textContent =
        "⚠️ กรุณาตอบคำถามให้ครบทุกข้อ";

      return;

    }


    if (score === 3) {

      result.textContent =
        "🎉 ยอดเยี่ยม! ได้ 3 / 3 คะแนน";

    }

    else if (score === 2) {

      result.textContent =
        "👏 ดีมาก! ได้ 2 / 3 คะแนน";

    }

    else {

      result.textContent =
        `📚 ได้ ${score} / 3 คะแนน ลองทบทวนเนื้อหาอีกครั้ง`;

    }

  });


// ================================
// SWIPE ON MOBILE
// ================================

let touchStartY = 0;


document.addEventListener(
  "touchstart",
  event => {

    touchStartY =
      event.changedTouches[0].screenY;

  },
  {
    passive: true
  }
);


document.addEventListener(
  "touchend",
  event => {

    const touchEndY =
      event.changedTouches[0].screenY;

    const difference =
      touchStartY - touchEndY;


    if (Math.abs(difference) < 60) {
      return;
    }


    if (difference > 0) {

      nextSection();

    } else {

      previousSection();

    }

  },
  {
    passive: true
  }
);


// ================================
// CARD ANIMATION
// ================================

const revealStyle =
  document.createElement("style");


revealStyle.textContent = `

.type-card,
.feature-card,
.character,
.value-card,
.member {

  opacity: 0;

  transform: translateY(25px);

  transition:
    opacity .7s ease,
    transform .7s ease;

}


.type-card.show,
.feature-card.show,
.character.show,
.value-card.show,
.member.show {

  opacity: 1;

  transform: translateY(0);

}

`;


document.head.appendChild(revealStyle);


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(
    ".type-card, .feature-card, .character, .value-card, .member"
  )
  .forEach(element => {

    observer.observe(element);

  });
