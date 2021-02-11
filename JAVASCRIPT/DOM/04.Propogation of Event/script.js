
var innerdiv = document.getElementById('inner');

innerdiv.addEventListener('click',function(event){
	console.log("Inner Div");
	event.stopPropagation();
});

var outerdiv = document.getElementById('outer');

outerdiv.addEventListener('click',function(event){
	console.log("Outer Div");
	event.stopPropagation();
});

document.addEventListener('click',function(){
	console.log("Document ");
});

