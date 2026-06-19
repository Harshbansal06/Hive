import React from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';

function App() {
  return (
    /* 1. Split the entire window into a global flex row layout */
    <div className="flex w-screen h-screen overflow-hidden">
      
      {/* Fixed Sidebar Component column on the left */}
      <Sidebar />
      
      {/* 2. Right Content Screen Region (Takes up all remaining width) */}
      <div className="flex-1 flex flex-col items-start p-6 bg-[#0a0a0a] overflow-y-auto">
        
        {/* Forces the search bar component directly to the top center */}
        <SearchBar />
        
        {/* The rest of your dashboard metrics or main page content goes here */}
        <div className="w-full mt-6 text-white">
          {/* Main Dashboard Content */}
        </div>

      </div>
    </div>
  );
}

export default App;
