var mas,menos,tam=16,title;
var color,updateColor;


function inicio(){
mas=document.querySelector('.btn_aumentar');
menos=document.querySelector('.btn_disminuir');
title=document.querySelector('.header__title');
color=document.querySelector('.color');
updateColor=document.querySelector('.update_color');
mas.addEventListener('click',Aumentar);
menos.addEventListener('click',Disminuir);
updateColor.addEventListener('click',Color);
}

 function Aumentar(){
   size.incrementar();
   title.style.fontSize=size.valor()+"px";
 }

 function Disminuir(){
    size.decrementar();
    title.style.fontSize=size.valor()+"px";
 }

var size=(function(){
     var contador=0;
     
    function Closure(valor){
       contador+=valor; 
    };

   return{
      incrementar:function(){
         Closure(1);  
      },
      decrementar:function(){
        Closure(-1);
      },
      valor:function(){
        return contador;              
      }


   };

})();


/*function Tamaño(){
  tam++;
 var f= Aumentar(tam);
  f();
}

function Tamaño1(){
 if(tam>16){
   tam--;
 }
 var f1=Aumentar(tam);
   f1();
}

function Aumentar(size){
   return  function(){
     title.style.fontSize=size+"px";	
   } 
}*/

function Color(){
var col=UpdateColor(color.value);
 col();
}

function UpdateColor(colo){
  return function(){
   document.body.style.backgroundColor=colo;	
  }
}








