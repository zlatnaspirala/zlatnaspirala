   var TEST1=1;
   
   function drawScene() {
	
		 if (tempX <= 10){alfa = alfa - MAIN.player.edgeRotateSpeed;}
	   	 if (tempX >= window.innerWidth - 30){alfa = alfa + MAIN.player.edgeRotateSpeed;}

        gl.bindFramebuffer(gl.FRAMEBUFFER, rttFramebuffer);
        drawSceneOnLaptopScreen();
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 500.0, pMatrix);
        mat4.identity(mvMatrix);
	//############################################################################
	//############################################################################
	//############################################################################
	//               put your functions here      glmatrix plugin zlatnaspira2.0
	//############################################################################
	
	neutral();
	gl.disable(gl.BLEND);
	gl.enable(gl.DEPTH_TEST);
	//good for start , make scene with basic parameters


/////////////////////////////	
SKY(0,22.5,70,sky1);
/////////////////////////////

/////////////////////////////////////
CUBE(2,5,33,zlatnaspirala);
BLADEROTATE(2,6,33,matrix1,2);
BLADEROTATEDEGX(2,4,33,matrix1,180);
/////////////////////////////////////
CUBE(-2,5,33,zlatnaspirala);
BLADEROTATE(-2,6,33,matrix1,2);
BLADEROTATEDEGX(-2,4,33,matrix1,180);
/////////////////////////////////////

/////////////////////////////////////
BLOCK(0,0,0,floor);
BLOCK(30,0,0,floor);
BLOCK(60,0,0,floor);
BLOCK(90,0,0,floor);
BLOCK(90,0,30,floor);
BLOCK(90,0,60,floor);
BLOCK(90,0,90,floor);
BLOCK(90,0,120,floor);
BLOCK(60,0,60,floor);
BLOCK(60,0,90,floor);
BLOCK(30,0,90,floor);
BLOCK(30,0,60,floor);
BLOCK(0,0,60,floor);
BLOCK(-30,0,60,floor);
BLOCK(-30,0,60,floor);
BLOCK(-60,0,60,floor);
BLOCK(-60,0,90,floor);
BLOCK(-30,0,90,floor);
BLOCK(-30,0,0,floor);
BLOCK(-60,0,0,floor);
BLOCK(-90,0,0,floor);
BLOCK(-90,0,30,floor);
BLOCK(-90,0,60,floor);
BLOCK(-90,0,90,floor);
BLOCK(-90,0,120,floor);
BLOCK(-60,0,120,floor);
BLOCK(60,0,120,floor);
BLOCK(-30,0,120,floor);
BLOCK(30,0,120,floor);
BLOCK(0,0,120,floor);
BLOCK(0,0,90,floor);
/////////////////////////////////////
XWALL(0,0.7,-15.7,barrier);
XWALL(30,0.7,-15.7,barrier);
XWALL(60,0.7,-15.7,barrier);
XWALL(90,0.7,-15.7,barrier);
XWALL(-30,0.7,-15.7,barrier);
XWALL(-60,0.7,-15.7,barrier);
XWALL(-90,0.7,-15.7,barrier);
XWALL(0,0.7,134.2,barrier);
XWALL(30,0.7,134.2,barrier);
XWALL(60,0.7,134.2,barrier);
XWALL(90,0.7,134.2,barrier);
XWALL(-30,0.7,134.2,barrier);
XWALL(-60,0.7,134.2,barrier);
XWALL(-90,0.7,134.2,barrier);
ZWALL(-105.7,0.7,0,barrier);
ZWALL(-105.7,0.7,30,barrier);
ZWALL(-105.7,0.7,60,barrier);
ZWALL(-105.7,0.7,90,barrier);
ZWALL(-105.7,0.7,120,barrier);
ZWALL(104,0.7,0,barrier);
ZWALL(104,0.7,30,barrier);
ZWALL(104,0.7,60,barrier);
ZWALL(104,0.7,90,barrier);
ZWALL(104,0.7,120,barrier);
/////////////////////////////////////
BLADEGREEN(-15,0,15,green1);    
BLADEGREEN(-30,0,15,green1);    
BLADEGREEN(30,0,15,green1);  
BLADEGREEN(15,0,15,green1); 
BLADEGREEN(-75,0,15,green1);    
BLADEGREEN(75,0,15,green1);  
/////////////////////////////////////
BLADEGREEN(-15,0,46,green1);    
BLADEGREEN(-30,0,46,green1);    
BLADEGREEN(30,0,46,green1);  
BLADEGREEN(15,0,46,green1); 
BLADEGREEN(-75,0,46,green1);    
BLADEGREEN(75,0,46,green1); 
/////////////////////////////////////
BLADEGREEN(15,0,-15,green1);   
BLADEGREEN(-45,0,-15,green1);    
BLADEGREEN(45,0,-15,green1);   
BLADEGREEN(-75,0,-15,green1);    
BLADEGREEN(75,0,-15,green1);    
BLADEGREEN(-104.7,0,-14.5,green1);    
BLADEGREEN(104.7,0,-14.5,green1); 
/////////////////////////////////////
BLADEGREEN(-15,0,135,green1);    
BLADEGREEN(15,0,135,green1);   
BLADEGREEN(-45,0,135,green1);    
BLADEGREEN(45,0,135,green1);   
BLADEGREEN(-75,0,135,green1);    
BLADEGREEN(75,0,135,green1);    
BLADEGREEN(-104.7,0,135,green1);    
BLADEGREEN(104.7,0,135,green1); 
/////////////////////////////////////
NEW_CUBE("sto",0,0,-14,needkey,0.5,1.7,0.5,'NO','X',0,0);
/////////////////////////////////////
 LAPTOP(0,0,-14);	
/////////////////////////////////////
 
 	gl.disable(gl.BLEND);
	gl.enable(gl.DEPTH_TEST);

	
 //HOLDERX(90,0.7,2,barrier);//old
 MOON(90,3,2);
 BLADEROTATE(90,5,2,fog1,1);
 NEW_CUBE("IZA_laptopa",90,7,2,green1,0.6,4,0.6,'YES','Y',0,-2); 
  
  
  
NEW_CUBE("PREKIDAC1",-60,2,window['CKECK'],press,2,2,2,'NO','X',0,0,'trig');

 
neutral();

CREATE_LIGHT(PERIODAD,0.2,0.2,0,10,0,0.2,0,PERIODAD,false,true);

NEW_CUBE("matrixCube1",0,6,104,matrix1,4,4,4,'YES','X',0,0.02);
NEW_CUBE("matrixCube2",0,6,104,green1,4.2,4.2,4.2,'YES','Y',0,0.04);
NEW_CUBE("matrixCube3",0,6,104,matrix1,4.4,4.4,4.4,'YES','X',0,-0.06);
NEW_CUBE("matrixCube4",0,6,104,green1,4.6,4.6,4.6,'YES','Y',0,-0.08);
NEW_CUBE("matrixCube3",0,6,104,matrix1,4.8,4.8,4.8,'YES','XY',0,0.1);
NEW_CUBE("matrixCube4",0,6,104,green1,5,5,5,'YES','XY',0,0.12);
NEW_CUBE("matrixCube5",0,6,104,matrix1,5.2,5.2,5.2,'YES','XY',0,-0.14);
NEW_CUBE("matrixCube5",0,6,104,matrix1,5.4,5.4,5.4,'YES','XY',0,-0.16);


 OBJECT3D("OBJEKAT1",70,-2,0,matrix1,"NO","X",0,1);


   
NEW_CUBE("goright1",-91,4,0,goRight,1,1,1,'NO','X',0,1);
NEW_CUBE("goright1",-91,4,50,goRight,1,1,1,'NO','X',0,1);



CREATE_LIGHT(PERIODAD,PERIODAD,PERIODAD,0,10,0,PERIODAD,0,0,false,true);
NEW_CUBE("ZID_Zeleni1",0,4,16,fog1,76,5,1,'4','X',0,0);
NEW_CUBE("ZID_Zeleni2",0,4,46,fog1,76,5,1,'4','X',0,0);
NEW_CUBE("ZID_Zeleni3",75,4,30,fog1,1,5,15,'4','X',0,0);
NEW_CUBE("ZID_Zeleni4",-75,4,30,fog1,1,5,15,'4','X',0,0);

   BALL("ball1",20,2,0,"YES","X",0,2,2,11,11,'trig');	


	if (Net_id.length == 0){}else{
		for (var i=0;i<Net_id.length;i++) 
		{  
	  NEW_CUBE("playerID:"+Net_id.toString() ,parseFloat(-Net_x[i]),4,parseFloat(-Net_z[i]),window["T"+i],2,2,2,'NO','X',0,0);
	    }
	 }
 
	


//############################################################################
//############################################################################
//############################################################################
	}
