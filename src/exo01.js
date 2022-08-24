// return true if parameter is a primitive, or false otherwise
export function isPrimitive(x) {
  //return true;
  return x !== Object(x);
}
