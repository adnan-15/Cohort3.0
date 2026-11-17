import React from 'react'
import { Link, useLocation } from 'react-router'
import { Music, Heart, Bell, User } from 'lucide-react'

const NavBar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 sticky top-0 z-50 shadow-lg">
      <div className="px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:shadow-lg transition-all">
            <Music size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
            MusicHub
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/main"
            label="Home"
            isActive={isActive("/main")}
            
          />
          <NavLink
            to="/main/favrouite"
            label="Favorites"
            isActive={isActive("/main/favrouite")}
            icon={<Heart size={18} />}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors relative group">
            <Bell size={20} className="text-gray-300 group-hover:text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <button className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center font-bold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            A
          </button>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ to, label, isActive, icon }) => (
  <Link
    to={to}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
      isActive
        ? 'text-white bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg'
        : 'text-gray-300 hover:text-white hover:bg-slate-700'
    }`}
  >
    {icon && icon}
    {label}
  </Link>
)

export default NavBar