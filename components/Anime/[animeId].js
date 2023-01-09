import { useRouter } from 'next/router'
import React from 'react'

function animeDetail({animeId}) {
    const router = useRouter();
    const animeId = router.query.animeId
  return (
    <div>
        Anime Id is {animeId}
    </div>
  )
}

export default animeDetail