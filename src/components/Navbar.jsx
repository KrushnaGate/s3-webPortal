import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaBell, FaSignOutAlt } from 'react-icons/fa'

function Navbar({ onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const userEmail = localStorage.getItem('userEmail')

  return (
    <nav className="bg-indigo-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-indigo-600 font-bold text-xl">SP</span>
              </div>
              <span className="text-xl font-bold">Society Portal</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard/notifications" className="text-white hover:text-indigo-200">
              <FaBell className="text-xl" />
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors"
              >
                <FaUser />
                <span className="hidden md:block">{userEmail || 'User'}</span>
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link 
                    to="/dashboard/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    onClick={() => setShowDropdown(false)}
                  >
                    <FaUser className="mr-2" />
                    My Profile
                  </Link>
                  <button 
                    onClick={() => {
                      setShowDropdown(false)
                      onLogout()
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar