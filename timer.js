/* 
████████╗██╗███╗   ███╗███████╗██████╗ 
╚══██╔══╝██║████╗ ████║██╔════╝██╔══██╗
   ██║   ██║██╔████╔██║█████╗  ██████╔╝
   ██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗
   ██║   ██║██║ ╚═╝ ██║███████╗██║  ██║
   ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝
  */

// Countdown function:
function countdown(countdownInSeconds) {
    timer = setInterval(() => {
        ticks++;
        console.log(countdownInSeconds - ticks);
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
    const countdownInSeconds = hours * 3600 + minutes * 60;
    ticks = 0;
    if (countdownInSeconds <= 0) {
        return;
    } else {
        countdown(countdownInSeconds, ticks);
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
    const countdownInSeconds = hours * 3600 + minutes * 60;
    if (countdownInSeconds <= 0) {
        return;
    } else {
        countdown(countdownInSeconds, ticks);
        controlPannel.replaceChild(buttonPause, buttonResume);
    }
}

// Check actual value of ticks:
function checkTicks() {
    return ticks;
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
// Create resume button:
const buttonResume = document.createElement('button');
buttonResume.innerText = 'Resume';

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
