import React from 'react';
import nopage from '../../img/nopage.gif';
import { Link } from 'react-router-dom';
import'./NoRoutePage.css';

export default function NoRoutePage() {
  return (
    <>
      <div className='mainContainerRoute'>
        <div className='containerRouter'>
          <div className='supContainer'>
            <div className='contImg'>
              <img src={nopage} alt='img not found'/>
            </div>
            <div className='contText'>
              <h1 className='textNoPageRed'>...ERROR 404</h1>
              <h1 className='textNoPage'>PAGE NOT FOUND</h1>
            </div>
          </div>
          <div className='btnContainerNoPage'>
            <Link to='/'>
              <button className='btnNoPage'>GO TO START</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}