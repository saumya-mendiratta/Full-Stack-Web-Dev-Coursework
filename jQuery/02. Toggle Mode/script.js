
var toggled=false;

$("#circle").click(function(){

    var element = $(this);
    if(!toggled){
    toggled=true;
    element.css("margin-left","100px"),
    $("body").css("background","black"),
    $("h1").css("color","white")
    }else{
        element.css("margin-left","0px");
        $("body").css("background","white"),
        $("h1").css("color","black")
        toggled=false;
    }


});