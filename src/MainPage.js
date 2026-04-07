import React from 'react';
import './MainPage.css';
import MainPageContent from './MainPageContent.js';

const MainPage = () => {
  return (
    <div className="container">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div style="color: #fff">
        <MainPageContent />
      </div>
    </div>
  );
}

export default MainPage;