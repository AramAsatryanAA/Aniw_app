"use client";

import Image from "next/image";

import { formatDate } from "@/utils/formatDate";
import NotificationItemMenuBlock from "@/components/UI/NotificationItemMenu-Block/NotificationItemMenuBlock";

function NotificationsActivityItem({ theme, notification }) {
  const {
    avatar,
    author,
    actionType,
    actionItem,
    actionItemPlace,
    actionItemImage,
    date,
    time,
    text,
  } = notification;

  const formattedDate = formatDate(date);

  return (
    <div className="item-card-type flex flex-col gap-3">
      <div className="flex justify-between gap-4">
        <div className="flex gap-3">
          <span className="inline-block h-10 w-10">
            <Image src={avatar} alt="User Avatar" width={250} height={250} />
          </span>
          <div className="text-sm">
            <p className="font-semibold">{author}</p>
            <div className="flex flex-wrap gap-1">
              <p>
                {actionType === "comment"
                  ? "Commented on"
                  : actionType === "upvote"
                  ? "Upvoted on"
                  : actionType === "reply"
                  ? "Replied to"
                  : actionType === "download"
                  ? "Downloaded of"
                  : "Purchased of"}
              </p>
              <p className="font-semibold">{actionItem}</p>
              {actionItemPlace && (
                <p>
                  in <span className="font-semibold">{actionItemPlace}</span>
                </p>
              )}
            </div>
            <p className="text-sm text-custom-gray-700">
              {formattedDate} {time}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="inline-block h-16 w-16">
            <Image
              src={actionItemImage}
              alt="Item Image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </span>
          <NotificationItemMenuBlock theme={theme} />
        </div>
      </div>
      {text && <p className="text-sm">{text}</p>}
    </div>
  );
}

export default NotificationsActivityItem;
