import React, { useMemo, useState } from "react";
import { Bell, Menu, BellOff } from "lucide-react";
import Sidebar from "./sidebar";
import SearchBar from "./searchBar";
import NotificationComponent, {
  NOTIFICATION_TYPES,
} from "./notificationComponent";

// Mock notifications (replace with API later)
const initialNotifications = [
  {
    id: "n1",
    type: NOTIFICATION_TYPES.REMINDER,
    title: "Return Reminder",
    description: "Your Arduino Uno R3 is due for return in 3 days",
    timestamp: "1h ago",
    tag: "REMINDER",
    read: false,
  },
  {
    id: "n2",
    type: NOTIFICATION_TYPES.OVERDUE,
    title: "Overdue Item",
    description:
      "Digital Multimeter is overdue by 1 day. Please return immediately.",
    timestamp: "3h ago",
    tag: "OVERDUE",
    read: false,
  },
  {
    id: "n3",
    type: NOTIFICATION_TYPES.APPROVAL,
    title: "Request Approved",
    description: "Your borrow request for Arduino Uno R3 has been approved",
    timestamp: "21h ago",
    tag: "APPROVAL",
    read: true,
  },
  {
    id: "n4",
    type: NOTIFICATION_TYPES.ANNOUNCEMENT,
    title: "New Equipment Added",
    description: "New 3D printers are now available for borrowing!",
    timestamp: "2d ago",
    tag: "ANNOUNCEMENT",
    read: true,
  },
  {
    id: "n5",
    type: NOTIFICATION_TYPES.REJECTION,
    title: "Request Rejected",
    description:
      "Your request for Oscilloscope was rejected - item reserved for lab session",
    timestamp: "2d ago",
    tag: "REJECTION",
    read: true,
  },
  {
    id: "n6",
    type: NOTIFICATION_TYPES.REQUEST,
    title: "New Component Request",
    description: "Aarav Sharma requested 5x ESP32 DevKit for the IoT project.",
    timestamp: "3d ago",
    tag: "REQUEST",
    read: true,
  },
  {
    id: "n7",
    type: NOTIFICATION_TYPES.RETURNED,
    title: "Item Returned",
    description:
      "Priya Verma returned the Soldering Iron Kit. Inventory updated.",
    timestamp: "4d ago",
    tag: "RETURNED",
    read: true,
  },
];

const NotificationPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  const handleToggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="flex">
        <Sidebar
          active="notifications"
          mobileOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        <div className="flex-1 min-w-0 flex flex-col">
          {/* Top bar */}
          <header className="sticky top-0 z-30 bg-black/90 backdrop-blur-md border-b border-yellow-400/10">
            <div className="flex items-center gap-3 px-4 sm:px-6 lg:px-8 h-16">
              {/* Hamburger (mobile) */}
              <button
                className="lg:hidden p-2 -ml-2 rounded-md text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>

              {/* Search (desktop) */}
              <div className="hidden lg:flex flex-1 max-w-xl">
                <SearchBar />
              </div>

              <div className="flex-1 lg:hidden" />

              {/* Bell */}
              <button
                className="relative p-2 rounded-full text-yellow-400 hover:bg-yellow-400/10 transition-colors"
                aria-label="Notifications"
              >
                <Bell size={20} strokeWidth={2} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-10">
            {/* Page header */}
            <div className="flex items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Notifications
                </h1>
                <p className="mt-1 text-[13px] sm:text-sm text-gray-400">
                  {unreadCount > 0
                    ? `${unreadCount} unread notification${
                        unreadCount === 1 ? "" : "s"
                      }`
                    : "You are all caught up"}
                </p>
              </div>

              <button
                onClick={handleMarkAllRead}
                disabled={unreadCount === 0}
                className="shrink-0 px-3 sm:px-4 py-2 rounded-md border border-yellow-400/40 text-yellow-400 text-[12px] sm:text-sm font-medium hover:bg-yellow-400/10 hover:border-yellow-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              >
                Mark All as Read
              </button>
            </div>

            {/* List */}
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4">
                  <BellOff size={28} className="text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold">
                  No notifications yet
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  We&apos;ll let you know when something arrives.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-w-4xl">
                {notifications.map((n) => (
                  <NotificationComponent
                    key={n.id}
                    notification={n}
                    onClick={handleToggleRead}
                  />
                ))}
              </div>
            )}

            <div className="h-10" />
          </main>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
