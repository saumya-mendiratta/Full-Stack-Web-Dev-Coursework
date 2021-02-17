
// -------Creating it normally-------- 
// function createStudent(name , rollNO , marks ){
//  var student= {}; 
// // -- OR new Object();--
// student.name=name;
// student.rollNO=rollNO;
// student.marks=marks;

// return student;

// }

// var student1= createStudent("abc", 15 ,78);
// console.log(student1);


// -------Creating it using constructor an this -------- 

function createStudent(name , rollNO , marks ){

        this.name=name;
        this.rollNO=rollNO;
        this.marks=marks;
}

var student1= new createStudent("abc", 15 ,78);
console.log(student1);
