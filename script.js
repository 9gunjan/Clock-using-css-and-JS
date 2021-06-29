const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now= new Date();
    const seconds=now.getSeconds();
    console.log(seconds);
    const secondDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${seconds}deg)`;



    const mins = now.getMinutes();
    const minDegrees =((mins/60)*360)+((seconds/60)*6)+90;
    minuteHand.style.transform=`rotate(${minuteHand}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);

setDate();