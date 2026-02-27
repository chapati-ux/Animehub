import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";

const Hero = () => {
  const { error, value, setCard, searchResults } = useContext(MyContext);

  const AnimeCard = ({ item }) => (
  <Link
    to="/info"
    key={item.mal_id}
    onClick={() => setCard(item.mal_id)}
    className="group relative min-w-[16rem] h-[25rem] rounded-2xl 
    overflow-hidden shadow-xl hover:shadow-2xl 
    transform hover:scale-105 transition-all duration-500 cursor-pointer"
  >
    <img
      src={
        item?.images?.webp?.large_image_url ||
        item?.images?.jpg?.large_image_url
      }
      alt={item?.title}
      loading="lazy"
      className="h-full w-full object-cover object-center 
      group-hover:brightness-75 transition-all duration-500"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="absolute bottom-0 left-5 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-[-20%] transition-transform duration-500">
      <h3 className="text-lg font-bold mb-2 line-clamp-2">
        {item?.title}
      </h3>

      <div className="flex items-center gap-2 text-sm">
        <span className="bg-yellow-500/80 text-black px-3 py-1 rounded-full font-semibold">
          ⭐ {item?.score || "N/A"}
        </span>
        <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full font-semibold">
          {item?.episodes || "?"} Ep
        </span>
      </div>
    </div>
  </Link>
);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black px-6 py-12">
      {error ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="text-6xl mb-4">😵</div>
            <h1 className="text-3xl font-bold text-red-400 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-400 text-lg">
              Please try refreshing the page
            </p>
          </div>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl font-bold text-white">
              Search Results
            </h2>
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {searchResults.length} found
            </span>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {searchResults.map((item) => (
              <AnimeCard key={item.mal_id} item={item} />
            ))}
          </div>
        </div>
      ) : !value || value.length === 0 ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mb-4"></div>
            <h1 className="text-2xl font-semibold text-gray-300 animate-pulse">
              Loading amazing anime...
            </h1>
          </div>
        </div>
      ) : (
        <div className="space-y-16  my-2">
          {value.map((section, index) => (
            <div key={section.title} className="relative ">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8   ">
                <h2 className="text-4xl font-bold text-white relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </h2>
                <div className="h-px bg-gradient-to-r from-gray-600 to-transparent flex-1"></div>
              </div>

              {/* Anime Cards */}
              <div className="flex overflow-x-auto  gap-6 pb-4 scrollbar-hide">
                {section.data?.map((item) => (
                  <AnimeCard key={item.mal_id} item={item} />
                ))}
              </div>

              {/* Gradient fade on right */}
              <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Hero;