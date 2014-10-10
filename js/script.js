var c, ctx;


function start(){

    
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    
   paintBall(); 
    
    
}
function paintBall(){
    
    ctx.beginPath();
    ctx.arc( 100, 100 , 5 , 0 , 2 * Math.PI);
    ctx.fill();
    ctx.closePath;
    
}