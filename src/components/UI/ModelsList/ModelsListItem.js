"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import ModelItemMenuBlock from "UI/ModelItemMenu-Block/ModelItemMenuBlock";
import ItemCategoriesPart from "UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemDownloadsPart from "UI/ItemCustomParts/ItemDownloadsPart";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";

function ModelsListItem({ modelItem }) {
  const { theme } = useTheme();

  const {
    id,
    avatar,
    author,
    image,
    isPremium,
    title,
    categories,
    likesNumber,
    userVoteType,
    downloadsNumber,
    commentsNumber,
  } = modelItem;

  return (
    <div className="item-card-type flex flex-col gap-3">
      <div className="flex items-center gap-3 whitespace-nowrap text-sm">
        <ItemHeadingPart avatar={avatar} author={author} />
        <ModelItemMenuBlock theme={theme} />
      </div>
      <div className="relative inline-block w-full">
        <Image
          src={image}
          alt="Model Image"
          width={700}
          height={400}
          priority
          className="rounded-lg"
        />
        {isPremium && (
          <div className="absolute right-3 top-3 inline-block rounded-lg bg-custom-gold px-2 py-1 text-sm text-white">
            Premium
          </div>
        )}
      </div>
      <Link
        href={`/3d-models/${id}`}
        className="mb-1 block text-base font-semibold transition-all hover:opacity-90"
      >
        {title}
      </Link>
      <div className="mb-2">
        <ItemCategoriesPart categories={categories} />
      </div>
      <div className="flex items-center gap-3">
        <ItemLikesPart
          theme={theme}
          slice="models"
          likesNumber={likesNumber}
          userVoteType={userVoteType}
          itemId={id}
        />
        <ItemDownloadsPart theme={theme} downloadsNumber={downloadsNumber} />
        <Link
          href={`/3d-models/${id}#addComment`}
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

export default ModelsListItem;
