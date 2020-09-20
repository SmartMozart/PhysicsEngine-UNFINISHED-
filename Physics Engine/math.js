function sq(x) {
	return x*x;
}
function dist(x1, y1, x2, y2) {
	return Math.sqrt(sq(x1-x2)+sq(y1-y2));
}
function vector(x, y) {
	return new vect(x, y);
}
function vect(x, y) {
	this.x = x;
	this.y = y;
}
function angle(x1, y1, x2, y2) {
	var x = x2-x1;
	var y = y2-y1;
	var slope = y/x
	var angle = Math.atan(slope);
	return angle;
}
function terminalVelocity(m, g, Cd, p, A) {
	var num = 2*m*g;
	var den = p*A*Cd;
	return Math.sqrt(num/den);
}