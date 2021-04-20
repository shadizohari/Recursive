// problem_3 ................................

const func = str => {
    if (str.length <= 1) return str;
    return func(str.slice(1)) + str[0]
}

let x = "salam"
console.log(x.slice(1))