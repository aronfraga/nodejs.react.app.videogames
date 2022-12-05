import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

export default function Card({ id,name, image, genre }) {

  return (
    <>
      <div className='mainCard'>
        <Link to={`/videogame/${id}`} className='link'>
          <div className='imageContainer'>
            <img src={image} alt='img not found'/>   
          </div>
          <div className='test'>
            <div className='titleContainer'>
              <h1 className='titleCard'>{name}</h1>
            </div>
            <div className='genreContainer'>
              <div className='borderGenre'>
                <h2 className='titleGenre'>{genre.length ? genre.join(" - ") : " - "}</h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}