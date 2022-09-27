//$("h1").hide();
//$(document).ready(function(){

//});
//Son iguales ^V
$(function(){
    $("p#segundo").css({"background-color" : "lightgreen"});
    $("p#tercero").css({"background-color" : "darkblue"});
    
    $("#boton-hide").click(function(){
        $("p#segundo").hide() //.hide() funcion por defecto en jq
    });

    $("#boton-show").dblclick(function(){
        $("p#segundo").show() //.show() funcion por defecto en jq
    });

    $("p#tercero").mouseenter(function(){
        $("p#tercero").hide() //.show() funcion por defecto en jq
    });

    $("p#tercero").mouseleave(function(){
        $("p#tercero").show() //.show() funcion por defecto en jq
    });

    $("p#segundo").animate({width:"300px"});

    $("#boton-alert").click(function(){
        alert($("#segundo").attr("title"));
    });

    $("#boton-cambiar").click(function(){
        $("p#segundo").append("<b> Añadido</b>");
        $("p#segundo").prepend("<b>KLK </b>");
        $("p#primero").after("<p>Hola k ase </p>");
        $("p#tercero").before("<b>Adios </b>");
        $("p#primero").remove();
        $("#boton-hide").empty();
    });

    $("#boton-style").click(function(){
        $("h1").addClass("red");

    });

    $("#boton-nonstyle").click(function(){
        $("h1").removeClass();
    });

    $("#boton-togglestyle").click(function(){
        $("h1").toggleClass("blue");
    });
});


