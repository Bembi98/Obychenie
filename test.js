// let a = 42
// let b = a
// b++
// console.log('a',a)
// console.log('b',b)
// let a = [ 1,2,3,4]
// let b = a.concat()
// b.push(5)
// console.log('b',b)
// console.log('a',a)
// const myName = (name)=> {
//     const   message = 'My name is  ' +  name
//     return function(){
//         console.log(message)
//     }
// }
// const ilya = myName ('IlyaM')
// console.log(ilya)
// ilya()
// let palindrom = (str) => {
//     str = str.toLowerCase()
//     return str==str.split('').reverse('').join('');   
// }
// console.log(palindrom('hello'))

// let arr = [1,2,-4,-7,5]
// let posotivarr = arr.filter((num) => {
//     return num > 0 ;
// })
// console.log(posotivarr)

// let arr = [1,2,-4,-7,5]
// let doubles = arr.map((num) => {
//     return num * 2 ;
// })
// console.log(doubles)

// let arr = [1,2,-4,-7,5]
// let posotivarr = arr.forEach((num) => {
//     console.log(num)
// })
// let arr = [1,2,3]
// let summa = arr.reduce((a,b) => {a+b},)
// console.log(summa)
// const summa = (a,b) => {
//     return a+b
// }
// console.log(summa(2,3))

// let arr = [2,5,7,4]
// const arrssum = arr.reduce((sum,value) => {
//     sum+=value
//     return  arrssum
// },)
// console.log(arrssum)
// let arr = [2,3,64,14,7]
// const arrsum = arr.filter((num) => {
//     if (num > 4)
//     return num
    
// })
// console.log(arrsum)
// arr = [2,7,5,4]
// const aarrsu = arr.map((num) => {
//     return num * 2
// })
// console.log(aarrsu)
//  let polindrom = (str) =>{
//      str=str.toLowerCase()
//      return str=str.split(''),str.reverse(''),str.join('')
//  }
//  console.log(polindrom('hello'))

// let arr = [1,2,-4,-7,5]
// let doubles = arr.map((num) => {
//     if (num === 2)
//     return   ;
// })
// console.log(doubles)
// let arr = [2,5,-7,74,-5]
// const arrsort = arr.sort()
// console.log(arrsort)

// let arr = [2,5,-7,74,-5] 
// arr.sort((a, b) => {
//     return a-b
// })
// console.log(arr)

// const pow = (x,n) => {
//     if (n == 1) {
//      return x;
//    } else {
//       return x * pow(x, n - 1);
//     }
//         }
//         console.log(pow(2, 3))
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printList(list) {
  
//     console.log(list.value); // выводим текущий элемент
  
//     if (list.next) {
//       printList(list.next); // делаем то же самое для остальной части списка
//     }
  
//   }
  
//   printList(list);