import React from 'react'

const Fotter = () => {
  return (
    <footer className="h-[50vh] bg-gray-900 text-gray-300 mt-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
    
    {/* Top Section */}
    <div className="h-[45vh] flex items-center flex-col lg:flex-row lg:justify-between  gap-10">
      
      {/* Brand */}
      <div className="flex-1">
        <h4 className="text-white text-xl font-bold mb-3">AnimeHub</h4>
        <p className="text-sm text-gray-400">
          Discover, watch, and track your favorite anime.
        </p>
      </div>

      {/* Explore */}
      <div className="flex-1">
        <h5 className="text-white font-semibold mb-3">Explore</h5>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Top Anime</li>
          <li className="hover:text-white cursor-pointer">Movies</li>
          <li className="hover:text-white cursor-pointer">Seasons</li>
        </ul>
      </div>

      {/* Support */}
      <div className="flex-1">
        <h5 className="text-white font-semibold mb-3">Support</h5>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-white cursor-pointer">Help Center</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
          <li className="hover:text-white cursor-pointer">Privacy</li>
        </ul>
      </div>

      {/* Social */}
      <div className="flex-1">
        <h5 className="text-white font-semibold mb-3">Follow Us</h5>
        <div className="flex gap-3 mt-3">
          <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
            T
          </div>
          <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
            I
          </div>
          <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
            D
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Section */}
    <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between">
      <span>© {new Date().getFullYear()} AnimeHub</span>
      <span className="mt-2 md:mt-0">
        Built with ❤️ • Data from Jikan API
      </span>
    </div>
  </div>
</footer>
  )
}

export default Fotter
