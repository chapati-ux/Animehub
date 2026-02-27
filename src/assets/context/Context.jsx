import React, { useState, useEffect } from "react";
import axios from "axios";
export const MyContext = React.createContext();

const Context = ({ children }) => {
  const [value, setValue] = useState([]);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState(null);
  const [card, setCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //& usefull for search option https://api.jikan.moe/v4/anime?q={search}&sfw
  //* https://api.jikan.moe/v4/seasons/now?sfw
  //* https://api.jikan.moe/v4/seasons/2024/winter?sfw
  //* https://api.jikan.moe/v4/top/anime?type=movie

 useEffect(() => {

  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  (async () => {
    try {

      const endpoints = [
        { title: "Airing Now", url: "https://api.jikan.moe/v4/seasons/now?sfw" },
        { title: "Winter 2024", url: "https://api.jikan.moe/v4/seasons/2024/winter?sfw" },
        { title: "Top Anime", url: "https://api.jikan.moe/v4/top/anime" },
        { title: "Top Movies", url: "https://api.jikan.moe/v4/top/anime?type=movie" },
        { title: "Most Popular", url: "https://api.jikan.moe/v4/top/anime?filter=bypopularity" },
        { title: "Recommended", url: "https://api.jikan.moe/v4/seasons/2019/spring?sfw" }
      ];

      let results = [];
      
      for (let i = 0; i < endpoints.length; i++) {

        
        const response = await axios.get(endpoints[i].url);

        results.push({
          title: endpoints[i].title,
          data: response.data.data
        });

        await delay(800); // 🔥 avoid 429
      }

      setValue(results);   // now value is an array
      setError(false);

    } catch (error) {
      console.log("error", error);
      setError(true);
    }
  })();

}, []);

  

  useEffect(() => {
    if (!card) return; // *🔥 prevents empty API call

    (async () => {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/anime/" + card,
        );
        const data = response.data.data;
        setInfo(data);
        console.log("infob", data);
        setError(false);
      } catch (error) {
        console.log("error", error);
        setError(true);
      }
    })();
  }, [card]);
  
  const searchAnime = async (query) => {
    if (!query.trim()) return;
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
      setSearchResults(response.data.data);
      setError(false);
    } catch (error) {
      console.log("Search error", error);
      setError(true);
    }
  };

  return (
    <MyContext.Provider
      value={{ error, value, setValue, info, setInfo, card, setCard, searchQuery, setSearchQuery, searchResults, setSearchResults, searchAnime }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
