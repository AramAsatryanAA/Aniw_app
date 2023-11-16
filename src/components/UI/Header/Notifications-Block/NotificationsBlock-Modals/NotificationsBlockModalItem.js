import Image from "next/image";

import { formatDate } from "@/utils/formatDate";

function NotificationsModalModalItem({ notification }) {
  const {
    fromAdmin,
    avatar,
    author,
    actionType,
    actionItem,
    date,
    time,
    title,
    text,
  } = notification;

  const formattedDate = formatDate(date);

  return (
    <div
      className={`flex flex-col gap-2 border-t border-custom-gray-300 py-3 pl-6 pr-3 text-sm dark:border-custom-black-500 ${
        fromAdmin && "bg-custom-gray-100 dark:bg-custom-black-300"
      }`}
    >
      <div className={`flex gap-3 ${fromAdmin && "items-center"}`}>
        <span className="inline-block h-10 w-10">
          <Image src={avatar} alt="User Avatar" width={200} height={200} />
        </span>
        <div>
          <p className="font-semibold">{author}</p>
          {actionType && (
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
          )}
          {actionItem && <p className="font-semibold">{actionItem}</p>}
        </div>
      </div>
      {title && <p className="font-semibold">{title}</p>}
      {text && <p>{text}</p>}
      <p className="text-custom-gray-700">
        {formattedDate} {time}
      </p>
    </div>
  );
}

export default NotificationsModalModalItem;
