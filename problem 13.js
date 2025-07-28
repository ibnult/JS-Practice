function findActiveStudents(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  const activeNames = students
    .filter(student => typeof student === 'object' && student.isActive === true)
    .map(student => student.name);

  return activeNames;
}

const input1 = [
  { name: "Rafi", roll: 1, isActive: true },
  { name: "Tushar", roll: 2, isActive: false },
  { name: "Alif", roll: 3, isActive: true },
  { name: "Hasan", roll: 4, isActive: false }
];

console.log(findActiveStudents(input1)); 
console.log(findActiveStudents("not an array"));
console.log(findActiveStudents([
  { name: "John", roll: 11 },
  { name: "Maya", roll: 12, isActive: true }
])); 
