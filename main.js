window.onload = function(){
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");
    
    
    var cel=30;
    
    
    
    var tableArr = [
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
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
    //console.log(tableArr[1][1])
    var block_type = [
        [
            [1,1],
            [1,1]
        ],
        [
            [0,2,0],
            [2,2,2],
            [0,0,0]
        ],
        [
            [0,3,3],
            [3,3,0],
            [0,0,0]
        ],
        [
            [4,4,0],
            [0,4,4],
            [0,0,0]
        ],
        [
            [5,0,0],
            [5,5,5],
            [0,0,0]
        ],
        [
            [0,0,6],
            [6,6,6],
            [0,0,0]
        ],
        [
            [0,0,0,0],
            [7,7,7,7],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ];

     
    
    var nxStart =30;
    var nyStart =30;
    
    // foreach가 정답...이거 구현하려구 이틀넘게 생각하고 시간소비 결국 foreach 공부하고 콘솔찍으면서 구성.. 헷갈리니까 계속 생각하기
     //ex) row- 006   인덱스- 0     value- 0  x- 0
     //       - 666   인덱스- 1     value- 0  x- 1
     //       - 000   인덱스- 2     value- 6  x- 2
console.log(block_type.length)
    
function nextDraw(){
    block_type[ranNum(block_type.length)].forEach((row,y) =>{
        console.log('row' + row + 'y'+ y);
        row.forEach((value, x)=>{
            console.log('value' + value + 'x'+ x);
            if(value >0) {
                if (value ==1){
                    context.fillStyle='red';
                }else if(value ==2){
                    context.fillStyle='orange';
                }else if(value ==3){
                    context.fillStyle='yellow';
                }else if(value ==4){
                    context.fillStyle='green';
                }else if(value ==5){
                    context.fillStyle='blue';
                }else if(value ==6){
                    context.fillStyle='navy';
                }else if(value ==7){
                    context.fillStyle='purple';
                }
                context.fillRect(x*cel+nxStart, y*cel+nyStart,cel,cel);
            }
            });
        });
};


var mxStart =120;
var myStart =120;

function mainDraw(){
    block_type[ranNum(block_type.length)].forEach((row,y) =>{
        console.log('row' + row + 'y'+ y);
        row.forEach((value, x)=>{
            console.log('value' + value + 'x'+ x);
            if(value >0) {
                if (value ==1){
                    context.fillStyle='red';
                }else if(value ==2){
                    context.fillStyle='orange';
                }else if(value ==3){
                    context.fillStyle='yellow';
                }else if(value ==4){
                    context.fillStyle='green';
                }else if(value ==5){
                    context.fillStyle='blue';
                }else if(value ==6){
                    context.fillStyle='navy';
                }else if(value ==7){
                    context.fillStyle='purple';
                }
                context.fillRect(x*cel+mxStart, y*cel+myStart,cel,cel);
            }
            });
        });
};




    function ranNum(len){
        return Math.floor(Math.random()*len);
    }

    /* function ranNextBlock(){
        return block_type[ranNum(block_type.length)];
    } */

    //console.log(ranNextBlock())
    //console.log(block_type[0]);


    document.addEventListener('keydown', function(e){
        console.log(e.keyCode);
        if(e.keyCode ==37){
            console.log('왼쪽');
           // left();
        }else if(e.keyCode ==39){
            console.log('오른쪽');
           // right();
        }else if(e.keyCode == 38){
            console.log('위쪽');
          //  up();
        }else if(e.keyCode == 40){
            console.log('아래쪽');
         //   down();
        }
    });









    background();
    nextDraw();
    
    leftBox();
    go();
    scoreBox();
   // drawRect();
    
    
    
    function background(){
        context.fillStyle='white';
        context.fillRect(0,0,300,600);
        context.stroke();
        
    }

   function go(){
        
        mainDraw();
   }

    
   /*  function drawRect(){
        
        for(var i = 0; i <tableArr.length; i++){
            for(var j=0; j<tableArr[i].length; j++){
                    if(tableArr[i][j]!==0){
                        var type_len =8;
                        var ranBlock=ranNum(block_type.length);
                        for(t = 0; t<type_len; t+=2){
                            if(block_x + block_type[ranBlock][t]== i &&
                                block_y+ block_type[ranBlock][t+1]==j)
                        //console.log(type_len)
                        
                        context.fillStyle = '#FF0000';
                        context.fillRect(j*cel,i*cel,cel,cel);
                       
                        }
                    }
            }
        }
    } */
    
    function left(){
       /*  
        context.clearRect(x*cel+mxStart, y*cel+myStart,cel,cel);
        mxStart -=30;
        mainDraw(); */

    };



    function leftBox(){
        context.rect(20,10,140,100);
        context.stroke();

    };
    
    
    function scoreBox(){
        context.fillStyle = 'black';
        context.rect(180,30,100,30);
        context.fillText("스코어:",190,50);
        context.stroke();
    };




};