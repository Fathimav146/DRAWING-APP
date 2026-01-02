const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const clearBtn = document.getElementById('clearBtn');

// Set canvas size to full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let painting = false;

function startPosition(e) {
    painting = true;
    draw(e); // Allows for single dots
}

function finishedPosition() {
    painting = false;
    ctx.beginPath(); // Resets the path so lines don't connect
}

function draw(e) {
    if (!painting) return;

    // Line Styles
    ctx.lineWidth = sizePicker.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value;

    // Neon Glow Effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = colorPicker.value;

    // Drawing the line
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

// Event Listeners
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

// Clear Canvas
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
