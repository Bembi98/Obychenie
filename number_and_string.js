//Number
const num = 42
const float = 42.42
const pow = 10e3
console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow', Math.pow(2, 53) - 1)
console.log('MAX_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE)', Number.MIN_VALUE)
console.log('MIN_VALUE)', Number.POSITIVE_INFINITY)
console.log('MIN_VALUE)', Number.NEGATIVE_INFINITY)
console.log(Number.NaN) // not a number, but typeof NaN = number
const weird = 2 / undefined
console.log(isNaN(weird)) // Проверка на NaN
console.log(isFinite(42)) // Конечно ли число
const stringInt = '42'
const stringFloat = '42.42'
console.log(+stringFloat + 2)
console.log(parseInt(stringInt) + 2)
console.log(0.4 + 0.2)
console.log(parseFloat((0.4 + 0.2).toFixed(2)))
BigIng
console.log(typeof 9007199254740991n)
console.log(parseInt(10n) - 4) // or console.log(10n-BigIng(4))
console.log( 10n - BigInt(4))
Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandom(10, 42))
    //Cтроки
const name = 'Ilya'
const age = 26
const output = 'Hello, my name is ' + name + ' i am ' + age // output = ${name} ${getAge()}
console.log(output)
const name = 'Ilya'
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf('y'))
console.log(name.startsWith('Il'))
console.log(name.endsWith('ya'))
console.log(name.repeat(3))