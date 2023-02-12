const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function map(array, mapFunc) {
    const mapArr = []

    for (let i = 0; i < array.length; i++) {
        const result = mapFunc(array[i], i)
        mapArr.push(result)
    }
    return mapArr
}

const square = map(numbers, (num) => num ** 2)

console.log(square)


function filter(array, filterFunc) {
    const filterArray = []

    for (let i = 0; i < array.length; i++) {
        let result
        if (filterFunc(array[i])){
            result = array[i]
            filterArray.push(result)
        }
    }
    return filterArray
}

console.log(filter(numbers, (x) => x % 2 === 0))