

// function fetchRandomDogImage(){

//     var xhrRequest = new XMLHttpRequest();
//     xhrRequest.onload = function(){
//         console.log(xhrRequest.response);
//         var responseJSON = JSON.parse(xhrRequest.response);
//         var imageURL = responseJSON.message;
//         $('#dog-image').attr('src',imageURL );
//     }
//     xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random' , true);
//     xhrRequest.send();
// }



// -----------writing using jQuery-----------
// function fetchRandomDogImage(){

//     $.ajax({

//         url:'https://dog.ceo/api/breeds/image/random',
//         method:'GET',
//         success:function(data){
//             var imageURL = data.message;
//              $('#dog-image').attr('src',imageURL );
//         }
//     });
// }


// -----------writing using jQuery method 2 -----------
function fetchRandomDogImage(){

    $.get('https://dog.ceo/api/breeds/image/random', function(data){
                    var imageURL = data.message;
                     $('#dog-image').attr('src',imageURL );
                }).fail(function(){
                    console.log('error');
                });
}



$('#fetch-dog-image-button').click(fetchRandomDogImage);