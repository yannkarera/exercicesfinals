function mergeArrays(arr1, arr2) {


    let arr3 = [];

    for (i = 0; i < arr1.length; ++i) {
        arr3.push(arr1[i])
    } 
    for (i = 0; i < arr2.length; ++i) {
        arr3.push(arr2[i])
    }

    return arr3
}

let ar = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log(ar);



