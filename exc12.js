function extractColumn(arr, n) {

return arr.map(row => row[n]);


}

let ar = [ ["John", 120],
                ["Jane", 115],
                ["Thomas", 123],
                ["Mel", 112],
                ["Charley", 122]
            ];

        
        
console.log(extractColumn(ar, 0));