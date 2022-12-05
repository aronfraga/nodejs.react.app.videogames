import React from 'react';
import { useDispatch } from 'react-redux';
import './ShowSelected.css';

export default function ShowSelected({ type, func, store, handler }) {
  
  const dispatch = useDispatch();
  const memoryStore = store;

  function handlerDeleted(event, item) {
    event.preventDefault();
    dispatch(func(item));
    handler();
  }

  return (
    <>
      <div className='mainCardShowSelected'>
        {memoryStore?.map((data,idx) => ( 
          <div className='miniCardShow' onClick={(event) => handlerDeleted(event, data[type])} key={idx}>
            <p className='textMiniCard' key={idx+1} value={data[type]}>{data[type]}</p>
          </div> 
        ))}
      </div>
    </>
  )
}