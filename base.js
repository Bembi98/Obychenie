//1 - Переменные
const lastName = 'Matvievich' // String
let age = 22 // number
const isProgrammer = true // boolean
const $ = 'private'
    //2 - Мутирование
console.log('Фамилия человека :' + lastName + ',возраст человека: ' + age)
const firstName = prompt('Введите имя')
alert(firstName + '' + lastName)
    //3 - Операторы
let currentYear = 2020
const birthYeah = 1998
const age = currentYear - birthYeah
console.log(age)
const a = 10
const b = 20
let c = 32
c = c + a
c += a
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(currentYear++)
console.log(--currentYear)
console.log(c)
    //4 - Типы данных
const isProgramer = true
const age = 22
const firstName = 'Ilya'
let x
console.log(typeof isProgramer)
console.log(typeof age)
console.log(typeof firstName)
console.log(typeof x)
console.log(typeof null)
    //5 - Приоритет операторов
const fullAge = 22
const birthAge = 1998
const currentYear = 2020
const isFullAge = (currentYear - birthAge) >= fullAge
console.log(isFullAge)
    //6 Условные операторы
const courseStatus = 'fail' //ready,fail,pending
if (courseStatus === 'ready') {
    console.log('Course is ready')
} else if (courseStatus === 'pending') {
    console.log('Course is not ready')
} else {
    console.log('Fail')
}
const isReady = false
if (isReady) {
    console.log('All ready')
} else {
    console.log('All is not ready')
} -
Альтернатива
isReady ? console.log('All ready') : console.log('All is not ready')
const num1 = 42 //number
const num2 = '42' //string
console.log(num1 === num2) // Тройное равно
    //7 - Булевая логика
    // !-отрицание !true = false, !false = true 

//  || -Или.Если есть хоть один true, то всегда будет true 

// &&-И.Если хоть один False, то всегда будет False
//8 - Функции

function calculateAge(year) {
    return 2020 - year
}
const logInfoAbout = (calculateAge(1998))
console.log(logInfoAbout)

function aboutMe(name, year) {
    const age = calculateAge(year)
    if (age > 22) {
        console.log('Человек по имени ' + name + 'сейчас имееет возраст ' + age)
    } else console.log('See u next time bro')
    console.log('Человек по имени ' + name + 'сейчас имееет возраст ' + age)
}
aboutMe('Ilya', 1998)
    //9 - Массивы
const cars = ['Mazda', 'ford', 'opel'] //or const cars = new Array('Mazda','ford','opel')
console.log(cars[1])
console.log(cars[2])
console.log(cars.lenght) //длинна массива
    //10 Циклы
const cars = ['Mazda', 'ford', 'opel', 'porshe']
for (let i = 0; i < cars.length; i++) {
    const car = cars[i]
    console.log(car)
}
const cars = ['Mazda', 'ford', 'opel', 'porshe']
for (let car of cars) {
    console.log(car)
}
//11 Обьекты
const person = {
    firstName: 'Ilya',
    lastName: 'Matvievich',
    year: 1998,
    language: ['Ru', 'Eng'],
    hasWife: false
}
console.log(person)