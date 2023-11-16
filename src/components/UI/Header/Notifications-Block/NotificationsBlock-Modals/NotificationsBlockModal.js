"use client";

import Link from "next/link";

import NotificationsBlockModalItem from "./NotificationsBlockModalItem";
import NotificationsBlockModalMenu from "./NotificationsBlockModalMenu";

function NotificationsBlockModal({
  theme,
  notifications,
  onCloseNotificationsModal,
}) {
  return (
    <div className="modal-item-card-type absolute -right-[68px] top-12 z-[888] flex w-[348px] flex-col gap-3 lg:-right-[57px]">
      <div className="flex items-center justify-between gap-3 px-6">
        <h3 className="mr-auto text-base font-semibold">Notification</h3>
        <Link
          href="/notifications"
          className="text-sm font-medium text-custom-gray-700 transition-all hover:text-custom-gray-900"
          onClick={onCloseNotificationsModal}
        >
          View all
        </Link>
        <NotificationsBlockModalMenu
          theme={theme}
          onCloseNotificationsModal={onCloseNotificationsModal}
        />
      </div>
      <ul className="flex max-h-[625px] flex-col overflow-auto">
        {notifications.map((notification) => (
          <li key={notification.id}>
            <NotificationsBlockModalItem notification={notification} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsBlockModal;
