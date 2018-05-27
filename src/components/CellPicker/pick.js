const pi = Math.PI;
const pi8 = pi / 8;

export default (innerRadius, outerRadius, dx, dy) => {
  const distance = Math.hypot(dx, dy);

  let angle = Math.atan2(dx, dy);
  if (angle < 0) angle += 2 * pi;

  if (distance < innerRadius) return 4;

  if (distance > outerRadius) return null;

  if (angle > pi + 5 * pi8 && angle < pi + 7 * pi8) return 6;
  if (angle > pi + 3 * pi8 && angle < pi + 5 * pi8) return 3;
  if (angle > pi +     pi8 && angle < pi + 3 * pi8) return 0;
  if (angle > pi -     pi8 && angle < pi +     pi8) return 1;
  if (angle > pi - 3 * pi8 && angle < pi -     pi8) return 2;
  if (angle > pi - 5 * pi8 && angle < pi - 3 * pi8) return 5;
  if (angle > pi - 7 * pi8 && angle < pi - 5 * pi8) return 8;
  return 7;
};
