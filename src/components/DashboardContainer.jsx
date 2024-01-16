import { useState } from "react";
import { FaCheck, FaClock, FaListUl, FaTasks } from "react-icons/fa";

import Sidebar from "./Sidebar";
import NavbarDashboard from "./Navbar";
import useTaskStore from "../store/taskStore";

const DashboardContainer = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const { setStatusActive, clearStatusActive, tasks } = useTaskStore();

  const pendingTasks = tasks.filter((task) => task.status === "pending").length;

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
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={() => clearStatusActive()}
              >
                <FaTasks />
                <span className="ms-3">All Tasks</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={() => setStatusActive("completed")}
              >
                <FaCheck />
                <span className="ms-3">Completed</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={() => setStatusActive("progress")}
              >
                <FaClock />
                <span className="ms-3">In Progress</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                onClick={() => setStatusActive("pending")}
              >
                <FaListUl />
                <span className="ms-3">To Do</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-danger bg-blue-100 rounded-full dark:bg-danger dark:text-blue-300">
                  {pendingTasks}
                </span>
              </button>
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
