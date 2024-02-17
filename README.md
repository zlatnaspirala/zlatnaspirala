## zlatnaspirala/goldenspiral software

zlatnaspirala/zlatnaspirala is just github readme template. it is my first touch with javaScript. It is funny but this webgl app works on android 3 from 2007 [opengles1.1].
Modern version and scene object orientend version of this code is matrix-engine. Matrix-engine comes with click trigger raycast, bvh animation, transformations, video/camera/canvas2d active textures and more. 
Matrix-engine at the moment support only opengle300 SL ver but can be manual downgraded to the 1.1 [1.1 openglews will limit engine features]
Safir is simple direct DOM update with own return render `<div></div>` based on ECMA6 special on CustomEvent and literals - i figure why vanilla is best and i push rerender principe in secound plan. Updating direct html tag mehanics 
with optimal arg `LEVEL of saving content` [in fly, session storage, local storage ]. Nidza.js is 2dcanvas oriented but also i put special webgl/glmatrix basic/custom shaders for webGL surface. 

### Global shema for zlatnaspirala software

### Database used MongoDB 
 Ref: https://www.mongodb.com/why-use-mongodb
 I make uniq shema for database jobs. 

#### REST HTTP SERVER - HANDLING ACCOUNT SESSION 
- Communication only with http request. This project lead in backend part. Used by kickstart/safir, rocket-craft projects.
- [RCS Server](https://github.com/RocketCraftingServer/rocket-craft-server)

- Communication only with websockets[webRTC]. Same DB used (like rocketcraftingserver). This project is standalone powered with Node.js/mongoDB/webRTC.
- [Visual-TS GE server part](https://github.com/zlatnaspirala/visual-ts-game-engine/tree/master/server)

#### ROCKET CRAFT - UE4 projetcs
 In ue4.24 i use `http/https request` data format JSON.
  - empty
  - BarbarianRoadMashines
  - Shoot the zombie
  - Hang3d FPShooter

#### Safir 
 - Light virtual DOM.
 - Tech: Based on ECMA6 programming paradigms builded on Template Literals, CustomEvents, Custom Tags.
 - Alternative software - High Performace

#### Matrix-engine
- WebGL library based on glmatrix ver 2.xx. Can be downgraded with url param to the glsl 1.1.
- For networking used broadcaster class.Same used in RCS/Visual-ts GE. Broadcaster don't care about DB record it is singnaling server very usefull in 3d context(multiplayer modes etc.).

#### Visual-ts Game Engine
- 2d canvas game engine based on Matter.js 2D physics engine for the web supported with backend node.js/mongoDB and visual GUI tool 2d map creator/python3.
- https://github.com/zlatnaspirala/visual-ts-game-engine


#### Tags: canvas2d-webgl-webrtc-android-sockets-realtime-nodejs-ue4-unity-xcode-visual-studio
![](https://github.com/zlatnaspirala/zlatnaspirala/blob/master/images/nikola_lukic.png)

Personal dev stage server https://maximumroulette.com

YT Channel https://www.youtube.com/channel/UCc1NtMtvoVzKnOtnai9LGsA/videos

Stackoverflow: https://stackoverflow.com/users/1513187/nikola-lukic

Hackerrank AI Leaderboard https://www.hackerrank.com/leaderboard?page=2&track=ai&type=practice


## Open Source hosted projects [standard maximumroulette links]:

 Shader playground - I need more skills in this area. All shaders will be part
 of buildin matrix-engine custom shaders but only with MIT Licence.
 - https://github.com/zlatnaspirala/GLSL-Shaders
 - https://maximumroulette.com/apps/glsl-editor/
   
 - [matrix-engine-starter] wip
    https://maximumroulette.com/apps/matrix-engine-starter/projects/matrix-roulette/ 
 
 - [SAFIR] My own virtual DOM ECMA6 project https://maximumroulette.com/apps/safir/

 - UE4 Hang3d Nightmare FPS Multiplayer [dedicated server runs / maybe not always]

   New high Quallity:

    - http://maximumroulette.com/apps/hang3d/

   Old:
    - http://maximumroulette.com/apps/shooter/hang3d-nightmare.html
 
 - https://maximumroulette.com/apps/shoot-the-zombie  UE4 [ no running dedicated server ]

 - https://maximumroulette.com/apps/realistic-rendering  UE4 

 - http://rocketcraft.maximumroulette.com  UE4 Barbarian Road Mashines Beta [no server run for multiplayer only single]

 - https://maximumroulette.com/apps/visual-ts/singleplayer/app.html VisualTS Game engine Platformer with video chat [nodejs,js,ts,matter.js] [own]

 - https://maximumroulette.com:3000 [Link Not active at the moment]  Vuletube YouTube experimental player[own]

 - https://maximumroulette.com/apps/matrix-engine/examples-build.html  Matrix Engine [own webgl engine] [based on glmatrix]
 
 - https://maximumroulette.com/apps/matrix-engine-starter/projects/matrix-slot/index.html Slot mashine based on matrix-engine

 - https://maximumroulette.com/apps/tshirts/project_instance/tshirts.html?tshirts [own]

 - https://maximumroulette.com/apps/monsters [own]

 - https://maximumroulette.com/downloads/UA0.2free/UAinstaller.rar Free 3d anatomy [win desktop exe] Freeware.
 - ![](https://github.com/zlatnaspirala/maximumroulette-com/blob/master/2021/public/assets/images/ua/1.png)
   

## Commercial projects:

### Ultimate Roulette 0.1 With real physics [only desktop browsers for now]
 - https://roulette.maximumroulette.com
 - https://codecanyon.net/item/ultimate-roulette-version-10/26607762

### Kure Orange VideoChat based on kurento media server vs openvidu.

 NOT ACTIVE!
![KURE](https://github.com/zlatnaspirala/zlatnaspirala/blob/master/images/favicon-96x96.png)

 - https://kure.maximumroulette.com

