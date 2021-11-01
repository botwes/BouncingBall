var circ = new Image()
var posx=0;
var posy=0;
var vx =5;
var vy =5;
function creatediv()
{
    let page = document.getElementById('d1');
    for(i=0;i<10;i++)
    {
        var d = document.createElement("div");
        d.innerHTML= "Hey";
        page.appendChild(d);
    }
}
function init()
{

    circ.src= 'circle.png';
    window.requestAnimationFrame(draw)   
}
function draw()
{
    var time = new Date();
    var ctx = document.getElementById('c1').getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,1920,1080);
    Translate(vx,vy,ctx);
    ctx.drawImage(circ,1,1);
    window.requestAnimationFrame(draw);
    Vector();
    console.log("x: "+posx+"y: "+posy); 
}
function Translate(x,y,ctx)
{
    posx=posx+x;
    posy=posy+y;
    ctx.translate(x,y);
  
}
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Vector()
{
    if(posx+vx>=1920)
    {
        vx = -getRandomInt(1,5);
    }
    else if(posx+vx<=0)
    {
        vx = getRandomInt(1,5);
    }
    else if(posy+vy>=1080)
    {
        vy = -getRandomInt(1,5);
    }
    else if(posy+vy<=0)
    {
        vy = getRandomInt(1,5);
    }
}