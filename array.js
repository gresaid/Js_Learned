//Массивы
const cars = ['Mazda','Bmw','Mersedes']
const fib = [1,1,2,3,5,8,13,20,35,431]
const people = [
    {name: 'Vova', budget: 5000},
    {name: 'Margo', budget: 4000},
    {name: 'Vasya', budget: 1000}

]

cars.push('Lada') //в конец
console.log(cars)
cars.unshift('Logan')// в начало
console.log(cars.reverse()) // reverse massiva

//Задача 1
const text = 'Hello, we learn JS'
const reverseText = text.split('').reverse().join('')
console.log (reverseText)

// Задача 2
function indexI (name) {
    const index = cars.indexOf(name)
    index === -1? console.log('Не найдено') : cars[index]= 'Mazerati'
}
indexI('bmw')
console.log (cars)
indexI('Bmw')
console.log(cars)


//3

const indexSecond = people.findIndex(function (person){
    return person.budget ===4000
})
console.log (people[indexSecond])
// Аналог
const person = people.find (person => person.budget ===5000)
console.log(person)


console.log(cars.includes('Mazda'));// включает ли в себя массив этот элемент// ?





const upperCaseCars = cars.map (car => car.toUpperCase())
console.log(upperCaseCars);

//фильтруем 
const pow2 = num => num**2
const pow2fib = fib.map(pow2)
const filteredNumbers = pow2fib.filter(num =>{
    return num>20
})
console.log(filteredNumbers);


//считаем бюджет всех людей
const allBudget = people
    .filter (person => person.budget >2000)
    .reduce((acc,person)=> {
    acc+= person.budget
    return acc
},0)
console.log(allBudget);