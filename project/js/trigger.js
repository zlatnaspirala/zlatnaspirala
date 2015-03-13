//------------------------------------
// created by zlatnaspirala@gmail.com
//------------------------------------


function TRIGER(name_,X,Y,Z,SX,SY,SZ){

if (-X>transX-1.5*SX&&-X<transX+1.5*SX&&-Z>transZ-1.5*SZ&&-Z<transZ+1.5*SZ){

switch(name_){
case "PREKIDAC1":
setValue_('CKECK',-16);
setTimeout(function(){setValue_('CKECK',-16.2);},400);
setTimeout(function(){setValue_('CKECK',-16.6);},700);
break;
 
case "ball1":
console.log('KOALIZIJA');
 
break;



default:
console.log('Somethink call triger function.Object name is :'+name_);

}

}
}

function COLLIDE(name_,X,Y,Z,SX,SY,SZ){

if (-X>transX-1.5*SX && -X<transX+1.5*SX && -Z>transZ-1.5*SZ && -Z<transZ+1.5*SZ){

switch(name_){
case "ball1":
	{
	if (-X>transX-1.5*SX && -X<transX+1.5*SX && -Z>transZ- 1.1*SZ ) {  }
	else if (-X>transX-1.5*SX && -X<transX+1.5*SX && -Z<transZ- 1.1*SZ ) {  }
	else if (-X<transX+1.1*SX && -Z>transZ-1.5*SZ && -Z<transZ+1.5*SZ){  }
	else if (-X>transX+1.1*SX && -Z>transZ-1.5*SZ && -Z<transZ+1.5*SZ){  }
	}
break;
default:
console.log('Player collide with object:'+name_);

}

}







}


