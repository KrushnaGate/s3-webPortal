import React from 'react'

function Notifications() {
  const notifications = [
    {
      id: 1,
      title: 'Maintenance Due',
      message: 'Your maintenance payment for July 2025 is due in 5 days.',
      time: '2 hours ago',
      read: false,
      type: 'warning'
    },
    {
      id: 2,
      title: 'Visitor Arrived',
      message: 'Your visitor "Amazon Delivery" has arrived at the gate.',
      time: '5 hours ago',
      read: true,
      type: 'info'
    },
    {
      id: 3,
      title: 'Slot Booking Confirmed',
      message: 'Your booking for the Tennis Court on June 18th, 5-6 PM has been confirmed.',
      time: '1 day ago',
      read: true,
      type: 'success'
    },
    {
      id: 4,
      title: 'Security Alert',
      message: 'Unidentified person spotted near Block C. Security has been alerted.',
      time: '2 days ago',
      read: true,
      type: 'danger'
    },
    {
      id: 5,
      title: 'Community Event',
      message: 'Join us for the Summer Festival this weekend at the Community Hall.',
      time: '3 days ago',
      read: true,
      type: 'info'
    }
  ]
  
  const getNotificationStyle = (type, read) => {
    const baseStyle = 'p-4 rounded-md mb-4 border-l-4'
    const readStyle = read ? 'opacity-70' : ''
    
    switch (type) {
      case 'warning':
        return `${baseStyle} ${readStyle} bg-yellow-50 border-yellow-500`
      case 'info':
        return `${baseStyle} ${readStyle} bg-blue-50 border-blue-500`
      case 'success':
        return `${baseStyle} ${readStyle} bg-green-50 border-green-500`
      case 'danger':
        return `${baseStyle} ${readStyle} bg-red-50 border-red-500`
      default:
        return `${baseStyle} ${readStyle} bg-gray-50 border-gray-500`
    }
  }
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">
          Mark all as read
        </button>
      </div>
      
      <div className="space-y-2">
        {notifications.map((notification) => (
          <div key={notification.id} className={getNotificationStyle(notification.type, notification.read)}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">
                  {!notification.read && (
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  )}
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              </div>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications