//12 inch 1 feet 

function inchToFeet (inch){
    const feet =inch/12;
    return feet;
}

//75 inch

function inchToFeet2 (inch){
    const feetFraction =inch/12;
    const feetNumber=parseInt(feetFraction);  
    const inchRemaining= inch%12;
    const result =feetNumber + " feet " + inchRemaining + " inch";
    return result; 
}


const rihanHeight= inchToFeet(75);
//console.log(rihanHeight);
const rihanHeight2= inchToFeet2(75);
//console.log(rihanHeight2); 


function mileToKm(mile){
    const km= mile* 1.60934;
    return km;
}
const mile = mileToKm(5);
console.log(mile);


function kmToMile(km){
    const mile= km/1.60934;
    return mile;
}

const km = kmToMile(8);
console.log(km);