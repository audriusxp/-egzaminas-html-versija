window.onload = function(){
let tekstoIvedimoLaukelis = document.getElementById("pirmasLaukelis");
let teksto2IvedimoLaukelis= document.getElementById("antrasLaukelis");
let teksto3IvedimoLaukelis =document.getElementById("treciasLaukelis")
let mygtukas = document.getElementById("knopke");
mygtukas.onclick= function(){
    tekstoIvedimoLaukelis.style.backgroundColor="green"

}
let paslepti =document.getElementById("paslepti");
let nera=document.getElementById("nera");
//let pastraipa = document.getElementById("paslepti");
//pastraipa.onclick =function(){
   // pastraipa.style.display = "default";
   paslepti.onclick=function(){
    togglePaslepti(nera);
    console.log(  aass  );

   }

   function togglePaslepti(nera){
    if(nera.style.display !="none"){
        nera.style.display = "none";
    }
    else{
        nera.style.display= "initial"
    }
   }
   // togglePaslepti(nera);

//}

//function togglePaslepti(pastraipa){
//if(pastraipa.style.display != "none"){
    //pastraipa.style.display = "none";
//}
//else{
  // pastraipa.style.display= "initial";
  //  }
}

 function nuskaitiLaukeliTrys(treciasLaukelis){
    let teksto3IvedimoLaukelis = document.getElementById(treciasLaukelis);
    return nuskaitiLaukeliTrys.document.getElementsByName("searchTxt")["a"].value;
    



 }
function IsEmpty(){
    
    if(document.forms['frm'].question.value === "")
    {
      alert("empty");
      return ;
    }
      return true;
  }

  $('document').ready(function() {
    $('#button').on('click', function() {
      $('.pirmas.rfield').each(function() {
        if ($(this).val() != '') {
          console.log(32);
          // Если поле не пустое удаляем класс-указание
          $(this).removeClass('empty_field');
        } else {
          console.log(33);
          // Если поле пустое добавляем класс-указание
          $(this).addClass('empty_field');
        }
      });
    });
  });







        
       
       
           
    