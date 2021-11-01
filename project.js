var circ = new Image()
var posx=0;
var posy=0;
var vx =1;
var vy =1;
let multi = 1;
gw = 0;
gh= 0;
function init()
{
    var ctx = document.getElementById('c1').getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height= window.innerHeight;
    gw = ctx.canvas.width;
    gh = ctx.canvas.height;
    const slider = document.getElementById("myRange");
    multi = slider.value;
    vx = 1*multi;
    vy = 1*multi;
    circ.src= 'circle.png';
    window.requestAnimationFrame(draw)   
}
function draw()
{
    var ctx = document.getElementById('c1').getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    // Store the current transformation matrix
    ctx.save();
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Restore the transform
    ctx.restore();
    drawCircle(ctx,50,50,50,'pink','black',1);
    //ctx.drawImage(circ,0,0);
    Translate(vx,vy,ctx);
    window.requestAnimationFrame(draw);
    Vector();
}
function Translate(x,y,ctx)
{
    posx=posx+x;
    posy=posy+y;
    ctx.translate(x,y);
    console.log("X: "+posx+"Y: "+posy);
  
}
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Vector()
{
    var ctx = document.getElementById('c1').getContext('2d');

    if(posx+vx+50>gw)
    {
        vx = -getRandomInt(1,5)*multi;
    }
    else if(posx+vx+50<0)
    {
        vx = getRandomInt(1,5)*multi;
    }
    else if(posy+vy+50>gh)
    {
        vy = -getRandomInt(1,5)*multi;
    }
    else if(posy+vy+50<0)
    {
        vy = getRandomInt(1,5)*multi;
    }
}
function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) 
{
    ctx.beginPath()
    ctx.arc(vx, vy, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
}