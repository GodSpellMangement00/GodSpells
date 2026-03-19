// 🌸 PETAL FALL (background)
for (let i = 0; i < 30; i++) {
  let p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "%";
  p.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(p);
}

// 🎯 3D TILT + GLOW
document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");

    const rotateX = (y / rect.height - 0.5) * -15;
    const rotateY = (x / rect.width - 0.5) * 15;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });

});

// 💥 CLICK BURST EFFECT
function burst(x, y) {
  for (let i = 0; i < 8; i++) {
    let p = document.createElement("div");
    p.className = "petal";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.position = "fixed";
    p.style.animation = "none";

    let angle = Math.random() * 360;
    let dist = 50 + Math.random() * 50;

    p.animate([
      { transform: "translate(0,0)", opacity: 1 },
      {
        transform: `translate(${Math.cos(angle) * dist}px,
        ${Math.sin(angle) * dist}px)`,
        opacity: 0
      }
    ], { duration: 600 });

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 600);
  }
}

// 🖱 CLICK ANIMATION
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", (e) => {

    // glow pulse
    card.classList.add("active");
    setTimeout(() => card.classList.remove("active"), 300);

    // burst
    burst(e.clientX, e.clientY);

  });
});

// 🔗 DISCORD JOIN
function joinDiscord() {
  window.open("https://discord.gg/YOUR_LINK");
}

// 🔐 DISCORD LOGIN (basic)
function loginDiscord() {
  window.location.href =
    "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&scope=identify";
}
