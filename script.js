/* =========================================================
   KHON RONG NAI PRESENTATION
   script.js
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

  menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const isOpen =
      navMenu.classList.contains("open");

    menuButton.textContent =
      isOpen ? "✕" : "☰";

  });


  document.querySelectorAll("#navMenu a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuButton.textContent = "☰";

      });

    });

}


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

const progress = document.getElementById("progress");

function updateProgress() {

  const scrollTop =
    window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percent =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  if (progress) {
    progress.style.width =
      `${percent}%`;
  }

}

window.addEventListener(
  "scroll",
  updateProgress,
  { passive: true }
);

updateProgress();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
  ".section-title, " +
  ".info-card, " +
  ".character-card, " +
  ".costume-card, " +
  ".music-grid article, " +
  ".value-grid article, " +
  ".timeline-item, " +
  ".type-card, " +
  ".story-grid > div, " +
  ".member-grid article, " +
  ".feature-box, " +
  ".compare-card"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "active"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   PRESENTATION MODE
   ========================================================= */

const presentationButton =
  document.getElementById(
    "presentationButton"
  );

const sections =
  Array.from(
    document.querySelectorAll(
      "body > section"
    )
  );

let presentationIndex = 0;


function enterPresentationMode() {

  document.body.classList.add(
    "presentation-mode"
  );

  presentationIndex = 0;

  activatePresentationSection(
    presentationIndex
  );

}


function exitPresentationMode() {

  document.body.classList.remove(
    "presentation-mode"
  );

  sections.forEach(section => {

    section.classList.remove(
      "presentation-active"
    );

  });

}


function activatePresentationSection(index) {

  if (!sections.length) {
    return;
  }

  if (index < 0) {
    index = 0;
  }

  if (index >= sections.length) {
    index = sections.length - 1;
  }

  presentationIndex = index;

  sections.forEach(section => {

    section.classList.remove(
      "presentation-active"
    );

  });

  const currentSection =
    sections[presentationIndex];

  if (currentSection) {

    currentSection.classList.add(
      "presentation-active"
    );

  }

}


if (presentationButton) {

  presentationButton.addEventListener(
    "click",
    enterPresentationMode
  );

}


/* =========================================================
   PRESENTATION KEYBOARD
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      !document.body.classList.contains(
        "presentation-mode"
      )
    ) {

      return;

    }


    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowDown" ||
      event.key === " "
    ) {

      event.preventDefault();

      activatePresentationSection(
        presentationIndex + 1
      );

    }


    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowUp"
    ) {

      event.preventDefault();

      activatePresentationSection(
        presentationIndex - 1
      );

    }


    if (
      event.key === "Escape"
    ) {

      exitPresentationMode();

    }

  }
);


/* =========================================================
   PRESENTATION BUTTONS
   ========================================================= */

const prevButton =
  document.getElementById(
    "prevSection"
  );

const nextButton =
  document.getElementById(
    "nextSection"
  );

const homeButton =
  document.getElementById(
    "homeSection"
  );


if (prevButton) {

  prevButton.addEventListener(
    "click",
    () => {

      if (
        document.body.classList.contains(
          "presentation-mode"
        )
      ) {

        activatePresentationSection(
          presentationIndex - 1
        );

      } else {

        window.scrollBy({
          top: -window.innerHeight * 0.8,
          behavior: "smooth"
        });

      }

    }
  );

}


if (nextButton) {

  nextButton.addEventListener(
    "click",
    () => {

      if (
        document.body.classList.contains(
          "presentation-mode"
        )
      ) {

        activatePresentationSection(
          presentationIndex + 1
        );

      } else {

        window.scrollBy({
          top: window.innerHeight * 0.8,
          behavior: "smooth"
        });

      }

    }
  );

}


if (homeButton) {

  homeButton.addEventListener(
    "click",
    () => {

      if (
        document.body.classList.contains(
          "presentation-mode"
        )
      ) {

        exitPresentationMode();

      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================================
   FULLSCREEN SUPPORT
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key.toLowerCase() === "f"
    ) {

      if (
        document.fullscreenElement
      ) {

        document.exitFullscreen();

      } else {

        document.documentElement
          .requestFullscreen()
          .catch(() => {});

      }

    }

  }
);


/* =========================================================
   QUIZ DATA
   ========================================================= */

const quizQuestions = [

  {
    question:
      "โขนโรงในมีลักษณะเด่นอย่างไร?",

    options: [
      "แสดงเฉพาะกลางแจ้ง",
      "ผสมผสานลักษณะของโขนและละครใน",
      "ไม่มีดนตรีประกอบ",
      "ใช้เฉพาะการขับร้อง"
    ],

    answer: 1
  },


  {
    question:
      "วรรณคดีสำคัญที่นำมาใช้ในการแสดงโขนคือเรื่องใด?",

    options: [
      "พระอภัยมณี",
      "อิเหนา",
      "รามเกียรติ์",
      "ขุนช้างขุนแผน"
    ],

    answer: 2
  },


  {
    question:
      "หัวโขนมีหน้าที่สำคัญอย่างไร?",

    options: [
      "ใช้ตกแต่งเวทีเท่านั้น",
      "ช่วยแสดงลักษณะของตัวละคร",
      "ใช้แทนเครื่องดนตรี",
      "ใช้สำหรับผู้ชม"
    ],

    answer: 1
  },


  {
    question:
      "ตัวละครใดเป็นทหารเอกฝ่ายพระราม?",

    options: [
      "ทศกัณฐ์",
      "อินทรชิต",
      "หนุมาน",
      "พิเภก"
    ],

    answer: 2
  },


  {
    question:
      "ใครเป็นกษัตริย์แห่งกรุงลงกา?",

    options: [
      "พระราม",
      "ทศกัณฐ์",
      "พระลักษมณ์",
      "สุครีพ"
    ],

    answer: 1
  },


  {
    question:
      "สิ่งใดมีบทบาทในการกำกับจังหวะและสร้างอารมณ์ของการแสดง?",

    options: [
      "ดนตรีไทย",
      "ภาพยนตร์",
      "ไฟฉาย",
      "ไมโครโฟนเท่านั้น"
    ],

    answer: 0
  },


  {
    question:
      "ข้อใดเป็นองค์ประกอบของการแสดงโขน?",

    options: [
      "การรำ",
      "การพากย์",
      "ดนตรี",
      "ถูกทุกข้อ"
    ],

    answer: 3
  },


  {
    question:
      "โขนประเภทใดมีลักษณะเกี่ยวข้องกับการแสดงหนังใหญ่?",

    options: [
      "โขนหน้าจอ",
      "โขนฉาก",
      "โขนโรงใน",
      "โขนกลางแปลง"
    ],

    answer: 0
  },


  {
    question:
      "การอนุรักษ์โขนมีความสำคัญอย่างไร?",

    options: [
      "เพื่อรักษามรดกทางวัฒนธรรม",
      "เพื่อทำให้วัฒนธรรมไทยหายไป",
      "เพื่อยกเลิกการแสดงแบบดั้งเดิม",
      "ไม่มีความสำคัญ"
    ],

    answer: 0
  },


  {
    question:
      "ข้อใดเป็นแนวทางที่เหมาะสมในการสืบสานโขน?",

    options: [
      "ไม่เรียนรู้เรื่องโขน",
      "เรียนรู้ ฝึกฝน และเผยแพร่",
      "เลิกจัดการแสดง",
      "ไม่สนใจศิลปวัฒนธรรม"
    ],

    answer: 1
  }

];


/* =========================================================
   CREATE QUIZ
   ========================================================= */

const quizContainer =
  document.getElementById(
    "quizContainer"
  );


function renderQuiz() {

  if (!quizContainer) {
    return;
  }

  quizContainer.innerHTML = "";


  quizQuestions.forEach(
    (question, questionIndex) => {

      const questionBox =
        document.createElement("div");

      questionBox.className =
        "quiz-question";


      const title =
        document.createElement("h3");

      title.textContent =
        `${questionIndex + 1}. ${question.question}`;


      questionBox.appendChild(title);


      question.options.forEach(
        (option, optionIndex) => {

          const label =
            document.createElement("label");

          label.className =
            "quiz-option";


          const input =
            document.createElement("input");

          input.type = "radio";

          input.name =
            `question-${questionIndex}`;

          input.value =
            optionIndex;


          label.appendChild(input);

          label.appendChild(
            document.createTextNode(
              option
            )
          );


          questionBox.appendChild(
            label
          );

        }
      );


      quizContainer.appendChild(
        questionBox
      );

    }
  );

}


renderQuiz();


/* =========================================================
   CHECK QUIZ
   ========================================================= */

const submitQuiz =
  document.getElementById(
    "submitQuiz"
  );

const quizResult =
  document.getElementById(
    "quizResult"
  );


if (submitQuiz) {

  submitQuiz.addEventListener(
    "click",
    () => {

      let score = 0;

      let answered = 0;


      quizQuestions.forEach(
        (question, questionIndex) => {

          const selected =
            document.querySelector(
              `input[name="question-${questionIndex}"]:checked`
            );


          if (selected) {

            answered++;

            if (
              Number(selected.value) ===
              question.answer
            ) {

              score++;

            }

          }

        }
      );


      if (answered < quizQuestions.length) {

        quizResult.style.display =
          "block";

        quizResult.innerHTML =
          `
          ⚠️ กรุณาตอบคำถามให้ครบ
          ${quizQuestions.length} ข้อ
          <br>
          ตอนนี้ตอบแล้ว ${answered}
          ข้อ
          `;

        return;

      }


      const percentage =
        Math.round(
          (score /
            quizQuestions.length) *
          100
        );


      let message = "";


      if (percentage >= 90) {

        message =
          "ยอดเยี่ยมมาก! 🎉";

      } else if (percentage >= 70) {

        message =
          "ทำได้ดีมาก! 👏";

      } else if (percentage >= 50) {

        message =
          "ทำได้ดี แต่ลองทบทวนอีกนิดนะครับ 📚";

      } else {

        message =
          "ลองกลับไปทบทวนเนื้อหาอีกครั้งนะครับ 💪";

      }


      quizResult.style.display =
        "block";


      quizResult.innerHTML =
        `
        <strong>
          ${message}
        </strong>
        <br><br>

        คะแนนของคุณ:
        <strong>
          ${score}/${quizQuestions.length}
        </strong>

        (${percentage}%)
        `;


      quizResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }
  );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const navLinks =
  document.querySelectorAll(
    "#navMenu a"
  );

const observedSections =
  document.querySelectorAll(
    "section[id]"
  );


const navObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }


        navLinks.forEach(link => {

          link.classList.remove(
            "active"
          );

        });


        const activeLink =
          document.querySelector(
            `#navMenu a[href="#${entry.target.id}"]`
          );


        if (activeLink) {

          activeLink.classList.add(
            "active"
          );

        }

      });

    },
    {
      threshold: 0.35
    }
  );


observedSections.forEach(section => {

  navObserver.observe(section);

});


/* =========================================================
   ADD ACTIVE NAV STYLE
   ========================================================= */

const activeNavStyle =
  document.createElement("style");

activeNavStyle.textContent = `

  #navMenu a.active {
    color: var(--gold-light);
  }

`;

document.head.appendChild(
  activeNavStyle
);


/* =========================================================
   IMAGE LAZY LOADING
   ========================================================= */

document.querySelectorAll("img")
  .forEach(img => {

    img.loading = "lazy";

  });


/* =========================================================
   COPY CURRENT PAGE URL
   ========================================================= */

function copyPageLink() {

  if (
    navigator.clipboard &&
    window.location.href
  ) {

    navigator.clipboard
      .writeText(
        window.location.href
      )
      .then(() => {

        alert(
          "คัดลอกลิงก์เว็บไซต์แล้ว"
        );

      })
      .catch(() => {

        alert(
          "ไม่สามารถคัดลอกลิงก์ได้"
        );

      });

  }

}


/* =========================================================
   SHARE WEBSITE
   ========================================================= */

async function shareWebsite() {

  const shareData = {

    title:
      "โขนโรงใน | Thai Classical Performance",

    text:
      "เว็บไซต์พรีเซนต์เรื่องโขนโรงใน",

    url:
      window.location.href

  };


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        shareData
      );

    } catch (error) {

      // ผู้ใช้กดยกเลิก

    }

  } else {

    copyPageLink();

  }

}


/* =========================================================
   GLOBAL SHARE KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.ctrlKey &&
      event.key.toLowerCase() === "k"
    ) {

      event.preventDefault();

      copyPageLink();

    }

  }
);


/* =========================================================
   PREVENT BROKEN HASH
   ========================================================= */

window.addEventListener(
  "load",
  () => {

    updateProgress();

    document.body.classList.add(
      "page-loaded"
    );

  }
);


/* =========================================================
   CONSOLE INFORMATION
   ========================================================= */

console.log(
  "%cโขนโรงใน",
  "color:#d8ad55;font-size:28px;font-weight:bold;"
);

console.log(
  "%cThai Classical Performance",
  "color:#c8c1b5;font-size:14px;"
);

console.log(
  "Presentation website ready."
);
