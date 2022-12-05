import React from 'react';
import icon from '../../img/wait.gif';
import'./Loader.css';

export default function Loader() {
  return (
    <>
      <div className='mainLoader'>
        <div className='secondLoader'>
          <img className='iconLoader' src={icon} alt='img not found'/>
          <div className='textLoader'>
            <h1 className='titleWait'>Loading</h1>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
        </div>      
      </div>
    </>
  );
}