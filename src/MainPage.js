import React from 'react';
import './MainPage.css';
import MainPageContent from './MainPageContent.js';

const MainPage = () => {
  return (
    <div className="backgroundContainer">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <MainPageContent />
    </div>
  );
}

export default MainPage;