import React from 'react';
import '/src/index.css';

const HeroSlider = () => {
  return (
    <div className="hero-container">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Hello World ! <br/>
        Bienvenue <br/> sur mon <br/> Portfolio !</div>
      </div>
    </div>
  );
};

export default HeroSlider;
