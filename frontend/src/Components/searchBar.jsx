import React from 'react';
import { Search } from 'lucide-react';
function SearchBar() {
  return (
    <div className="py-3 pl-5 relative border border-b-fg w-full">
      <div className="flex items-center bg-[#30270D] border border-fg rounded-md px-3 py-1.5 w-100 font-mono gap-2 text-">
        
        <Search size={16} className='text-fg' />
        <input 
          type="text" 
          className="bg-transparent border-none outline-none text-fg text-xs w-full placeholder-fg " 
          placeholder="Search items, tools, components..." 
        />
      </div>
    </div>
  );
}

export default SearchBar;