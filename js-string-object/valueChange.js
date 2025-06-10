const person={
    name: "John",
    age: 30,
    profession: "Engineer",
    salary: 50000,
    married: true,
}


person.salary = 60000; // Update salary using dot notation
person["married"] = false; // Update married status using bracket notation
person["profession"] = "Senior Engineer"; // Update profession using bracket notation
console.log(person); // Output the updated person object