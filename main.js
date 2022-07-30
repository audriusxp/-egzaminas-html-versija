window.onload = function(){
let tekstoIvedimoLaukelis = document.getElementById("pirmasLaukelis");
let teksto2IvedimoLaukelis= document.getElementById("antrasLaukelis");
let teksto3IvedimoLaukelis =document.getElementById("treciasLaukelis")
let mygtukas = document.getElementById("knopke");
mygtukas.onclick= function(){
    tekstoIvedimoLaukelis.style.backgroundColor="green"
}
let pastraipa = document.getElementById("paslepti");
pastraipa.onclick =function(){
    pastraipa.style.display = "default";
    togglePaslepti(nera);

}

function togglePaslepti(pastraipa){
if(pastraipa.style.display != "none"){
    pastraipa.style.display = "none";
}
else{
   pastraipa.style.display= "initial";
    }
}
function IsEmpty(){
    if(document.forms['frm'].question.value === "")
    {
      alert("empty");
      return ;
    }
      return true;
  }


}




        
       
       
           
    