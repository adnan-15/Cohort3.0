import React, { useContext, useState } from 'react'
import { Search, Heart, Play, Disc3 } from 'lucide-react'
import { Song } from '../context/SongContext'

const Home = () => {
  const [trendingSongs, setTrendingSongs] = useState([
    {
      id: 1,
      title: 'Midnight Pulse',
      artist: 'Neon Architects',
      duration: '3:42',
      genre: 'SYNTHWAVE',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Ethereal Silence',
      artist: 'Luna Thorne',
      duration: '4:15',
      genre: 'ACOUSTIC',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Glitch Horizon',
      artist: 'System.Void',
      duration: '2:58',
      genre: 'ELECTRONIC',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Velvet Echoes',
      artist: 'The Dreamers',
      duration: '5:12',
      genre: 'DREAM POP',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Neon Echo',
      artist: 'Synthwave Collection',
      duration: '3:28',
      genre: 'SYNTHWAVE',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      isFavorite: false
    },
    {
      id: 6,
      title: 'Digital Rain',
      artist: 'Cyber Monks',
      duration: '4:05',
      genre: 'ELECTRONIC',
      image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop',
      isFavorite: false
    },
  ])

 const song =  useContext(Song)
 console.log(song)
  const toggleFavorite = (id) => {
    setTrendingSongs(trendingSongs.map(song =>
      song.id === id ? { ...song, isFavorite: !song.isFavorite } : song
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <div className="px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Discover Your Next
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Favorite Song
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Stream millions of tracks and support your favorite artists with high-fidelity audio and personalized recommendations.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by song, artist, or album..."
              className="w-full bg-slate-800 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-gray-500"
            />
            <kbd className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">⌘ K</kbd>
          </div>
        </div>
      </div>

      {/* Trending Songs Section */}
      <div className="px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trending Songs</h2>
          <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 transition-colors">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trendingSongs.map((song) => (
            <div
              key={song.id}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-700">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay with Play Button */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-500 hover:bg-purple-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform">
                    <Play size={24} fill="white" />
                  </button>
                </div>

                {/* Favorite Heart Button */}
                <button
                  onClick={() => toggleFavorite(song.id)}
                  className="absolute top-3 right-3 z-10 transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    size={20}
                    className={song.isFavorite ? 'fill-red-500 text-red-500' : 'text-white hover:text-red-500'}
                  />
                </button>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 px-2 py-1 rounded text-xs font-semibold">
                  {song.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-base mb-1 truncate group-hover:text-purple-400 transition-colors">
                  {song.title}
                </h3>
                <p className="text-gray-400 text-sm truncate mb-3">{song.artist}</p>
                <span className="inline-block bg-slate-700 px-2 py-1 rounded text-xs text-gray-300">
                  {song.genre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Promotion Section */}
      <div className="mx-8 mb-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700">
        <div className="grid grid-cols-2 gap-8 p-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-4 leading-tight">
              Support the creators you love<br />
              with MusicHub Premium.
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Get ad-free listening, offline downloads, and higher quality audio while giving back to your favorite artists.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                Go Premium
              </button>
              <button className="border border-gray-500 hover:border-gray-400 px-8 py-3 rounded-full font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Icon */}
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 border-4 border-purple-500 rounded-full flex items-center justify-center">
                <Disc3 size={80} className="text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-8 py-8 flex justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">MusicHub</span>
          <span>© 2024 MusicHub Inc. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
          <a href="#" className="hover:text-white transition-colors">Help Center</a>
        </div>
      </footer>
    </div>
  )
}

export default Home