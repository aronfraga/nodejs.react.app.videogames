import React from 'react';
import icon from '../../img/not_found.gif';
import'./NotFound.css';

export default function NotFound() {
  return (
    <>
      <div className='backgroundNotFound'>
        <div className='mainNotFound'>
          <img className='iconLoader' src={icon} alt='img not found'/>
          <h1 className='titleNotFound'>We couldn't find anything whit this name...</h1>
          <h1 className='titleNotFound'>Try again</h1>
        </div>
      </div>
    </>
  );
}