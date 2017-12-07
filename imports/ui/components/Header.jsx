// Framework
import React, { PureComponent } from "react";
import Button from "./Button.jsx";
import { Link } from 'react-router-dom';

const Header = ({ children, goBack }) =>
  <header>
    <button onClick={goBack} className="back-button">
      {/* Image added here to show image inclusion, prefer inline-SVG. */}
      <img alt="Back" src={`/icon/header/back-white.svg`} />
    </button>
    <h1>
      {children}
    </h1>
    <div className="right-content" />

    {localStorage.getItem('Meteor.userId')&&
      <Link to='/cart'>
      Cart
      </Link>
    }




  </header>;

export default Header;
