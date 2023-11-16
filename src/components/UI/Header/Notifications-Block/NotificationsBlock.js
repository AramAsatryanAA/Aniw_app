"use client";

import { useSelector } from "react-redux";
import Image from "next/image";

import NotificationsBlockModal from "./NotificationsBlock-Modals/NotificationsBlockModal";

function NotificationsBlock({
  theme,
  showNotificationsModal,
  onCloseNotificationsModal,
  onToggleNotificationsModalVisibility,
}) {
  const notifications = useSelector((state) => state.notifications);

  return (
    <div className="relative">
      <button
        className={`relative h-10 w-10 rounded-3xl bg-custom-gray-100 p-2 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-500 ${
          showNotificationsModal &&
          "bg-custom-gray-300 dark:bg-custom-black-500"
        }`}
        onClick={onToggleNotificationsModalVisibility}
      >
        <Image
          src={
            theme === "dark"
              ? "/notification-dark.svg"
              : "/notification-light.svg"
          }
          alt="Notification Icon"
          width={50}
          height={50}
        />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-xl bg-custom-blue-100 text-xs text-white">
          3
        </span>
      </button>
      {showNotificationsModal && (
        <NotificationsBlockModal
          theme={theme}
          notifications={notifications}
          onCloseNotificationsModal={onCloseNotificationsModal}
        />
      )}
    </div>
  );
}

export default NotificationsBlock;
