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
let items = "Matthew, your best friend (and lover) has been acting strangely lately. You have suspected that he is cheating on you so you go to his basement and decide to snoop around. When you close the door behind you, you realize it has locked from the outside! In a frenzy, you fiddle with the door knob and it breaks off - it soon becomes clear that there is no way to get out! Matthew is currently out running errands so there is nothing left for you to do but investigate. As you start to look through his personal belongings, you discover a side to Matthew you never knew existed. You discovered pictures of corpses, guns, knives, and masks that were similar to the ones worn by a psycho on the news. This can only mean one thing: YOUR BOYFRIEND IS A SERIAL KILLER!!!! In the room is a set of 10 objects. Use the items to solve the code. Let’s see if you can make it out alive … The first thing you see is the gun."
let keycode = 0;


hud.setAttribute("value", items)

mrd.addEventListener('click', e => {
    console.log("this is so sad alexa play despacito")

})

gunClick.addEventListener('click', e => {
    console.log("the gun is clicked!!!!!!!!!!")
    hud.setAttribute("value", "The gun is probably the scariest thing in his room. Matthew seems to have scratched out the serial number, but you can make out the number 0 followed by the letters II. The next object is not as scary but just as violent. It is also floating because the game developers could not be bothered to lower it.")
})

knifeClick.addEventListener('click', e => {
    console.log("the knife is clicked!!!!!!!!!!")
    hud.setAttribute("value", "Oh no!! You found a knife. You don’t see any blood on the knife, but you do see some tomato sauce. You also see the number 44 inscribed on the hilt of the knife.")
})

pizzaClick.addEventListener('click', e => {
    console.log("the pizza is clicked!!!!!!!!!!")
    hud.setAttribute("value", "The pizza looks old, as if it has been sitting there for days. You wonder how long it has been since he’s been down here... As you look around in confusion, you are startled when you see a woman looking at you…")
})

bunnyClick.addEventListener('click', e => {
    console.log("the bunny is clicked!!!!!!!!!!")
    hud.setAttribute("value", "A bunny? Why does he have this? You look around and see even more bunnies. Over the side of the bed you see the present you bought him for his birthday. You feel instant regret for buying him something so expensive.")
})

suitcaseClick.addEventListener('click', e => {
    console.log("the suitcase is clicked!!!!!!!!!!")
    hud.setAttribute("value", "You look inside the suitcase and see the it is half-packed... All of a sudden, you start to notice a HORRIBLE smell. It seems to be coming from the floor.")

})

computerClick.addEventListener('click', e => {
    console.log("the computer is clicked!!!!!!!!!!")
    hud.setAttribute("value", "On his computer, you see his Tinder profile open. Your suspicion of Matthew cheating on you was correct! You smash his computer, but not before noticing the number 3 on the screen, followed by the letter I. You wonder why he had this next object out, its almost as if he was getting ready to leave…")
})

paintingClick.addEventListener('click', e => {
    console.log("the painting is clicked!!!!!!!!!!")
    hud.setAttribute("value", "So it looks like your boyfriend is a thief too. You always wondered how he managed to buy such expensive things. In your rage you throw your hands up and accidentally knock her down. On the wall, you see the riddle [A 9 to 5 might help you stay alive]. Look around the room to find the other stolen items.")
})

hoverboardClick.addEventListener('click', e => {
    console.log("the hoverboard is clicked!!!!!!!!!!")
    hud.setAttribute("value", "You look down and see a hoverboard next to your feet. You see the cryptic message, saying [The first in third and the third, first]. In frustration, you break the hoverboard. It's not as if Matthew will need it where he's going.")
})

rugClick.addEventListener('click', e => {
    console.log("the rug is clicked!!!!!!!!!!")
    hud.setAttribute("value", "You lift up the rug and notice a loose floorboard... You lift it up and discover 9 dead bodies! You wonder how he sleeps at night...")
})

bedClick.addEventListener('click', e => {
    console.log("the bed is clicked!!!!!!!!!!")
    hud.setAttribute("value", "You flop down onto the bed and start crying. Then you notice you are being comforted by a friendly face.")
})

key1.addEventListener('click', e => {
    console.log("key 1 clicked")
    keycode = keycode * 10 + 1;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})

key2.addEventListener('click', e => {
    console.log("key 2 clicked")
    keycode = keycode * 10 + 2;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})

key3.addEventListener('click', e => {
    console.log("key 3 clicked")
    keycode = keycode * 10 + 3;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})

key4.addEventListener('click', e => {
    console.log("key 4 clicked")
    keycode = keycode * 10 + 4;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})

key5.addEventListener('click', e => {
    console.log("key 5 clicked")
    keycode = keycode * 10 + 5;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})

key6.addEventListener('click', e => {
    console.log("key 6 clicked")
    keycode = keycode * 10 + 6;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})

key7.addEventListener('click', e => {
    console.log("key 7 clicked")
    keycode = keycode * 10 + 7;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})

key8.addEventListener('click', e => {
    console.log("key 8 clicked")
    keycode = keycode * 10 + 8;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})

key9.addEventListener('click', e => {
    console.log("key 9 clicked")
    keycode = keycode * 10 + 9;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999){
        if(keycode == 30149){
            hud.setAttribute("value", "You win!")
            
        }else{
            keycode = keycode * 0;
        }
    }

})

key0.addEventListener('click', e => {
    console.log("key 0 clicked")
    keycode = keycode * 10 + 0;
    items = keycode.toString();
    hud.setAttribute("value", items)
    console.log(keycode)
    if(keycode > 9999 && keycode != 30149){
        keycode = keycode * 0;
    }

})


// timer

// var myTimer;
// var counter = 0;

// //takes value and starts w that value
// function myFunction(num) {
//     counter = num
//     myTimer = setInterval(alertFunc, 1000);
// }

// myFunction(10)

// //what takes value and counts down
// function alertFunc(){
//     console.log(counter);
//     counter -=1
    
//     timer.innerHTML = ` COUNTDOWN: ${counter} `

//     if(counter < 1){
//         timer.innerHTML = `TIME'S UP!`
//         clearInterval(myTimer)
//     }
// }