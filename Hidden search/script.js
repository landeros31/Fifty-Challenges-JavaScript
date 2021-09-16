const btn=document.querySelector('.btn')
const input=document.querySelector('.input')
const search=document.querySelector('.search')
let valor=1

btn.addEventListener('click',() =>{
    search.classList.toggle('active')
    
})
/*
btn.addEventListener('click', ()=>{
    
    if(valor==1){
        search.classList.remove('active')
        valor=2;
        
        }else if(valor==2){
            search.classList.add('active')
            valor=1;
        }   

 })

    ;*/