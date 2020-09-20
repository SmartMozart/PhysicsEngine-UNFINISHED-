var c = document.getElementById("c")
var ctx = c.getContext('2d');
function drawLine(x1,y1,x2,y2) {
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}
function drawCircle(x,y,r,fill) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke()
	if(fill) {
		ctx.fill();
	}
}
function drawObject(object, fill) {
	if(object.t == 2) {
		drawLine(object.pA.x, object.pA.y, object.pB.x, object.pB.y);
	} else if(object.t == 1) {
		drawCircle(object.p.x, object.p.y, object.r, true);

	} else {
		return false;
	}
}
function background() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "black";
}