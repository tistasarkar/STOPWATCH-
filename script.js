//time variables

let hour=document.querySelector("#hours")
let minutes=document.querySelector("#minutes")
let seconds=document.querySelector("#seconds")

//buttons

let pause=document.querySelector("#first-button")
let play=document.querySelector("#second-button")
let reset=document.querySelector("#third-button")

//calculating time variables

let hr=0;
let min=0;
let sec=0;
let time=null;

//Changing time

function changeTime(){
    sec++;
    if(sec==60){
        min++;
        sec=0
    }
    if(min==60){
        hr++;
        min=0;
    }
    
    seconds.innerHTML=sec;
    minutes.innerHTML=min;
    hour.innerHTML=hr;  
}
//change of time

function update(){
    time=setInterval(changeTime,1000);
}

function pauseTime(){
    clearInterval(time);
}

function resetTime(){
    clearInterval(time);
    hr=0
    min=0
    sec=0
    seconds.innerHTML=sec;
    minutes.innerHTML=min;
    hour.innerHTML=hr;
}

//button events

play.addEventListener("click",update);

pause.addEventListener("click",pauseTime);

reset.addEventListener("click",resetTime);