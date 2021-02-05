
"use strict";
 var c=1;
function count() {

 	var para =document.getElementById('para');
    para.innerText=c;
    c++;
         }
var buttonEvent = document.getElementById('btn');

    buttonEvent.addEventListener('click',count);