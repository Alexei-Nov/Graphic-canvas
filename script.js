const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

document.addEventListener('click', gen);

let x = 0;
let y = 0;
let interval = 0;
let xCoord = [];
let yCoord = [];
let yCoordNew = [];
let points = 10;

for (let i = 0; i < points; i++) {
	yCoord[i] = 0;
};

function gen() {
	interval = 650 / (points);
	x = interval;
	for (let i = 0; i < points; i++) {
		y = Math.floor(Math.random() * 350 + 20);
		xCoord[i] = x;
		yCoordNew[i] = y;
		x = x + interval;
	};
};

function newPoints() {

	for (let i = 0; i < points; i++) {
		if (yCoord[i] - yCoordNew[i] <= -points) {
			yCoord[i] = yCoord[i] + points / 2;
		}
		else if (yCoord[i] - yCoordNew[i] >= points) {
			yCoord[i] = yCoord[i] - points / 2;
		};
	};
};



requestAnimationFrame(draw);
function draw() {
	requestAnimationFrame(draw);
	ctx.clearRect(0, 0, 700, 400);
	ctx.beginPath();
	ctx.moveTo(0, 400);
	for (let i = 0; i < points; i++) {
		ctx.lineTo(xCoord[i], yCoord[i]);
		ctx.strokeStyle = 'black';
		ctx.lineWidth = '3';
		ctx.lineCap = 'round';
		ctx.stroke();
		ctx.moveTo(xCoord[i], yCoord[i]);
		ctx.beginPath();
		ctx.arc(xCoord[i], yCoord[i], 5, 0, Math.PI * 2);
		ctx.fillStyle = 'white';
		ctx.lineWidth = '3';
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	};
	ctx.closePath();
}

let genNew = setInterval(newPoints, 10);
gen(points);