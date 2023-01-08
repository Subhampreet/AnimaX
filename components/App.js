import React, { useEffect, useState } from "react";
import AnimeCard from "./Anime/AnimeCard";

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
          <AnimeCard title={anime.title} summary={anime.synopsis} image_url={anime.images.jpg.image_url} rating={anime.rating}/>
        ))
      }
    </div>
  );
}

export default App;
