// Function to update element inner text with current time:
function fillElementWithCurrentTime(element) {
  // Get current time:
  const currentTime = new Date().toLocaleTimeString();
  element.innerText = currentTime;
}

// Counter function:
function counter(hours, minutes, displayElement) {
  // Convert to seconds and get total length of countdown:
  const countdownInSeconds = hours * 3600 + minutes * 60;
  // For every second of countdown refresh data on counter display:
  for (let i = 0; i <= countdownInSeconds; i++) {
    setTimeout(() => {
      const displayHours = parseInt((countdownInSeconds - i) / 3600);
      const displayMinutes = parseInt(
        (((countdownInSeconds - i) / 3600) % 1) * 60
      );
      const displaySeconds = Math.round(
        (((((countdownInSeconds - i) / 3600) % 1) * 60) % 1) * 60
      );
      displayElement.innerText = `${
        String(displayHours).length > 1 ? displayHours : "0" + displayHours
      }:${
        String(displayMinutes).length > 1
          ? displayMinutes
          : "0" + displayMinutes
      }:${
        String(displaySeconds).length > 1
          ? displaySeconds
          : "0" + displaySeconds
      }`;
    }, i * 1000);
  }
}

// Get element to display current time:
const clockDisplay = document.getElementById("clock");

// Get element to display counter:
const counterDisplay = document.getElementById("counter");

// Get element to input hours:
const hoursInput = document.getElementById("input-hours");

// Get element to input minutes:
const minutesInput = document.getElementById("input-minutes");

// Get element for start button:
const startButton = document.getElementById("button-start");

// Get element for stop button:
const stopButton = document.getElementById("button-stop");

// Get element to display countdown:
const countdownDisplay = document.getElementById("counter");

// Display current time updating every second:
// Note: Somebody would call it clock ......
setInterval(() => {
  fillElementWithCurrentTime(clockDisplay);
}, 1000);

// Run counter on start button click:
startButton.addEventListener("click", () => {
  // Variable for hours countdown:
  const timerHours = hoursInput.value;

  // Variable for minutes to countdown:
  const timerMinutes = minutesInput.value;

  // Run counter function:
  counter(timerHours, timerMinutes, countdownDisplay);
});
