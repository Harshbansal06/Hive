import React from 'react';

function DashBoard() {
  return (

    <>
    <div className="w-full min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans">
      
      
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-10">
        
        
        <div className="relative w-full min-h-[170px] bg-[#0A0A0F] rounded-[12px] border-x-[1px] border-t-[3px] border-b-[1px] border-[#FFD700] p-6 flex flex-col justify-between sm:flex-row sm:items-center gap-6">
          <div className="flex items-center gap-5">
            
            <div className="w-[64px] h-[64px] rounded-full bg-[#FFD700] flex items-center justify-center relative flex-shrink-0">
              <div className="w-[32px] h-[32px] relative">
                <div className="absolute w-[10.67px] h-[10.67px] top-[4px] left-[10.67px] border-[2.67px] border-[#000000E5] rounded-full"></div>
                <div className="absolute w-[18.67px] h-[8px] top-[20px] left-[6.67px] border-t-[2.67px] border-[#000000E5] rounded-2xl"></div>
              </div>
            </div>
            
            <div>
              <h1 className="text-[#F9FAFB] font-semibold text-[20px] leading-tight">John Doe</h1>
              <p className="text-[#9CA3AF] text-[14px] mt-1 font-mono">Roll No: 2023BCS001</p>
              <p className="text-[#9CA3AF] text-[14px]">Position: Core Member</p>
            </div>
          </div>

         
          <div className="hidden sm:flex text-left sm:text-right text-sm text-[#9CA3AF] flex-col gap-1 border-t border-[#ffffff05] pt-4 sm:pt-0 sm:border-0">
            <p className="whitespace-nowrap">2 items borrowed</p>
            <p className="whitespace-nowrap">1 pending requests</p>
          </div>
        </div>

       
        <div>
          <div className="mb-5">
            <h3 className="text-[#9CA3AF] text-[12px] font-semibold tracking-wider uppercase">PENDING RETURNS</h3>
            <p className="text-[#9CA3AF] text-[14px]">Items awaiting return</p>
          </div>

          
          <div className="flex flex-row flex-wrap gap-6 w-full items-stretch">
    
    {/* Card 1 - Arduino */}
    <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] box-border min-h-[360px] rounded-[12px] border-[1px] border-white bg-[#0A0A0F] p-5 flex flex-col justify-between">
              <div>
                <div className="w-full h-[128px] rounded-[8px] border border-[#ffffff10] overflow-hidden bg-zinc-900 mb-4">
                  <img 
                    src="null" 
                    alt="Arduino Uno R3" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[#F9FAFB] font-semibold text-[18px] truncate">Arduino Uno R3</h4>
                    <p className="text-[#9CA3AF] text-[14px] mt-0.5 truncate">Borrowed for robotics competition project</p>
                    <p className="text-[#9CA3AF] text-[13px] mt-1">3 days remaining</p>
                  </div>
                  <div className="bg-[#064E3B] rounded-[4px] px-2.5 py-1 flex justify-center items-center flex-shrink-0">
                    <span className="text-[#10B981] text-[11px] font-bold tracking-wider">ON TIME</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-6 text-[#9CA3AF] text-[13px] border-t border-[#ffffff10] pt-3">
                  <p className="whitespace-nowrap">Qty : 2</p>
                  <p className="whitespace-nowrap">📅 Due: 6/10/2026</p>
                </div>
                <button className="w-full h-[40px] bg-[#FFD700] rounded-[6px] text-black font-medium cursor-pointer hover:bg-[#ffe240] transition-colors">
                  Return Item
                </button>
              </div>
            </div>

            {/* Card 2 - Digital Multimeter */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] box-border min-h-[360px] rounded-[12px] border-[1px] border-white bg-[#0A0A0F] p-5 flex flex-col justify-between">
              <div>
                <div className="w-full h-[128px] rounded-[8px] border border-[#ffffff10] overflow-hidden bg-zinc-900 mb-4">
                  <img 
                    src="null" 
                    alt="Digital Multimeter" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[#F9FAFB] font-semibold text-[18px] truncate">Digital Multimeter</h4>
                    <p className="text-[#9CA3AF] text-[14px] mt-0.5 truncate">Testing circuit boards</p>
                    <p className="text-[#9CA3AF] text-[13px] mt-1">3 days remaining</p>
                  </div>
                  <div className="bg-[#7F1D1D] rounded-[4px] px-2.5 py-1 flex justify-center items-center flex-shrink-0">
                    <span className="text-[#EF4444] text-[11px] font-bold tracking-wider">OVERDUE</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-6 text-[#9CA3AF] text-[13px] border-t border-[#ffffff10] pt-3">
                  <p className="whitespace-nowrap">Qty : 1</p>
                  <p className="whitespace-nowrap">📅 Due: 6/10/2026</p>
                </div>
                <button className="w-full h-[40px] bg-[#FFD700] rounded-[6px] text-black font-medium cursor-pointer hover:bg-[#ffe240] transition-colors">
                  Return Item
                </button>
              </div>
            </div>

             {/* One more card*/}

           <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] box-border min-h-[360px] rounded-[12px] border-[1px] border-white bg-[#0A0A0F] p-5 flex flex-col justify-between">
              <div>
                <div className="w-full h-[128px] rounded-[8px] border border-[#ffffff10] overflow-hidden bg-zinc-900 mb-4">
                  <img 
                    src="null" 
                    alt="Arduino Uno R3" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[#F9FAFB] font-semibold text-[18px] truncate">Arduino Uno R3</h4>
                    <p className="text-[#9CA3AF] text-[14px] mt-0.5 truncate">Borrowed for robotics competition project</p>
                    <p className="text-[#9CA3AF] text-[13px] mt-1">3 days remaining</p>
                  </div>
                  <div className="bg-[#064E3B] rounded-[4px] px-2.5 py-1 flex justify-center items-center flex-shrink-0">
                    <span className="text-[#10B981] text-[11px] font-bold tracking-wider">ON TIME</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-6 text-[#9CA3AF] text-[13px] border-t border-[#ffffff10] pt-3">
                  <p className="whitespace-nowrap">Qty : 2</p>
                  <p className="whitespace-nowrap">📅 Due: 6/10/2026</p>
                </div>
                <button className="w-full h-[40px] bg-[#FFD700] rounded-[6px] text-black font-medium cursor-pointer hover:bg-[#ffe240] transition-colors">
                  Return Item
                </button>
              </div>
            </div>

          </div>
        </div>


        {/* Section: Borrow Requests */}
        <div className="pb-12">
          <div className="mb-5">
            <h3 className="text-[#9CA3AF] text-[12px] font-semibold tracking-wider uppercase">BORROW REQUESTS</h3>
            <p className="text-[#9CA3AF] text-[14px]">Your current requests</p>
          </div>
          
          <div className="relative w-full max-w-[358px] min-h-[320px] rounded-[12px] border-[1px] border-white bg-[#0A0A0F] p-5 flex flex-col justify-between">
          
            <div>
              <div className="w-full h-[128px] rounded-[8px] border border-zinc-800 overflow-hidden bg-zinc-900 mb-4">
                <img 
                  src="null" 
                  alt="L298N Motor Driver" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-2">
                <div className="max-w-[70%]">
                  <h4 className="text-[#F9FAFB] font-semibold text-[18px] truncate">L298N Motor Driver</h4>
                  <p className="text-[#9CA3AF] text-[14px] mt-0.5">DC motor control project</p>
                </div>
                <div className="bg-[#78350F] rounded-[4px] px-2.5 py-1 flex justify-center items-center flex-shrink-0">
                  <span className="text-[#F59E0B] text-[11px] font-bold tracking-wider">PENDING</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-16 text-[#9CA3AF] text-[13px] border-t border-[#ffffff10] pt-3 mt-4">
              <p className="whitespace-nowrap">Qty : 1</p>
              <p className="whitespace-nowrap">📅 Due: 6/10/2026</p>
            </div>
          </div>

        </div>
</div>
</div>

      
     
      
   </>
  );
}

export default DashBoard;