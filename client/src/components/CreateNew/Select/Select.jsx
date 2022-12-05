import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ShowSelected from '../ShowSelected/ShowSelected';
import './Select.css';

export default function Select({ memory, set, drop, store, type }) {
  
  const dispatch = useDispatch();
  const [ cache, setCache ] = useState([]);
  const [ clicked, setClicked ] = useState(0);

  function handlerAdd(event) { 
    event.preventDefault();
    setCache({ ...cache, [event.target.name]: event.target.value });
  }

  function handlerClick(event) {
    event.preventDefault();
    const save = store?.find((data) => data[type] === cache[type]);
    if(clicked < 6) {
      if(!save && !Array.isArray(cache)) {
        dispatch(set(cache));
        setClicked(clicked + 1);
      }
    }
  }

  function handlerState() {
    setClicked(clicked - 1);
  }

  function handlerError() {
    if(cache.length === 0) return true;
    return false;
  }

  return (
    <>
      <div>
        <select className={handlerError()?'mainSelectError':'mainSelect'} name={type} onChange={(event) => handlerAdd(event)}>
          <optgroup label={`Select ${type}`}>
            {memory?.map((data, idx) => (
              <option key={idx} value={data}>{data}</option>
            ))}
          </optgroup>
        </select>
        <button className='btnSelect' name='btnAdd' onClick={(event) => handlerClick(event)}>Add</button>
        <p className='errorInput'>{handlerError()?handlerError():''}</p>
      </div>
      <div>
        <ShowSelected key={0} type={type} func={drop} store={store} handler={handlerState}/>
      </div>
    </>
  )
}
