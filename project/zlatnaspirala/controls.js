//////////////////////////////////
//////////////////////////////////
if (MAIN.browser.name == "androind_firefox" || MAIN.browser.name == "android_tab_firefox"){

var CONTROL = new MOBILE_CONTROL();

 var enable_moveL = 0;
 var enable_moveR = 0;
 var enable_moveB = 0;
 var enable_moveF = 0;
setInterval(function MOVELEFT(){
 //  c=Math.PI/180;
 if (enable_moveL == 1){
  enable_moveR = 0;
  enable_moveB = 0;
  enable_moveF = 0;
  yRot.toFixed(0);
  DOPX = Math.cos(c*yRot); 
  DOPY = Math.sin(c*yRot);
 transX =  transX + DOPX; 
 transZ =  transZ +DOPY;
 publish();
}
},15);
setInterval(function MOVERIGHT(){
  // c=Math.PI/180;
 if (enable_moveR == 1){
   enable_moveL = 0;
  enable_moveB = 0;
  enable_moveF = 0;
  
   yRot.toFixed(0);
  DOPX = Math.cos(c*yRot);// 0 
  DOPY = Math.sin(c*yRot);// 0 
 transX =  transX -DOPX; 
 transZ =  transZ -DOPY;
 publish();
 }
},15);
setInterval(function MOVEFOR(){
  // c=Math.PI/180;
  if (enable_moveF == 1){
    enable_moveR = 0;
  enable_moveB = 0;
  enable_moveL = 0;
   yRot.toFixed(0);
  DOPX = Math.cos(c*yRot);// 0 
  DOPY = Math.sin(c*yRot);// 0 
   transZ = transZ + DOPX; 
 transX = transX - DOPY;
 publish();
 }
},15);
setInterval(function MOVEBACK(){
  // c=Math.PI/180;
   if (enable_moveB == 1){
     enable_moveR = 0;
  enable_moveL = 0;
  enable_moveF = 0;
 yRot.toFixed(0);
  DOPX = Math.cos(c*yRot);// 0 
  DOPY = Math.sin(c*yRot);// 0 
 transZ =  transZ - DOPX; 
 transX = transX + DOPY;
 publish();
 }
},15);

 var double_click = 0;
 document.getElementById("HUBB").addEventListener('touchstart', function(event) {
 //event.preventDefault();
 var touch = event.touches[0]; 
 double_click++;
setTimeout(function(){double_click=0;},500);
	  switch (double_click) {
        case 1:
		//try{clearInterval(window["moveB"]);}catch(){}
		enable_moveB = 1;
            break;
        case 2:
     event.preventDefault();
            break;
			     case 3:
     event.preventDefault();
            break;
			     case 4:
     event.preventDefault();
            break;
			
        default:
            
            break;
    }  
 
}, false);


 var double_click1 = 0;
 document.getElementById("HUBL").addEventListener('touchstart', function(event) {
 //event.preventDefault();
 var touch = event.touches[0]; 
 double_click1++;
setTimeout(function(){double_click1=0;},400);
	  switch (double_click1) {
        case 1:
		{
		
		 enable_moveL = 1;
		}
            break;
        case 2:
    // event.preventDefault();
            break;
			     case 3:
    // event.preventDefault();
            break;
			     case 4:
    // event.preventDefault();
            break;
			
        default:
            
            break;
    }  
 
}, false);
 var double_click2 = 0;
 document.getElementById("HUBR").addEventListener('touchstart', function(event) {
// event.preventDefault();
 var touch = event.touches[0]; 
 double_click2++;
setTimeout(function(){double_click2=0;},400);
	  switch (double_click2) {
        case 1:
		{
		 enable_moveR = 1;
		}
            break;
        case 2:
     //event.preventDefault();
            break;
			     case 3:
     //event.preventDefault();
            break;
			     case 4:
     //event.preventDefault();
            break;
			
        default:
            
            break;
    }  
 
}, false);
 var double_click3 = 0;
 document.getElementById("HUBF").addEventListener('touchstart', function(event) {
// event.preventDefault();
 var touch = event.touches[0]; 
 double_click3++;
setTimeout(function(){double_click3=0;},400);
	  switch (double_click3) {
        case 1:
		{
		 enable_moveF = 1;
		}
            break;
        case 2:
     event.preventDefault();
            break;
			     case 3:
     event.preventDefault();
            break;
			     case 4:
     event.preventDefault();
            break;
			
        default:
            
            break;
    }  
 
}, false);



}
else if (MAIN.browser.name == "desktop_firefox" || MAIN.browser.name == "desktop_chrome") {
glavni.style.cursor = 'none';
var IE = document.all?true:false;//noneed
if (!IE) document.captureEvents(Event.MOUSEMOVE);
window.onmousemove = getMouseXY;
}

var LIMIT_TOUCH=window.innerWidth-window.innerWidth/9;
  
var tempX = 0;
var tempY = 0;
var YY = 0;
var XX = 0;var inck = 0;

function getMouseXY(e) {
//e.preventDefault();
 if (IE) { 
tempX = event.clientX + document.body.scrollLeft;
tempY = event.clientY + document.body.scrollTop;
}
else {
tempX = e.pageX;
tempY = e.pageY;
}  

if (tempY > 166 && tempY < 555){
YY = tempY - MAIN.VIEW3D.H/2;///2
YY = YY / 1.25;
XX = tempX - 558;
XX = XX / 1.55;
}

return true; 
}
////////////////////////////////
////////////////////////////////