
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