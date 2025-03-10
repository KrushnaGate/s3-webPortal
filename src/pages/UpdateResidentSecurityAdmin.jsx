import React from 'react'

function Residency() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Residency Information</h1>
      
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Property Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Block/Tower</p>
              <p className="font-medium">Block A</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Flat Number</p>
              <p className="font-medium">A-301</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Floor</p>
              <p className="font-medium">3rd Floor</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Type</p>
              <p className="font-medium">3 BHK</p>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Ownership Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Ownership Type</p>
              <p className="font-medium">Owner</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Purchase Date</p>
              <p className="font-medium">15 Jan 2023</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Registration Number</p>
              <p className="font-medium">REG12345678</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Maintenance</h2>
          <div className="bg-green-50 p-4 rounded-md mb-4">
            <p className="text-green-800 font-medium">Maintenance Status: Paid</p>
            <p className="text-green-600 text-sm">Last payment: June 2025</p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            View Payment History
          </button>
        </div>
      </div>
    </div>
  )
}

export default Residency