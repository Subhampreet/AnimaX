import React from 'react'

function AnimeCard({title, genre, image_url, rating, summary}) {
  return (
    <div>
        <h4>{title}</h4>
        <p>{summary}</p>
        <img src={image_url} />
        <h4>{rating}</h4>
    </div>
  )
}

export default AnimeCard