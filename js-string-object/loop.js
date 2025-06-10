const mobile ={
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '50 mp'
}

//for of: array;
//for in: object;

for (const property in mobile ){
    // console.log(property)
    // console.log(mobile[property])
}

const keys= Object.keys(mobile);
console.log(keys);

for (const key of keys){
    console.log(key,':',mobile[key]);
}

