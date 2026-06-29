import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({
  placeholder = "Search items, tools, components...",
  onSearch,
  className = "",
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-10 pl-11 pr-4 rounded-full bg-[#171510] border border-yellow-400/20 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-colors"
      />
    </div>
  );
};

export default SearchBar;