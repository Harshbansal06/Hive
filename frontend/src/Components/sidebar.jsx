import Logo from "../assets/Site Assets/Logo.png"
import DefaultPFP from "../assets/Site Assets/DefaultUserPhoto.png"

function SideBar() {
  return (
    <>

      <div className="h-dvh bg-surface w-64 flex flex-col font-sans">

        <div className="h-25 pl-4 pr-4 flex items-center">
          <div className="flex">
            <div className="h-10 w-10"><img src={Logo} alt="Logo" className="object-contain rounded-lg" /></div>
            <div className="flex flex-col pl-2">
              <div className="text-[#ffffff] text-[24px] font-bold leading-none">ERS Hive</div>
              <div className="text-gray-400 text-[12px] uppercase tracking-widest font-semibold mt-1">Inventory</div>
            </div>
          </div>
        </div>
        <div className="h-18 pl-4 pr-4 border-t border-gray-800 flex items-center">
          <div className="flex">
            <div className="h-10 w-10"><img src={DefaultPFP} alt="pfp" className="rounded-full object-cover" /></div>
            <div className="flex flex-col pl-2">
              <div className="text-[#ffffff] text-[18px] font-medium leading-tight">John Doe</div>
              
              <div className="text-gray-400 text-[12px] font-mono mt-0.5">25BEC004</div>
            </div>
          </div>
        </div>
        <div className="text-heading text-[16px] pl-4 pr-4 pt-4 border-t border-gray-800 font-mono flex-1 space-y-2">
          
          <a href="#Dashboard" className="flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-[#FFCC00] focus:text-[#FFCC00] hover:bg-gray-800/50 transition-colors">
            <div>Dashboard</div>
          </a>
          <a href="#components" className="flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-[#FFCC00] focus:text-[#FFCC00] hover:bg-gray-800/50 transition-colors">
            <div>Components</div>
          </a>
          <a href="#tools" className="flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-[#FFCC00] focus:text-[#FFCC00] hover:bg-gray-800/50 transition-colors">
            <div>Tools</div>
          </a>
          <a href="#History" className="flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-[#FFCC00] focus:text-[#FFCC00] hover:bg-gray-800/50 transition-colors">
            <div>History</div>
          </a>
          <a href="#reports" className="flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-[#FFCC00] focus:text-[#FFCC00] hover:bg-gray-800/50 transition-colors">
            <div>Reports</div>
          </a>
          <a href="#notifications" className="flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-[#FFCC00] focus:text-[#FFCC00] hover:bg-gray-800/50 transition-colors">
            <div>Notifications</div>
          </a>
          
        </div>

        <div className="pl-4 h-18 flex items-center text-white border-t border-gray-800 mt-auto hover:text-red-600 transition-colors cursor-pointer">
          <div className="text-[16px] font-medium px-3">Log Out</div>
        </div>

      </div>
    </>
  )
}

export default SideBar;