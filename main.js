canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastPositionOfX,lastPositionOfY;
color ="red";
width=1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;

if(mouseEvent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lastPositionOfX,lastPositionOfY);
    ctx.lineTo(currentpositionofx,currentpositionofy);
    ctx.stroke();
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    console.log("X="+mouseX+" Y="+mouseY);
    circle(mouseX, mouseY);
    console.log("lastPositionOfX=" +lastPositionOfX +"lastPositionOfY="+ lastPositionOfY);
    console.log("currentpositionofx="+ currentpositionofx+ "currentpositionofy="+ currentpositionofy);
}
function circle(mouseX,mouseY) {
    ctx.beginPath();
    ctx.strokeStyle=(color);
    ctx.lineWidth=2;
    ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
    ctx.stroke();
}
lastPositionOfX=currentpositionofx;
lastPositionOfY=currentpositionofy;
}