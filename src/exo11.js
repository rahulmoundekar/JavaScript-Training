export function deduplicateArray(arr) {
  // TODO: remove duplicate values in the array and return the filtered array
  // 1 - with filter and indexOf methods
  // 2 - with a Set and spread operator
  arr = arr.filter(function (element, index) {
    return arr.indexOf(element) === index;
  });

  return [...new Set(arr)];
}

export function getPropertyFromValue(obj, val) {
  // TODO: return the name of the first property of `obj` with value `val`, or null if not found
  // 1 - with find and Object.keys methods

  // 2 - with a Map and Object.entries
  return Object.keys(obj).find((key) => obj[key] === val);

  // if i had a map where keys were values and values were keys
  const map = new Map(Object.entries(obj));
  return map.get(val);
}
