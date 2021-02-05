
var outerdiv = document.getElementById('outer');

outerdiv.addEventListener('mouseover',function(){
	console.log("mouse over");
});

outerdiv.addEventListener('mouseout',function(){
	console.log("mouse out");
});

// var key = document.getElementById('search');

// key.addEventListener('keypress',function(){
// 	console.log("Key Pressed");
// });

// document.addEventListener('keypress',function(){
// 	console.log("Key Pressed");
//  });

// document.addEventListener('keydown',function(){
// 	console.log("Key down");
//  });

// --------Which Key Is Pressed ?? -----------
document.addEventListener('keydown',function(event){
	console.log('Key Down', event.keyCode);
 });


