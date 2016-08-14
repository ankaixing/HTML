var WINDOW_WIDTH=1100;
var WINDOW_HEIGHT=900;
var MARGIN_TOP=60;
var MARGIN_LEFT=30;
var RADIUS=8;
const endTime = new Date(2016,6,30,21,47,52);
var curShowTimeSeconds=0
window.onload=function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	curShowTimeSeconds=getCurrentShowTimeSeconds();
	render(context)
}
function getCurrentShowTimeSeconds(){
	var curTime = new Date();
	var ret =curTime.getTime();
	ret=Math.round(ret/1000)
	return ret>=0?ret:0;
}

function render(cxt){
	var hours = parseInt(curShowTimeSeconds/3600);
	var minutes = parseInt((curShowTimeSeconds-hours*3600)/60);
	var seconds = curShowTimeSeconds%60;
	
	renderDigit(MARGIN_TOP,MARGIN_LEFT,parseInt(hours/10),cxt);
	renderDigit(MARGIN_TOP+15*(RADIUS+1),MARGIN_LEFT,parseInt(hours%10),cxt);
	renderDigit(MARGIN_TOP+30*(RADIUS+1),MARGIN_LEFT,10,cxt);
	renderDigit(MARGIN_TOP+40*(RADIUS+1),MARGIN_LEFT,parseInt(minutes/10),cxt);
	renderDigit(MARGIN_TOP+55*(RADIUS+1),MARGIN_LEFT,parseInt(minutes%10),cxt);
	renderDigit(MARGIN_TOP+70*(RADIUS+1),MARGIN_LEFT,10,cxt);
	renderDigit(MARGIN_TOP+80*(RADIUS+1),MARGIN_LEFT,parseInt(minutes/10),cxt);
	renderDigit(MARGIN_TOP+95*(RADIUS+1),MARGIN_LEFT,parseInt(minutes%10),cxt);
}
function renderDigit(x,y,num,cxt){	
	cxt.fillStyle="rgb(0,102,153)";
	for (var i = 0; i < digit[num].length; i++){
		for (var j = 0; j < digit[num][i].length; j++) {
			if (digit[num][i][j]==1) {
				cxt.beginPath();
				cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
				cxt.closePath()
				cxt.fill();
			}
		}
	}
}
