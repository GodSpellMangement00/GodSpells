// 🌸 PROFILE DATA (only full-info members)
const profiles = [
{
 name:"PRASAD09",
 discord:"Prasad09",
 id:"1277489655151067137",
 skills:"Grinder, Builder",
 rarity:"god",
 img:"https://image.pollinations.ai/prompt/anime%20god%20warrior%20pink%20aura&seed=1"
},
{
 name:"SAM_DK1",
 discord:"Sam",
 id:"611881046006562827",
 skills:"Trader, Grinder, Builder",
 rarity:"legendary",
 img:"https://image.pollinations.ai/prompt/aesthetic%20anime%20boy%20pink%20glow&seed=2"
},
{
 name:"arkinstan",
 discord:"zedairx",
 id:"1081561496271720488",
 skills:"PvP, Builder, Grinder, Trading",
 rarity:"legendary",
 img:"https://image.pollinations.ai/prompt/shadow%20assassin%20anime%20pink&seed=3"
},
{
 name:"Walidwolly",
 discord:"walidwolly",
 id:"814492142981742632",
 skills:"Building, Farming, Grinding",
 rarity:"rare",
 img:"https://image.pollinations.ai/prompt/anime%20farmer%20night%20pink&seed=4"
},
{
 name:"TheGod2401",
 discord:"TheGod",
 id:"1200912818841583618",
 skills:"Builder, Grinder",
 rarity:"rare",
 img:"https://image.pollinations.ai/prompt/divine%20builder%20anime%20pink&seed=5"
},
{
 name:"abinav_gamer",
 discord:"DeadSlot",
 id:"1121062759971430510",
 skills:"Builder, Redstoner, Developer",
 rarity:"rare",
 img:"https://image.pollinations.ai/prompt/anime%20engineer%20builder%20pink&seed=6"
}
];

// 🎯 RENDER CARDS
const container = document.getElementById("cards");

profiles.forEach(p => {

  const card = document.createElement("div");
  card.className = `card ${p.rarity}`;

  card.innerHTML = `
    <div style="position:relative">
      <img src="${p.img}">
      <div class="rarity-tag">${p.rarity.toUpperCase()}</div>
    </div>

    <div class="info">
      <div class="card-title">${p.name}</div>
      <div class="card-sub">Discord: ${p.discord}</div>
      <div class="card-sub">Skills: ${p.skills}</div>
    </div>

    <button class="btn" onclick="assignTask('${p.name}')">
      Assign Task
    </button>
  `;

  container.appendChild(card);
});


// 🔗 WEBHOOK TASK SYSTEM
function assignTask(name){

  const task = prompt("Enter task for " + name);
  if(!task) return;

  fetch("YOUR_WEBHOOK_URL",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      embeds:[{
        title:"📌 Task Assigned",
        color:16738740,
        fields:[
          {name:"👤 Member", value:name},
          {name:"📝 Task", value:task}
        ],
        timestamp:new Date()
      }]
    })
  })
  .then(()=>alert("Task sent to Discord ✅"))
  .catch(()=>alert("Error ❌"));
}
