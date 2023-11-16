"use client";

import Image from "next/image";

import { formatDate } from "@/utils/formatDate";
import NotificationItemMenuBlock from "@/components/UI/NotificationItemMenu-Block/NotificationItemMenuBlock";

function NotificationsMessagesItem({ theme, notification }) {
  const { avatar, author, date, time, title, text } = notification;

  const formattedDate = formatDate(date);

  return (
    <div className="item-card-type flex flex-col gap-3">
      <div className="flex justify-between gap-4">
        <div className="flex gap-3">
          <span className="inline-block h-10 w-10">
            <Image src={avatar} alt="User Avatar" width={200} height={200} />
          </span>
          <div className="text-sm">
            <p className="font-semibold">{author}</p>
            <p className="text-custom-gray-700">
              {formattedDate} {time}
            </p>
          </div>
        </div>
        <NotificationItemMenuBlock theme={theme} />
      </div>
      <p className="text-base font-semibold">{title}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default NotificationsMessagesItem;
