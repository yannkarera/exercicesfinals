function moreThanFourZeros(n) {

    let zero = [];
    let cpt = 0;
    for (i = 0; i < n.length && cpt < 5; ++i) {

        if (n[i] == 0) {
            ++cpt;
            // zero.push(n[i]);
        }
    }

    return cpt > 4;
}

console.log(moreThanFourZeros([0, 0, 0, 0, 0, 48, 0, 5, 12, 0, 5, 10, 36, 0, 41, 50, 20]));