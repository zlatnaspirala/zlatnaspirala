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
var PASS = 0;


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
 if(navFirefox && navandroid && TYPEOFANDROID == 0){browser_name = "androind_firefox"; HREFTXT = "You using mobile FireFox on android,<br/>excellence. You can play this game.";PASS = 1; }
 
  //  FIREFOX za android T
 if(navFirefox && navandroid && TYPEOFANDROID == 1){browser_name = "android_tab_firefox"; HREFTXT = "You using mobile FireFox on android TABLET,<br/>excellence. You can play this game.";PASS=1; }
 
 // OPERA ZA ANDROID
 if(navOpera && navandroid){browser_name = "android_opera"; HREFTXT = "You using opera mobile browser on android,<br/>sorry no support"; }// provera 
 
 // OPERA ZA ANDROID TABLET
 if(navOpera && navandroid && operatablet){browser_name = "android_tab_opera"; HREFTXT = "You using opera mobile browser on android TABLET!, soon ! very soon .Not optimazed"; }// provera 

//  safari mobile za IPHONE - i  safari mobile za IPAD i CHROME za IPAD 
  if(navSafari){
  var Iphonesafari = NAV.match(/iphone/gi);     
  if (Iphonesafari){browser_name = "iphone_safari"; HREFTXT = "You using safari mobile browser on IPHONE device,<br/> sorry iOS have no support for webgl for now!"; }  // OK
 else if (navIpad){ browser_name = "ipad_safari"; HREFTXT = "You using mobile safari on IPAD +chrome,<br/> sorry iOS have no support for webgl for now!"; }   //OK
 else if (navandroid){ browser_name = "android_nativ?"; HREFTXT = "> Android native navigator: NO SUPORT for HTML5 (no websockets)!";  }   }

  // TEST CHROME 
 if(navChrome &&  navSafari  && navMozilla){browser_name = "android_tab_chrome"; HREFTXT = "You using mobile chrome browser on android tablet, no webgl support!"; }
 
 if(navChrome && TYPEOFANDROID == 0 ){browser_name = "desktop_chrome"; HREFTXT = "You using  chrome browser on desktop, excellence. You can play this game.";PASS=1; }
 
 if(navMozilla && NOMOBILE==1 && gecko && navFirefox){browser_name = "desktop_firefox"; HREFTXT = "You using FF on desktop, excellence. You can play this game."; PASS=1;} 
 
 //
 if( navOpera && TYPEOFANDROID == 0 && !mobile){browser_name = "desktop_opera"; HREFTXT = "You using  OPERA browser on desktop,excellence. You can play this game.";PASS=1; }
 
}


DETECTBROWSER();

///////////////////////////////////
//
///////////////////////////////////