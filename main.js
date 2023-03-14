window.onload = function(){
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");

    
    var tableArr = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0],
        [0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0]
    ];

    var block_type =[
        [
            [1,1],
            [1,1]
        ]
    ]

    background();
    leftBox();
    scoreBox();
    drawRect();
    
    
    function background(){
        
    }

    function drawRect(){
        
        for(var i = 0; i <tableArr.length; i++){
            for(var j=0; j<tableArr[i].length; j++){
                    if(tableArr[i][j]!==0){
                        context.fillRect(j*30,i*30,30,30);
                    }
            }
        }
    }
    
    



    function leftBox(){
        context.rect(20,10,140,100);
        context.stroke();
    };
    
    
    function scoreBox(){
        context.rect(180,30,100,30);
        context.fillText("스코어:",190,50);
        context.stroke();
    };













};