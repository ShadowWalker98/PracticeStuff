function getStats(a, b) {
    let resultAdd = a + b;
    let resultDiff = a - b;

    return {
        sum: resultAdd,
        difference: resultDiff,
    };
}

let stats = getStats(4,2);
console.log(stats);