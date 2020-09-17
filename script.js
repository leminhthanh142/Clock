
const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");
function getTime () {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegree = (seconds/60) * 360;
    console.log(secondsDegree);
    const minutesDegree = (minutes/60) * 360 + (seconds/60) * 6;
    console.log(minutesDegree);
    const hoursDegree = (hours/12) * 360 + (minutes/60) * 30;
    console.log(hoursDegree);
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(getTime, 1000);
getTime();