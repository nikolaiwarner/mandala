
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
            
            <img id="test1" src={require('./images/lilone.png')} alt="" />
            <img id="test2" src={require('./images/png-11.png')} alt="" />
            <img id="test3" src={require('./images/png-17.png')} alt="" />
            <img id="test4" src={require('./images/png-18.png')} alt="" />
            <img id="test5" src={require('./images/ELIANDNICK__0221.jpg')} alt="" />
            
            <video id="video1" autoPlay loop="true" src={require('./images/typical-nick-totally.webm')} />
            <video id="sleep1" autoPlay loop="true" src={require('./images/sleep1_1.webm')} />
            <video id="eat1" autoPlay loop="true" src={require('./images/eat1.webm')} />
            <video id="sleep0" autoPlay loop="true" src={require('./images/sleep0.webm')} />
 
            <video id="exercise1" autoPlay loop="true" src={require('./images/exercise1.webm')} />
            <video id="eat0" autoPlay loop="true" src={require('./images/eat0.webm')} />
            
            <video id="lecture" autoPlay loop="true" src={require('./images/lecture.webm')} />
            
            <audio id="sounds" src={require('./images/mandala-music.mp3')} />
            <audio id="growstrong" src={require('./images/lecture.mp3')} />
          </a-assets>
        
          
          // far 
          <a-sky id="sky" color="gold"></a-sky>
          <a-entity geometry="primitive:sphere; radius:100" scale='-1 1 1' material="repeat: 3 3; shader:flat; transparent:true; src:#sludge3;"></a-entity>
    
    
        

          <a-entity id="eat0" >
         <a-animation attribute="rotation"
               from="0 67 0"
               to="360 67 0"
               dur="31"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:circle; radius:7" scale="1 1 1" rotation="90 90 0"  position="0 0 0">
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #eat0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
          </a-entity>
        </a-entity>
        
        
                <a-entity id="sleep0" >
         <a-animation attribute="rotation"
               from="0 90 0"
               to="360 90 0"
               dur="23"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:circle; radius:7" scale="1 1 1" rotation="90 90 0"  position="0 0 0">
            <a-entity look-at="#camera"><a-entity material="src: #sleep0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
            <a-entity look-at="#camera"><a-entity material="src: #sleep0" geometry="primitive:plane; width: 6; height: 6" rotation="0 0 90"></a-entity></a-entity>
          </a-entity>
        </a-entity>
        
        
          <a-entity id="exercise1" >
         <a-animation attribute="rotation"
               from="0 112 0"
               to="360 112 0"
               dur="27"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:circle; radius:7" scale="1 1 1" rotation="90 90 0"  position="0 0 0">
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
        
        
                <a-entity id="sleep1" >
         <a-animation attribute="rotation"
               from="0 145 0"
               to="360 145 0"
               dur="21"
               fill="forwards"
               easing="ease-in-out-sine"
               repeat="indefinite"></a-animation>
          <a-entity layout="type:circle; radius:7" scale="1 1 1" rotation="90 90 0"  position="0 0 0">
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
        
        
        
        
        
        <a-entity material="src: #eat1" look-at="#camera" position="0 0 6" geometry="primitive:plane; width: 10; height: 10"></a-entity>

    
        <a-entity material="src: #lecture" look-at="#camera" position="0 0 -6" geometry="primitive:plane; width: 10; height: 10"></a-entity>

    
  
    
    
          // near
          
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
          
          <a-entity id="door-four" position="-15 0 25" look-at="#camera">
              // mandala
              <a-entity id="mandala" class="listening" position="0 0 -20" scale="10 10 10" material="transparent:true; opacity:0; visible:false">
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
                
                <a-entity class="listening" position="0 0 0" scale="1 1 1" material="shader:flat; color:white;" geometry="primitive:ring;radiusInner:1;radiusOuter:1.005">
                <a-animation 
                  attribute="material.opacity"
                  from="0"
                  to="1"
                  dur="2000"
                  fill="both"
                  easing="ease-in-out-sine"
                  begin="door-one"
                  end="door-two"
                  repeat="indefinite">
                </a-animation></a-entity>
                <a-entity position="0 0 0" scale="2 2 2" material="shader:flat; color:white" geometry="primitive:ring;radiusInner:1;radiusOuter:1.002"></a-entity>
              
              </a-entity>
          </a-entity>
          
          
          
          
          
          
          <a-video class="three-champion listening" position="0 0 8" rotation="0 0 45" look-at="#camera" src="#video1" width="16" height="9" opacity="0.0" transparent="true">
            <a-animation 
              attribute="opacity"
              from="0"
              to="1"
              dur="2000"
              fill="both"
              easing="ease-in"
              begin="door-two"
              end="door-three"
              repeat="indefinite"></a-animation>
          </a-video>
          

        
          <a-entity>
            <a-animation attribute="rotation"
              to="0 -360 0"
              dur="108000"
              fill="forwards"
              easing="ease-in-out-sine"
              repeat="indefinite"></a-animation>
            
            <a-entity rotation="45 45 0" geometry="primitive:sphere; radius:10" scale='-1 1 1' material="repeat: 10 1; shader:flat; transparent:true; src:#lines1;"></a-entity>
          </a-entity>
          
          <a-entity>
            <a-animation attribute="rotation"
              to="360 360 0"
              dur="54000"
              fill="forwards"
              easing="ease-in-out-sine"
              repeat="indefinite"></a-animation>
            
            <a-entity rotation="-145 -145 0" geometry="primitive:sphere; radius:8" scale='-1 1 1' material="repeat: 4 4; shader:flat; transparent:true; src:#sludge3;"></a-entity>
          </a-entity>
          
          
  
          // fixed
          <a-entity id="musix" position="0 0 -1" sound="src: #sounds; autoplay: true; loop: true;">
          </a-entity>
          
          <a-entity id="disc" position="0 0 0">
             <a-animation attribute="rotation"
               to="0 -360 0"
               dur="108000"
               fill="forwards"
               easing="ease-in-out-sine" 
               repeat="indefinite"></a-animation>
               
               
            // fixed far
            
          
            // fixed near
             
            <a-entity position="0 0 -1" sound="src: #growstrong; autoplay: true; loop: true;">
            </a-entity>
            
            <a-camera id="camera" wasd-controls-enabled look-controls wasd-controls="fly:true; acceleration:400">
              // fixed to camera
            
            
              
              <a-entity geometry="primitive:sphere; radius:39" scale='-1 1 1' material="repeat: 10 10; shader:flat; transparent:true; src:#sludge3;"></a-entity>
    
            </a-camera>
            
          </a-entity>
          
        </a-scene>
      </div>
    );
  }
}

export default App;
