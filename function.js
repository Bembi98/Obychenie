//Функции
//Function Declaration //можно вызывать сначала функцию,а потом писать ее
function greet(name) {
    console.log('Привет - ', name)
}
greet('Илья!')
    //Function Expression
const greet2 = function(name) {
    console.log('Привет 2 - ', name)
}
greet2('Илья!')
    //Анонимные функции
let counter = 0
const interval = setInterval(function() {
        if (counter === 5) {
            clearInterval(interval)
        } else {
            console.log(++counter)
        }
    }, 1000)
    //Стрелочные функции
function greet(name) {
    console.log('Привет - ', name)
}
const arrow = (name) => {
    console.log('Привет - ', name)
}
const pow2 = num => num ** 2
console.log(pow2(5))
    //Параметры по умолчанию
const sum = (a, b = 1) => a + b
console.log(sum(41, 2))

function sumall(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}
const res = sumall(1, 2, 3, 4, 5)
console.log(res)
    //Замыкание
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Ilya')
console.log(logWithLastName("Matvievich"))
console.log(logWithLastName("Menkes"))

function summ() {
    console.log('Ilya' + 'Matvievich')
}
summ();
let myFunc = (z) => z * 3
console.log(myFunc(5))
    ///////////////////////////////////////////////////////
let createMember = (name) => (lastName) => console.log(name + lastName)
const logWithLastName = createMember('Ilya')
console.log(logWithLastName("Matvievich"))
console.log(logWithLastName("Menkes"))
let summ = () => console.log('Ilya' + 'Matvievich')

summ();
let myFunc = (z) => z * 3
console.log(myFunc(5))