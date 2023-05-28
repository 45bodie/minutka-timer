/* 
████████╗██╗███╗   ███╗███████╗██████╗ 
╚══██╔══╝██║████╗ ████║██╔════╝██╔══██╗
   ██║   ██║██╔████╔██║█████╗  ██████╔╝
   ██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗
   ██║   ██║██║ ╚═╝ ██║███████╗██║  ██║
   ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝
  */

// Countdown function:
function countdown(
    countdownInSeconds,
    displayElementHours,
    displayElementMinutes,
    displayElementSeconds
) {
    timer = setInterval(() => {
        ticks++;
        const hours = Math.floor((countdownInSeconds - ticks) / 3600);
        const minutes = Math.floor(
            (((countdownInSeconds - ticks) / 3600) % 1).toFixed(4) * 60
        );
        const seconds = Math.round(
            (
                ((((countdownInSeconds - ticks) / 3600) % 1).toFixed(4) * 60) %
                1
            ).toFixed(4) * 60
        );
        displayElementHours.innerText =
            String(hours).length < 2 ? `0${hours}` : `${hours}`;
        displayElementMinutes.innerText =
            String(minutes).length < 2 ? `0${minutes}` : `${minutes}`;
        displayElementSeconds.innerText =
            String(seconds).length < 2 ? `0${seconds}` : `${seconds}`;
        if (ticks === countdownInSeconds) {
            stopCountdown();
            controlPannel.replaceChild(buttonStart, buttonPause);
        }
    }, 1000);
}

// Start countdown function:
function startCountdown() {
    hours = inputHours.value;
    minutes = inputMinutes.value;
    seconds = inputSeconds.value;
    const countdownInSeconds = hours * 3600 + minutes * 60 + parseInt(seconds);
    ticks = 0;
    if (countdownInSeconds <= 0) {
        return;
    } else {
        countdown(
            countdownInSeconds,
            hourDisplay,
            minutesDisplay,
            secondsDisplay
        );
        controlPannel.replaceChild(buttonPause, buttonStart);
    }
    // TODO: Disable inputs while counting!
}

// Stop countdown function:
function stopCountdown() {
    clearInterval(timer);
    ticks = 0;
}

// Pause countdown function:
function pauseCountdown() {
    clearInterval(timer);
    // TODO: disable inputs while paused
}

// Resume countdown function:
function resumeCountdown() {
    hours = inputHours.value;
    minutes = inputMinutes.value;
    const countdownInSeconds = hours * 3600 + minutes * 60 + parseInt(seconds);
    if (countdownInSeconds <= 0) {
        return;
    } else {
        countdown(
            countdownInSeconds,
            hourDisplay,
            minutesDisplay,
            secondsDisplay
        );
        controlPannel.replaceChild(buttonPause, buttonResume);
    }
}

// Check actual value of ticks:
function checkTicks() {
    return ticks;
}

// Get counter display element:
const counterDisplay = document.getElementById('counter');
//counterDisplay.innerHTML = '<span>00:00:00</span>';
// Get hour display:
const hourDisplay = document.getElementById('hour-col');
// Get minutes display:
const minutesDisplay = document.getElementById('minute-col');
// Get seconds display:
const secondsDisplay = document.getElementById('sec-col');
// Get hours input:
const inputHours = document.getElementById('input-hours');
// Get minutes input:
const inputMinutes = document.getElementById('input-minutes');
// Get seconds inpput:
const inputSeconds = document.getElementById('input-seconds');
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
// Create resume button:
const buttonResume = document.createElement('button');
buttonResume.innerText = 'Resume';

// Insert start button into the DOM:
controlPannel.insertBefore(buttonStart, buttonStop);

// Variables for input of countdown:
let hours;
let minutes;
let seconds;

// Timer variable and ticks variable
let timer;
let ticks;

// Run countdown on pressing button start:
buttonStart.addEventListener('click', () => {
    hours = inputHours.value;
    minutes = inputMinutes.value;
    seconds = parseInt(inputSeconds.value);
    startCountdown();
});

// Stop countdown on pressing stop button:
buttonStop.addEventListener('click', () => {
    stopCountdown();
    controlPannel.replaceChild(buttonStart, buttonPause);
    hourDisplay.innerText = String(hours).length < 2 ? `0${hours}` : `${hours}`;
    minutesDisplay.innerText =
        String(minutes).length < 2 ? `0${minutes}` : `${minutes}`;
    secondsDisplay.innerText =
        String(seconds).length < 2 ? `0${seconds}` : `${seconds}`;
    // TODO: click on stop button while countdown is paused
});

// Pause countdown on pause button click:
buttonPause.addEventListener('click', () => {
    pauseCountdown();
    controlPannel.replaceChild(buttonResume, buttonPause);
});

// Resume countdown on resume button click:
buttonResume.addEventListener('click', () => {
    resumeCountdown();
});

// Reset counter and all around by pressing reset button:
buttonReset.addEventListener('click', () => {
    ticks = 0;
    inputHours.value = '0';
    inputMinutes.value = '0';
    inputSeconds.value = '0';
    hourDisplay.innerText = '00';
    minutesDisplay.innerText = '00';
    secondsDisplay.innerText = '00';
});
