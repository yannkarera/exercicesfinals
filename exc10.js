function mergeExclusive(arr1, arr2) {

let NonCommonArr1 = arr1.filter(number => !arr2.includes(number));
let NonCommonArr2 = arr2.filter(number => !arr1.includes(number));
    

return NonCommonArr1.concat(NonCommonArr2)

}

let ar = mergeExclusive([1, 2, 3, 10, 5, 3, 14], [1, 4, 5, 6, 14]);
console.log(ar);