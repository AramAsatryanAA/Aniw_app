"use client";

import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import NotificationsMessagesItem from "./NotificationsMessagesItem";

function NotificationsMessagesPageContent() {
  const { theme } = useTheme();

  const notifications = useSelector((state) => state.notifications);
  const messagesNotifications = notifications.filter(
    (notification) => notification.group === "messages",
  );

  return (
    <ul className="flex flex-col gap-3">
      {messagesNotifications.map((notification) => (
        <li key={notification.id}>
          <NotificationsMessagesItem
            theme={theme}
            notification={notification}
          />
        </li>
      ))}
    </ul>
  );
}

export default NotificationsMessagesPageContent;
