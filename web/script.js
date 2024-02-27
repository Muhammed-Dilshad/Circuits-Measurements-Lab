var isOn = false; // Initial state of the switch
var current_rdng = 0;
var std = false;
var btnnclick = 0;
function poweron() {
    var text = document.getElementById('screen1');
    var voltage = document.getElementById('output');
    if (isOn) {
        text.textContent = "88:88";
        voltage.textContent = "--.--";
        text.style.color = 'Red';
        text.style.backgroundColor = 'gray';
        setTimeout(function () {
            voltage.textContent = "--.--";
            text.textContent = "88.88"; // Turn off the display
            text.style.color = 'rgb(66, 55, 55)';
            text.style.backgroundColor = 'gray';
        }, 1000);
        isOn = false; // Update the state of the switch
    } else {
        voltage.textContent = "--.--";
        text.textContent = "88:88"; // Turn on the display
        text.style.color = 'Red';
        text.style.backgroundColor = 'gray';
        setTimeout(function () {
            voltage.textContent = "00.00";
            text.textContent = (Math.random() * (1.00 - 0) + 0).toFixed(2);
            text.style.color = 'rgb(66, 55, 55)';
        }, 1000);
        isOn = true; // Update the state of the switch
    }
}

function changevalue(x) {
    y = isOn;
    if (y) {
        console.log('Display is ON');
        var screen3 = document.getElementById('screen3');
        var screen2 = document.getElementById('screen2');
        var screen1 = document.getElementById('screen1');
        var voltage = document.getElementById('output');
        var checkbox = document.getElementById('mainscale1');
        if (checkbox.checked) {
            if (x == 1) {
                screen2.innerHTML = (parseFloat(screen2.textContent) + 1).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) - 1).toFixed(2);
                screen3.innerHTML = screen1.textContent
                voltage.innerHTMl = (parseFloat(screen1.textContent)).toFixed(2) * 10
            } else if (x == 0) {
                screen2.innerHTML = (parseFloat(screen2.textContent) - 1).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) + 1).toFixed(2);
                screen3.innerHTML = screen1.textContent
                voltage.innerHTMl = (parseFloat(screen1.textContent)).toFixed(2) * 10
            }
        }
        else {
            if (x == 1) {
                screen1.innerHTML = (parseFloat(screen1.textContent) - 0.01).toFixed(2);
                screen2.innerHTML = (parseFloat(screen2.textContent) + 0.01).toFixed(2);
                screen3.innerHTML = screen1.textContent
                voltage.innerHTMl = (parseFloat(screen1.textContent)).toFixed(2) * 10
            }
            else if (x == 0) {
                screen1.innerHTML = (parseFloat(screen1.textContent) + 0.01).toFixed(2);
                screen2.innerHTML = (parseFloat(screen2.textContent) - 0.01).toFixed(2);
                screen3.innerHTML = screen1.textContent
                voltage.innerHTMl = (parseFloat(screen1.textContent)).toFixed(2) * 10
            }
        }

    } else {
        console.log('Display is OFF');
    }
}

function cvalue(x) {
    console.log('Display is ON');
    y = isOn;
    if (y) {
        var screen3 = document.getElementById('screen3');
        var screen1 = document.getElementById('screen1');
        var checkbox = document.getElementById('mainscale2');
        if (checkbox.checked) {
            if (x == 1) {
                screen3.innerHTML = (parseFloat(screen3.textContent) + 1).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) + 1).toFixed(2);
                voltage.innerHTMl = (parseFloat(screen1.textContent)).toFixed(2) * 10
            } else if (x == 0) {
                screen3.innerHTML = (parseFloat(screen3.textContent) - 1).toFixed(2);
                screen1.innerHTML = (parseFloat(screen1.textContent) - 1).toFixed(2);
                voltage.innerHTMl = (parseFloat(screen1.textContent)).toFixed(2) * 10
            }
        }
        else {
            if (x == 1) {
                screen1.innerHTML = (parseFloat(screen1.textContent) + 0.01).toFixed(2);
                screen3.innerHTML = (parseFloat(screen3.textContent) + 0.01).toFixed(2);
                voltage.innerHTMl = (parseFloat(screen1.textContent)).toFixed(2) * 10
            }
            else if (x == 0) {
                screen1.innerHTML = (parseFloat(screen1.textContent) - 0.01).toFixed(2);
                screen3.innerHTML = (parseFloat(screen3.textContent) - 0.01).toFixed(2);
                voltage.innerHTMl = (parseFloat(screen1.textContent)).toFixed(2) * 10
            }
        }

    } else {
        console.log('Display is OFF');
    }
}

function startplotting() {
    document.getElementById('Inst').style.display = 'none';
    document.getElementById('table').style.display = 'flex';
}

var x = 1;
var xValues = [];
var yValues = [];

function plot() {
    var screen2 = document.getElementById('screen2');
    var screen1 = document.getElementById('screen1');
    const table = document.getElementById("myTable");
    const rowCount = table.rows.length;
    console.log(x + 'w' + rowCount)
    if (rowCount <= 15) {
        const row = table.insertRow(rowCount);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerHTML = x;
        cell2.innerHTML = screen1.textContent;
        cell3.innerHTML = screen2.textContent;
        xValues.push(screen1.textContent);
        yValues.push(screen2.textContent);
        if (x < 15) {
            x += 1;
        }
    }
}

function plotgraph() {
    if (x < 5) {
        var userClickedOk = confirm("Do you proceed")
        if (userClickedOk) {
            alert('plot more');
        }
    }
    else if (x == 15) {
        alert("plot")
        console.log('strt plot')
    }
    else {
        var userClickedOk = confirm("Do you proceed")
        if (userClickedOk) {
            alert('contnue');
        } else {
            console.log('plot_more')
        }
    }
}
function openDialog() {
    // Show the dialog overlay
    document.getElementById('dialogOverlay').style.display = 'block';

    // Sample data arrays
    const labels = ['1', '2', '3', '4', '5'];
    const data1 = xValues;
    const data2 = yValues;

    // Get the canvas element and create a 2D rendering context
    const ctx = document.getElementById('myChart').getContext('2d');

    // Create a line chart
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Scatter Plot',
                    data: labels.map((label, index) => ({ x: data1[index], y: data2[index] })),
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)', // Transparent fill color
                    pointRadius: 2, // Adjust the size of data points
                    showLine: true, // Show lines connecting the points
                    lineTension: 0.5,
                    borderWidth:1
                }
            ]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Data 1'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Data 2'
                    }
                }
            }
        }
    });
}

function closeDialog() {
    // Hide the dialog overlay
    document.getElementById('dialogOverlay').style.display = 'none';
}