//------------------------------------
// created by zlatnaspirala@gmail.com
//------------------------------------

function MAIN_(){
this.VIEW3D = ['SCREEN'];
this.VIEW3D.W = window.innerWidth - 10;
this.VIEW3D.H =  window.innerHeight-(window.innerHeight/10);
this.player = ['noname'];
this.player.control = ['firstperson'];
this.player.edgeRotateSpeed = 2;
this.player.movementSpeed = 1;
this.browser = {};
this.browser.name = "noname";
this.browser.setName =  function (string) {this.name = string;}

DETECTBROWSER();

}

var MAIN = new MAIN_();
MAIN.browser.setName(browser_name);
//alert(MAIN.browser.name);





console.log('edgeRotateSpeed>>>'+MAIN.player.edgeRotateSpeed);
console.log('MovemontSpeed>>>'+MAIN.player.movementSpeed);
console.log('Control>>>'+MAIN.player.control);

