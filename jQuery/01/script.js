// var para =document.getElementById("para1");
// para.innerText="welcome";


// --------------To change text of para1---------------
// $('#para1').html('Welcome');
// $('#para1').text('Welcome 2');

// -------To hide para 1------------
// $('#para1').hide();

// ----------To change text of all the para in html -----
// $('p').html("change para");


// --------Fetching one from all paras-----
// var paras = $('p');
// var p1 = paras.eq(0);
// p1.html("para 1 ");


// ---------------Modifying css using jquery-------
$('p').css('color', 'red');

$('p').css({
    fontSize:"20px",
    color:"blue"
});

$('div').css({
    height:"200px",
    width:"200px",
    background:"cyan"
});

$('div').click(function(){
    var element= $(this);
    element.width(element.width() + 10 + "px");
    alert("Div clicked");
});


$('a').click(function(event){
    event.preventDefault();
    alert("anchor tag clicked");
});