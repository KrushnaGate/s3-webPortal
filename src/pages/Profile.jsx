import React from 'react'

function Profile() {
  const userEmail = localStorage.getItem('userEmail')
  const userSociety = localStorage.getItem('userSociety')

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>
      
      <div className="space-y-4">
        <div className="flex items-center justify-center mb-6">
          <div className="w-32 h-32 bg-indigo-200 rounded-full flex items-center justify-center">
            <span className="text-4xl text-indigo-600 font-bold">
              {userEmail ? userEmail.charAt(0).toUpperCase() : 'U'}
            </span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{userEmail}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Society</p>
              <p className="font-medium">{userSociety || 'Not specified'}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="font-medium">June 2025</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile