let mrd = document.getElementById('mrd')
let suitcaseClick = document.querySelector('#suitcase')
let computerClick = document.querySelector('#computer')
let hud = document.querySelector('#hud')
let bunnyClick = document.querySelector('#bunny')
let bedClick = document.querySelector('#bed')
let paintingClick = document.querySelector('#painting')
let rugClick = document.querySelector('#rug')
let hoverboardClick = document.querySelector('#hoverboard')
let pizzaClick = document.querySelector('#pizza')
let gunClick = document.querySelector('#gun')
let knifeClick = document.querySelector('#knife')
let key1 = document.querySelector('.key1')
let key2 = document.querySelector('.key2')
let key3 = document.querySelector('.key3')
let key4 = document.querySelector('.key4')
let key5 = document.querySelector('.key5')
let key6 = document.querySelector('.key6')
let key7 = document.querySelector('.key7')
let key8 = document.querySelector('.key8')
let key9 = document.querySelector('.key9')
let key0 = document.querySelector('.key0')
let items = "Despacito"
let keycode = 0;


hud.setAttribute("value", items)

mrd.addEventListener('click', e => {
    console.log("this is so sad alexa play despacito")

})

gunClick.addEventListener('click', e => {
    console.log("the gun is clicked!!!!!!!!!!")
    hud.setAttribute("value", "gun clicked")
})

knifeClick.addEventListener('click', e => {
    console.log("the knife is clicked!!!!!!!!!!")
    hud.setAttribute("value", "oh no!!!! knife clicked")
})

pizzaClick.addEventListener('click', e => {
    console.log("the pizza is clicked!!!!!!!!!!")
    hud.setAttribute("value", "pizza clicked")
})

bunnyClick.addEventListener('click', e => {
    console.log("the bunny is clicked!!!!!!!!!!")
    hud.setAttribute("value", "bunny clicked")
})

suitcaseClick.addEventListener('click', e => {
    console.log("the suitcase is clicked!!!!!!!!!!")
    hud.setAttribute("value", "Suitcase clicked")

})

computerClick.addEventListener('click', e => {
    console.log("the computer is clicked!!!!!!!!!!")
    hud.setAttribute("value", "computer clicked")
})

paintingClick.addEventListener('click', e => {
    console.log("the painting is clicked!!!!!!!!!!")
    hud.setAttribute("value", "painting clicked")
})

hoverboardClick.addEventListener('click', e => {
    console.log("the hoverboard is clicked!!!!!!!!!!")
    hud.setAttribute("value", "hoverboard clicked")
})

rugClick.addEventListener('click', e => {
    console.log("the rug is clicked!!!!!!!!!!")
    hud.setAttribute("value", "rug clicked")
})

bedClick.addEventListener('click', e => {
    console.log("the bed is clicked!!!!!!!!!!")
    hud.setAttribute("value", "bed clicked")
})

key1.addEventListener('click', e => {
    console.log("key 1 clicked")
    keycode = keycode * 10 + 1;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key2.addEventListener('click', e => {
    console.log("key 2 clicked")
    keycode = keycode * 10 + 2;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key3.addEventListener('click', e => {
    console.log("key 3 clicked")
    keycode = keycode * 10 + 3;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key4.addEventListener('click', e => {
    console.log("key 4 clicked")
    keycode = keycode * 10 + 4;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key5.addEventListener('click', e => {
    console.log("key 5 clicked")
    keycode = keycode * 10 + 5;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key6.addEventListener('click', e => {
    console.log("key 6 clicked")
    keycode = keycode * 10 + 6;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key7.addEventListener('click', e => {
    console.log("key 7 clicked")
    keycode = keycode * 10 + 7;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key8.addEventListener('click', e => {
    console.log("key 8 clicked")
    keycode = keycode * 10 + 8;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key9.addEventListener('click', e => {
    console.log("key 9 clicked")
    keycode = keycode * 10 + 9;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})

key0.addEventListener('click', e => {
    console.log("key 0 clicked")
    keycode = keycode * 10 + 0;
    console.log(keycode)
    if(keycode > 999){
        keycode = keycode * 0;
    }

})


// timer

var myTimer;
var counter = 0;

//takes value and starts w that value
function myFunction(num) {
    counter = num
    myTimer = setInterval(alertFunc, 1000);
}

myFunction(10)

//what takes value and counts down
function alertFunc(){
    console.log(counter);
    counter -=1
    
    timer.innerHTML = ` COUNTDOWN: ${counter} `

    if(counter < 1){
        timer.innerHTML = `TIME'S UP!`
        clearInterval(myTimer)
    }
}