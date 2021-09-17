
// ¿Cuál es la opción que sirve?
/*
const panels = document.querySelectorAll('.panel')
//const panels = document.querySelector('.panel')
//const panels = document.getElementById('panel')
//const panels = document.getElementsByClassName('.panel')



  
        panels.addEventListener('click', () => {
            panels.forEach((panel,id) => {
                console.log(panel)
            panel.classList.add('active')
    
    
        })
    
    })

*/

/*

function removeActiveClasses(){
    panel.addEventListener('click', () => {
        
        panel.classList.remove('active')
})*/
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
   
      console.log("uno")
    console.log(panel)
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        console.log("dos")
        console.log(panel)
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
        console.log(panel)
    })
}
