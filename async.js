//Async

//Event Loop

const timeout =setTimeout(()=> {
    console.log('After timout: ')
}, 2500)
const interval = setInterval(()=> {
    console.log('Interval')
},150)
clearInterval(interval)

const delay = (callback,wait = 1000)=> {
    setTimeout(callback,wait)
}
delay (()=>{
    console.log('After 2 second')
},2000)


//Improve this

const delay2 = (wait =1000) => {
    const promise = new Promise((resolve,reject)=> {
        setTimeout(()=> {
        resolve()
            reject('Чтото пошло не так!')
        },wait)
    })
    return promise
}

delay2 (2500)
    .then(()=>{
        console.log('After 2 seconds')
    })
    .catch(err => console.error('Error: ',err))
    .finally(()=> console.log('Finnaly'))


const getData = () => new Promise( resolve => resolve([
    1,1,2,3,5,8,13
]))

async function asyncExp () {
   await delay2(3000)
   const data =  await getData()
    console.log('Data: ',data)
}

asyncExp()
