const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function getTime(){
    const time = new Date();

    const getHourRot = (360/12) * time.getHours();
    const getMinRot = (360/60) * time.getMinutes();
    const getSecRot = (360/60) * time.getSeconds();

    hourHand.style.transform = `rotate(${getHourRot}deg)`;
    minsHand.style.transform = `rotate(${getMinRot}deg)`;
    secondHand.style.transform = `rotate(${getSecRot}deg)`;
}
 
setInterval(() =>{
    getTime();
},1000);

getTime();



