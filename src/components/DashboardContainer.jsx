import { useState } from "react";

import Sidebar from "./Sidebar";
import NavbarDashboard from "./Navbar";
import { FaCheck, FaClock, FaListUl, FaTasks } from "react-icons/fa";

const DashboardContainer = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/*   
          // <div className="flex">
          //   <div className={`w-1/4`}>
          //     <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          //   </div>
          //   <div className={`${isSidebarOpen ? "w-3/4" : "w-full m-0 px-0"} py-16`}>{children}</div>
          // </div> 
      */}

      <NavbarDashboard />

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-default-50 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-default-50">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaTasks />
                <span className="ms-3">All Tasks</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaCheck />
                <span className="flex-1 ms-3 whitespace-nowrap">Completed</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaClock />
                <span className="flex-1 ms-3 whitespace-nowrap">Progress</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaListUl />
                <span className="flex-1 ms-3 whitespace-nowrap">To Do</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 bg-default-100" style={{ minHeight: "100vh" }}>
        <div className="p-4 mt-14">{children}</div>
      </div>
    </>
  );
};
export default DashboardContainer;
