const student = {
    name: 'Sakib Khan',
    id:121,
    address:'movie cinema hall',
    isSingle: true,
    friends: ['Shakib', 'Siam', 'Siam Ahmed'],
    movies: [{name: 'Dhaka Attack', year: 2017}, {name: 'Nolok', year: 2015}],
    act:function() {
        console.log('Acting in a movie');
    },
    car:{
        brand:'G Wagon',
        price: 1000000,
        model: '2023',
    }
};

//console.log(student);
console.log(student.act);
student.act();