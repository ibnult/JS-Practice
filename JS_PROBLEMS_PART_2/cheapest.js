const mobiles=[
    {name:'Samsung', price:20000, camera:'12MP', color:'Black'},
    {name:'iPhone', price:100000, camera:'12MP', color:'Silver'},
    {name:'OnePlus', price:30000, camera:'48MP', color:'Red'},
    {name:'Nokia', price:12000, camera:'8MP', color:'Blue'},
    {name:'Xiaomi', price:16000, camera:'108MP', color:'White'},
    {name:'Realme', price:50000, camera:'64MP', color:'Yellow'},
]

function getCheapestPhone(phones) {
    let min= phones[0];
    for(const phone of phones){
        if (phone.price < min.price) {
            min = phone;
        }
        
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log('cheapest phone is:', cheap);