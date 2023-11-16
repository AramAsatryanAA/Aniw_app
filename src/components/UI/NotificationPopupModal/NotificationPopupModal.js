"use client";

import Image from "next/image";

function NotificationPopupModal({ status, onCloseNotificationPopupModal }) {
  return (
    <div
      className={`flex items-center gap-3 self-start rounded-lg px-4 py-3 ${
        status === "blue"
          ? "bg-custom-blue-100"
          : status === "green"
          ? "bg-custom-green"
          : "bg-custom-red"
      }`}
    >
      <p className="text-base text-white">Text message</p>
      <button
        className="h-6 w-6 transition-all hover:scale-125"
        onClick={onCloseNotificationPopupModal}
      >
        <Image src="/close-dark.svg" alt="Close Icon" width={50} height={50} />
      </button>
    </div>
  );
}

export default NotificationPopupModal;
