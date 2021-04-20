// problem_2 ................................

function multi(array) {
    if (array.length < 1) {
        return 1;
    }
    return array.pop() * multi(array)
}
console.log(multi([1, 2, 3, 4]))
