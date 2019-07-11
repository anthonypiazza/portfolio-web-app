import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ProjectList from './components/ProjectList';

// document.onmousemove = animateCircle;

// // const colors = ['#ccc', '#6cf', '#eba13a'];

// function animateCircle (event) {
//   const circle = document.createElement("div");
//   circle.setAttribute("class", "circle");
//   document.body.appendChild(circle);

//   circle.style.left = event.clientX + 'px';
//   circle.style.top = event.clientY + 'px';

//   // const color = colors[Math.floor(Math.random() * colors.length)];
//   circle.style.borderColor= "white";
// //        transition CSS property/duration/time/delay
//   circle.style.transition = "all 0.5s linear 0s";

//   circle.style.left = circle.offsetLeft - 20 + 'px';
//   circle.style.top = circle.offsetTop - 20 + 'px';

//   circle.style.width = '50px';
//   circle.style.height = '50px';
//   circle.style.borderWidth = '5px';
//   circle.style.opacity = 0;
// }


function App() {
  return (
    <div
      className="App">
      <Nav />
      <Hero />
      <Mission />
      <ProjectList />{/* 
      <Skills />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
