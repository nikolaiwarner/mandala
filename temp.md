
            //   <a-entity material="shader:gif;src:#sludge1;" geometry="primitive:box; width: 18; height: 12; depth: 1" ></a-entity>
            //   <a-entity material="shader:gif;src:#sludge1;" geometry="primitive:box; width: 18; height: 12; depth: 1" ></a-entity>
            //   <a-entity material="shader:gif;src:#sludge1;" geometry="primitive:box; width: 18; height: 12; depth: 1" ></a-entity>
            //   <a-entity material="shader:gif;src:#sludge1;" geometry="primitive:box; width: 18; height: 12; depth: 1" ></a-entity>
      
      
      <a-entity geometry="primitive:sphere; radius:50" scale='-1 1 1' material="shader:gif;src:#sludge1;color:green;opacity:.8"></a-entity>
          
          
          <a-image src="#lines1" position="0 0 0" width="20" height="10" depth="1"></a-image>
      <a-image src="#lines1" position="0 0 0" width="20" height="10" depth="1" rotation="-45 0 0" material="repeat: 20"></a-image>
      <a-image src="#lines1" position="0 0 0" width="20" height="10" depth="1" rotation="45 0 0"></a-image>
      <a-image src="#lines1" position="0 0 0" width="20" height="10" depth="1" rotation="-145 0 0"></a-image>
      <a-image src="#lines1" position="0 0 0" width="20" height="10" depth="1" rotation="145 0 0"></a-image>
      <a-image src="#lines1" position="0 0 0" width="20" height="10" depth="1" rotation="0 0 0"></a-image>
      
      
      <a-entity rotation="0 180 0 " geometry="primitive:sphere; radius:50" scale='-1 1 1' material="shader:flat; transparent:true; src:#lines1;"></a-entity>
          
          
          
          <a-entity id="circle" layout="type:circle; radius:11" scale="10 20 10">
          <a-animation attribute="rotation"
               to="0 360 0"
               dur="1080"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
            <a-curvedimage look-at="#camera" src="#test1" height="3.0" radius="5.7" ></a-curvedimage>
            <a-curvedimage look-at="#camera" src="#test2" height="3.0" radius="5.7" ></a-curvedimage>
            <a-curvedimage look-at="#camera" src="#test3" height="3.0" radius="5.7" ></a-curvedimage>
            <a-curvedimage look-at="#camera" src="#test4" height="3.0" radius="5.7" ></a-curvedimage>
          </a-entity>
          
          
            <a-entity layout="type:circle; radius:7" scale="1 1 1" rotation="0 0 180">
          <a-animation attribute="rotation"
               to="0 360 0"
               dur="580"
               fill="forwards"
               easing="linear"
               repeat="indefinite"></a-animation>
            <a-entity material="src: #sleep1" look-at="#camera" src="#sleep1" geometry="primitive:plane; width: 4; height: 4" ></a-entity>
            <a-entity material="src: #sleep1" look-at="#camera" src="#sleep1" geometry="primitive:plane; width: 4; height: 4" ></a-entity>
            <a-entity material="src: #sleep1" look-at="#camera" src="#sleep1" geometry="primitive:plane; width: 4; height: 4" ></a-entity>
            <a-entity material="src: #sleep1"  look-at="#camera" src="#sleep1" geometry="primitive:plane; width: 4; height: 4" ></a-entity>
          </a-entity>
    
    
    
    
             
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="90 0 0"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="90 0 0"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="90 0 0"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="90 0 0"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="90 0 0"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="90 0 0"></a-entity></a-entity>
      
          
          
          
          <a-entity id="circle" layout="type:circle; radius:15" rotation="0 180 0">
          <a-animation attribute="rotation"
              to="0 -360 0"
              dur="50"
              fill="forwards"
              easing="linear"
              repeat="indefinite"></a-animation>
             <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
              <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
               <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                 <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                  <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                   <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                    <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                     <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera"></a-video>
          </a-entity>
          
                    <a-entity id="circle" layout="type:circle; radius:20">
             <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
              <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
               <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                 <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                  <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                   <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                    <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                     <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
                      <a-video src="#video1" width="16" height="9" position="-10 0 -19" look-at="#camera" scale="6 6 6"></a-video>
          </a-entity>