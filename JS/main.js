document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ⭐ STARS BACKGROUND
  ========================== */
  const starCount = 60;

  for (let i = 0; i < starCount; i++) {
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
  const petalCount = 25;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";
    petal.style.opacity = 0.4 + Math.random() * 0.6;

    document.body.appendChild(petal);
  }

  /* =========================
     🌸 SCROLL REVEAL (SMOOTH)
  ========================== */
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => observer.observe(section));

});


/* =========================
   🔽 DROPDOWN MENU SYSTEM
========================= */
function toggleMenu(){
  const menu = document.getElementById("dropdown");
  menu.classList.toggle("active");
}

/* CLOSE MENU ON OUTSIDE CLICK */
document.addEventListener("click", (e)=>{
  const dropdown = document.getElementById("dropdown");

  if(!e.target.closest(".menu")){
    if(dropdown) dropdown.classList.remove("active");
  }
});


/* =========================
   🔗 BUTTON FUNCTIONS
========================= */

// Join Discord
function joinDiscord(){
  window.open("https://discord.gg/YQVF7sy2gR", "_blank");
}

// Go to Members page
function goMembers(){
  window.location.href = "profiles.html";
}

// Discord Login (optional)
function loginDiscord(){
  window.location.href =
  "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&scope=identify";
}
