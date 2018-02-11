import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    );
  }
}

export default Header;
