export function parseUserData(data) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 1 - using Object.assign
  const newObj = Object.assign({}, defaults, data);
  // 2 - using spread operator on properties
  let copiedData = { ...newObj };
  // 3 - using destructuring and default parameters for parseUserData

  return myObject;
}
