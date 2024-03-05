function rotateLeft(arr) {
// AVEC PUSH() ET SHIFT()

let PremierElement = arr.shift()
arr.push(PremierElement)








// SANS PUSH() ET SHIFT()


let PremierElement = arr[0];
arr = arr.slice(1).concat(PremierElement);

returnarr

}    
let res = rotateLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);
