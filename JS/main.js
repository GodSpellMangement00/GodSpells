// 🌸 GODSPELL FINAL JS

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ⭐ STARS BACKGROUND
  ========================== */
  for (let i = 0; i < 60; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random();

    document.body.appendChild(star);
  }

  /* =========================
     🌸 SAKURA PETALS
  ========================== */
  for (let i = 0; i < 25; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";
    petal.style.opacity = 0.4 + Math.random() * 0.6;

    document.body.appendChild(petal);
  }

});


/* =========================
   🔽 MENU TOGGLE SYSTEM
========================= */
function toggleMenu(){
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("active");
}

// close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".menu")) {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) dropdown.classList.remove("active");
  }
});


/* =========================
   🔗 BUTTON FUNCTIONS
========================= */

// Join Discord
function joinDiscord(){
  window.open("https://discord.gg/YQVF7sy2gR", "_blank");
}

// Go to members page
function goMembers(){
  window.location.href = "profiles.html";
}

// Discord Login (basic OAuth)
function loginDiscord(){
  window.location.href =
  "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&scope=identify";
}
