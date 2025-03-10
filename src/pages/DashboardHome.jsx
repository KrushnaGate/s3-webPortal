import React from 'react'

function DashboardHome() {
  const userEmail = localStorage.getItem('userEmail')
  const userSociety = localStorage.getItem('userSociety')

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to your Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Hello {userEmail}, welcome to the {userSociety || 'Society'} portal. 
        Use the sidebar to navigate through different sections.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-indigo-100 p-4 rounded-lg shadow">
          <h3 className="font-bold text-indigo-800">Residency</h3>
          <p className="text-indigo-600">Manage your residency details</p>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="font-bold text-green-800">Security</h3>
          <p className="text-green-600">View security information</p>
        </div>
        
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h3 className="font-bold text-yellow-800">Communication</h3>
          <p className="text-yellow-600">Connect with society members</p>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg shadow">
          <h3 className="font-bold text-purple-800">Add New Game</h3>
          <p className="text-purple-600">Book amenities and facilities</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome