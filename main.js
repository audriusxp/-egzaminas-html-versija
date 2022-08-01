window.onload = function(){
let tekstoIvedimoLaukelis = document.getElementById("pirmasLaukelis");
let teksto2IvedimoLaukelis= document.getElementById("antrasLaukelis");
let teksto3IvedimoLaukelis =document.getElementById("treciasLaukelis")
let mygtukas = document.getElementById("knopke");
mygtukas.onclick= function(){
   // tekstoIvedimoLaukelis.style.backgroundColor="green"
   arYraTusciuLaukeliu(tekstoIvedimoLaukelis,teksto2IvedimoLaukelis,teksto3IvedimoLaukelis);
   console.log(33);

}
let paslepti =document.getElementById("paslepti");
let nera=document.getElementById("nera");

   paslepti.onclick=function(){
    togglePaslepti(nera);
    

   }

   function togglePaslepti(nera){
    if(nera.style.display !="none"){
        nera.style.display = "none";
    }
    else{
        nera.style.display= "initial"
    }
   }
   
   function arTusciasLaukelis(laukelis){
     if (laukelis.value = "") {
      laukelis.value = ""
       return true;}
       else{
        return false;
       }
       
       
      }
   function arYraTusciuLaukeliu(pirmasLaukelis,antrasLaukelis,treciasLaukelis){
   if (arTusciasLaukelis(pirmasLaukelis)) {
    alert(  "Tuscias langelis");
   }else if (arTusciasLaukelis(antrasLaukelis)) {
      alert("Tuscias  laukelis")
    } else if (arTusciasLaukelis(treciasLaukelis)) {
        alert('Tuscias langelis')
        
      }
      
    }
    
    
   }
   
   


 



 








        
       
       
           
    