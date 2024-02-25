var isOn = false; // Initial state of the switch
var current_rdng = 0;
var std = false;
var btnnclick = 0;
function poweron() {
    var text = document.getElementById('screen1');
    if (isOn) {
        text.textContent = "88:88";
        text.style.color = 'Red';
        text.style.backgroundColor = 'gray';
        setTimeout(function () {
            text.textContent = "88.88"; // Turn off the display
            text.style.color = 'rgb(66, 55, 55)';
            text.style.backgroundColor = 'gray';
        }, 1000);
        isOn = false; // Update the state of the switch
    } else {
        text.textContent = "88:88"; // Turn on the display
        text.style.color = 'Red';
        text.style.backgroundColor = 'gray';
        setTimeout(function () {
            text.textContent = (Math.random() * (1.00 - 0) + 0).toFixed(2);
            text.style.color = 'rgb(66, 55, 55)';
        }, 1000);
        isOn = true; // Update the state of the switch
    }
}

function changevalue(x) {
    y=isOn;
    if (y) {
        console.log('Display is ON');
        var screen3 = document.getElementById('screen3');
        var screen2 = document.getElementById('screen2');
        var screen1 = document.getElementById('screen1');
        var checkbox = document.getElementById('mainscale1');
        if(checkbox.checked){
            if (x == 1) {
                screen2.innerHTML = (parseFloat(screen2.textContent) + 1 ).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) - 1 ).toFixed(2);
                screen3.innerHTML =screen1.textContent
            } else if (x == 0) {
                screen2.innerHTML = (parseFloat(screen2.textContent) - 1 ).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) + 1 ).toFixed(2);
                screen3.innerHTML = screen1.textContent
            }
        }
        else{
            if (x == 1) {
                screen1.innerHTML = (parseFloat(screen1.textContent) - 0.01 ).toFixed(2);
                screen2.innerHTML = (parseFloat(screen2.textContent) + 0.01 ).toFixed(2);
                screen3.innerHTML = screen1.textContent
            }
            else if (x == 0) {
                screen1.innerHTML = (parseFloat(screen1.textContent) + 0.01 ).toFixed(2);
                screen2.innerHTML = (parseFloat(screen2.textContent) - 0.01 ).toFixed(2);
                screen3.innerHTML = screen1.textContent
            }
        }
        
    } else {
        console.log('Display is OFF');
    }
}

function cvalue(x){
    y=isOn;
    if (y) {
        console.log('Display is ON');
        var screen3 = document.getElementById('screen3');
        var screen1 = document.getElementById('screen1');
        var checkbox = document.getElementById('mainscale2');
        if(checkbox.checked){
            if (x == 1) {
                screen3.innerHTML = (parseFloat(screen3.textContent) + 1 ).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) + 1 ).toFixed(2);
            } else if (x == 0) {
                screen3.innerHTML = (parseFloat(screen3.textContent) - 1 ).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) - 1 ).toFixed(2);
            }
        }
        else{
            if (x == 1) {
                screen1.innerHTML = (parseFloat(screen1.textContent) + 0.01 ).toFixed(2);
                screen3.innerHTML = (parseFloat(screen3.textContent) + 0.01 ).toFixed(2);
            }
            else if (x == 0) {
                screen1.innerHTML = (parseFloat(screen1.textContent) - 0.01 ).toFixed(2);
                screen3.innerHTML = (parseFloat(screen3.textContent) - 0.01 ).toFixed(2);
            }
        }
        
    } else {
        console.log('Display is OFF');
    }
}

function setval(){
    var screen1 = document.getElementById('screen1');
    current_rdng = screen1.innerHTML
    std = true;
}