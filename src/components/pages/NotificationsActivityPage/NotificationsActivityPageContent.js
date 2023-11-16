"use client";

import { useTheme } from "next-themes";
import { useSelector } from "react-redux";

import NotificationsActivityItem from "./NotificationsActivityItem";

function NotificationsActivityPageContent() {
  const { theme } = useTheme();

  const notifications = useSelector((state) => state.notifications);
  const activityNotifications = notifications.filter(
    (notification) => notification.group === "activity",
  );

  return (
    <ul className="flex flex-col gap-3">
      {activityNotifications.map((notification) => (
        <li key={notification.id}>
          <NotificationsActivityItem
            theme={theme}
            notification={notification}
          />
        </li>
      ))}
    </ul>
  );
}

export default NotificationsActivityPageContent;
