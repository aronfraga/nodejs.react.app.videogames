import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanAllGames } from '../../redux/actions/index';
import { cleanSearchGame } from '../../redux/actions/index';
import { getAllGames } from '../../redux/actions';
import { getAllGenres } from '../../redux/actions';
import icon from '../../img/start.gif';
import btn_start from '../../img/btn_start.png';
import './LandingPage.css';

export default function LandingPage() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(cleanAllGames());
    dispatch(cleanSearchGame());
      return () => {
        dispatch(getAllGames());  
        dispatch(getAllGenres());
      }
  }, [dispatch]);

  return (
    <>
      <div className='mainLanding'>
        <h1 className='landingTItle'>Welcome</h1>
        <img src={icon} alt='img not found' className='icon'/>
        <br/>
        <Link to='home'>
          <img className='btnLangind' alt='img not found' src={btn_start}/>
        </Link>
      </div>
    </>
  )
}