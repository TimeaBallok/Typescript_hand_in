const calculate = (x, y, operation) => {
    let result = 0
    return new Promise((resolve, reject) => {
        result = operation(x, y)
        if (!isFinite(result)) {
            reject(result)
        } else {
            resolve(result)
        }
    })
}

const add = (x, y) => x + y
const subtract = (x, y) => x - y
const multiplicat = (x, y) => x * y
const divide = (x, y) => {
    if (y === 0)
        throw new Error('divide by zero error')
    else
        return x / y
}

//console.log(calculate(2,3,add))

calculate(3, 4, add)
    .then(calculate(5, 2, add)
        .then((result) => {
            console.log("success:" + result)
        }))
    .catch(error => {
        console.log(error)
    })
    .then(calculate(5, 2, subtract)
        .then((result) => {
            console.log("success:" + result)
        }))
    .catch(error => {
        console.log(error)
    })
    .then(calculate(5, 2, multiplicat)
        .then((result) => {
            console.log("success:" + result)
        }))
    .catch(error => {
        console.log(error)
    })
    .then(calculate(5, 2, divide)
        .then((result) => {
            console.log("success:" + result)
        }))
    .catch(error => {
        console.log('error: ', error)
    })