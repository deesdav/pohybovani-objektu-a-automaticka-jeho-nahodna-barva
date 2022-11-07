const topBtn = document.getElementById("topBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const bottomBtn = document.getElementById("bottomBtn");
const player = document.getElementById("player");

let x = 100;
let y = 100;

const randomNumber = (minimum, maximum) => { //generátor náhodného čísla barvy RGB
    const myNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;  //funkce kopírovaná z internetu
    return myNum;
}
 console.log(randomNumber(0, 255)); // výpis do konzole, k zjištění jestli generátor funguje

const changeColor = () => {
    const r = randomNumber(0, 255);
    const g = randomNumber(0, 255);
    const b = randomNumber(0, 255);
    player.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
let changeInterval = setInterval(() => { // interval má funkci v jedný ()
    changeColor();
}, 1000);

player.onclick = () => {
    changeColor();
    clearInterval(changeInterval);
}



const move = () => {
    player.style.left = x + "px"; // tyhle hodnoty jsou jakoby to umístění z css, obojí mám po 100 pixelech
    player.style.top = y + "px";
}
 
// celý jde o tom si představit soustavu souřadnic, osy x a y 
topBtn.onclick = () => {
    y -= 10;    
    move();
}
leftBtn.onclick = () => {
    x -= 10;
    move();
}
rightBtn.onclick = () => {
    x += 10;
    move();
}
bottomBtn.onclick = () => {
    y += 10;
    move();
}


