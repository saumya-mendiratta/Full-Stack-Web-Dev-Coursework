 var userLoggedIn=true;
 
//  var promise = new Promise( (resolve , reject)=>{

//     // Wait for 1 sec 
//     setTimeout( ()=>{

//         if(userLoggedIn){
//         // promise is resolved 
//         resolve();
//     }else{
//         //Reject
//         reject();
//     }
//     } , 1000);

//  });

//  setTimeout(() => {
//      userLoggedIn=false;
//  }, 500);


//  promise.then( ()=>{
//      console.log("User logged in");
//  }).catch( () =>{
//     console.log("User not logged in");
//  });



// var promise = new Promise( (resolve , reject)=>{

//     // Wait for 1 sec 
//     setTimeout( ()=>{

//         if(userLoggedIn){
//         // promise is resolved 
//         resolve("User logged in");
//     }else{
//         //Reject
//         reject();
//     }
//     } , 1000);

//  });


//  promise.then( (successMsg)=>{
//      console.log(successMsg);
//  }).catch( () =>{
//     console.log("User not logged in");
//  });


function checkUserLoggedIn(){
var promise = new Promise( (resolve , reject)=>{

    // Wait for 1 sec 
    setTimeout( ()=>{

        if(userLoggedIn){
        // promise is resolved 
        resolve("User logged in");
    }else{
        //Reject
        reject();
    }
    } , 1000);

 });

 return promise;
}


 checkUserLoggedIn().then( (successMsg)=>{
     console.log(successMsg);
 }).catch( () =>{
    console.log("User not logged in");
 });