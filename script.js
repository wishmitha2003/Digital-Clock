function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let dayIndex = now.getDay(); // 0 = Sunday, 6 = Saturday

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Highlight the current day
    document.querySelectorAll(".weekdays span").forEach((span, index) => {
        span.classList.toggle("active", index === dayIndex);
    });
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
