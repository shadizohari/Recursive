// problem_4 ................................

const flatten = oldArr => {
    let newArr = [];
    for (let i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr = [...newArr, oldArr[i]]
        }
    }
    return newArr;
}