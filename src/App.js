import React, { Component } from 'react'
import $ from 'jquery'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    $('window') // stop warning messages
    return (
      <div className="App">
        <a-scene vr-mode-ui="enabled: true">
          <a-assets>
            <img id="sludge1" src={require('./images/sludge2.gif')} alt="" />
            <img id="lines1" src={require('./images/lines1.gif')} alt="" />
            <img id="sludge3" src={require('./images/sludge3.png')} alt="" />
            
            <img id="test1" src={require('./images/lilone.png')} alt="" />
            <img id="test2" src={require('./images/png-11.png')} alt="" />
            <img id="test3" src={require('./images/png-17.png')} alt="" />
            <img id="test4" src={require('./images/png-18.png')} alt="" />
            <img id="test5" src={require('./images/ELIANDNICK__0221.jpg')} alt="" />
            
          </a-assets>
          
          // far 
          <a-sky color="white"></a-sky>
          <a-entity geometry="primitive:sphere; radius:100" scale='-1 1 1' material="repeat: 3 3; shader:flat; transparent:true; src:#sludge3;"></a-entity>
    
          
        
        
          
          // near
          
          <a-entity position="-10 0 -10" look-at="#camera" geometry="primitive:plane; width: 5; height: 1000"  material="shader:flat; color:black"></a-entity>
        
          <a-image src="#test5" position="-10 0 -19" look-at="#camera" geometry="primitive:plane; width: 100; height: 50"></a-image>
         
        
        
          <a-entity>
            <a-animation attribute="rotation"
              to="0 -360 0"
              dur="108000"
              fill="forwards"
              easing="ease-in-out-sine"
              repeat="indefinite"></a-animation>
            
            <a-entity rotation="45 45 0" geometry="primitive:sphere; radius:10" scale='-1 1 1' material="repeat: 10 10; shader:flat; transparent:true; src:#lines1;"></a-entity>
          </a-entity>
          
          <a-entity>
            <a-animation attribute="rotation"
              to="0 360 0"
              dur="108000"
              fill="forwards"
              easing="ease-in-out-sine"
              repeat="indefinite"></a-animation>
            
            <a-entity rotation="180 45 0" geometry="primitive:sphere; radius:10" scale='-1 1 1' material="repeat: 4 4; shader:flat; transparent:true; src:#lines1;"></a-entity>
          </a-entity>
          
          
  
          // fixed
          <a-entity position="0 0 0">
             <a-animation attribute="rotation"
               to="0 -360 0"
               dur="108000"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
               
               
            // fixed far
            
          
            // fixed near
             
            
            <a-camera id="camera" wasd-controls-enabled look-controls wasd-controls="fly:true; acceleration:400">
              // fixed to camera
            
            
              // mandala
              <a-entity id="mandala" position="0 0 -20" scale="10 10 10">
                
                <a-entity class="square" scale="1.5 1.5 1.5" position="0 0 -0.5">
                  <a-entity position="0 1 0" scale="1 1 1" material="shader:flat; color:white" geometry="primitive:plane; width: 1; height: 0.005"></a-entity>
                  <a-entity position="0 -1 0" scale="1 1 1" material="shader:flat; color:white" geometry="primitive:plane; width: 1; height: 0.005"></a-entity>
                  <a-entity position="1 0 0" scale="1 1 1" material="shader:flat; color:white" geometry="primitive:plane; width: 0.005; height: 1"></a-entity>
                  <a-entity position="-1 0 0" scale="1 1 1" material="shader:flat; color:white" geometry="primitive:plane; width: 0.005; height: 1"></a-entity>
                </a-entity>
                
                <a-entity class="square" rotation="0 0 -90" scale="3 3 3" position="0 0 -0.8">
                  <a-entity position="0 1 0" scale="1 1 1" material="shader:flat; color:white" geometry="primitive:plane; width: 1; height: 0.005"></a-entity>
                  <a-entity position="0 -1 0" scale="1 1 1" material="shader:flat; color:white" geometry="primitive:plane; width: 1; height: 0.005"></a-entity>
                </a-entity>
                
                <a-entity position="0 0 0" scale="0.5 0.5 0.5" material="shader:flat; color:white" geometry="primitive:ring;radiusInner:1;radiusOuter:1.002"></a-entity>
                
                <a-entity position="0 0 0" scale="1 1 1" material="shader:flat; color:white" geometry="primitive:ring;radiusInner:1;radiusOuter:1.005"></a-entity>
                <a-entity position="0 0 0" scale="2 2 2" material="shader:flat; color:white" geometry="primitive:ring;radiusInner:1;radiusOuter:1.002"></a-entity>
              
              </a-entity>
              
              <a-entity geometry="primitive:sphere; radius:49" scale='-1 1 1' material="repeat: 10 10; shader:flat; transparent:true; src:#sludge3;"></a-entity>
    
            </a-camera>
            
          </a-entity>
          
        </a-scene>
      </div>
    );
  }
}

export default App;
