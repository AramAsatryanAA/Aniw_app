"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import { formatDate } from "@/utils/formatDate";
import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemCommentsPart from "UI/ItemCustomParts/ItemCommentsPart";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";

function SearchCommentsListItem({ commentItem }) {
  const { theme } = useTheme();

  const {
    postId,
    postAvatar,
    postAuthor,
    postDate,
    postTime,
    postTitle,
    fileId,
    fileAvatar,
    fileAuthor,
    fileDate,
    fileTime,
    fileTitle,
    avatar,
    author,
    date,
    time,
    comment,
    likesNumber,
    repliesNumber,
  } = commentItem;

  const itemType = postId ? "post" : fileId ? "file" : "";

  const formattedDate = formatDate(postDate ? postDate : fileDate);

  return (
    <div className="item-card-type">
      <div className="mb-4 flex flex-col gap-3 border-b border-custom-gray-300 pb-3 dark:border-custom-black-300">
        <div className="flex items-center gap-3 whitespace-nowrap text-sm">
          <span className="inline-block h-6 w-6">
            <Image
              src={postAvatar ? postAvatar : fileAvatar}
              alt="User Avatar"
              width={250}
              height={250}
            />
          </span>
          <div className="mr-auto lg:flex lg:items-center lg:gap-2">
            <p>{postAuthor ? postAuthor : fileAuthor}</p>
            <p className="text-custom-gray-700">
              {formattedDate} {postTime ? postTime : fileTime}
            </p>
          </div>
        </div>
        <Link
          href={`${
            itemType === "post"
              ? `/posts/${postId}`
              : itemType === "file"
              ? `/files/${fileId}`
              : ""
          }`}
          className="block text-base font-semibold transition-all hover:opacity-90"
        >
          {postTitle ? postTitle : fileTitle}
        </Link>
      </div>
      <div className="ml-3 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <ItemHeadingPart
            theme={theme}
            avatar={avatar}
            author={author}
            date={date}
            time={time}
            itemType={itemType}
          />
          <p className="mb-1 text-sm">{comment}</p>
          <div className="flex items-center gap-3">
            <ItemLikesPart theme={theme} likesNumber={likesNumber} />
            <ItemCommentsPart theme={theme} commentsNumber={repliesNumber} />
            <div className="rounded-3xl px-3 py-[6px]">Reply</div>
            <ItemSharePart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCommentsListItem;
