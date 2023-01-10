import React, { useEffect, useState } from "react";
import AnimeCard from "./Anime/AnimeCard";
import { BiSearch } from "react-icons/bi";
import { DiBackbone, DiDrupal, DiFsharp } from "react-icons/di";


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
        <div className="right">
            <DiBackbone />
            <DiDrupal />
            <DiFsharp />
            <img src="https://qph.cf2.quoracdn.net/main-thumb-458691377-200-bkmjvpmajfhngwwnxplyghunntgqhghy.jpeg" />
        </div>
      </div>

      <div className="banner">
        <img src="https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/mha-collection-banner_1400x.jpg?v=1590095128" />
        {/* <img src="https://theithacan.org/wp-content/uploads/2017/04/YourName-heading-1.jpg" /> */}
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
