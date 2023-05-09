// CLOCK!

// Clock function:
function clock(targetElement) {
    const timer = setInterval(() => {
        const date = new Date();
        const currentTime = date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        targetElement.innerHTML = `<span class="current-time">${currentTime}</span>`;
    }, 1000);
}

// Get clock element:
const clockDisplay = document.getElementById('clock');

// Run clock inside specified element:
clock(clockDisplay);
