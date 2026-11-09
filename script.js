const envelopeScreen = document.getElementById("envelopeScreen");
const openEnvelope = document.getElementById("openEnvelope");
const birthdayPage = document.getElementById("birthdayPage");
const surpriseButton = document.getElementById("surpriseButton");
const replayButton = document.getElementById("replayButton");
const toast = document.getElementById("toast");
const fireworks = document.getElementById("fireworks");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function launchConfetti() {
  const colors = ["#f0a9c0", "#d9a6c5", "#f4cf8c", "#fff8f4", "#c99ab7", "#e88da9"];
  const amount = window.innerWidth < 600 ? 75 : 130;
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
  const colors = ["#e7a4bd", "#f1c878", "#c5a0d0", "#fff0b8"];
  for (let burst = 0; burst < 10; burst++) {
    window.setTimeout(() => {
      const x = 12 + Math.random() * 76;
      const y = 12 + Math.random() * 55;
      for (let i = 0; i < 28; i++) {
        const dot = document.createElement("i");
        const angle = (Math.PI * 2 * i) / 22;
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

openEnvelope.addEventListener("click", () => {
  if (openEnvelope.classList.contains("open")) return;
  openEnvelope.classList.add("open");
  celebrate();
  window.setTimeout(celebrate, 900);
  window.setTimeout(celebrate, 1900);
  window.setTimeout(() => {
    envelopeScreen.classList.add("leaving");
    window.setTimeout(() => {
      envelopeScreen.style.display = "none";
      birthdayPage.classList.remove("hidden");
      birthdayPage.classList.add("visible");
      window.scrollTo({ top: 0, behavior: "instant" });
      showToast("A little birthday magic, just for you, Richa! ✨");
    }, 650);
  }, 1050);
});

surpriseButton.addEventListener("click", () => {
  celebrate();
  showToast("A little extra sparkle for your day, Richa! ✨");
  document.getElementById("message").scrollIntoView({ behavior: "smooth" });
});

replayButton.addEventListener("click", () => {
  celebrate();
  showToast("Wishing you another year full of magic! ✨");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
