import Link from 'next/link'
import React from 'react'

function AnimeCard({id, title, genre, image_url, rating, summary}) {
  return (
    <div className='animecard'>
        <div className='body'>
            <img src={image_url} />
            <div className='title'>{title.slice(0,19)}</div>
            {/* <p>{summary}</p>          */}
            {/* <div className="rating">{rating}</div> */}
        </div> 
    </div>
  )
}

export default AnimeCard