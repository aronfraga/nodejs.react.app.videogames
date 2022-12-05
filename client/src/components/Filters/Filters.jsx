import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre } from '../../redux/actions';
import { filterByStorage } from '../../redux/actions';
import { orderByName } from '../../redux/actions';
import { orderByRating } from '../../redux/actions';
import { filterReset } from '../../redux/actions';
import { filterByGenreSearch } from '../../redux/actions';
import { filterByStorageSearch } from '../../redux/actions';
import { orderByNameSearch } from '../../redux/actions';
import { orderByRatingSearch } from '../../redux/actions';
import { setSearchStatus } from '../../redux/actions/index';
import { cleanSearchGame } from '../../redux/actions/index';
import { setPage } from '../../redux/actions';
import orderRating from '../../controller/orderRating';
import orderName from '../../controller/orderName';
import filterStorage from '../../controller/filterStorage';
import filterGenre from '../../controller/filterGenre';
import './Filters.css';

export default function Filters({ handler }) {

  const dispatch = useDispatch();
  const memoryGenres = useSelector((state) => state.allGenres.map((data) => data.name));
  const searchStatus = useSelector((state) => state.searchStatus);
  const cacheAllGames = useSelector((state) => state.cacheGames);
  const cacheSearch = useSelector((state) => state.cacheSearchGame);
  const memoryCopyAllGames = useSelector((state) => state.copyAllGames);
  const memoryAllGames = useSelector((state) => state.allGames);
  const memorySearch = useSelector((state) => state.search);
  const memoryCopySearch = useSelector((state) => state.copySearch);

  function handlerClick(event) {
    event.preventDefault();
    const refresh = 'refresh';
      if(!searchStatus) dispatch(filterReset([...memoryCopyAllGames])); 
      if(searchStatus) {
        dispatch(cleanSearchGame());
        dispatch(setSearchStatus(false));
      }
    dispatch(setPage(1));
    handler(refresh);
  }

  function handlerStorage(event) {
    event.preventDefault();
    const value = event.target.value; 
      if(!searchStatus) dispatch(filterByStorage(filterStorage(value, memoryCopyAllGames)));
      if(searchStatus) dispatch(filterByStorageSearch(filterStorage(value, memoryCopySearch))); 
    dispatch(setPage(1));
    handler(value);
  }

  function handlerGenre(event) {
    event.preventDefault();
    const value = event.target.value;
      if(!searchStatus) dispatch(filterByGenre(filterGenre(value, cacheAllGames.length>0?cacheAllGames:memoryCopyAllGames)));
      if(searchStatus) dispatch(filterByGenreSearch(filterGenre(value, cacheSearch.length>0?cacheSearch:memoryCopySearch))); 
    dispatch(setPage(1));
    handler(value);
  }

  function handlerSort(event) {
    event.preventDefault();
    const value = event.target.value;
      if(!searchStatus) dispatch(orderByName(orderName(value, memoryAllGames, [...memoryCopyAllGames])));
      if(searchStatus) dispatch(orderByNameSearch(orderName(value, memorySearch, [...memoryCopySearch])));
    dispatch(setPage(1));
    handler(value);
  }

  function handlerRating(event) {
    event.preventDefault();
    const value = event.target.value;
      if(!searchStatus) dispatch(orderByRating(orderRating(value, memoryAllGames, [...memoryCopyAllGames])));
      if(searchStatus) dispatch(orderByRatingSearch(orderRating(value, memorySearch, [...memoryCopySearch])));
    dispatch(setPage(1));
    handler(value);
  }

  return (
    <>
      <div className='mainContainerFilterOrder'>
        <div className='containerTitleBar'>
          <p className='pComponentTextLeft'>Filter By</p>
          <p className='pComponentTextRight'>Order By</p>
        </div>
        <div className='containerTitleBar'>
          <p className='pComponentLineLeft'>_______________________________________</p>
          <p className='pComponentLineRigth'>__________________________</p>
        </div>
        <div className='containerBar'>
          <button className='btnFilter' onClick={(event) => handlerClick(event)}>Clear Filters</button>  
          <select className='compFilter' onChange={(event) => handlerStorage(event)}>
            <option value='All'>Storage</option>
            <option value='Created'>Created</option>
            <option value='Database'>Database</option>
          </select>
          <select className='compFilter' onChange={(event) => handlerGenre(event)}>
            <option value='All'>Genre</option>
              {memoryGenres?.map((data, idx) => (
                <option key={idx} value={data}>{data}</option>
              ))}
          </select>
          <select className='compFilter' onChange={(event) => handlerSort(event)}>
          <option value='unPop'>Alphabetical</option>
            <option value='az'>A-Z</option>
            <option value='za'>Z-A</option>
          </select>
          <select className='compFilter' onChange={(event) => handlerRating(event)}>
          <option value='unPop'>Rating</option>
            <option value='lower'>Lower</option>
            <option value='higher'>Higher</option>
          </select>
        </div>
      </div>
    </>
  );
}