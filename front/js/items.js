let items = document.getElementsByClassName("items__card-item")
let moreInfo = document.getElementById("items__more-info")
let nameItemCard = document.getElementById("more-info__name")
let propertyItem = document.getElementById("more-info__property-p")
let skillItem = document.getElementById("skill-p")
const URLForData = 'http://localhost:3001/api/items'

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", async function(event){
        event.preventDefault()
        let name = event.target.getAttribute("name") ? event.target.getAttribute("name") :event.target.parentNode.getAttribute("name")
        await getInfoAboutItem(name)
    });
  }


async function getInfoAboutItem(nameItem){
    let response = await fetch(URLForData + "?name=" + nameItem);
    if(response.ok){
        let data = await response.json()
        nameItemCard.innerHTML = data.name
        propertyItem.innerHTML = data.property
        skillItem.innerHTML = data.skill
        if(moreInfo.classList.contains("invisible")) moreInfo.classList.remove("invisible")
    }
}