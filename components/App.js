import React, { useEffect, useState } from "react";
import AnimeCard from "./Anime/AnimeCard";
import { BiSearch } from "react-icons/bi";

function App() {
  const [search, setSearch] = useState("naruto");
  const [animeSearchList, setAnimeSearchList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`).then((res) =>
      res.json()
    );
    setTopAnime(temp.data);
  };

  useEffect(() => {
    getTopAnime();

    console.log(topAnime);
  }, [search]);

  return (
    <div className="App">      
      <div className="header">
        <div className="left">
          <div className="search-box">
            <BiSearch className="search-icon" />
            <input type="search" placeholder="Search anything" onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="right"></div>
      </div>

      <div className="banner">
        <img src="https://staticg.sportskeeda.com/editor/2022/10/d8581-16663316932144-1920.jpg" />
      </div>

      <div className="anime-main">
        {topAnime?.map((anime) => (
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
