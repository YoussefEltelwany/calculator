  let Number1 = parseInt(document.getElementById("frist").value);
  let Number2 = parseInt(document.getElementById("last").value);


function Minus (Number1, Number2){
   var MinusResult =Number1 -Number2 ;   
   document.getElementById("result").value =MinusResult ;
}

function sum (Number1, Number2){
   var sumResult =Number1 + Number2 ;
   document.getElementById("result").value =sumResult ;
}

function ksma (Number1, Number2){
      var ksmaResult =Number1 / Number2 ;  
      if(Number2 == 0 ){
         ksmaResult= ("can't divid by 0");
         }
      document.getElementById("result").value =ksmaResult ;
   }

function darb (Number1, Number2){
      var DarbResult =Number1 * Number2 ;
      document.getElementById("result").value =DarbResult ;
   
   }









