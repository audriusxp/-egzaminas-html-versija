window.onload = function(){
let tekstoIvedimoLaukelis = document.getElementById("pirmasLaukelis");
let teksto2IvedimoLaukelis= document.getElementById("antrasLaukelis");
let teksto3IvedimoLaukelis =document.getElementById("treciasLaukelis");
let mygtukas = document.getElementById("knopke");
   mygtukas.onclick= function(){
   tekstoIvedimoLaukelis.style.backgroundColor="green";
  arYraTusciuLaukeliu(tekstoIvedimoLaukelis,teksto2IvedimoLaukelis,teksto3IvedimoLaukelis);
   arTusciasLaukelis(laukelis);
   kiekYraRaidziuA(teksto3IvedimoLaukelis);
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
     if (laukelis.value == "") {
      laukelis.value == ""
       return true;}
       else{
        return false;
       }
       }
   function arYraTusciuLaukeliu(laukelis1,laukelis2,laukelis3){
   if (arTusciasLaukelis(laukelis1)) {
    alert(  "Tuscias langelis");
   }else if (arTusciasLaukelis(laukelis2)) {
      alert("Tuscias  laukelis")
    } else if (arTusciasLaukelis(laukelis3)) {
        alert("Tuscias langelis")
         }
     }
    
}
  function  kiekYraRaidziuA(laukelis3) {
    
    let suma = 0;
    let laukelis = laukelis3.value;
    for (i = 0; i < laukelis.length; i++) 
    
    {
      if (laukelis.charAt(i) === "a") suma++;
    }
    console.log("suma = " + suma);

  }



  
  
   
   


 



 








        
       
       
           
