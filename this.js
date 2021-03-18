const person = {
    name: 'Ilya ',
    LastName: 'Matvievich',
    age: 22,
    phone: +375333747815,
    logInfo: function(job, stage) {
        console.group(`${this.name} info :`)
        console.log(`Name is ${this.name}`)
        console.log(`LastName is ${this.LastName}`)
        console.log(`Age is ${this.age}`)
        console.log(`Phone is ${this.phone}`)
        console.log(`Job is ${job}`)
        console.log(`Stage is ${stage}`)

        console.groupEnd()
    }
}
const Dasha = {
    name: 'Dasha',
    LastName: 'Goncharova',
    age: 20
}
person.logInfo()
person.logInfo.bind(Dasha, 'Psyhology', '12')()
person.logInfo.call(Dasha, 'Psyhology') // вызов сразу
person.logInfo.apply(Dasha, ['Psyhology', 12]);