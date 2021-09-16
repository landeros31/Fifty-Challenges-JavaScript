const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let opac = 1
let blurv =30

 console.log(load)
var inter= setInterval(blurring, 50)  



/*
    loadText.innerText = 
    loadText.style.opacity = 
    bg.style.filter = 

*/
function blurring() {

    load++
   console.log(load+'%')
   loadText.innerText=load+'%';
   opac=opac-0.01;
   console.log(opac)
   loadText.style.opacity = opac
    blurv=blurv-0.3;
   bg.style.filter = `blur( ${blurv}px)`;
   if(load==100){
       clearInterval(inter);
   }
}