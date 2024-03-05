function sumNumbersInString(str) {

    // return str.split(',').map(Number).reduce((total, digit) => total + digit, 0);
let numbers =  str.split(',').map(Number);
let total = 0;

for (i = 0; i < numbers.length; ++i){


    total += numbers[i];

}

return total


}

let str = "1.5, 2.3, 3.1, 4, 5.5,6, 7, 8, 9, 10.9"

console.log(sumNumbersInString(str));