const envelopeScreen = document.getElementById("envelopeScreen");
const openEnvelope = document.getElementById("openEnvelope");
const birthdayPage = document.getElementById("birthdayPage");
const birthdayNoteScreen = document.getElementById("birthdayNoteScreen");
const backToCelebration = document.getElementById("backToCelebration");
const surpriseButton = document.getElementById("surpriseButton");
const replayButton = document.getElementById("replayButton");
const toast = document.getElementById("toast");
const fireworks = document.getElementById("fireworks");
const birthdayMusic = document.getElementById("birthdayMusic");
const giftRevealFlash = document.getElementById("giftRevealFlash");
let resumeMusicOnReturn = false;

function pauseMusicWhileAway() {
  if (birthdayMusic.paused) return;
  resumeMusicOnReturn = true;
  birthdayMusic.pause();
}

function resumeMusicWhenBack() {
  if (!resumeMusicOnReturn || document.visibilityState !== "visible") return;
  resumeMusicOnReturn = false;
  startBirthdayMusic().catch(() => {
    // Some browsers require a fresh user gesture after extended backgrounding.
  });
}

function startBirthdayMusic() {
  if (!birthdayMusic.paused) return Promise.resolve();
  birthdayMusic.muted = false;
  birthdayMusic.volume = 1;
  return birthdayMusic.play();
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) pauseMusicWhileAway();
  else resumeMusicWhenBack();
});
window.addEventListener("blur", pauseMusicWhileAway);
window.addEventListener("focus", resumeMusicWhenBack);

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function launchConfetti() {
  const colors = ["#f0a9c0", "#d9a6c5", "#f4cf8c", "#fff8f4", "#c99ab7", "#e88da9"];
  const amount = window.innerWidth < 600 ? 24 : window.innerWidth < 900 ? 60 : 130;
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.opacity = `${0.6 + Math.random() * 0.4}`;
    piece.style.setProperty("--drift", `${Math.random() * 240 - 120}px`);
    piece.style.animationDuration = `${3 + Math.random() * 3}s`;
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 7200);
  }
}

function launchFireworks() {
  const colors = ["#ff5964", "#69c7ff", "#ffd166", "#fff0d0", "#d9a6ff"];
  const mobile = window.innerWidth < 700;
  const tablet = window.innerWidth < 1000;
  const burstCount = mobile ? 5 : tablet ? 8 : 11;
  const particlesPerBurst = mobile ? 12 : tablet ? 18 : 28;

  for (let burst = 0; burst < burstCount; burst++) {
    window.setTimeout(() => {
      const x = 10 + Math.random() * 80;
      const y = 7 + Math.random() * 30;
      for (let i = 0; i < particlesPerBurst; i++) {
        const dot = document.createElement("i");
        const angle = (Math.PI * 2 * i) / particlesPerBurst;
        const distance = 55 + Math.random() * 85;
        dot.className = "burst";
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        dot.style.color = colors[Math.floor(Math.random() * colors.length)];
        dot.style.background = "currentColor";
        dot.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        dot.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
        fireworks.appendChild(dot);
        window.setTimeout(() => dot.remove(), 1300);
      }
    }, burst * 220);
  }
}

function celebrate() {
  launchConfetti();
  launchFireworks();
}

function openGift() {
  if (openEnvelope.classList.contains("open")) return;
  openEnvelope.classList.add("open");
  giftRevealFlash.classList.remove("active");
  void giftRevealFlash.offsetWidth;
  giftRevealFlash.classList.add("active");
  // Start audio directly from the user's gesture for mobile browser autoplay policies.
  startBirthdayMusic().catch(() => {});
  celebrate();
  window.setTimeout(celebrate, 900);
  window.setTimeout(celebrate, 1900);
  window.setTimeout(() => {
    envelopeScreen.classList.add("leaving");
    window.setTimeout(() => {
      envelopeScreen.style.display = "none";
      birthdayPage.classList.remove("hidden");
      birthdayPage.classList.add("visible");
      window.scrollTo(0, 0);
    }, 650);
  }, 1050);
}

openEnvelope.addEventListener("pointerdown", () => {
  startBirthdayMusic().catch(() => {});
});
openEnvelope.addEventListener("click", openGift);

surpriseButton.addEventListener("click", () => {
  celebrate();
  birthdayNoteScreen.classList.remove("hidden");
  const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  birthdayNoteScreen.scrollIntoView({ behavior: scrollBehavior, block: "start" });
});

backToCelebration.addEventListener("click", () => {
  birthdayNoteScreen.classList.add("hidden");
  birthdayPage.classList.remove("hidden");
  const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  birthdayPage.scrollIntoView({ behavior: scrollBehavior, block: "start" });
});

replayButton.addEventListener("click", () => {
  celebrate();
  showToast("Wishing you another year full of magic! ✨");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
