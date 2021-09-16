/*
const text =document.getElementById('text');
const speed=document.getElementById('speed')
const speedvalue=1;
const sentence="We Love Programming"
 
const prueba= sentence.split("");

const  time=setTimeout(writeText,500) 
function writeText(){
  

  prueba.forEach(el =>{
    text.innerText=el;
    console.log(el)
   
  });

}

*/

const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Hola soy Sebastian Landeros!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)











  
