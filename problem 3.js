let price ='$249';

let chars =price.split("");

for( let i = 0; i < chars.length; i++) {
    let element = chars[i];
    if(!isNaN(element) && element !==" ") {
        console.log(element);
    }
}