import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGameDetails } from '../../redux/actions';
import { cleanDetailGame } from '../../redux/actions';
import { deleteGameCreated } from '../../redux/actions';
import { cleanAllGames } from '../../redux/actions';
import { cleanSearchGame } from '../../redux/actions';
import { getAllGames } from '../../redux/actions';
import NavBarBack from '../NavBarBack/NavBarBack';
import Loader from '../Loader/Loader';
import './Card.css';

export default function Card() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const gameData = useSelector((state) => state.gameDetails);
  const [ deleted, setDeleted ] = useState(false);
  
  useEffect(() => {
    dispatch(cleanDetailGame());
    dispatch(getGameDetails(id));
  }, [dispatch, id]);

  function dateFormat() {
    let date = '';
      if(gameData.release_date){
        date = gameData.release_date.split('-').map(data => data[0] === '0' ? data.slice(1) : data);
        date = date[2] + ' / ' + date[1] + ' / ' + date[0];
    } 
    return date;
  }

  function linkRender() {
    if(gameData.created) return ( <Link to={'/updategame'} className='link'>
        <button className={gameData.created?'btnUpdate':'btnUpdateDisabled'} disabled={gameData.created?false:true}>UPDATE</button>
      </Link>)
    return (
        <button className={gameData.created?'btnUpdate':'btnUpdateDisabled'} disabled={gameData.created?false:true}>UPDATE</button>
      )
  }

  function handlerDelete(event) {
    event.preventDefault();
    dispatch(deleteGameCreated(id));
    dispatch(cleanAllGames());
    dispatch(cleanSearchGame());
    setDeleted(true);
    setTimeout(()=> {dispatch(getAllGames())}, 500);
    setTimeout(() => {history.push('/home')}, 1000);
  }

  if(!(Object.entries(gameData).length === 0)) {
    return (
      <>
        <nav className='mainNavBarBack'>
          <NavBarBack />
        </nav>
        <div className='spaceCard'>
          <div className={deleted?'mainCardDetailDeleted':'mainCardDetail'}>
            <h1 className='titleCardDetail'>{gameData.name}</h1> 
            <div className='containerData'>
              <div className='subontainerData'>
                <h3 className='subTitleData'>Rating:</h3>
                <h3 className='subData'>{gameData.rating}</h3>
              </div>
              <div className='subontainerData'>
                <h3 className='subTitleData'>Released Date:</h3>
                <h3 className='subData'>{dateFormat()}</h3>
              </div>
            </div>
            <div className='imageContainerDetail'>
              <img src={gameData.image} alt='img not found'/> 
            </div>
            <div className='containerDataBottom'>
              <p className='detail'>{gameData.description}</p>
              <h3 className='subTitleCardDetail'>Genres</h3>
              <h4 className='otherText'>{gameData.genre.length ? gameData.genre.join('  -  ') : '  -  '}</h4>
              <h3 className='subTitleCardDetail'>Platforms</h3>
              <h4 className='otherText'>{gameData.platforms.length ? gameData.platforms.join('  -  ') : '  -  '}</h4>
              <div className='putDelete'>
                {linkRender()}
                <button className={gameData.created?'btnDelete':'btnDeleteDisabled'} disabled={gameData.created?false:true} onClick={(event) => handlerDelete(event)}>DELETE</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />
  }
}