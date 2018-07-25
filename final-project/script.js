let mrd = document.getElementById('mrd')
let suitcaseClick = document.querySelector('#suitcase')
let computerClick = document.querySelector('#computer')
let bedClick = document.querySelector("#bed")
let hud = document.querySelector('#hud')
let bunnyClick = document.querySelector('#bunny')
let items = "Despacito"


hud.setAttribute("value",items)

mrd.addEventListener('click', e => {
    console.log("this is so sad alexa play despacito")
    
})

bunnyClick.addEventListener('click', e=> {
    console.log("the bunny is clicked!!!!!!!!!!")
    hud.setAttribute("value","bunny clicked")
})

suitcaseClick.addEventListener('click', e=> {
    console.log("the suitcase is clicked!!!!!!!!!!")
    hud.setAttribute("value","Suitcase clicked")
    
})

computerClick.addEventListener('click', e=> {
    console.log("the computer is clicked!!!!!!!!!!")
    hud.setAttribute("value","computer clicked")
})

bedClick.addEventListener('click', e=> {
    console.log("the bed is clicked!!!!!!!!!!")
    hud.setAttribute("value","bed clicked")
})

