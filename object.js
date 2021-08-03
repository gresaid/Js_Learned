//обьекты
const person = {
    name: 'Vova',
    age: 26,
    isProgramer: true,
    'complex key': 'Complex value',
    ['key_'+ (1+3)]: 'Computed Key', //key_4
    languages: ['ru','en','de'],
    info (){
        console.info('Информация про человека по имени', this.name)
    },
    greet () {
        console.log('It`s greet')
    }
}
console.log(person.name);
const ageKey = 'age'
console.log(person[ageKey]);
console.log(person['complex key']);
person.greet()
person.age++
person.languages.push('by')
console.log(person);


delete person['key_4'] //удаление значения
console.log(person);

//Деструктуризация
//const name = person.name
//const age = person.age
//const language = person.languages

const {name,age: personAge,languages} =person
console.log(name,personAge,languages)

//опасный, так как заходит в прототипы
for (let key in person){
    console.log('key', key)
    console.log ('value: ', person[key])
}
//фикс
for (let key in person){
    if (person.hasOwnProperty(key)){
        console.log('key', key)
        console.log ('value',person[key])
    }
}

// современнный способ

Object.keys(person).forEach((key) => {
    console.log('key', key)
    console.log ('value',person[key])
})


//Context
person.info()
//пишем свой универсальный логгер
const logger = {
    keys(){
        console.log ('Object Keys: ', Object.keys((this)))
    },
    keysAndValues(){
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    }
}
const bound = logger.keys.bind(person) //имя любого обьекта
bound()
//аналог
logger.keys.call(person)

logger.keysAndValues.call(person)

