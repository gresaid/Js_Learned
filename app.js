//DOM
//api браузера
const heading = document.getElementById('hello')
const heading2 = document.querySelector('#sub')
console.log(heading2)

//console.dir(heading.textContent)
setTimeout(()=>{
    addStyleTo(heading,'JS','#778beb')
},150)
setTimeout(()=>{
    addStyleTo(heading2,'Dev','#778beb','2rem')
},200)

function addStyleTo (node,text,color = 'black',fontSize) {
    node.textContent = text
    node.style.color = '#dff9fb'
    node.style.textAlign = 'center'
    node.style.padding = '2rem'
    node.style.backgroundColor = color
    if (fontSize){
        node.style.fontSize = fontSize
    }
}

//event
function allGood(node) {
    const color = node.style.backgroundColor
    node.style.backgroundColor = '#6ab04c'
   setTimeout(()=> {
        node.style.backgroundColor = color
    },1500)
}

heading.onclick= () => {
    allGood(heading)
    allGood(heading2)
}