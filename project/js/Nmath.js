//------------------------------------
// created by zlatnaspirala@gmail.com
//------------------------------------
//This all math function for helping movement in the game.
//and more...


// detect browser and platform created by Nikola Lukic
//https://code.google.com/p/ultimatenidza/

var browser_name,HREFTXT;
var TYPEOFANDROID = 0;
var NOMOBILE = 0;

function DETECTBROWSER(){
var NAV = navigator.userAgent;var gecko,navIpad,operatablet,navIphone,navFirefox,navChrome,navOpera,navSafari,navandroid,mobile,navMozilla;  
gecko=NAV.match(/gecko/gi);
navOpera=NAV.match(/opera/gi); 
operatablet=NAV.match(/Tablet/gi); 
navIpad=NAV.match(/ipad/gi); 
navIphone=NAV.match(/iphone/gi);        
navFirefox = NAV.match(/Firefox/gi);
navMozilla = NAV.match(/mozilla/gi);
navChrome = NAV.match(/Chrome/gi);
navSafari = NAV.match(/safari/gi);
navandroid = NAV.match(/android/gi);
mobile = NAV.match(/mobile/gi);  
//alert(NAV);

 var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
              if (mobile) {
                  var userAgent = navigator.userAgent.toLowerCase();
                  if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1))
                         document.write("ANDROID MOBILE")
                   else if ((userAgent.search("android") > -1) && !(userAgent.search("mobile") > -1))
                                          // document.write("<b>:ANDROID TABLET:")
                           TYPEOFANDROID = 1;                              
              }
                          else {NOMOBILE=1;  }
             // else
                //  alert("NO MOBILE DEVICE DETECTED"); 
  //  FIREFOX za android 
 if(navFirefox && navandroid && TYPEOFANDROID == 0){browser_name = "androind_firefox"; HREFTXT = "You using mobile FireFox on android,GO TO PLAY NOW!"; }
 
  //  FIREFOX za android T
 if(navFirefox && navandroid && TYPEOFANDROID == 1){browser_name = "android_tab_firefox"; HREFTXT = "You using mobile FireFox on android TABLET,GO TO PLAY NOW!"; }
 
 // OPERA ZA ANDROID
 if(navOpera && navandroid){browser_name = "android_opera"; HREFTXT = "You using opera mobile browser on android ,GO TO PLAY NOW!"; }// provera 
 
 // OPERA ZA ANDROID TABLET
 if(navOpera && navandroid && operatablet){browser_name = "android_tab_opera"; HREFTXT = "You using opera mobile browser on android TABLET!, GO TO PLAY NOW!"; }// provera 

//  safari mobile za IPHONE - i  safari mobile za IPAD i CHROME za IPAD 
  if(navSafari){
  var Iphonesafari = NAV.match(/iphone/gi);     
  if (Iphonesafari){browser_name = "iphone_safari"; HREFTXT = "You using safari mobile browser on IPHONE device, Go to play!"; }  // OK
 else if (navIpad){ browser_name = "ipad_safari"; HREFTXT = "You using mobile safari on IPAD +chrome suport !"; }   //OK
 else if (navandroid){ browser_name = "android_nativ?"; HREFTXT = "> Android native navigator: NO SUPORT for HTML5!";  }   }

  // TEST CHROME 
 if(navChrome &&  navSafari  && navMozilla){browser_name = "android_tab_chrome"; HREFTXT = "You using mobile chrome browser on android tablet, GO TO PLAY NOW!"; }
 
 if(navChrome && TYPEOFANDROID == 0 ){browser_name = "desktop_chrome"; HREFTXT = "You using  chrome browser on desktop, GO TO PLAY NOW!"; }
 
 if(navMozilla && NOMOBILE==1 && gecko && navFirefox){browser_name = "desktop_firefox"; HREFTXT = "You using FF on desktop, GO TO PLAY NOW!"; } 
 
 //
 if( navOpera && TYPEOFANDROID == 0 && !mobile){browser_name = "desktop_opera"; HREFTXT = "You using  OPERA browser on desktop, GO TO PLAY NOW!"; }
 
}
///////////////////////////////////
//
///////////////////////////////////
var TIMER_001;
function MakeSinValue(NAME,min_,max_,step,interval_){
var CHECK_=0;
window["PERIODA"+NAME]=min_;
 TIMER_001 =setInterval(function (){
if(CHECK_==0){
window["PERIODA"+NAME]=window["PERIODA"+NAME]+step;
if(window["PERIODA"+NAME]>max_){CHECK_=1;}
}else if(CHECK_==1){
window["PERIODA"+NAME]=window["PERIODA"+NAME]-step;
if(window["PERIODA"+NAME]<min_){CHECK_=0;}
}else{

}
},interval_);
}


function KillTimer_(ID){

window["TIMER_" + ID] = null;

};

function getE(name){

return document.getElementById(name);

}

function setValue_(ID,newValue){
window[ID]=newValue;
}


function fromPointAtoPointB_(ID,A,B,step){

if (window[ID+'OnlyOne']==null){
window[ID]=A;
var privateTimer = setInterval(function(){

if(A>0&&B>A){window[ID]=window[ID]=A+step;}
if(A>0&&B<A){window[ID]=window[ID]=A-step;}
if(A<0&&B<A){window[ID]=window[ID]=A-step;}
if(A<0&&B>A){window[ID]=window[ID]=A+step;}

if(A==B||(A>B-step*A<B+step)){ clearInterval(privateTimer);console.log("timerOF");}

},1);


}



}


//


function GETID(url) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //document.getElementById("CHAT_DIV").innerHTML = xmlhttp.responseText;
		   window["IDUSER"] = xmlhttp.responseText;
		     setTimeout(function(){
           window["IDUSER_"] = JSON.parse(IDUSER);
	},100);
	
        }
    }

    xmlhttp.open("GET", url , true);
    xmlhttp.send();
}

//

function GETUSERINFO(url) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		   window["userInfo"] = xmlhttp.responseText;
		     setTimeout(function(){
           window["uInfo"] = JSON.parse(userInfo);
	},100);
	
        }
    }

    xmlhttp.open("GET", url , true);
    xmlhttp.send();
}


function GETSERVERINFO(url) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		   window["server_text"] = xmlhttp.responseText;
	       window["SERVER"]  = eval('(' + server_text + ')');
        }
    }

    xmlhttp.open("GET", url , true);
    xmlhttp.send();
}


function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas2d");
    canvas.width = 128;
    canvas.height = 128;
    img.height = canvas.height;
	img.width = canvas.width;
	
    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function getBase64FromImageUrl(URL) {
    var img = new Image();
    img.src = URL;
    img.onload = function () {


    var canvas = document.createElement("canvas");
    canvas.width =this.width;
    canvas.height =this.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(this, 0, 0);


    var dataURL = canvas.toDataURL("image/jpg");
	dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
   return dataURL;
  

    }
}

 
	  
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}


 
