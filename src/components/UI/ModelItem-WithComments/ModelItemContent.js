"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import ModelItemMenuBlock from "UI/ModelItemMenu-Block/ModelItemMenuBlock";
import ItemAdditionalPartWithButton from "UI/ItemCustomParts/ItemAdditionalPartWithButton";
import ItemCategoriesPart from "UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemDownloadsPart from "UI/ItemCustomParts/ItemDownloadsPart";
import ItemCommentsPart from "UI/ItemCustomParts/ItemCommentsPart";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";

function ModelItemContent({ modelItem }) {
  const { theme } = useTheme();

  const {
    id,
    avatar,
    author,
    date,
    time,
    title,
    image,
    text,
    tools,
    fileType,
    size,
    categories,
    likesNumber,
    userVoteType,
    downloadsNumber,
    commentsNumber,
  } = modelItem;

  return (
    <div className="item-card-type flex flex-col gap-3">
      <div className="flex items-center gap-3 whitespace-nowrap text-sm">
        <ItemHeadingPart
          avatar={avatar}
          author={author}
          date={date}
          time={time}
        />
        <ModelItemMenuBlock theme={theme} />
      </div>
      {image && (
        <div className="inline-block w-full">
          <Image
            src={image}
            alt="Post Image"
            width={1500}
            height={900}
            className="rounded-lg"
          />
        </div>
      )}
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mb-1 text-sm">{text}</p>
      <div className="my-3">
        <ItemAdditionalPartWithButton
          tools={tools}
          fileType={fileType}
          size={size}
          btnText="Buy $45"
        />
      </div>
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
        <ItemCommentsPart theme={theme} commentsNumber={commentsNumber} />
        <ItemSharePart />
      </div>
    </div>
  );
}

export default ModelItemContent;
