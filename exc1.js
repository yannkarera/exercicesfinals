function mergeEveryTwoLetters(mot) {

    
    let NouveauMot = "";

    for (i = 0; i < mot.length; i += 2) {

        NouveauMot += mot[i];
    }

    console.log(NouveauMot);
}

mergeEveryTwoLetters("YannKarera");