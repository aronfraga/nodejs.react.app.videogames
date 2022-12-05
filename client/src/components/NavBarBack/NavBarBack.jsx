import React from 'react';
import { useHistory } from 'react-router-dom';
import './NavBarBack.css';

export default function NavBar() {
  const history = useHistory();

  return (
    <div className='containerNavBarBack'>
      <button className='btnNavBarBack' onClick={() => history.push('/home')}>Back</button>
    </div>
  )
}