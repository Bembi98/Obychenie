function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}
const calc = createCalcFunction(42)
calc()

function createIncrementor(n) {
    return function(num) {
        return n + num
    }
}
const createIncrementor = (n) => (num) => n + num
const addone = createIncrementor(1)
const addTen = createIncrementor(10)
console.log(addone(10))
console.log(addTen(10))
    //////////////////////////////////////////////////
function v2() {
    let a = 1
    return function() {
        a = a + 1
        return a
    }
}
const v2 = () => {
    let a = 1
    return () => a = a + 1
}

let b = v2()
console.log(b())
console.log(b())
console.log(b())
console.log(b())
console.log(b())



////////////////////////////////
const urlGen = (domain) => (url) => `https://${url}.${domain}`
const comUrl = urlGen('com')
console.log(comUrl('google'))