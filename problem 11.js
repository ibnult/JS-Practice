function groupByType(arr) {
 
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  const result = {};

  for (let item of arr) {
    let type = typeof item;

   
    if (type === "object") {
      if (!result.object) {
        result.object = [];
      }
      result.object.push(item);
    } else {
      if (!result[type]) {
        result[type] = [];
      }
      result[type].push(item);
    }
  }

  return result;
}

console.log(groupByType(["apple", 42, true, {}, [], "banana", 7, false, null, undefined]));
console.log(groupByType([100, "JS", {}, null, true]));
console.log(groupByType("not an array")); 
