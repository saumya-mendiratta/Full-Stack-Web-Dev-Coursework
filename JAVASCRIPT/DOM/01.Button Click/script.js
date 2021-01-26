 // console.log("hello");

 function sayHello() {
 	alert('hello!!');
         }

 function sayBye() {
 	alert('Bye!!');
         }        

    var buttonEvent = document.getElementById('btn2');

    buttonEvent.addEventListener('click',sayHello);
    buttonEvent.addEventListener('click',sayBye);