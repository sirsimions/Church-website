import React from 'react';
import './sidebar.css';
import { slide as Menu } from 'react-burger-menu';

export default sidemenu => {
  return (
    <Menu>
      <a className="menu-item" href="pulpitministry">
       Pulpit Ministry
      </a>
      <a className="menu-item" href="/outreach">
        Outreach Ministry
      </a>
      <a className="menu-item" href="/sundayschool">
        Sunday School Ministry
      </a>
      <a className="menu-item" href="/choir">
        Choir
      </a>
      <a className="menu-item" href="/development">
        Development
      </a>
      <a className="menu-item" href="/womenfellowship">
        Women Fellowship
      </a>
      <a className="menu-item" href="/menfellowship">
        Men Fellowship
      </a>
      <a className="menu-item" href="/signup">
        Signup
      </a>
    </Menu>
  );
};