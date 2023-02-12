const calculate = (x,y,operation) => {
    return operation(x, y)
}

const add = (x,y) => x + y
const subtract = (x,y) => x - y
const multiplicat = (x,y) => x * y
const divide = (x,y) => x / y

console.log(calculate(2,3,add))
console.log(calculate(5,3,subtract))
console.log(calculate(2,3,multiplicat))
console.log(calculate(6,3,divide))
