const G = 9.81
function applyForce(object, force) {
	object.a.x+=(force.x/object.m);
	object.a.y+=(force.y/object.m);
}
function applyGravity(object, Gs) {
	object.a.y+=Gs*G/100;
}
function airResistance(object) {

}
function update(object) {
	if (!object.static) {
		object.v.x+=object.a.x;
		object.v.y+=object.a.y;
		object.p.x+=object.v.x;
		object.p.y+=object.v.y;
	}
}