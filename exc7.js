function sumDigits(n) {

let StringNumber = n.toString();
let sum = 0;

    for (i = 0; i < StringNumber.length; ++i){

        sum += parseInt(StringNumber[i]);
    }

return sum;

}

let somme = sumDigits(3458971); 
console.log(somme);