let currentHour = new Date().getHours();

function updateProgress() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Check if the hour has changed
    if (hours !== currentHour) {
        currentHour = hours;
        setProgress(0);
    }

    const totalSeconds = minutes * 60 + seconds;
    const progressPercentage = (totalSeconds / 3600) * 100;

    setProgress(progressPercentage);

    const title = document.getElementById('title');
    title.textContent = `Progress of ${hours.toString().padStart(2, '0')}:00 Hour`;

    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function setProgress(percentage) {
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = `${percentage}%`;

    const percentageDisplay = document.getElementById('percentageDisplay');
    percentageDisplay.textContent = `${Math.round(percentage)}%`;
    percentageDisplay.style.width = `${percentage}%`;
}

setInterval(updateProgress, 1000);
updateProgress();