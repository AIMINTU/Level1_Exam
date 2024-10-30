const buttMessi = document.getElementById("buttMessi");
const buttAndres = document.getElementById("buttAndres");
const buttMbpappe = document.getElementById("buttMbpappe");
const buttMene = document.getElementById("buttMene");
const buttEden = document.getElementById("buttEden");
const buttPogba = document.getElementById("buttPogba");
let AllPlayer = 0;
function addList(PlayerName) {
    const oderList = document.getElementById("oderList");
    const li = document.createElement("li");
    li.innerText = PlayerName;
    li.classList.add("text-xl");
    oderList.appendChild(li);
}
function TotalPlayer() {
    AllPlayer > 6 ? AllPlayer = 6: AllPlayer;
    if (AllPlayer === 6) {
        alert("You can add only 5 players");
    }
}
buttMessi.addEventListener("click",function () {
    AllPlayer++
    TotalPlayer();
    if(AllPlayer <= 5){
        addList("Lionel Messi")
        buttMessi.classList.remove("bg-blue-500")
        buttMessi.classList.add("bg-blue-350")
        buttMessi.disabled = true;
    }
})
buttAndres.addEventListener("click",function () {
    AllPlayer++
    TotalPlayer()
    if(AllPlayer <= 5){
        addList("Andres");
        buttAndres.classList.remove("bg-blue-500");
        buttAndres.classList.add("bg-blue-350");
        buttAndres.disabled = true;
    }
})
buttMbpappe.addEventListener("click",function () {
    AllPlayer++
    TotalPlayer()
    if(AllPlayer <= 5){
        addList("Mbpappe");
        buttMbpappe.classList.remove("bg-blue-500");
        buttMbpappe.classList.add("bg-blue-350");
        buttMbpappe.disabled = true;
    }
})
buttMene.addEventListener("click",function () {
    AllPlayer++
    TotalPlayer()
    if(AllPlayer <= 5){
        addList("Sadio Mene");
        buttMene.classList.remove("bg-blue-500");
        buttMene.classList.add("bg-blue-350");
        buttMene.disabled = true;
    }
})
buttEden.addEventListener("click",function () {
    AllPlayer++
    TotalPlayer()
    if(AllPlayer <= 5){
        addList("Eden Hazard");
        buttEden.classList.remove("bg-blue-500");
        buttEden.classList.add("bg-blue-350");
        buttEden.disabled = true;
    }
})
buttPogba.addEventListener("click",function () {
    AllPlayer++
    TotalPlayer()
    if(AllPlayer <= 5){
        addList("Paul Pogba");
        buttPogba.classList.remove("bg-blue-500");
        buttPogba.classList.add("bg-blue-350");
        buttPogba.disabled = true;
    }
})
// Cost of Player 
const perPlayerin = document.getElementById("perPlayerin")
const perPlayerbtn = document.getElementById("perPlayerbtn")
const totalPlayerCost = document.getElementById("totalPlayerCost")
perPlayerbtn.addEventListener("click",function () {
    let playerCost = parseInt(perPlayerin.value);
    AllPlayer > 5 ? AllPlayer = 5: AllPlayer;
    if(playerCost <= 0 || isNaN(playerCost)){
        perPlayerin.value = ''
    }
    playerCost *= AllPlayer
    totalPlayerCost.innerText = playerCost
})
const mangerIn = document.getElementById("mangerIn");
const coachIn = document.getElementById("coachIn");
const totalCostBtn = document.getElementById("totalCostBtn");
const totalCost = document.getElementById("totalCost");
totalCostBtn.addEventListener("click",function () {
    const mangerCost = parseInt(mangerIn.value)
    const coachCost = parseInt(coachIn.value)
    const PlayerCost = parseInt(totalPlayerCost.innerText)
    console.log(mangerCost,coachCost,PlayerCost)
    const totalAllCost = mangerCost + coachCost + PlayerCost
    totalCost.innerHTML = totalAllCost
})