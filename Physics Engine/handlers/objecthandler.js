const p = 1.225
function Circle(r, m, x, y, static) {
	this.r = r*10;
	this.c = Math.PI*2*r;
	this.d = 2*r
	this.a = vector(0, 0);
	this.v = vector(0, 0);
	this.p = vector(x, y);
	this.t = 1;
	this.static = static;
	this.m = m;
	this.A = sq(Math.PI*r);
	this.Cd = 0.47
	this.Vt = terminalVelocity(this.m, G, this.Cd, p, this.A);
}
function Line(x1, y1, x2, y2) {
	this.pA = vector(x1, y1);
	this.pB = vector(x2, y2);
	this.t = 2;
}