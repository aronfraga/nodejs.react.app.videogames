import React from 'react';
import Cards from '../../Cards/Cards';

export default function RenderHome({ store, page }) {

  return (
    <>
      {store?.map((data, idx) => (
        <Cards key={idx}
                id={data.id}
                name={data.name} 
                image={data.image}
                genre={data.genre}
                page={page} /> 
        ))}    
    </>
  )
}