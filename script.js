const surpriseButton = document.getElementById("surpriseButton");
const replayButton = document.getElementById("replayButton");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function celebrate() {
  const colors = ["#f0d8a7", "#c5a6d8", "#f5eee2", "#a8b7d8", "#d9a6b7"];
  const amount = window.innerWidth < 600 ? 65 : 110;

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.opacity = `${0.55 + Math.random() * 0.45}`;
    piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
    piece.style.animationDuration = `${3 + Math.random() * 3}s`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 7000);
  }
}

surpriseButton.addEventListener("click", () => {
  celebrate();
  showToast("A little extra sparkle for your day, Kriti! ✨");
  document.getElementById("message").scrollIntoView({ behavior: "smooth" });
});

replayButton.addEventListener("click", () => {
  celebrate();
  showToast("Wishing you another year full of magic! ✨");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
