// Generating random color
const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {  
        color += hex[Math.floor(Math.random() * 16)];  
    }
    return color;
};



let intervalID;

// Function to start changing background color
const startchangingcolor = function () {
    if (!intervalID) {
        intervalID = setInterval(changebgcolor, 1000);
    }
    function changebgcolor() {
        document.body.style.backgroundColor = randomcolor();
    }
};

// Function to stop changing background color
const stopchangingcolor = function () {
    clearInterval(intervalID);
    intervalID = null;
};

// Selecting start button
document.querySelector('#start').addEventListener('click', startchangingcolor);
// Selecting stop button
document.querySelector('#stop').addEventListener('click', stopchangingcolor);


