var circle = new Circle(1, 1, 640, 0, false);
var line =  new Line(780, 240, 500, 400);
applyGravity(circle, 2.79);
function loopUpdate() {
	updateDraw(circle);
	setTimeout(loopUpdate, 10);
}
function updateDraw(obj) {
	background();
	update(obj);
	drawObject(line);
	drawObject(obj);