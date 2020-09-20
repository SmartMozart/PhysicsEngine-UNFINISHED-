function linePoint(x1, y1, x2, y2, px, py) {
  var d1 = dist(px,py, x1,y1);
  var d2 = dist(px,py, x2,y2);
  var lineLen = dist(x1,y1, x2,y2);
  if (d1+d2 == lineLen) {
    return true;
  }
  return false;
}
function pointCircle(px, py, cx, cy, r) {
  var distX = px-cx;
  var distY = py-cy;
  var distance = Math.sqrt(sq(distX)+sq(distY));
  if (distance <= r) {
    return true;
  }
  return false;
}
function lineCircle(x1, y1, x2, y2, cx, cy, r) {
  var inside1 = pointCircle(x1,y1, cx,cy,r);
  var inside2 = pointCircle(x2,y2, cx,cy,r);
  if (inside1 || inside2) return true;
  var distX = x1 - x2;
  var distY = y1 - y2;
  var len = Math.sqrt(sq(distX) + sq(distY));
  var dot = ( ((cx-x1)*(x2-x1)) + ((cy-y1)*(y2-y1)) ) / sq(len);
  var closestX = x1 + (dot * (x2-x1));
  var closestY = y1 + (dot * (y2-y1));
  var onSegment = linePoint(x1,y1,x2,y2, closestX,closestY);
  if (!onSegment) return false;
  distX = closestX - cx;
  distY = closestY - cy;
  var distance = Math.sqrt(sq(distX)+sq(distY));
  if (distance <= r) {
    return true;
  }
  return false;
}