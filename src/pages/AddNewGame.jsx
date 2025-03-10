import React, { useState } from 'react'

function SlotBooking() {
  const [selectedFacility, setSelectedFacility] = useState('clubhouse')
  const [selectedDate, setSelectedDate] = useState('')
  
  // Get tomorrow's date in YYYY-MM-DD format for the date input min value
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toISOString().split('T')[0]
  
  // Available time slots
  const timeSlots = [
    { id: 1, time: '09:00 AM - 10:00 AM', available: true },
    { id: 2, time: '10:00 AM - 11:00 AM', available: true },
    { id: 3, time: '11:00 AM - 12:00 PM', available: false },
    { id: 4, time: '12:00 PM - 01:00 PM', available: true },
    { id: 5, time: '01:00 PM - 02:00 PM', available: true },
    { id: 6, time: '02:00 PM - 03:00 PM', available: false },
    { id: 7, time: '03:00 PM - 04:00 PM', available: true },
    { id: 8, time: '04:00 PM - 05:00 PM', available: true },
    { id: 9, time: '05:00 PM - 06:00 PM', available: true },
    { id: 10, time: '06:00 PM - 07:00 PM', available: false },
    { id: 11, time: '07:00 PM - 08:00 PM', available: true },
    { id: 12, time: '08:00 PM - 09:00 PM', available: true },
  ]
  
  const facilities = [
    { id: 'clubhouse', name: 'Clubhouse' },
    { id: 'gym', name: 'Gymnasium' },
    { id: 'pool', name: 'Swimming Pool' },
    { id: 'tennis', name: 'Tennis Court' },
    { id: 'party', name: 'Party Hall' },
  ]
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Slot Booking</h1>
      
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Book a Facility</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="facility" className="block text-sm font-medium text-gray-700 mb-1">
                Select Facility
              </label>
              <select
                id="facility"
                value={selectedFacility}
                onChange={(e) => setSelectedFacility(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {facilities.map((facility) => (
                  <option key={facility.id} value={facility.id}>
                    {facility.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                type="date"
                id="date"
                min={tomorrowStr}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Available Time Slots</h2>
          
          {!selectedDate ? (
            <p className="text-gray-500 italic">Please select a date to view available slots</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {timeSlots.map((slot) => (
                <div 
                  key={slot.id}
                  className={`p-3 rounded-md border ${
                    slot.available 
                      ? 'border-green-300 bg-green-50 cursor-pointer hover:bg-green-100' 
                      : 'border-red-300 bg-red-50 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <p className={slot.available ? 'text-green-800' : 'text-red-800'}>
                    {slot.time}
                  </p>
                  <p className="text-xs mt-1">
                    {slot.available ? 'Available' : 'Booked'}
                  </p>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-6">
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!selectedDate}
            >
              Book Selected Slot
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlotBooking