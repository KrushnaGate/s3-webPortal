import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DashboardHome from './DashboardHome'
import Profile from './Profile'
import Residency from './UpdateResidentSecurityAdmin'
import Security from './Security'
import Communication from './CreateAdminSecurityResident'
import SlotBooking from './AddNewGame'
import Notifications from './Notifications'

function Dashboard({ onLogout }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onLogout={onLogout} />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/residency" element={<Residency />} />
            <Route path="/security" element={<Security />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/slot-booking" element={<SlotBooking />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default Dashboard