 function handleJsonData(DATA,ID) {
        window["VERTEX_NORMALS"+ID] = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, window["VERTEX_NORMALS"+ID]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(DATA.vertexNormals), gl.STATIC_DRAW);
        window["VERTEX_NORMALS"+ID].itemSize = 3;
        window["VERTEX_NORMALS"+ID].numItems = DATA.vertexNormals.length / 3;

        window["TEXTURE_COORD"+ID] = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, window["TEXTURE_COORD"+ID]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(DATA.vertexTextureCoords), gl.STATIC_DRAW);
        window["TEXTURE_COORD"+ID].itemSize = 2;
        window["TEXTURE_COORD"+ID].numItems = DATA.vertexTextureCoords.length / 2;

        window['VERTEX_POSITION_JSON_'+ID] = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, window['VERTEX_POSITION_JSON_'+ID]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(DATA.vertexPositions), gl.STATIC_DRAW);
        window['VERTEX_POSITION_JSON_'+ID].itemSize = 3;
        window['VERTEX_POSITION_JSON_'+ID].numItems = DATA.vertexPositions.length / 3;

        window["VERTEX_INDEX"+ID] = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, window["VERTEX_INDEX"+ID]);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(DATA.indices), gl.STATIC_DRAW);
        window["VERTEX_INDEX"+ID].itemSize = 1;
        window["VERTEX_INDEX"+ID].numItems = DATA.indices.length;

    
    }


    function LOAD_JSON_OBJECT(ID,PATH) {
        var request = new XMLHttpRequest();
        request.open("GET", PATH);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                handleJsonData(JSON.parse(request.responseText),ID);
            }
        }
        request.send();
    }



function OBJECT3D(ID,TX,TY,TZ,texture,Blend,RotBy,Angle,RotateSpeed){

 mvPushMatrix();
	  mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TX,transY + TY,transZ +TZ]);
		//rotate
		if (RotateSpeed != null && RotBy != null){
	if(window["RMatrix"+ID]== null){window["RMatrix"+ID]=0;}	
if(RotateSpeed==0){
switch(RotBy){
  case 'X':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [1, 0, 0]);
	break;
	case 'Y':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [0, 1, 0]);
	break;
	case 'Z':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [0, 0, 1]);
	break;
	default:
	//nothing
	}	 
	 }else{
	 if(window["RMatrix"+ID]>360){window["RMatrix"+ID]=0;}
	 window["RMatrix"+ID]=window["RMatrix"+ID]+RotateSpeed;
switch(RotBy){
  case 'X':	 
	 mat4.rotate(mvMatrix,  degToRad(window["RMatrix"+ID]), [1, 0, 0]);
	break;
	case 'Y':	 
	 mat4.rotate(mvMatrix,  degToRad(window["RMatrix"+ID]), [0, 1, 0]);
	break;
	case 'Z':	 
	 mat4.rotate(mvMatrix,  degToRad(window["RMatrix"+ID]), [0, 0, 1]);
	break;
	default:
	//nothing
	}
	}
	}
	
		gl.blendFunc(gl.ONE, gl.ONE);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
       
        gl.uniform1i(shaderProgram.samplerUniform, 0);

		switch(Blend){
	case 'YES':
 gl.blendFunc(gl.ONE, gl.ONE);//OK
            gl.enable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);
            gl.uniform1f(shaderProgram.alphaUniform, 1);
	
	break;
	case '1':
	   gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            gl.enable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);
            gl.uniform1f(shaderProgram.alphaUniform, 1);
	break;
	case '2':
	   gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);
            gl.uniform1f(shaderProgram.alphaUniform, 1);
	break;
	case '3':
	   gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);
            gl.uniform1f(shaderProgram.alphaUniform, 1);
	break;
		case '4':
	   gl.blendFunc(gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);
            gl.uniform1f(shaderProgram.alphaUniform, 1);
	break;
	case 'NO':
	gl.disable(gl.BLEND);
	gl.enable(gl.DEPTH_TEST);
	break;
	default:
	}
		
		
        gl.uniform1f(shaderProgram.materialShininessUniform,1);
if(window['VERTEX_POSITION_JSON_'+ID]){
        gl.bindBuffer(gl.ARRAY_BUFFER, window['VERTEX_POSITION_JSON_'+ID]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, window['VERTEX_POSITION_JSON_'+ID].itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, window["TEXTURE_COORD"+ID]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, window["TEXTURE_COORD"+ID].itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, window["VERTEX_NORMALS"+ID]);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, window["VERTEX_NORMALS"+ID].itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, window["VERTEX_INDEX"+ID]);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, window["VERTEX_INDEX"+ID].numItems, gl.UNSIGNED_SHORT, 0);
}
        mvPopMatrix();
		
}