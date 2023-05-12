/* 
████████╗██╗███╗   ███╗███████╗██████╗ 
╚══██╔══╝██║████╗ ████║██╔════╝██╔══██╗
   ██║   ██║██╔████╔██║█████╗  ██████╔╝
   ██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗
   ██║   ██║██║ ╚═╝ ██║███████╗██║  ██║
   ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝
  */

// Countdown function:
function countdown(countdownInSeconds, ticks) {
    timer = setInterval(() => {
        ticks++;
        console.log(countdownInSeconds - ticks);
        if (ticks === countdownInSeconds) {
            stopCountdown();
            controlPannel.replaceChild(buttonStart, buttonPause);
        }
    }, 1000);
}

function startCountdown() {
    hours = inputHours.value;
    minutes = inputMinutes.value;
    const countdownInSeconds = hours * 3600 + minutes * 60;
    ticks = 0;
    if (countdownInSeconds <= 0) {
        return;
    } else {
        countdown(countdownInSeconds, ticks);
        controlPannel.replaceChild(buttonPause, buttonStart);
    }
}

function stopCountdown() {
    clearInterval(timer);
    ticks = 0;
}

// Get hours input:
const inputHours = document.getElementById('input-hours');
// Get minutes input:
const inputMinutes = document.getElementById('input-minutes');
// Get control panel element:
const controlPannel = document.getElementById('control-pannel');
// Get stop buton:
const buttonStop = document.getElementById('button-stop');
// Get reset button:
const buttonReset = document.getElementById('button-reset');
// Create start button:
const buttonStart = document.createElement('button');
buttonStart.innerText = 'Start';
// Create pause button:
const buttonPause = document.createElement('button');
buttonPause.innerText = 'Pause';

// Insert start button into the DOM:
controlPannel.insertBefore(buttonStart, buttonStop);

// Variables for input of countdown:
let hours;
let minutes;

// Timer variable and ticks variable
let timer;
let ticks;

// Run countdown on pressing button start:
buttonStart.addEventListener('click', () => {
    hours = inputHours.value;
    minutes = inputMinutes.value;
    startCountdown();
});

// Stop countdown on pressing stop button:
buttonStop.addEventListener('click', () => {
    stopCountdown();
    controlPannel.replaceChild(buttonStart, buttonPause);
});
