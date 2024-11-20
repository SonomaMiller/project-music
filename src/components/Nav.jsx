import React from 'react'; 
import { NavLink } from 'react-router-dom'

export function NavigationBar() {
    return (
      <nav id="navLinks">
        <h2><NavLink to='/home'>UW Wrapped</NavLink></h2>
        <div id="hamburger-menu"><a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
        <div id="tabs">
          <div><NavLink to='/allsongs'>All Music</NavLink></div>
          <div><NavLink to='/add'>Add a Song</NavLink></div>
          <div><NavLink to='/vote'>Vote</NavLink></div>
          <div><NavLink to='/archive'>Archive</NavLink></div>
        </div>
      </nav>
    );
  }