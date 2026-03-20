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
     🌸 SAKURA PETALS (FIXED)
  ========================== */
  const petalFrag = document.createDocumentFragment();

  for (let i = 0; i < 25; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (6 + Math.random() * 6) + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";

    petalFrag.appendChild(petal);
  }

  document.body.appendChild(petalFrag);


  /* =========================
     🌸 EMBED SCROLL REVEAL
  ========================== */
  const embeds = document.querySelectorAll(".embed, .section");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  embeds.forEach(el => observer.observe(el));


  /* =========================
     🔍 SEARCH FILTER
  ========================== */
  const search = document.querySelector(".search-box input");

  if(search){
    search.addEventListener("input", ()=>{
      const value = search.value.toLowerCase();

      const cards = document.querySelectorAll(".member-card, .member");

      cards.forEach(card=>{
        const text = card.innerText.toLowerCase();

        if(text.includes(value)){
          card.style.display = "";
        }else{
          card.style.display = "none";
        }
      });
    });
  }

});


/* =========================
   🎯 EMBED CLICK ANIMATION
========================= */
function activate(el){
  el.classList.add("active");
  setTimeout(()=>el.classList.remove("active"), 300);
}


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
   🔗 NAV + BUTTONS
========================= */

// Go members page
function goMembers(){
  window.location.href = "profiles.html";
}

// Join Discord
function joinDiscord(){
  window.open("https://discord.gg/YQVF7sy2gR","_blank");
}

// Discord login
function loginDiscord(){
  window.location.href =
  "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&scope=identify";
}


/* =========================
   📩 CONTACT (WEB → DISCORD)
========================= */
function contact(name,id){
  fetch("https://discord.com/api/webhooks/1484160174037012603/eMLvuUDs-xrVPNDqOA72-ELv1eP8jxSs9uJsIecrIjwASv2isOG82_pHLctXDnFpZT6o",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      content:`📩 Contact request for **${name}** (ID: ${id})`
    })
  });

  alert("Request sent to Discord ✅");
}
