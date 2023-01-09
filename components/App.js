import React, { useEffect, useState } from "react";
import AnimeCard from "./Anime/AnimeCard";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`).then((res) =>
      res.json()
    );
    setTopAnime(temp.data);
  };

  useEffect(() => {
    getTopAnime();

    console.log(topAnime);
  }, []);

  return (
    <div className="App">
      {/* <div className="banner">
        <img src="https://staticg.sportskeeda.com/editor/2022/10/d8581-16663316932144-1920.jpg" />
      </div> */}
      <div className="anime-main">
        {topAnime.map((anime) => (
          <AnimeCard
            id={anime.mal_id}
            title={anime.title}
            summary={anime.synopsis}
            image_url={anime.images.jpg.image_url}
            rating={anime.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
