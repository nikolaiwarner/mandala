import React, { Component } from 'react'
import $ from 'jquery'

// import logo from './logo.svg';
import './App.css';

const runEvents = () => {
  setTimeout(() => {
    $('.listening')[0].emit('door-one'); console.log(1);
    setTimeout(() => {
      $('.listening')[0].emit('door-two'); console.log(2);
      setTimeout(() => {
        $('.listening')[0].emit('door-three'); console.log(3);
        setTimeout(() => {
          $('.listening')[0].emit('door-four'); console.log(4);
          runEvents()
        }, 6000)
      }, 6000)
    }, 6000)
  }, 6000)
}


class App extends Component {
  componentDidMount() {
    var scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
      runEvents();
    } else {
      scene.addEventListener('loaded', runEvents);
    }
  }
  
  render() {
    return (
      <div className="App">
        <a-scene vr-mode-ui="enabled: true"  inspector >
          <a-assets>
            <img id="sludge1" src={require('./images/sludge2.gif')} alt="" />
            <img id="lines1" src={require('./images/lines1.gif')} alt="" />
            <img id="sludge3" src={require('./images/sludge3.png')} alt="" />
            
            <video id="video1" autoPlay loop="true" src={require('./images/typical-nick-totally.webm')} />
            <video id="sleep1" autoPlay loop="true" src={require('./images/sleep1_1.webm')} />
            <video id="eat1" autoPlay loop="true" src={require('./images/eat1.webm')} />
            <video id="sleep0" autoPlay loop="true" src={require('./images/sleep0.webm')} />
 
            <video id="exercise1" autoPlay loop="true" src={require('./images/exercise1.webm')} />
            <video id="eat0" autoPlay loop="true" src={require('./images/eat0.webm')} />
            
           
            <audio id="sounds" src={require('./images/mandala-music.mp3')} />
     
          </a-assets>
        
 
          <a-sky id="sky" color="pink"></a-sky>
        
    
    
        
                  <a-entity id="exercise2" >
         <a-animation attribute="rotation"
               from="0 0 0"
               to="360 0 0"
               dur="37"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:dodecahedron; radius:10" scale="2 2 2" rotation="90 90 0"  position="0 0 0">
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            
                        <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #exercise1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            
          </a-entity>
        </a-entity>


        
                  <a-entity id="sleep0" >
         <a-animation attribute="rotation"
               from="0 0 0"
               to="360 0 360"
               dur="187"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:dodecahedron; radius:10" scale="1 1 1" rotation="0 90 0"  position="0 0 0">
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="color: gold" geometry="primitive:plane; width: 0.5; height: 0.01" rotation="0 0 90"></a-entity></a-entity>            
          </a-entity>
        </a-entity>

        
        
   
        
          <a-entity id="exercise1" >
         <a-animation attribute="rotation"
               from="0 112 0"
               to="360 112 0"
               dur="47"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:dodecahedron; radius:20" scale="1 1 1" rotation="90 90 0"  position="0 0 0">
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            
                        <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            
          </a-entity>
        </a-entity>
        
        
                <a-entity id="sleep1" position="-1 0 0">
         <a-animation attribute="rotation"
               from="0 145 0"
               to="360 145 0"
               dur="51"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:dodecahedron; radius:10" scale="1 1 1" rotation="90 90 0"  position="0 0 0">
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 45"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 45"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 45"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 45"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 45"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 45"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 45"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 45"></a-entity></a-entity>
          </a-entity>
        </a-entity>
        
        
                
                <a-entity id="eat0" position="-1 0 0">
         <a-animation attribute="rotation"
               from="0 145 0"
               to="360 145 0"
               dur="51"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:dodecahedron; radius:10" scale="2 2 2" rotation="90 90 0"  position="0 0 0">
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
                        <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
          </a-entity>
        </a-entity>
        
                  
                <a-entity id="typical" position="-1 0 0">
         <a-animation attribute="rotation"
               from="0 0 0"
               to="360 0 0"
               dur="57"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:dodecahedron; radius:10" scale="2.3 2.3 2.3" rotation="90 90 0"  position="0 0 0">
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
                        <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #video1" geometry="primitive:plane; width: 4; height: 4" rotation="0 0 90"></a-entity></a-entity>
          </a-entity>
        </a-entity>
        
        
        
        <a-entity material="src: #eat1" look-at="#camera" position="0 0 6" geometry="primitive:plane; width: 10; height: 10"></a-entity>

          
          <a-entity position="-10 0 -8" look-at="#camera" geometry="primitive:plane; width: 5; height: 1000"  material="shader:flat; color:gold"></a-entity>
          <a-entity position="10 0 -8" look-at="#camera" geometry="primitive:plane; width: 5; height: 1000"  material="shader:flat; color:gold"></a-entity>
          <a-entity position="-10 0 8" look-at="#camera" geometry="primitive:plane; width: 5; height: 1000"  material="shader:flat; color:gold"></a-entity>
          <a-entity position="10 0 8" look-at="#camera" geometry="primitive:plane; width: 5; height: 1000"  material="shader:flat; color:gold"></a-entity>
          
          <a-entity id="door-one" position="0 0 -10">
            <a-entity id="titles" position="-0.6 0 7">
              <a-entity bmfont-text="text: mandala" color="#fff" position="0 0 0" letterSpacing="10"></a-entity>
              <a-entity bmfont-text="text: nick warner" color="#fff" position="0 -0.25 -0.25" scale="0.8 0.8 0.8"></a-entity>
              <a-entity bmfont-text="text: 2016" color="#fff" position="0 -0.4 -0.25" scale="0.5 0.5 0.5"></a-entity>
            </a-entity>
          </a-entity>
          
          <a-entity id="door-four" position="0 0 4" look-at="#camera">

              <a-entity id="mandala" class="listening" position="0 0 0" scale="4 4 4" material="transparent:true; opacity:0; visible:false">
                <a-animation 
                  attribute="material.opacity"
                  from="0"
                  to="1"
                  dur="2000"
                  fill="forwards"
                  easing="ease-in-out-sine"
                  begin="door-four"
                  end="door-one"
                  repeat="indefinite">
                </a-animation>
                
                            
                   <a-entity id="musix" position="0 0 -1" sound="src: #sounds; autoplay: true; loop: true;">
          </a-entity>
                
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
                
                <a-entity position="0 0 0.1" scale="0.5 0.5 0.5" material="shader:flat; color:white" geometry="primitive:ring;radiusInner:1;radiusOuter:1.002"></a-entity>
                
                <a-entity class="listening" position="0 0 0.15" scale="1 1 1" material="shader:flat; color:white;" geometry="primitive:ring;radiusInner:1;radiusOuter:1.005"></a-entity>
                <a-entity position="0 0 0.17" scale="2 2 2" material="shader:flat; color:white" geometry="primitive:ring;radiusInner:1;radiusOuter:1.002"></a-entity>
              
              </a-entity>
          </a-entity>
          
          
        

  <a-entity geometry="primitive:sphere; radius:100" scale='-1 1 1' material="repeat: 3 3; shader:flat; transparent:true; src:#sludge3;"></a-entity>
  
  
        
          <a-entity>
            <a-animation attribute="rotation"
              to="0 -360 0"
              dur="108000"
              fill="forwards"
              easing="ease-in-out-sine"
              repeat="indefinite"></a-animation>
            
            <a-entity rotation="45 45 0" geometry="primitive:sphere; radius:10" scale='-1 1 1' material="repeat: 10 1; shader:flat; transparent:true; src:#lines1;"></a-entity>
          </a-entity>
        
          
   
          
          <a-entity id="disc" position="0 0 0">
             <a-animation attribute="rotation"
               to="0 -360 0"
               dur="108000"
               fill="forwards"
               easing="ease-in-out-sine" 
               repeat="indefinite"></a-animation>
               
            
                   <a-entity id="musix" position="0 0 -1" sound="src: #sounds; autoplay: true; loop: true;">
          </a-entity>
            
            <a-camera id="camera" wasd-controls-enabled look-controls wasd-controls="fly:true; acceleration:400">
              
              <a-entity geometry="primitive:sphere; radius:39" scale='-1 1 1' material="repeat: 10 10; shader:flat; transparent:true; src:#sludge3;"></a-entity>
    
            </a-camera>
            
          </a-entity>
          
        </a-scene>
      </div>
    );
  }
}

export default App;
