///////////////////////////////////////////////////////////////////
// webgl framework : Zlatnaspirala 2.0 
///////////////////////////////////////////////////////////////////
//Created by Nikola Lukic
///////////////////////////////////////////////////////////////////

//Opengles SourceFactor
var SourceFactor = new Array('gl.GL_ZERO',
                    'gl.GL_ONE',
                    'gl.GL_SRC_COLOR',
                    'gl.GL_ONE_MINUS_SRC_COLOR',
                    'gl.GL_DST_COLOR',
                    'gl.GL_ONE_MINUS_DST_COLOR',
                    'gl.GL_SRC_ALPHA',
                    'gl.GL_ONE_MINUS_SRC_ALPHA',
                    'gl.GL_DST_ALPHA',
                    'gl.GL_ONE_MINUS_DST_ALPHA',
                    'gl.GL_CONSTANT_COLOR',
                    'gl.GL_ONE_MINUS_CONSTANT_COLOR',
                    'gl.GL_CONSTANT_ALPHA',
                    'gl.GL_ONE_MINUS_CONSTANT_ALPHA',
                    'gl.GL_SRC_ALPHA_SATURATE');
					
//console.log(SourceFactor[2]);//14

var DestFactor = new Array('gl.GL_ZERO',
                    'gl.GL_ONE',
                    'gl.GL_SRC_COLOR',
                    'gl.GL_ONE_MINUS_SRC_COLOR',
                    'gl.GL_DST_COLOR',
                    'gl.GL_ONE_MINUS_DST_COLOR',
                    'gl.GL_SRC_ALPHA',
                    'gl.GL_ONE_MINUS_SRC_ALPHA',
                    'gl.GL_DST_ALPHA',
                    'gl.GL_ONE_MINUS_DST_ALPHA',
                    'gl.GL_CONSTANT_COLOR',
                    'gl.GL_ONE_MINUS_CONSTANT_COLOR',
                    'gl.GL_CONSTANT_ALPHA',
                    'gl.GL_ONE_MINUS_CONSTANT_ALPHA'
                );



//#############################################################################################
// NEW_CUBE  CUSTOM 
//#############################################################################################	
function NEW_CUBE(ID,TXL,TYL,TZL,pointToTexture,scaleX,scaleY,scaleZ,Blend,RotBy,Angle,RotateSpeed,coalizion_triger){
//private var
var VERTEX_CUBE;
//dinamic construct buffer
  VERTEX_CUBE = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, VERTEX_CUBE);
        verticesKLASIK = [
            // Front face
            scaleX*-1.0, scaleY*-1.0,  scaleZ*1.0,
            scaleX*1.0, scaleY*-1.0,  scaleZ*1.0,
            scaleX*1.0,  scaleY*1.0,  scaleZ*1.0,
            scaleX*-1.0,  scaleY*1.0,  scaleZ*1.0,

            // Back face
            scaleX*-1.0, scaleY*-1.0, scaleZ*-1.0,
            scaleX*-1.0, scaleY*1.0,  scaleZ*-1.0,
            scaleX*1.0,  scaleY*1.0,  scaleZ*-1.0,
            scaleX*1.0,  scaleY*-1.0, scaleZ*-1.0,

            // Top face
            scaleX*-1.0,  scaleY*1.0, scaleZ*-1.0,
            scaleX*-1.0,  scaleY*1.0,  scaleZ*1.0,
            scaleX* 1.0,  scaleY*1.0,  scaleZ*1.0,
            scaleX* 1.0,  scaleY*1.0, scaleZ*-1.0,

            // Bottom face
            scaleX*-1.0, scaleY*-1.0, scaleZ*-1.0,
            scaleX* 1.0, scaleY*-1.0, scaleZ*-1.0,
            scaleX* 1.0, scaleY*-1.0,  scaleZ*1.0,
            scaleX*-1.0, scaleY*-1.0,  scaleZ*1.0,

            // Right face
            scaleX*1.0, scaleY*-1.0, scaleZ*-1.0,
            scaleX*1.0,  scaleY*1.0, scaleZ*-1.0,
            scaleX*1.0,  scaleY*1.0,  scaleZ*1.0,
            scaleX*1.0, scaleY*-1.0,  scaleZ*1.0,

            // Left face
            scaleX*-1.0, scaleY*-1.0, scaleZ*-1.0,
            scaleX*-1.0, scaleY*-1.0,  scaleZ*1.0,
            scaleX*-1.0,  scaleY*1.0,  scaleZ*1.0,
            scaleX*-1.0,  scaleY*1.0, scaleZ*-1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesKLASIK), gl.STATIC_DRAW);
        VERTEX_CUBE.itemSize = 3;
        VERTEX_CUBE.numItems = 24;
		///////////////////////////////////////
		if (window["ONLYFIRSTTIME"]==null ){
		window['TEXTURECOORD_CUBE']=null;window['VERTEX_INDEX_CUBE']=null;window['VERTEX_NORMAL_CUBE']=null;
		window["ONLYFIRSTTIME"]="anyVar";
		VERTEX_NORMAL_CUBE = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, VERTEX_NORMAL_CUBE);
        var vertexNormalsKLASIK = [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormalsKLASIK), gl.STATIC_DRAW);
        VERTEX_NORMAL_CUBE.itemSize = 3;
        VERTEX_NORMAL_CUBE.numItems = 24;

        TEXTURECOORD_CUBE = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, TEXTURECOORD_CUBE);
        var textureCoordsKLASIK = [
            // Front face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            // Back face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Top face
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,

            // Bottom face
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            // Right face
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            // Left face
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsKLASIK), gl.STATIC_DRAW);
        TEXTURECOORD_CUBE.itemSize = 2;
        TEXTURECOORD_CUBE.numItems = 24;

        VERTEX_INDEX_CUBE = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, VERTEX_INDEX_CUBE);
        var cubeVertexIndicesKLASIK = [
            0, 1, 2,      0, 2, 3,    // Front face
            4, 5, 6,      4, 6, 7,    // Back face
            8, 9, 10,     8, 10, 11,  // Top face
            12, 13, 14,   12, 14, 15, // Bottom face
            16, 17, 18,   16, 18, 19, // Right face
            20, 21, 22,   20, 22, 23  // Left face
        ]
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesKLASIK), gl.STATIC_DRAW);
        VERTEX_INDEX_CUBE.itemSize = 1;
        VERTEX_INDEX_CUBE.numItems = 36;
		
		//#####################################################################################################
		}
		///////////////////////////////////////
//draw
mvPushMatrix();
    mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TXL,transY +TYL  ,transZ +TZL]);
		
		//rotate
		if (RotateSpeed != null && RotBy != null && Angle != null){
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
	case 'XY':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [1, 1, 0]);
	break;
	case 'XZ':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [1, 0, 1]);
	break;
	case 'YZ':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [0, 1, 1]);
	break;
	
	default:
	//nothing
	}	 
	 }else{window["RMatrix"+ID]=window["RMatrix"+ID]+RotateSpeed;
	 if(window["RMatrix"+ID]>360){window["RMatrix"+ID]=0;}
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
		
		gl.bindBuffer(gl.ARRAY_BUFFER, VERTEX_CUBE);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, VERTEX_CUBE.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, VERTEX_NORMAL_CUBE);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, VERTEX_NORMAL_CUBE.itemSize, gl.FLOAT, false, 0, 0);

		
        gl.bindBuffer(gl.ARRAY_BUFFER, TEXTURECOORD_CUBE);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, TEXTURECOORD_CUBE.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, pointToTexture);
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
	   gl.blendFunc(gl.ONE, gl.ONE);
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
	
	if(coalizion_triger == "trig"){TRIGER(ID,TXL,TYL,TZL,scaleX,scaleY,scaleZ);}
	else if (coalizion_triger == "collide") { 

    


	}
		
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, VERTEX_INDEX_CUBE);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, VERTEX_INDEX_CUBE.numItems, gl.UNSIGNED_SHORT, 0);
		
mvPopMatrix();
}		 

//#############################################################################################
//#############################################################################################
//#############################################################################################
//moon
function BALL(ID,TXL,TYL,TZL,Blend,RotBy,Angle,RotateSpeed,radius,latitudeBands,longitudeBands,coalizion_triger){

    var VERTEX_BALL;
    var VERTEX_NORMAL_BALL;
    var TEXTURECOURD_BALL;
    var VERTEX_INDEX_BALL;
	
	if (latitudeBands == null) { var latitudeBands=30;}   
	if (longitudeBands == null) { var longitudeBands=30; }   
	if (radius == null) { var radius=1; }   
   
        var vertexPositionData = [];
        var normalData = [];
        var textureCoordData = [];
        for (var latNumber=0; latNumber <= latitudeBands; latNumber++) {
            var theta = latNumber * Math.PI / latitudeBands;
            var sinTheta = Math.sin(theta);
            var cosTheta = Math.cos(theta);

            for (var longNumber=0; longNumber <= longitudeBands; longNumber++) {
                var phi = longNumber * 2 * Math.PI / longitudeBands;
                var sinPhi = Math.sin(phi);
                var cosPhi = Math.cos(phi);

                var x = cosPhi * sinTheta;
                var y = cosTheta;
                var z = sinPhi * sinTheta;
                var u = 1 - (longNumber / longitudeBands);
                var v = 1 - (latNumber / latitudeBands);

                normalData.push(x);
                normalData.push(y);
                normalData.push(z);
                textureCoordData.push(u);
                textureCoordData.push(v);
                vertexPositionData.push(radius * x);
                vertexPositionData.push(radius * y);
                vertexPositionData.push(radius * z);
            }
        }

        var indexData = [];
        for (var latNumber=0; latNumber < latitudeBands; latNumber++) {
            for (var longNumber=0; longNumber < longitudeBands; longNumber++) {
                var first = (latNumber * (longitudeBands + 1)) + longNumber;
                var second = first + longitudeBands + 1;
                indexData.push(first);
                indexData.push(second);
                indexData.push(first + 1);

                indexData.push(second);
                indexData.push(second + 1);
                indexData.push(first + 1);
            }
        }

        VERTEX_NORMAL_BALL = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, VERTEX_NORMAL_BALL);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalData), gl.STATIC_DRAW);
        VERTEX_NORMAL_BALL.itemSize = 3;
        VERTEX_NORMAL_BALL.numItems = normalData.length / 3;

        TEXTURECOURD_BALL = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, TEXTURECOURD_BALL);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordData), gl.STATIC_DRAW);
        TEXTURECOURD_BALL.itemSize = 2;
        TEXTURECOURD_BALL.numItems = textureCoordData.length / 2;

        VERTEX_BALL = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, VERTEX_BALL);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositionData), gl.STATIC_DRAW);
        VERTEX_BALL.itemSize = 3;
        VERTEX_BALL.numItems = vertexPositionData.length / 3;

        VERTEX_INDEX_BALL = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, VERTEX_INDEX_BALL);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STREAM_DRAW);
        VERTEX_INDEX_BALL.itemSize = 1;
        VERTEX_INDEX_BALL.numItems = indexData.length;		
		
        mvPushMatrix(); 
        mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
        mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,  degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX + TXL ,transY + TYL,transZ +TZL]);

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
	case 'XY':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [1, 1, 0]);
	break;
	case 'XZ':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [1, 0, 1]);
	break;
	case 'YZ':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [0, 1, 1]);
	break;
	default:
	//nothing
	}	 
	 }else{window["RMatrix"+ID]=window["RMatrix"+ID]+RotateSpeed;
	 if(window["RMatrix"+ID]>360){window["RMatrix"+ID]=0;}
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
    case 'XY':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [1, 1, 0]);
	break;
	case 'XZ':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [1, 0, 1]);
	break;
	case 'YZ':	 
	 mat4.rotate(mvMatrix,  degToRad(Angle), [0, 1, 1]);
	break;
	//nothing
	}
	}
}
		
		
		
		gl.disable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
		
		gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, moonTexture);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, VERTEX_BALL);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, VERTEX_BALL.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, TEXTURECOURD_BALL);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, TEXTURECOURD_BALL.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, VERTEX_NORMAL_BALL);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, VERTEX_NORMAL_BALL.itemSize, gl.FLOAT, false, 0, 0);

		
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
	   gl.blendFunc(gl.ONE, gl.ONE);
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
		
		
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, VERTEX_INDEX_BALL);
        setMatrixUniforms();
		
		if(coalizion_triger == "trig"){TRIGER(ID,TXL,TYL,TZL,radius,radius,radius);}
		
		
        gl.drawElements(gl.TRIANGLES, VERTEX_INDEX_BALL.numItems, gl.UNSIGNED_SHORT, 0);
	
mvPopMatrix();

}
