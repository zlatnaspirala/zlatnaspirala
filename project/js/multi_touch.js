function MOBILE_CONTROL (){
 
  this.X =  null;
  this.Y =  null;
  this.LAST_X_POSITION = null;
  this.LAST_Y_POSITION = null;
  this.MULTI_TOUCH = 'NO';
  this.MULTI_TOUCH_X1 = null;  
  this.MULTI_TOUCH_X2 = null;
  this.MULTI_TOUCH_X3 = null;
  this.MULTI_TOUCH_X4 = null;
  this.MULTI_TOUCH_X5 = null;
  this.MULTI_TOUCH_Y1 = null;
  this.MULTI_TOUCH_Y2 = null;
  this.MULTI_TOUCH_Y3 = null;
  this.MULTI_TOUCH_Y4 = null;
  this.MULTI_TOUCH_Y5 = null;
  this.MULTI_TOUCH_X6 = null;  
  this.MULTI_TOUCH_X7 = null;
  this.MULTI_TOUCH_X8 = null;
  this.MULTI_TOUCH_X9 = null;
  this.MULTI_TOUCH_X10 = null;
  this.MULTI_TOUCH_Y6 = null;
  this.MULTI_TOUCH_Y7 = null;
  this.MULTI_TOUCH_Y8 = null;
  this.MULTI_TOUCH_Y9 = null;
  this.MULTI_TOUCH_Y10 = null;
  this.MULTI_TOUCH_INDEX = 1;
  this.SCREEN = [window.innerWidth , window.innerHeight]; 
  this.SCREEN.W = this.SCREEN[0];
  this.SCREEN.H = this.SCREEN[1];
  //Application general
  this.AUTOR = "Nikola Lukic";
  this.APPLICATION_NAME = "TestApplication";
  this.SET_APPLICATION_NAME = function (value) {
            if (typeof value != 'string')
                throw 'APPLICATION_NAME must be a string!';
            if (value.length < 2 || value.length > 20)
                throw 'APPLICATION_NAME must be 2-20 characters long!';
            this.APPLICATION_NAME = value;
        };
  this.APP = function(){/*construct*/};
  this.APP.BODY = document.getElementsByTagName('body')[0];
  this.APP.BODY.SET_STYLE = function (string) {this.style = string;}
  this.APP.BODY.SET_BACKGROUND_COLOR = function (color) {this.style.backgroundColor = color;}
  this.APP.BODY.SET_COLOR = function (color) {this.style.Color = color;} 
  this.APP.BODY.ADD_DIV = function (id , style , innerHTML) { 
  var n = document.createElement('div');
  var divIdName = id;
  n.setAttribute('id',divIdName);
  n.setAttribute('style',style);
  n.innerHTML = innerHTML;
  this.appendChild(n);
  };
  this.APP.BODY.ADD_2DCANVAS = function (id,width_,height_) { 
  var n = document.createElement('canvas');
  var divIdName = id;
  n.setAttribute('id',divIdName);
  n.setAttribute('width',width_);
  n.setAttribute('height',height_);
  //n.innerHTML = 'Element is here';
  this.appendChild(n);
  };
  //console.log('<MOBILE_CONTROL JavaScript class>');
  //console.log('status:MOBILE_CONTROL FINISH LOADING');
  //console.log('EASY_IMPLEMENTATION!');
  
}

//###################################################################
//EVENTS
//###################################################################  
//mod
var ACTIVE_MOVE=0;
//canvas
document.getElementById("canvas").addEventListener('touchstart', function(event) 
{ event.preventDefault();
 
if (CONTROL.MULTI_TOUCH == 'NO') {

	var touch = event.touches[0];
	CONTROL.X = touch.pageX;
	CONTROL.Y = touch.pageY;
	//console.log('TOUCH START AT:(X' + CONTROL.X + '),(' + CONTROL.Y + ')' );
	ACTIVE_MOVE=1;
}
else if (CONTROL.MULTI_TOUCH == 'YES') {


  var touches_changed = event.changedTouches;
   
   for (var i=0; i<touches_changed.length;i++) {
   
   //CONTROL.MULTI_TOUCH_X1
  //console.log("multi touch : x" + CONTROL.MULTI_TOUCH_INDEX + ":(" +touches_changed[i].pageX + ")");
  switch(CONTROL.MULTI_TOUCH_INDEX)
{
case 1:
  CONTROL.MULTI_TOUCH_X1=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y1=touches_changed[i].pageY;
  //only first
  //mod
 ACTIVE_MOVE=1;
  break;
case 2:
  CONTROL.MULTI_TOUCH_X2=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y2=touches_changed[i].pageY;
  break;
case 3:
  CONTROL.MULTI_TOUCH_X3=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y3=touches_changed[i].pageY;
  break;
case 4:
  CONTROL.MULTI_TOUCH_X4=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y4=touches_changed[i].pageY;
  break;
case 5:
  CONTROL.MULTI_TOUCH_X5=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y5=touches_changed[i].pageY;
  break;
case 6:
  CONTROL.MULTI_TOUCH_X6=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y6=touches_changed[i].pageY;
  break;
case 7:
  CONTROL.MULTI_TOUCH_X7=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y7=touches_changed[i].pageY;
  break;
case 8:
  CONTROL.MULTI_TOUCH_X8=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y8=touches_changed[i].pageY;
  break;
case 9:
  CONTROL.MULTI_TOUCH_X9=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y9=touches_changed[i].pageY;
  break;
case 10:
  CONTROL.MULTI_TOUCH_X10=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y10=touches_changed[i].pageY;
  break;
default:
  //code to be executed if n is different from case 1 and 2
}
  CONTROL.MULTI_TOUCH_INDEX = CONTROL.MULTI_TOUCH_INDEX + 1;
  
  
  }

}

CONTROL.MULTI_TOUCH = 'YES';
 
},false);
////////////////////////////////////////////////////////
document.getElementById("canvas").addEventListener('touchmove', function(event) 
{ 

event.preventDefault();

var touch = event.touches[0];
CONTROL.X = touch.pageX;
CONTROL.Y = touch.pageY;
//console.log('TOUCH MOVE AT:(X' + CONTROL.X + '),(' + CONTROL.Y + ')' );
 //mod
 //#####################

tempX = CONTROL.X;
tempY = CONTROL.Y;
  
 
 
 if (tempX < CONTROL.SCREEN.W/2 && tempY>CONTROL.SCREEN.H-80){
//l

 }
 else if (tempX > CONTROL.SCREEN.W/2 && tempY>CONTROL.SCREEN.H-80){
 //r

 
 }
 else if (tempX > CONTROL.SCREEN.W/3 && tempX < 2*CONTROL.SCREEN.W/3 && tempY<CONTROL.SCREEN.H-80 && tempY>CONTROL.SCREEN.H-160){
 //
 
 }
else{

}


 //#####################
 ACTIVE_MOVE=1;
//#############
 if (CONTROL.MULTI_TOUCH == 'YES') {


  var touches_changed = event.changedTouches;
   
   for (var i=0; i<touches_changed.length;i++) {
   
   //CONTROL.MULTI_TOUCH_X1
  //console.log("multi touch : x" + CONTROL.MULTI_TOUCH_INDEX + ":(" +touches_changed[i].pageX + ")");
  switch(i)
{
case 1:
  CONTROL.MULTI_TOUCH_X1=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y1=touches_changed[i].pageY;
  //mod
  ACTIVE_MOVE=1;
	//
  break;
case 2:
  CONTROL.MULTI_TOUCH_X2=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y2=touches_changed[i].pageY;
  break;
case 3:
  CONTROL.MULTI_TOUCH_X3=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y3=touches_changed[i].pageY;
  break;
case 4:
  CONTROL.MULTI_TOUCH_X4=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y4=touches_changed[i].pageY;
  break;
case 5:
  CONTROL.MULTI_TOUCH_X5=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y5=touches_changed[i].pageY;
  break;
case 6:
  CONTROL.MULTI_TOUCH_X6=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y6=touches_changed[i].pageY;
  break;
case 7:
  CONTROL.MULTI_TOUCH_X7=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y7=touches_changed[i].pageY;
  break;
case 8:
  CONTROL.MULTI_TOUCH_X8=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y8=touches_changed[i].pageY;
  break;
case 9:
  CONTROL.MULTI_TOUCH_X9=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y9=touches_changed[i].pageY;
  break;
case 10:
  CONTROL.MULTI_TOUCH_X10=touches_changed[i].pageX;
  CONTROL.MULTI_TOUCH_Y10=touches_changed[i].pageY;
  break;
default:
  //code to be executed if n is different from case 1 and 2
}
}}

//#############




},false);
//////////////////////////////////////////////////////// 
document.getElementById("canvas").addEventListener('touchend', function(event) 
{ 
 

CONTROL.LAST_X_POSITION = CONTROL.X;  
CONTROL.LAST_Y_POSITION = CONTROL.Y; 
CONTROL.MULTI_TOUCH = 'NO';
CONTROL.MULTI_TOUCH_INDEX = 1;

CONTROL.MULTI_TOUCH_X1 = null;
CONTROL.MULTI_TOUCH_X2 = null;
CONTROL.MULTI_TOUCH_X3 = null;
CONTROL.MULTI_TOUCH_X4 = null;
CONTROL.MULTI_TOUCH_X5 = null;
CONTROL.MULTI_TOUCH_X6 = null;
CONTROL.MULTI_TOUCH_X7 = null;
CONTROL.MULTI_TOUCH_X8 = null;
CONTROL.MULTI_TOUCH_X9 = null;
CONTROL.MULTI_TOUCH_X10 = null;
CONTROL.MULTI_TOUCH_Y1 = null;
CONTROL.MULTI_TOUCH_Y2 = null;
CONTROL.MULTI_TOUCH_Y3 = null;
CONTROL.MULTI_TOUCH_Y4 = null;
CONTROL.MULTI_TOUCH_Y5 = null;
CONTROL.MULTI_TOUCH_Y6 = null;
CONTROL.MULTI_TOUCH_Y7 = null;
CONTROL.MULTI_TOUCH_Y8 = null;
CONTROL.MULTI_TOUCH_Y9 = null;
CONTROL.MULTI_TOUCH_Y10 = null;

//console.log('LAST TOUCH POSITION AT:(X' + CONTROL.X + '),(' + CONTROL.Y + ')' );
ACTIVE_MOVE=0;
},false);
////////////////////////////////////////////////////////
document.getElementById("canvas").addEventListener("touchcancel", function(event) 
{ 
//console.log('BREAK - LAST TOUCH POSITION AT:(X' + CONTROL.X + '(,(' + CONTROL.Y + ')' );
ACTIVE_MOVE=0;
}, false);


 

//mod
setInterval(function (){
//collide 
	if(transZ > 13){transZ=13;}
	if(transX > 102.5){transX=102.5;}
	if(transX < -102.5){transX=-102.5;}
	if(transZ < -131){transZ=-131;}


	if(transX>-75&&transX<75&&transZ<-12.5&&transZ>-13.5){
	 transZ=-12.5;
	}
	else if(transX>-75&&transX<75&&transZ>-48&&transZ<-47){
	 transZ=-48;
	}
	else if(transX>-75&&transX<75&&transZ>-48&&transZ<-47){
	 transZ=-48;
	}
//collide

	else
	{
	
if (ACTIVE_MOVE==1){
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//console.log("MOVE = 1");
//mod
  c=Math.PI/180;
  yRot.toFixed(0);
  DOPX = Math.cos(c*yRot);// 0 
  DOPY = Math.sin(c*yRot);// 0 
  
  /*
 if (CONTROL.X < CONTROL.SCREEN.W/3 && CONTROL.Y>CONTROL.SCREEN.H-90){
transX =  transX + DOPX; 
transZ =  transZ +DOPY;
 //console.log("LEVO!!!");
}
 else if (tempX > 2*CONTROL.SCREEN.W/3 && tempY>CONTROL.SCREEN.H-90){
//r
transX =  transX -DOPX; 
transZ =  transZ -DOPY; 
 //console.log("desno");
 }
 else if (tempX > CONTROL.SCREEN.W/3 && tempX < 2*CONTROL.SCREEN.W/3 && tempY<CONTROL.SCREEN.H-90 && tempY>CONTROL.SCREEN.H-180){
 //
 transZ = transZ + DOPX; 
 transX = transX - DOPY;
  //console.log("NAPRED");
 }
 
 else if (tempX > CONTROL.SCREEN.W/3 && tempX < 2*CONTROL.SCREEN.W/3 && tempY>CONTROL.SCREEN.H -90 &&tempY<CONTROL.SCREEN.H){
 //
transZ =  transZ - DOPX; 
transX = transX + DOPY;
 }
 else{

 }
 */
 YY = tempY - CONTROL.SCREEN.H/10 - 100;
YY = YY / 2.25;
XX = tempX - 558;
XX = XX / 1.55;



 	if(transZ > 13){transZ=13;}
	if(transZ < -131){transZ=-131;}
	if(transX > 102.5){transX=102.5;}
	if(transX < -102.5){transX=-102.5;}
	
	
	
	
	
	
	
 	}
	
/////////////////////////////////////////////
}
/////////////////////////////////////////////

},1); 


 /////////////////////////////
 // drag chat
 //////////////////////////////
 
 
 
 
 
 
 //////////////////////////////
