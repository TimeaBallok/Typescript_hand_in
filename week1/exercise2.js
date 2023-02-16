function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function operateOnNumbers(operator, x, y) {
    return operator(x, y);
}

console.log(operateOnNumbers(add, 3, 4));   // 7
console.log(operateOnNumbers(multiply, 3, 4));   // 12
console.log(operateOnNumbers((x,y) => x-y, 3, 4));

let numbers = [1,2,3,4,5]

function exp(numb){
    return numb ** 2
}

function divide(numb){
    return numb/10
}

function multiFunc(func1, func2, arr) {
    const arr1 = []
    const arr2 = []
    arr.map((number) => arr1.push(func1(number)))
    arr1.map((number) => arr2.push(func2(number)))
    return arr2
}

const multi1 = multiFunc((x) => x*10, (y) => y/5, numbers)
console.log(multi1)
const multi2 = multiFunc(exp, divide, numbers)
console.log(multi2)


console.log("Hello you");
setTimeout(() => {
    console.log("Hello again");
}, 1000);

function doSomething(callback) {
    console.log("Doing something");
    callback();
}

doSomething(() => {
    console.log("Callback called");
});