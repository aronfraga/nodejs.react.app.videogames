import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Loader from '../Loader/Loader';
import Paginated from '../Paginated/Paginated';
import RenderHome from './RenderHome/RenderHome';
import Filters from '../Filters/Filters';
import NotFound from '../NotFound/NotFound';
import './Home.css';

export default function Home() {
  const memoryGames = useSelector((state) => state.allGames);
  const memoryCopyAllGames = useSelector((state) => state.copyAllGames);
  const memoryCopySearch = useSelector((state) => state.copySearch);
  const memorySearch = useSelector((state) => state.search);
  const memoryGenres = useSelector((state) => state.allGenres);
  const searchStatus = useSelector((state) => state.searchStatus);
  const [ refresh, setRefresh ] = useState('');
  const currentPage = useSelector((state) => state.currentPage);
  const gamesPerPage = 15;
  const indexLastGame = currentPage * gamesPerPage;
  const indexFirstPage = indexLastGame - gamesPerPage;
  const storePaginated = memoryGames.slice(indexFirstPage, indexLastGame);

  function forceRender(data) {
    setRefresh(data);
  }

  function handlerRender() {
    if(memoryCopySearch.length === 0 && searchStatus) return <NotFound />
    if(memoryCopySearch.length > 0) return <RenderHome store={memorySearch} />
    if(memoryGames.length > 0) return <RenderHome store={storePaginated} />
  }

  if(((memoryCopyAllGames.length > 0) || memoryCopySearch.length > 0) && memoryGenres.length > 0) {
    return (
      <>
        <nav className='mainNav'>
          <NavBar />
        </nav>
        <div className='homeSpace'>
          <div className='navSubFilter'>
            <Filters handler={forceRender} status={refresh} />       
          </div>
          <div className='renderSpace'>
            {handlerRender()}
          </div>
        </div>
        <footer className='mainFooter'>
          <Paginated gamesPerPage={gamesPerPage} memoryGames={memoryGames.length} />
        </footer>
      </>
    )
  } else {
    return <Loader />
  }
}