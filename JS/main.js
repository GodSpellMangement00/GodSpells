// 🌸 GODSPELL FINAL JS

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ⭐ STARS (OPTIMIZED)
  ========================== */
  const starFrag = document.createDocumentFragment();
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random();
    starFrag.appendChild(star);
  }
  document.body.appendChild(starFrag);

  /* =========================
     🌸 PETALS (SMOOTH)
  ========================== */
  const petalFrag = document.createDocumentFragment();
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (6 + Math.random() * 6) + "s";
    petal.style.opacity = 0.4 + Math.random() * 0.5;

    petalFrag.appendChild(petal);
  }
  document.body.appendChild(petalFrag);

  /* =========================
     🌸 SCROLL REVEAL
  ========================== */
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));

  /* =========================
     📊 SCROLL PROGRESS BAR
  ========================== */
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress = document.getElementById("progress");
    if (progress) {
      progress.style.width = (scrollTop / height) * 100 + "%";
    }

    // active section highlight
    sections.forEach(sec=>{
      const top = sec.getBoundingClientRect().top;

      if(top < 200 && top > -200){
        sec.classList.add("active");
      }else{
        sec.classList.remove("active");
      }
    });

  });

  /* =========================
     🔍 SEARCH FILTER (AI FEEL)
  ========================== */
  const search = document.querySelector(".search-box input");

  if(search){
    search.addEventListener("input", ()=>{
      const value = search.value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      cards.forEach(card=>{
        const text = card.innerText.toLowerCase();

        if(text.includes(value)){
          card.style.display = "block";
        }else{
          card.style.display = "none";
        }
      });
    });
  }

});


/* =========================
   🔽 MENU SYSTEM
========================= */
function toggleMenu(){
  document.getElementById("dropdown").classList.toggle("active");
}

document.addEventListener("click",(e)=>{
  if(!e.target.closest(".menu")){
    const dropdown = document.getElementById("dropdown");
    if(dropdown) dropdown.classList.remove("active");
  }
});


/* =========================
   🔗 BUTTONS
========================= */

// Join Discord
function joinDiscord(){
  window.open("https://discord.gg/YQVF7sy2gR","_blank");
}

// Go Members
function goMembers(){
  window.location.href = "profiles.html";
}

// Discord login (optional)
function loginDiscord(){
  window.location.href =
  "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&scope=identify";
}
