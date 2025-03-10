import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaBuilding,
  FaShieldAlt,
  FaComments,
  FaCalendarAlt,
  FaUserShield,
  FaUserEdit,
  FaKey,
  FaFileDownload,
  FaLock,
  FaTrashAlt,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: <FaHome />, label: 'Dashboard' },
    { path: '/dashboard/CreateAdminSecurityResident', icon: <FaBuilding />, label: 'Create Admin/Security/Resident' },
    { path: '/dashboard/ChangePassword', icon: <FaKey />, label: 'Change Password for Users' },
    { path: '/dashboard/UpdateFlatDetails', icon: <FaComments />, label: 'Update Flat Details' },
    { path: '/dashboard/UpdateResidentSecurityAdmin', icon: <FaUserEdit />, label: 'Update Resident/Security/Admin' },
    { path: '/dashboard/ActivateDeactivateAccount', icon: <FaUserShield />, label: 'Activate/Deactivate Account' },
    { path: '/dashboard/update-vtoken', icon: <FaLock />, label: 'Update VToken' },
    { path: '/dashboard/Download-Reports', icon: <FaFileDownload />, label: 'Download Reports' },
    { path: '/dashboard/privacy-policy', icon: <FaShieldAlt />, label: 'Privacy Policy' },
    { path: '/dashboard/terms-policy', icon: <FaCalendarAlt />, label: 'Terms Policy' },
    { path: '/dashboard/delete-account', icon: <FaTrashAlt />, label: 'Delete Account' }
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-gray-800 text-white h-screen sidebar-transition ${isExpanded ? 'w-30' : 'w-20'} fixed left-0 top-16 z-10`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
      <nav className="mt-5">
        <ul className="space-y-1 px-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  location.pathname === item.path ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {isExpanded && <span className="ml-4">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
