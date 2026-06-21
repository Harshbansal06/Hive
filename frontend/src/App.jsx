import React from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';
import NotificationComponent from './Components/notificationComponent';

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden"> 
      <Sidebar />
     <div className="flex-1 flex flex-col items-start p-6 bg-[#0a0a0a] overflow-y-auto">
        <SearchBar />
            <div className="absolute top-25 left-[280px] z-40 w-full px-4">
        <NotificationComponent title="Tool Assigned" description="Arduino UNO R3 has been assigned to your workspace." time="2 mins ago" type="Inventory" />
        </div>
      </div>
    </div>
  );
}
export default App
