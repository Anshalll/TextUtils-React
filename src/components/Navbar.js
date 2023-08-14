import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


export default function Navbar(props) {


  return (
    <div>
      <header id='nav' className={`${props.mode}`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center  mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{props.title}</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button onClick={props.ToggleMode} className="mr-5 hover:text-gray-900">Mode</button>

            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Home</Link></li>

          </nav>
    
        </div>
      </header>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};


// Navbar.defaultProps = {
//   title: "Manish"
// }