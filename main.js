window.onload = function(){
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");

    background();
    leftBox();
    scoreBox();

    function background(){
        context.rect(50,30,600,600);
        context.stroke();
    }
    
    function leftBox(){
        context.rect(60,40,180,100);
        context.stroke();
    };
    
    
    function scoreBox(){
        context.rect(490,40,150,30);
        context.stroke();
    };













};