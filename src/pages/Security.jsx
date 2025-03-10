import React from 'react'

function Security() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Security</h1>
      
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Security Personnel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium">Main Gate</p>
              <p className="text-sm text-gray-600">Rajesh Kumar</p>
              <p className="text-sm text-gray-600">Contact: +91 98765 43210</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium">Block A</p>
              <p className="text-sm text-gray-600">Sunil Sharma</p>
              <p className="text-sm text-gray-600">Contact: +91 98765 43211</p>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-medium text-red-800">Fire Department</p>
              <p className="text-sm text-red-600">101</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-medium text-blue-800">Police</p>
              <p className="text-sm text-blue-600">100</p>
            </div>
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-medium text-green-800">Ambulance</p>
              <p className="text-sm text-green-600">102</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Visitor Management</h2>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="font-medium">Recent Visitors</p>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <p className="text-sm">Amazon Delivery</p>
                <p className="text-sm text-gray-500">Today, 10:30 AM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Electrician</p>
                <p className="text-sm text-gray-500">Yesterday, 4:15 PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Relative Visit</p>
                <p className="text-sm text-gray-500">June 15, 2025</p>
              </div>
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Pre-approve Visitor
          </button>
        </div>
      </div>
    </div>
  )
}

export default Security