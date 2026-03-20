// 🌸 GODSPELL FINAL JS

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ⭐ STARS BACKGROUND
  ========================== */
  const starFrag = document.createDocumentFragment();

  for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random();

    starFrag.appendChild(star);
  }

  document.body.appendChild(starFrag);


  /* =========================
     🌸 SAKURA PETALS (FIXED)
  ========================== */
  const petalFrag = document.createDocumentFragment();

  for (let i = 0; i < 25; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (6 + Math.random() * 6) + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";
    petal.style.opacity = 0.5 + Math.random() * 0.5;

    petalFrag.appendChild(petal);
  }

  document.body.appendChild(petalFrag);


  /* =========================
     🌸 SCROLL REVEAL
  ========================== */
  const embeds = document.querySelectorAll(".embed");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  embeds.forEach(el => observer.observe(el));

});


/* =========================
   🎯 EMBED CLICK ANIMATION
========================= */
function activate(el){
  el.classList.add("active");

  setTimeout(()=>{
    el.classList.remove("active");
  }, 300);
}


/* =========================
   🔗 BUTTON FUNCTIONS
========================= */

// Go to members page
function goMembers(){
  window.location.href = "profiles.html";
}

// Join Discord
function joinDiscord(){
  window.open("https://discord.gg/YQVF7sy2gR","_blank");
}
