let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30 * hh + mm / 2;  // Corrected hour hand calculation
    let mrotation = 6 * mm;
    let srotation = 6 * ss;

    hr.style.transform = `rotate(${hrotation}deg)`;  // Corrected template literal usage
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}

// Call displayTime every second
setInterval(displayTime, 1000);

// Initialize clock immediately on page load
displayTime();
