import React from 'react';

import './styles/App.scss';

const App = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const handleButtonClick = () => {
    if (prefersDarkScheme && prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
    } else {
      document.body.classList.toggle("dark-theme");
    }
  };

  return (
    <div className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn"/>
      <label for="dn" className="toggle" onClick={handleButtonClick} >
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
}

export default App;
