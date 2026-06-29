import React from "react";
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  Megaphone,
  XCircle,
  Send,
  RotateCcw,
} from "lucide-react";

// Notification types
export const NOTIFICATION_TYPES = {
  REMINDER: "reminder",
  OVERDUE: "overdue",
  APPROVAL: "approval",
  ANNOUNCEMENT: "announcement",
  REJECTION: "rejection",
  REQUEST: "request",
  RETURNED: "returned",
};

const typeConfig = {
  [NOTIFICATION_TYPES.REMINDER]: {
    Icon: Clock,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15",
  },
  [NOTIFICATION_TYPES.OVERDUE]: {
    Icon: AlertTriangle,
    iconColor: "text-red-400",
    iconBg: "bg-red-500/15",
  },
  [NOTIFICATION_TYPES.APPROVAL]: {
    Icon: CheckCircle2,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
  },
  [NOTIFICATION_TYPES.ANNOUNCEMENT]: {
    Icon: Megaphone,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
  },
  [NOTIFICATION_TYPES.REJECTION]: {
    Icon: XCircle,
    iconColor: "text-red-400",
    iconBg: "bg-red-500/15",
  },
  [NOTIFICATION_TYPES.REQUEST]: {
    Icon: Send,
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/15",
  },
  [NOTIFICATION_TYPES.RETURNED]: {
    Icon: RotateCcw,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/15",
  },
};

const NotificationComponent = ({ notification, onClick }) => {
  const cfg =
    typeConfig[notification.type] || typeConfig[NOTIFICATION_TYPES.ANNOUNCEMENT];
  const { Icon } = cfg;
  const isUnread = !notification.read;

  return (
    <button
      type="button"
      onClick={() => onClick && onClick(notification.id)}
      className={`group relative w-full text-left rounded-xl bg-[#0a0a0a] border transition-all duration-200 hover:bg-[#111] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 ${
        isUnread
          ? "border-yellow-400 shadow-[0_0_0_1px_rgba(250,204,21,0.25),0_8px_24px_-12px_rgba(250,204,21,0.35)]"
          : "border-yellow-400/70 hover:border-yellow-400"
      }`}
    >
      <div className="flex items-start gap-4 p-4 sm:p-5">
        {/* Icon tile */}
        <div
          className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${cfg.iconBg}`}
        >
          <Icon size={22} className={cfg.iconColor} strokeWidth={2} />
        </div>

        {/* Body */}
        <div className="flex-1 min-w-0 pr-6">
          <h3 className="text-white font-semibold text-[15px] sm:text-base leading-tight">
            {notification.title}
          </h3>
          <p className="mt-1.5 text-[13px] sm:text-sm text-gray-400 leading-relaxed">
            {notification.description}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-[11px] sm:text-xs text-gray-500">
              {notification.timestamp}
            </span>
            <span className="inline-flex items-center px-2 py-[3px] rounded-md text-[10px] sm:text-[11px] font-bold tracking-wider bg-yellow-400 text-black">
              {notification.tag}
            </span>
          </div>
        </div>

        {/* Unread cyan dot */}
        {isUnread && (
          <span className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
        )}
      </div>
    </button>
  );
};

export default NotificationComponent;
