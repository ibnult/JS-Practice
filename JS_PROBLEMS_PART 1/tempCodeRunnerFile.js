function oddAverage(numbers){
    for(const number of numbers){
           if(number % 2 === 1){
             console.log(number);
           }

}
}

const numbers=[42,13,58,65,81,96,7];
const avg=oddAverage(numbers);
console.log("Average of the odd number is:" + avg); 