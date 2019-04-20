// Your code goes here

const navLogoHeading = document.querySelector('.logo-heading');
const navA= document.querySelector('.first-img');

  // INCREASE SIZE OF LOGO HEADING ON MOUSEOVER
navLogoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");
// Flip the first image upside down using MOUSEOVER
navA.addEventListener('mouseover',(event)=>
    event.target.style.transform="scale(-1)");

const nav = document.querySelector(".nav");

nav.addEventListener("dblclick", (e) => {
   e.target.style.backgroundColor = 'aqua';
 });

// PREVENTING NAV LINKS FROM RELOADING PAGE
 nav.addEventListener('click', (e) => {e.preventDefault();
 console.log("clicked on navlink");}
 );

//Power of keydown with alert message
window.addEventListener("keydown", checkKey,false);
function checkKey(e){
    if(e.keyCode=="40"){
        alert("Please use the scroll bar to your right, Thank You!");
    }
}

const body= document.querySelector('body');

body.addEventListener("wheel", function alertMessage(){
    alert("Welcome to modern Techology!! :)");
    body.removeEventListener("wheel", alertMessage);
});

const funBusBanner = document.querySelector(".intro > img" );

// DRAG THE FUN-BUS INTRO IMAGE TO SCALE IT 150% IN SIZE
funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.5)');

window.addEventListener("load", function(event) {
    alert("This website is filled with a ton of eventListners, can you find all 9?");
});

const header = document.querySelector('.main-navigation');

window.addEventListener('resize', () => {
	header.style.backgroundColor = '#a5a5dd';
});
window.addEventListener('scroll', () => {
	console.log('Scrooolling');
});

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});
const lastButton= document.querySelector('.btn');

const clickHandler = function(e){
    e.stopPropagation()
    console.log('button has been clicked');
}

lastButton.addEventListener('click', clickHandler);

const theContainer= document.getElementById('containerClick');

theContainer.addEventListener('click', function(e){
    console.log('Has been clicked somewhere');
    console.log('This is the target:', e.target);
});
   
                