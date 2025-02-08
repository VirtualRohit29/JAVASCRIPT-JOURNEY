let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let timedisplay = document.querySelector('.timedisplay');

let msec = 0;
let min = 0;
let sec = 0;

let timerid = null;

start.addEventListener('click', function () {
    if (timerid != null) {
        clearInterval(timerid);
    }
    timerid = setInterval(starttimer, 10);
});

// function for stop button
stop.addEventListener('click', function () {
    clearInterval(timerid);
});

// function for reset button
reset.addEventListener('click', function () {
    clearInterval(timerid);
    msec = 0;
    sec = 0;
    min = 0;
    timedisplay.innerHTML = `00 : 00 : 00`;
});

function starttimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }

    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secstring = sec < 10 ? `0${sec}` : sec;
    let minstring = min < 10 ? `0${min}` : min;

    timedisplay.innerHTML = `${minstring} : ${secstring} : ${msecstring}`;
}
