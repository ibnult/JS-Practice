/**
 * year will be leap year if the year is divisible by 4,
 * If the year is not divisible by 100 but divisible by 4, it is a leap year.
 * If the year is divisible by 100, it must also be divisible by 400 to be a leap year.
 */
function isLeapYear(year) {
    if(year%4===0){
        return true ;
    }
    else{
        return false ;
    }
}

const lipi=isLeapYear(2043);
console.log(lipi);

// 

function isLeapYear2(year) {
    if(year%100!==0 &&year%4===0){
        return true ;
    }
    else if(year%100===0 && year%400===0){
        return true ;
    }
    else{
        return false ;
    }
}

const lipi2=isLeapYear2(2052);
const lipi3=isLeapYear2(1900);
console.log(lipi2, lipi3);