let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let timeDisplay = document.getElementById('timeDisplay');

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

// Start the stopwatch
startBtn.addEventListener('click', () => {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
        startBtn.textContent = "Pause";
        stopBtn.disabled = false;
        resetBtn.disabled = false;
    }
});

// Stop the stopwatch
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = "Start";
    stopBtn.disabled = true;
});

// Reset the stopwatch
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = "00:00:00";
    startBtn.textContent = "Start";
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});

// Update the time every second
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    timeDisplay.textContent = formatTime(hours, minutes, seconds);
}

// Format the time to always show two digits
function formatTime(hours, minutes, seconds) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Pad the number with a leading zero if it's less than 10
function padZero(num) {
    return num < 10 ? '0' + num : num;
}
