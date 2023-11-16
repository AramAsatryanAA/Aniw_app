"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import FileItemMenuBlock from "UI/FileItemMenu-Block/FileItemMenuBlock";
import ItemCategoriesPart from "UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemDownloadsPart from "UI/ItemCustomParts/ItemDownloadsPart";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";

function FilesListItem({ fileItem }) {
  const { theme } = useTheme();

  const {
    id,
    avatar,
    author,
    date,
    time,
    isPremium,
    title,
    image,
    text,
    categories,
    likesNumber,
    userVoteType,
    downloadsNumber,
    commentsNumber,
  } = fileItem;

  return (
    <div className="item-card-type flex flex-col gap-3">
      <div className="flex items-center gap-3 whitespace-nowrap text-sm">
        <ItemHeadingPart
          avatar={avatar}
          author={author}
          date={date}
          time={time}
        />
        <FileItemMenuBlock theme={theme} />
      </div>
      {isPremium && (
        <div className="inline-block self-start rounded-lg bg-custom-gold px-2 py-1 text-sm text-white">
          Premium
        </div>
      )}
      <Link
        href={`/files/${id}`}
        className="block text-base font-semibold transition-all hover:opacity-90"
      >
        {title}
      </Link>
      {image && (
        <div className="inline-block w-full">
          <Image
            src={image}
            alt="Post Image"
            width={700}
            height={400}
            priority
            className="rounded-lg"
          />
        </div>
      )}
      <p className="mb-1 text-sm">{text}</p>
      <div className="mb-2">
        <ItemCategoriesPart categories={categories} />
      </div>
      <div className="flex items-center gap-3">
        <ItemLikesPart
          theme={theme}
          slice="files"
          likesNumber={likesNumber}
          userVoteType={userVoteType}
          itemId={id}
        />
        <ItemDownloadsPart theme={theme} downloadsNumber={downloadsNumber} />
        <Link
          href={`/files/${id}#addComment`}
          className="button-card-type flex items-center gap-2 rounded-3xl px-2 py-1"
        >
          <span className="inline-block h-6 w-6">
            <Image
              src={
                theme === "dark" ? "/comment-dark.svg" : "/comment-light.svg"
              }
              alt="Comment Icon"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm">{commentsNumber}</span>
        </Link>
        <ItemSharePart />
      </div>
    </div>
  );
}

export default FilesListItem;
