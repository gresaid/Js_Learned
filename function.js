// функции
//function Declaration Обращаемся когда захотим
function Greet (name){
    console.log("Hello - ", name)
}

//function expression можно только после создания
//функции являются обьектами
const greet2= function greet2(name){
    console.log("Hello 2 - ", name)
}
Greet("Vova")
greet2("Margo")

console.dir(Greet)
//анонимная функция
let counter = 0;
const interval = setInterval(function (){
    counter===5? clearInterval(interval) : console.log(++counter)
},100)

//3. Стрелочные функции
const arrow = (name) =>{
    console.log("Hello,",name, ".Это стрелочная функция")
}
arrow ("vovchik")

const pow2 = num => num**2
console.log(pow2(20))


//4 Параметры по умолчанию

const sum = (a=30,b=3) => a+b
console.log( sum (44,44))
console.log(sum())// когда заданы параметры по умолчанию не обязательно указывать их при вызове!

function sumAll(...all) {
    let sum=0
    for (let num of all){
        sum+=num
    }
    return sum
}
const summa = sumAll(1,2,3)
console.log (summa)

//Замыкания нужны в дальнейшем для приватных переменных 
function createMember (name){
    return function (lastName){
        console.log (name+lastName)
    }
}

const logWithLastName = createMember("Владимир ")
console.log(logWithLastName("Гресь"))
