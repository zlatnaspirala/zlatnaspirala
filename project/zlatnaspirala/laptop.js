//ini

    var laptopScreenVertexPositionBuffer;
    var laptopScreenVertexNormalBuffer;
    var laptopScreenVertexTextureCoordBuffer;

function LAPTOP(TX,TY,TZ)
{

if (window["OnlyOne_laptop"] == null){
       laptopScreenVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexPositionBuffer);
        vertices = [
             0.580687, 0.659, 0.813106,
            -0.580687, 0.659, 0.813107,
             0.580687, 0.472, 0.113121,
            -0.580687, 0.472, 0.113121,
            ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        laptopScreenVertexPositionBuffer.itemSize = 3;
        laptopScreenVertexPositionBuffer.numItems = 4;

        laptopScreenVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexNormalBuffer);
        var vertexNormals = [
             0.000000, -0.965926, 0.258819,
             0.000000, -0.965926, 0.258819,
             0.000000, -0.965926, 0.258819,
             0.000000, -0.965926, 0.258819,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
        laptopScreenVertexNormalBuffer.itemSize = 3;
        laptopScreenVertexNormalBuffer.numItems = 4;

        laptopScreenVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexTextureCoordBuffer);
        var textureCoords = [
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            0.0, 0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
        laptopScreenVertexTextureCoordBuffer.itemSize = 2;
        laptopScreenVertexTextureCoordBuffer.numItems = 4;




window["OnlyOne_laptop"]=1;

}




 mvPushMatrix();
		
		mat4.translate(mvMatrix, [0.0, 0.0, 0.0]);
		xRot = YY;
		yRot = alfa + XX;
		mat4.rotate(mvMatrix, degToRad(xRot), [1, 0, 0]);
        mat4.rotate(mvMatrix,degToRad(yRot), [0, 1, 0]);
		mat4.translate(mvMatrix, [transX +TX,transY +1.5+TY,transZ +TZ]);
		
		  mat4.rotate(mvMatrix,degToRad(0), [0, 1, 0]);
		  mat4.rotate(mvMatrix,degToRad(270), [1, 0, 0]);

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, true);
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, -1, 2, -1);

        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.2, 0.2, 0.2);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.8, 0.8, 0.8);
        gl.uniform3f(shaderProgram.pointLightingSpecularColorUniform, 0.8, 0.8, 0.8);

        // The laptop body is quite shiny and has no texture.  It reflects lots of specular light
        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 1.5, 1.5, 1.5);
        gl.uniform1f(shaderProgram.materialShininessUniform, 5);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1i(shaderProgram.useTexturesUniform, false);

        if (laptopVertexPositionBuffer) {
            gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, laptopVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexTextureCoordBuffer);
            gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, laptopVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexNormalBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, laptopVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, laptopVertexIndexBuffer);
            setMatrixUniforms();
            gl.drawElements(gl.TRIANGLES, laptopVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        }

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 0.0, 0.0, 0.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 0.0, 0.0, 0.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.5, 0.5, 0.5);
        gl.uniform1f(shaderProgram.materialShininessUniform, 20);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 1.5, 1.5, 1.5);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, laptopScreenVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, laptopScreenVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, laptopScreenVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, laptopScreenVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, rttTexture);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, laptopScreenVertexPositionBuffer.numItems);

        mvPopMatrix();

}



///////////////
//$$$$$$$$$$$$$$$$$###########################################################
    function handleLoadedLaptop(laptopData) {
        laptopVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(laptopData.vertexNormals), gl.STATIC_DRAW);
        laptopVertexNormalBuffer.itemSize = 3;
        laptopVertexNormalBuffer.numItems = laptopData.vertexNormals.length / 3;

        laptopVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexTextureCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(laptopData.vertexTextureCoords), gl.STATIC_DRAW);
        laptopVertexTextureCoordBuffer.itemSize = 2;
        laptopVertexTextureCoordBuffer.numItems = laptopData.vertexTextureCoords.length / 2;

        laptopVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, laptopVertexPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(laptopData.vertexPositions), gl.STATIC_DRAW);
        laptopVertexPositionBuffer.itemSize = 3;
        laptopVertexPositionBuffer.numItems = laptopData.vertexPositions.length / 3;

        laptopVertexIndexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, laptopVertexIndexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(laptopData.indices), gl.STREAM_DRAW);
        laptopVertexIndexBuffer.itemSize = 1;
        laptopVertexIndexBuffer.numItems = laptopData.indices.length;
    }


    function loadLaptop() {
        var request = new XMLHttpRequest();
        request.open("GET", "json/macbook.json");
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                handleLoadedLaptop(JSON.parse(request.responseText));
            }
        }
        request.send();
		//
		initTextureFramebuffer();
    }


    var laptopScreenAspectRatio = 2.66;

    var moonAngle = 180;
    var cubeAngle = 0;

    function drawSceneOnLaptopScreen() {
        gl.viewport(0, 0, rttFramebuffer.width, rttFramebuffer.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        mat4.perspective(45, laptopScreenAspectRatio, 0.1, 100.0, pMatrix);

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.1, 1.0, 0.2);
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, 0, 0, -5);
		gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.0, 0.6, 0.2);

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1f(shaderProgram.materialShininessUniform, 0);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);

        mat4.identity(mvMatrix);

        mvPushMatrix();
		mat4.translate(mvMatrix, [0, 0, 0]);
        mat4.rotate(mvMatrix, degToRad(moonAngle), [0, 1, 0]);
        
		mat4.translate(mvMatrix, [0, 0, -3]);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, press);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, moonVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, moonVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, moonVertexNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, moonVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, moonVertexIndexBuffer);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, moonVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        mvPopMatrix();

//in bufferframe
        mvPushMatrix();

        mat4.translate(mvMatrix, [0, 0, -3]);
		
		mat4.rotate(mvMatrix,  degToRad(NIK), [0, 1, 0]);
		
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBufferKLASIK);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBufferKLASIK.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBufferKLASIK);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBufferKLASIK.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBufferKLASIK);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBufferKLASIK.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, press);
        gl.uniform1i(shaderProgram.samplerUniform, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBufferKLASIK);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBufferKLASIK.numItems, gl.UNSIGNED_SHORT, 0);
        mvPopMatrix();

        gl.bindTexture(gl.TEXTURE_2D, rttTexture);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }


//

    var rttFramebuffer;
    var rttTexture;

    function initTextureFramebuffer() {
        rttFramebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, rttFramebuffer);
        rttFramebuffer.width = 512;
        rttFramebuffer.height = 512;

        rttTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, rttTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, rttFramebuffer.width, rttFramebuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

        var renderbuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, rttFramebuffer.width, rttFramebuffer.height);

        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, rttTexture, 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);

        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }


    var laptopVertexPositionBuffer;
    var laptopVertexNormalBuffer;
    var laptopVertexTextureCoordBuffer;
    var laptopVertexIndexBuffer;

