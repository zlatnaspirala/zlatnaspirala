		
function CREATE_LIGHT(ambient_R,ambient_G,ambient_B,pointLoc_x,pointLoc_y,pointLoc_z,pointDif_R,pointDif_G,pointDif_B,showSpecularHighlights,useTextures){
     gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform3f(shaderProgram.ambientLightingColorUniform,ambient_R, ambient_G,ambient_B);//
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, pointLoc_x,pointLoc_y,pointLoc_z);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, pointDif_R,pointDif_G,pointDif_B);//

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, showSpecularHighlights);
        gl.uniform1i(shaderProgram.useTexturesUniform, useTextures);

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1f(shaderProgram.materialShininessUniform, 0);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);
		
		}
	
		 
		 function neutral(){
     gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform3f(shaderProgram.ambientLightingColorUniform, 0.2, 0.2, 0.2);//
        gl.uniform3f(shaderProgram.pointLightingLocationUniform, 0, 7, 0);
        gl.uniform3f(shaderProgram.pointLightingDiffuseColorUniform, 0.8, 0.8, 0.8);//

        gl.uniform1i(shaderProgram.showSpecularHighlightsUniform, false);
        gl.uniform1i(shaderProgram.useTexturesUniform, true);

        gl.uniform3f(shaderProgram.materialAmbientColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialDiffuseColorUniform, 1.0, 1.0, 1.0);
        gl.uniform3f(shaderProgram.materialSpecularColorUniform, 0.0, 0.0, 0.0);
        gl.uniform1f(shaderProgram.materialShininessUniform, 0);
        gl.uniform3f(shaderProgram.materialEmissiveColorUniform, 0.0, 0.0, 0.0);
		
		}
		