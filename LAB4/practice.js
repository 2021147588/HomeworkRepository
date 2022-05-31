//show time
var Target = document.getElementById("clock");
let clock = () => {
    var today = new Date();
    var hours = zero(today.getHours());
    var minutes = zero(today.getMinutes());
    var seconds = zero(today.getSeconds());
    Target.innerText = `${hours}:${minutes}:${seconds}`;                 
        }
let zero= (n) => {
    if ( n < 10){
        n = n.toString();
        n = "0" + n;   
    }
    return n;
}
clock();
setInterval(clock, 1000);


//change background color randomly
var colors = [ "blue", "yellow", "black", "white"]
var bg = document.getElementById('color');
var btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    var random = Math.floor(Math.random()*colors.length);
    while (bg.style.backgroundColor == colors[random]){
        random = Math.floor(Math.random()*colors.length);
    }
    bg.style.backgroundColor = colors[random];
    console.log(colors[random])
})