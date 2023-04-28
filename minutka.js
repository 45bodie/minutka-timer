// Function to update element inner text with current time:
function fillElementWithCurrentTime(element) {
  // Get current time:
  const currentTime = new Date().toLocaleTimeString();
  element.innerText = currentTime;
}

// Get element to display current time:
const currentTimeDisplay = document.getElementById("current-time");

// Display current time updating every second:
// Note: Somebody would call it clock ......
setInterval(() => {
  fillElementWithCurrentTime(currentTimeDisplay);
}, 1000);
