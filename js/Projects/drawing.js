var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 10;
var dragging = false;
//sets canvas to full width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius * 2;

var putPoint = function (e) {
    if (dragging) {
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
}

var engage = function (e) {
    dragging = true;
    putPoint(e);
}

var disengage = function () {
    dragging = false;
    context.beginPath();
}
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

// Controller Buttons
var setRadius = function (newRadius) {
    if (newRadius < minRad) 
        newRadius = minRad;
    else if (newRadius > maxRad) 
        newRadius = maxRad;
        radius = newRadius;
        context.lineWidth = radius*2;
        
        radSpan.innerHTML = radius;
    
}

var minRad = 0.5,
    maxRad = 100,
    defaultRad = 20,
    interval = 5,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');

decRad.addEventListener('click', function(){
    setRadius(radius-interval)
});
incRad.addEventListener('click', function(){
    setRadius(radius+interval)
});

setRadius(defaultRad);

// Color Palletes
var colors = ['black','grey','white', 'red', 'orange', 'yellow', 'indigo', 'violet','green'];

for(var i = 0, n = colors.length; i<n; i++){
    var swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
    context.fillStyle = color;
    context.strokeStyle = color;
    var active = document.getElementsByClassName('active')[0];
    if(active){
        active.className = 'swatch';
    }
}

function setSwatch(e){
    var swatch = e.target;
    setColor(swatch.style.backgroundColor);
    swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});