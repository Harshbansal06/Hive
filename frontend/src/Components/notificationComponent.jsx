import React from 'react';

function NotificationComponent({ title, description, time, type }) {
  return (
    <div className="bg-[#0b0a0d] border-l-4 border-y border-r border-[#facc15] rounded-md top-30 p-4 flex items-start space-x-3 w-full max-w-[750px] shadow-lg">
      <div className="bg-[#facc15]/10 p-2.5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
        <svg 
          className="text-[#ea580c]"
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>

      <div className="flex-1 flex flex-col space-y-1">
        <h4 className="text-white font-semibold text-sm tracking-wide">
          {title || "Notification Title"}
        </h4>
        
        <p className="text-[#a1a1aa] text-xs leading-relaxed">
          {description || "Detailed notification descriptive text goes right here."}
        </p>

        <div className="flex items-center space-x-3 pt-1">
          <span className="text-[#71717a] text-[10px] font-medium">
            {time || "Just now"}
          </span>

          <span className="bg-[#facc15] text-[#000000] text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
            {type || "TYPE"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NotificationComponent;
