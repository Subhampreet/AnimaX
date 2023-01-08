import React, { useEffect, useState } from "react";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/top/anime`
    ).then(res => res.json());
    setTopAnime(temp.data);
  };

  useEffect(() => {
    getTopAnime()

    console.log(topAnime)
  }, []);

  return (
    <div>
      {
        topAnime.map(anime => (
          <div>
            {anime.title}
            <img src={anime.images.jpg.image_url} />
          </div>
        ))
      }
    </div>
  );
}

export default App;
