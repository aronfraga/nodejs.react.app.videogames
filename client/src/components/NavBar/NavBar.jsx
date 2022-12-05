import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Search from '../Search/Search';

export default function NavBar() {

  return (
    <>
      <div className='mainNavBar'>
        <div className='searchSubBar'>
          <Search />
        </div>
        <div className='allBtnSubBar'>
          <Link to='/createnew'>
            <button className='btnNav'>Create New</button>
          </Link>
          <Link to='/aboutme'>
            <button className='btnNav'>About Me</button>
          </Link>
          <Link to='/'>
            <button className='btnNav'>Exit</button>
          </Link>
        </div>
      </div>
    </>
  )
}
