import React from 'react';
import { useSelector } from 'react-redux';
import { setPage } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import './Paginated.css';

export default function Paginated({ gamesPerPage, memoryGames }) {

  const dispatch = useDispatch();
  const currentPageState = useSelector((state) => state.currentPage);

  const currentPage = [];
  for (let i = 1; i <= Math.ceil(memoryGames===0?1:memoryGames/gamesPerPage); i++) {
    currentPage.push(i);
  }

  function handlerBack(event) {
    event.preventDefault();
    if(currentPageState > 1){
      const set = currentPageState - 1;
      dispatch(setPage(set));
    }
  }

  function handlerNext(event) {
    event.preventDefault();
    if(currentPageState < currentPage.length) {
      const set = currentPageState + 1;
      dispatch(setPage(set));
    }
  }

  function handlerClick(event, data) {
    event.preventDefault();
    dispatch(setPage(data));
  }

  return (
    <>
      <ul className='navBar'>
        <button className='btnButton' onClick={(event) => handlerBack(event)}>Back</button>
          {currentPage?.map((data, idx) => (
          <li className='listButton' key={idx}>
            <button className={data===currentPageState?'btnButtonSelector':'btnButton'} onClick={(event) => handlerClick(event, data)}>{data}</button>
          </li>
          ))}
        <button className='btnButton' onClick={(event) => handlerNext(event)}>Next</button>
      </ul>
    </>
  )
}