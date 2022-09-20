let numero = 0
function iniciarPrograma(){  
let botonIncrementar = document.getElementById("boton-incrementar")
botonIncrementar.addEventListener("click",Incremento)
let botonDecremento = document.getElementById("boton-disminuir")
botonDecremento.addEventListener("click",Decremento)
let botonReiniciar = document.getElementById("boton-resetear")
botonReiniciar.addEventListener("click",reinicarJuego)
}
function Incremento(){   
      numero++
      let nuevoNumero= document.getElementById("cantidad")
      nuevoNumero.innerHTML = numero         
         if(numero>0 ){
            cantidad.style.color = "#008000";                       
       }

}
function Decremento(){
   numero--
   let nuevoNumero= document.getElementById("cantidad")
   nuevoNumero.innerHTML = numero 
   if(numero<0){
      cantidad.style.color = "#FF0000"; 
   } 
}
function reinicarJuego(){
   location.reload()
}
window.addEventListener("load", iniciarPrograma)


