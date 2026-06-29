import React from "react";
import {
  LayoutDashboard,
  Box,
  Wrench,
  Clock,
  BarChart3,
  Bell,
  LogOut,
  ChevronLeft,
} from "lucide-react";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "components", label: "Components", icon: Box },
  { key: "tools", label: "Tools", icon: Wrench },
  { key: "history", label: "History", icon: Clock },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "notifications", label: "Notifications", icon: Bell },
];

// Small EH (ERS Hive) brand tile
const ErsLogo = ({ size = 42 }) => (
  <div
    className="shrink-0 rounded-md bg-yellow-400 flex items-center justify-center"
    style={{ width: size, height: size }}
    aria-label="ERS Hive"
  >
    <span
      className="font-black text-black tracking-tight"
      style={{ fontSize: size * 0.45, lineHeight: 1 }}
    >
      EH
    </span>
  </div>
);

const Sidebar = ({ active = "notifications", mobileOpen = false, onClose }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 shrink-0 bg-[#0a0a0a] border-r border-yellow-400/15 flex flex-col transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-yellow-400/10">
          <ErsLogo size={42} />
          <div className="leading-tight flex-1 min-w-0">
            <p className="text-white font-semibold text-[15px] tracking-wide">
              ERS Hive
            </p>
            <p className="text-yellow-400/70 text-[10px] tracking-[0.2em] uppercase mt-0.5">
              Inventory
            </p>
          </div>
          <button
            className="lg:hidden text-gray-400 hover:text-yellow-400 p-1"
            onClick={onClose}
            aria-label="Close menu"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.key === active;
            return (
              <button
                key={item.key}
                className={`relative w-full flex items-center gap-3 px-3.5 py-2.5 rounded-md text-[13.5px] font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-yellow-400/10 text-yellow-400"
                    : "text-gray-400 hover:bg-yellow-400/5 hover:text-yellow-300"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r bg-yellow-400" />
                )}
                <Icon size={17} strokeWidth={2} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-yellow-400/10">
          <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-md text-[13.5px] font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors">
            <LogOut size={17} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;