function filterPositiveNumbers(arr) {

    let NombresPositives = [];

    for (i = 0; i < arr.length; ++i) {
        
        if (arr[i] > 0) {

            NombresPositives.push(arr[i]);

        }

    }

    
    return NombresPositives;   
}

let res = filterPositiveNumbers([3, -3, -1, 5, 7, -9, 10, -15, 95]);
console.log(res);
    