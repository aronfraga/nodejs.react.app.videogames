import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchGame } from '../../redux/actions/index';
import { setSearchStatus } from '../../redux/actions/index';
import './Search.css';

export default function Search() {
  
  const dispatch = useDispatch();
  const [ search, setSearch ] = useState(''); 

  function handlerInput(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }
  
  function handlerClick(event) {
    event.preventDefault();
      if(search) {
        dispatch(searchGame(search)); 
        setTimeout(() => {dispatch(setSearchStatus(true))}, 3400);
        setSearch('');
      }
  }

  return (
    <>
      <div>
        <input className='inputContainer' type='text' onChange={handlerInput} placeholder='Search...' value={search}/>
        <button className='btnContainer' onClick={(event) => handlerClick(event)}>Search</button>
      </div>
    </>
  )
}
