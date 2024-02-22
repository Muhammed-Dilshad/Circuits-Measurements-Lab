var isOn = false; // Initial state of the switch

function poweron() {
    var text = document.getElementById('screen');
    if (isOn) {
        text.textContent = "88:88";
        text.style.color = 'Red';
        text.style.backgroundColor = 'gray';
        setTimeout(function () {
            text.textContent = ""; // Turn off the display
            text.style.color = 'rgb(66, 55, 55)';
            text.style.backgroundColor = 'transparent';
        }, 1000);
        isOn = false; // Update the state of the switch
    } else {
        text.textContent = "88:88"; // Turn on the display
        text.style.color = 'Red';
        text.style.backgroundColor = 'gray';
        setTimeout(function () {
            text.textContent = "00.00";
            text.style.color = 'rgb(66, 55, 55)';
        }, 1000);
        isOn = true; // Update the state of the switch
    }
}

function changevalue(x) {
    y=isOn;
    if (y) {
        console.log('Display is ON');
        var screen = document.getElementById('screen2');
        var screen1 = document.getElementById('screen');
        var checkbox = document.getElementById('mainscale');
        if(checkbox.checked){
            if (x == 1) {
                screen.innerHTML = (parseFloat(screen.textContent) + 1 ).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) + 1 ).toFixed(2);
            } else if (x == 0) {
                screen.innerHTML = (parseFloat(screen.textContent) - 1 ).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) - 1 ).toFixed(2);
            }
        }
        else{
            if (x == 1) {
            screen.innerHTML = (parseFloat(screen.textContent) + 0.01 ).toFixed(2);
            screen1.innerHTML = (parseFloat(screen1.textContent) + 0.01 ).toFixed(2);
            }
            else if (x == 0) {
            screen.innerHTML = (parseFloat(screen.textContent) - 0.01 ).toFixed(2);
            screen1.innerHTML = (parseFloat(screen1.textContent) - 0.01 ).toFixed(2);
            }
        }
        
    } else {
        console.log('Display is OFF');
    }
}