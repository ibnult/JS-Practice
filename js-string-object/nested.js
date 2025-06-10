const college= {
    name : 'VNC',
    class: ['11', '12'],
    events:['science fair', 'bijoy dibos', '21 Feb'],
    unique:{
        color: 'blue',
        result: {
            gpa:5,
            merit: 'top',
        }
    }
}

console.log(college.unique.result.merit); // Object property access

college.unique.result.merit = 'topper'; // Object property assignment
console.log(college.unique.result.merit); // Object property access after assignment


college.events[1]= 'victory day'; // Array element assignment
console.log(college.events[1]); // Array element access after assignment
delete college.class;
console.log(college); // Deleting a property from an object