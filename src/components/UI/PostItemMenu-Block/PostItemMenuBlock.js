"use client";

import { useState } from "react";
import Image from "next/image";

import PostItemMenuModal from "./PostItemMenuBlock-Modals/PostItemMenuModal";
import PostItemReportModal from "./PostItemMenuBlock-Modals/PostItemReportModal";

function PostItemMenuBlock({ theme }) {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <div className="relative">
      <button
        className={`h-8 w-8 rounded-full p-1 transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300  ${
          showMenuModal && "bg-custom-gray-100 dark:bg-custom-black-300"
        }`}
        onClick={() => setShowMenuModal((prevState) => !prevState)}
      >
        <Image
          src={theme === "dark" ? "/dots-dark.svg" : "/dots-light.svg"}
          alt="Dots Icon"
          width={50}
          height={50}
        />
      </button>
      {showMenuModal && (
        <div className="absolute right-0 top-10 z-[888] whitespace-nowrap">
          {showReportModal ? (
            <PostItemReportModal
              theme={theme}
              onCloseReportModal={() => {
                setShowReportModal(false);
                setShowMenuModal(false);
              }}
            />
          ) : (
            <PostItemMenuModal
              onCloseMenuModal={() => setShowMenuModal(false)}
              onShowReportModal={() => {
                setShowReportModal(true);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default PostItemMenuBlock;
