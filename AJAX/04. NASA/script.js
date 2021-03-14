
function displayImage(data){

    // $('<img>',{
    //     src:data.url,
    //     height:"100%",
    //     width:"100%"
    // }).appendTo('#image-container');

    var img= $(document.createElement('img'));
    img.attr('src', data.url);
    img.appendTo('#image-container');


}

$.ajax({

    // url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-01-05',
    url:'https://api.nasa.gov/planetary/apod?api_key=NFUvmk54sKG82cUhuNiprSI5IyQz999uoynZMAlG&date=2020-01-08',
    method:'GET',
    success:displayImage

});