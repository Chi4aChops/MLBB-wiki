let url = location.href; 
let geroName = url.substring(url.indexOf("=")+1);

let body = document.getElementById('back');
body.style.backgroundImage = "url('../img/gero/" + geroName + "/back.png')"
const URLForDataGero = 'http://localhost:3001/api/geroInfo'

document.getElementById('skills__passive-img').src = "../img/gero/" + geroName + "/0.png";
document.getElementById('skills__first-img').src = "../img/gero/" + geroName + "/1.png";
document.getElementById('skills__second-img').src = "../img/gero/" + geroName + "/2.png";
document.getElementById('skills__third-img').src = "../img/gero/" + geroName + "/3.png";

let skills = document.getElementsByClassName("skills-card")
for (var i = 0; i < skills.length; i++) {
    skills[i].addEventListener("click", async function(event){
        event.preventDefault()
        let name = event.target.getAttribute("name") ? event.target.getAttribute("name") : event.target.parentNode.getAttribute("name")
        await getInfoAboutSkill(name)
    });
  }

window.onload = getInfoAboutGero(geroName)

async function getInfoAboutGero(geroName){
    let response = await fetch(URLForDataGero + "?gero=" + geroName);
    if(response.ok){
        let data = await response.json()
        document.getElementById('h1').innerHTML = data.name
        document.getElementById('skill__passive-name').innerHTML = data.skillPassive
        document.getElementById('skill__first-name').innerHTML = data.skillFirst
        document.getElementById('skill__second-name').innerHTML = data.skillSecond
        document.getElementById('skill__third-name').innerHTML = data.skillThird
        document.getElementById('cost-BO').innerHTML = data.costBO
        document.getElementById('cost-diamond').innerHTML = data.costDiamond
        document.getElementById("zver").href = data.zver
        document.getElementById("vud").href = data.vud
        document.getElementById('history').innerHTML = data.history

        let stats = document.getElementsByClassName("info-stat")
        let statsArr = data.stats.split(",")
        for(let i = 0; i<stats.length;i++){
            stats[i].innerHTML = statsArr[i]
        }
    }
}

async function getInfoAboutSkill(num){
    let response = await fetch("http://localhost:3001/api/skillInfo" + "?name=" + geroName + num);
    if(response.ok){
        let data = await response.json()
        document.getElementById("skill-about").innerHTML = data.info
        document.getElementById("more-info__mana").innerHTML = data.mana
        document.getElementById("more-info__reload").innerHTML = data.reload
        if(document.getElementById("skill-more-info").classList.contains("invisible")) document.getElementById("skill-more-info").classList.remove("invisible")
    }
}
//12 элементов, расположить правильно в данных их и вставить через перебор элементов

