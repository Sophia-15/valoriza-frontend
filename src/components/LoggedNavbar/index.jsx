import React from 'react';
import rocketseat from '../../assets/img/rocketseat.svg';
import './styles.scss';

function LoggedNavbar() {
  return (
    <nav className="logged-navbar">
      <div className="logo">
        <img src={rocketseat} alt="Logo da Rocketseat" />
      </div>

      <div className="pages">
        <a href="/home">Home</a>
        <a href="#">Tags</a>
      </div>
    </nav>
  );
}

export default LoggedNavbar;
