import React, { Component } from 'react';
import logo from './assets/images/AcropolisRoboticsLogo.png';
import BuildGallery from './BuildGallery.js';
import CompGallery from './CompGallery.js';
import './App.css';

const Home = () => {
  return (
    <div className='container'>
      <h1 id='homePage'>Home Page</h1>
      <img id= 'logo'src={logo}/>
      <p>Welcome to the home page of Acropolis Robotics!</p>
      <p> Check out our image galleries below!</p>
      <div id='galleryContainer'>
        <BuildGallery />
        <CompGallery />
      </div>
      
    </div>
  );
};


export default Home;
