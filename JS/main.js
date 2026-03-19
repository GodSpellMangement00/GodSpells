// 🌸 GODSPELL FINAL JS

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🌸 SAKURA PETAL BACKGROUND
  ========================== */
  const PETAL_COUNT = 25;

  for (let i = 0; i < PETAL_COUNT; i++) {
    const p = document.createElement("div");
    p.className = "petal";

    p.style.left = Math.random() * 100 + "vw";
    p.style.top = (-10 - Math.random() * 20) + "vh";
    p.style.animationDuration = (6 + Math.random() * 6) + "s";
    p.style.animationDelay = (Math.random() * 5) + "s";
    p.style.opacity = 0.4 + Math.random() * 0.6;

    document.body.appendChild(p);
  }

  /* =========================
     🎯 CARD INTERACTIONS
  ========================== */
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    // 🧿 GLOW FOLLOW + 3D TILT
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // glow position
      card.style.setProperty("--x", x + "px");
      card.style.setProperty("--y", y + "px");

      // tilt effect
      const rotateX = (y / rect.height - 0.5) * -10;
      const rotateY = (x / rect.width - 0.5) * 10;

      card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    // RESET
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });

    // 💥 CLICK EFFECT
    card.addEventListener("click", (e) => {

      // pulse animation
      card.style.transition = "transform 0.15s ease";
      card.style.transform = "scale(1.08)";

      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 180);

      // burst petals
      createBurst(e.clientX, e.clientY);
    });

  });

});


/* =========================
   🌸 BURST EFFECT FUNCTION
========================= */
function createBurst(x, y) {
  const BURST_COUNT = 8;

  for (let i = 0; i < BURST_COUNT; i++) {
    const p = document.createElement("div");
    p.className = "petal";

    p.style.position = "fixed";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.animation = "none";

    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 50;

    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    p.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
    ], {
      duration: 600,
      easing: "ease-out"
    });

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 600);
  }
}


/* =========================
   🔗 DISCORD FUNCTIONS
========================= */

// Join server
function joinDiscord() {
  window.open("https://discord.gg/YQVF7sy2gR", "_blank");
}

// Optional login (if you add later)
function loginDiscord() {
  window.location.href =
    "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&scope=identify";
}
