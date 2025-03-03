// import React from "react";
// import s3img from "../assets/images/s3image.jpg";

// const Home = () => {
//   return (
//     <div>
//       <nav class="bg-gray-800">
//         <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div class="relative flex h-16 items-center justify-between">
//             <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               <button
//                 type="button"
//                 class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span class="absolute -inset-0.5"></span>
//                 <span class="sr-only">Open main menu</span>

//                 <svg
//                   class="block size-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   data-slot="icon"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                   />
//                 </svg>

//                 <svg
//                   class="hidden size-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   data-slot="icon"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M6 18 18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div class="flex shrink-0 items-center">
//                 <img class="h-8 w-auto" src={s3img} alt="Your Company" />
//               </div>
//               <div class="hidden sm:ml-6 sm:block">
//                 <div class="flex space-x-4">
//                   <a
//                     href="#"
//                     class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
//                     aria-current="page"
//                   >
//                     Dashboard
//                   </a>
//                   <a
//                     href="#"
//                     class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                   >
//                     Team
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//               <button
//                 type="button"
//                 class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//               >
//                 <span class="absolute -inset-1.5"></span>
//                 <span class="sr-only">View notifications</span>
//                 <svg
//                   class="size-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                   data-slot="icon"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
//                   />
//                 </svg>
//               </button>

//               <div class="relative ml-3">
//                 <div>
//                   <button
//                     type="button"
//                     class="relative flex  justify-between rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     id="user-menu-button"
//                     aria-expanded="false"
//                     aria-haspopup="true"
//                   >
//                     <span class="absolute -inset-1.5"></span>
//                     <span class="sr-only">Open user menu</span>
//                     <img
//                       class="size-8 rounded-full"
//                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                       alt=""
//                     />
//                     <a
//                       href="#"
//                       class="block rounded-md px-8 py-1 text-base font-medium text-red-300 hover:bg-gray-700 hover:text-white"
//                     >
//                       logout
//                     </a>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="sm:hidden" id="mobile-menu">
//           <div class="space-y-1 px-2 pb-3 pt-2">
//             <a
//               href="#"
//               class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
//               aria-current="page"
//             >
//               Dashboard
//             </a>
//             <a
//               href="#"
//               class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//             >
//               Team
//             </a>
//           </div>
//         </div>

//         <div className="bg-gray-100 flex items-center justify-center h-screen">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//               Welcome to the Home Page!
//             </h2>
//             <p className="text-center text-gray-600">
//               You have successfully logged in.
//             </p>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Home;

/////////////////
import React, { useState } from "react";
import {
  Home,
  Users,
  Settings,
  Menu,
  X,
  ShoppingCart,
  BarChart2,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navItems = [
    { title: "Dashboard", icon: <Home size={20} />, active: true },
    { title: "Customers", icon: <Users size={20} /> },
    { title: "Products", icon: <ShoppingCart size={20} /> },
    { title: "Analytics", icon: <BarChart2 size={20} /> },
    { title: "Settings", icon: <Settings size={20} /> },
    { title: "Help", icon: <HelpCircle size={20} /> },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="block md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileSidebar}
          className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transition-all duration-300 
          ${isCollapsed ? "w-16" : "w-64"} 
          ${
            isMobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {!isCollapsed && <h1 className="text-xl font-bold">Company</h1>}
          <button
            onClick={isCollapsed ? toggleSidebar : toggleMobileSidebar}
            className={`p-2 rounded-md hover:bg-gray-700 ${
              isCollapsed ? "mx-auto" : ""
            }`}
          >
            {isCollapsed ? (
              <Menu size={20} />
            ) : (
              <X size={20} className="md:hidden" />
            )}
          </button>
          {!isCollapsed && (
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-gray-700 hidden md:block"
            >
              <Menu size={18} />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="mt-6">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center py-3 px-4 hover:bg-gray-700 transition-colors duration-200
                    ${item.active ? "bg-gray-700" : ""}`}
                >
                  <span className={`${isCollapsed ? "mx-auto" : "mr-3"}`}>
                    {item.icon}
                  </span>
                  {!isCollapsed && <span>{item.title}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-0 md:ml-64"
        }`}
      >
        <div className="p-4 sm:p-6 md:p-8">
          {/* Your main content goes here */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p className="text-gray-600">
              This is your main content area. The sidebar can be collapsed using
              the menu button.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
