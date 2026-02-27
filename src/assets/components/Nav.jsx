import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";

const Nav = () => {
  const { searchQuery, setSearchQuery, searchAnime, setSearchResults } =
    useContext(MyContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery?.trim()) searchAnime(searchQuery.trim());
    setMobileOpen(false);
  };

  const handleHomeClick = () => {
    setSearchResults([]);
    setSearchQuery("");
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-black h-15 flex items-center justify-around">
      {/* logo  */}
      <div >
        <Link to="/" onClick={handleHomeClick} >
          <span className="text-white text-2xl font-bold">AnimeHub</span>
        </Link>
      </div>
      {/* search bar */}
      <div className="w-[60%]  flex justify-center gap-2 sm:justify-around sm:gap-5 sm:w-[40%] rounded-2xl ">
        <input className="bg-white rounded-2xl sm:w-full" type="text" name="" id="" placeholder="  Search Your Anime . . . " value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={handleSearch} className="w-[5rem] bg-red-500 text-white font-semibold rounded-2xl px-5">Search</button>
      </div>
      
      {/*  */}
    </nav>
  );
};

export default Nav;
