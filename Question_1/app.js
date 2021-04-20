// problem_1 ................................

function fibonanchi(num) {
    if (num === 1 || num === 2) {
        return 1;
    } else if (num > 2) {
        return fibonanchi(num - 1) + fibonanchi(num - 2);

    }
}

console.log(fibonanchi(7))

