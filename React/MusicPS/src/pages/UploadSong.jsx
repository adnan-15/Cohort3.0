import React, { useState } from 'react'
import { Upload, Music, LayoutDashboard, Music2, User, LogOut, Search, Upload as UploadIcon, ChevronDown, Share2 } from 'lucide-react'
import { useForm } from 'react-hook-form'

const UploadSong = () => {


  const {register,reset,handleSubmit,formState:{errors}}=  useForm()
  const [formData, setFormData] = useState({
    songTitle: '',
    artistName: '',
    genre: '',
    albumCoverUrl: '',
    audioUrl: '',
    description: ''
  })

  const genres = [
    'Select Genre',
    'Synthwave',
    'Lo-Fi',
    'Electronic',
    'Ambient',
    'Acoustic',
    'Dream Pop',
    'Indie',
    'Hip Hop',
    'R&B',
    'Pop',
    'Rock'
  ]



const submitHandler =(data)=>{

    console.log(data)
}

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Sidebar */}
     

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        {/* Top Bar */}
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 px-8 py-4 flex items-center justify-between z-10">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search track analytics..."
                className="w-full bg-slate-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-8">
            <Bell size={20} />
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">
              AR
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-3">Upload Song</h1>
            <p className="text-gray-400 mb-8">Share your latest masterpiece with your fans worldwide.</p>

            <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
              {/* Song Title and Artist Name Row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Song Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Song Title
                  </label>
                  <input
                    type="text"
                    name="songTitle"
                    {...register("title")}
                    placeholder="Midnight Serenade"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Artist Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                    <User size={16} />
                    Artist Name
                  </label>
                  <input
                    type="text"
                    name="artistName"
                        {...register("artist-name")}
                    placeholder="Alex Rivers"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Genre and Album Cover Row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Genre */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Genre
                  </label>
                  <div className="relative">
                    <select
                      name="genre"
                        {...register("genre")}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      {genres.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>

                {/* Album Cover URL */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Album Cover URL
                  </label>
                  <input
                    type="text"
                    name="albumCoverUrl"
                    {...register("albumCoverUrl")}
                    placeholder="https://image-host.com/cover.jpg"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Audio URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                  <Music size={16} />
                  Audio URL (High Quality)
                </label>
                <input
                  type="text"
                  name="audioUrl"
                   {...register("audioUrl")}
                  placeholder="https://cdn.musichub.com/files/new-track.wav"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                  Description
                </label>
                <textarea
                  name="description"
                  {...register("description")}
                  placeholder="Tell the story behind this song..."
                  rows="6"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <UploadIcon size={20} />
                  Upload Song
                  <Share2 size={16} />
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  By uploading, you confirm that you own the rights to this content.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating New Track Card */}
      <div className="fixed bottom-8 right-8 bg-slate-800 border border-slate-700 rounded-lg p-4 w-64 shadow-xl hover:shadow-2xl transition-all">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
            <Music size={20} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">New Mastertrack</p>
            <p className="text-xs text-gray-400">Alex Rivers</p>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  )
}

const NavItem = ({ icon, label, active }) => (
  <button
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
      active
        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
    }`}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </button>
)

const Bell = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

export default UploadSong