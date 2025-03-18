// Set the target date (August 12, 2025)
const launchDate = new Date("August 12, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "<h2>🎉 SecureLuv is LIVE! 🔥</h2>";
        return;
    }

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize on load
updateCountdown();