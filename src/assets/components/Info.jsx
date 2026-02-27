import React, { useContext } from "react";
import { MyContext } from "../context/Context";

const Info = () => {
  const { info } = useContext(MyContext);

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <h1 className="text-2xl font-semibold text-gray-400 animate-pulse">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-auto bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-8 p-8">
        
        {/* Image Section */}
       <div className="flex justify-center">
  <img
    src={
      info?.images?.webp?.large_image_url ||
      info?.images?.jpg?.large_image_url
    }
    alt={info?.title}
    loading="lazy"
    className="w-full max-w-sm rounded-2xl shadow-lg object-cover object-center"
  />
</div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          {info.trailer?.embed_url && (
            <div className="mb-6">
              <iframe
                src={`${info.trailer.embed_url}?autoplay=1&mute=1`}
                title={`${info.title} Trailer`}
                className="w-full h-64 rounded-2xl shadow-lg"
                allowFullScreen
                allow="autoplay"
              />
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {info.title}
          </h1>

          <p className="text-gray-300 leading-relaxed mb-6 line-clamp-6">
            {info.synopsis}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
              ⭐ {info.score || "N/A"}
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
              {info.episodes || "?"} Episodes
            </span>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
              {info.status}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Info;
