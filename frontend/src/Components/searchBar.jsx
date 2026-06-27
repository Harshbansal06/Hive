import React from 'react';

function SearchBar() {
  return (
    <div className="absolute top-6 left-70 z-50">
      <div className="flex items-center bg-[#16120e] border border-[#5c462b] rounded-md px-3 py-1.5 w-[70vw] max-w-187.5">
        
        <svg 
          className="text-[#a69580] mr-2.5 shrink-0"
          xmlns="http://www.w3.org/2000/svg" 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          className="bg-transparent border-none outline-none text-white text-xs w-full placeholder-[#a69580]/80" 
          placeholder="Search items, tools, components..." 
        />
      </div>
    </div>
  );
}

export default SearchBar;