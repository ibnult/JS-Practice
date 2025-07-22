function cleanAndSort(names) {
  if (!Array.isArray(names)) {
    return "Invalid";
  }

  for (let name of names) {
    if (typeof name !== "string") {
      return "Invalid";
    }
  }

  const uniqueNames = [...new Set(names)];

  uniqueNames.sort();

  return uniqueNames;
}


console.log(cleanAndSort(["sakib", "tamim", "mushfiq", "sakib", "liton", "tamim"]));
console.log(cleanAndSort(["rahim", "karim", "Rahim", "rahim"]));
console.log(cleanAndSort(["apple", 42, "banana"])); 
console.log(cleanAndSort("not an array")); 
