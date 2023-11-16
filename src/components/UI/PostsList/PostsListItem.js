"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import PostItemMenuBlock from "UI/PostItemMenu-Block/PostItemMenuBlock";
import ItemCategoriesPart from "UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemViewsPart from "UI/ItemCustomParts/ItemViewsPart";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";

function PostsListItem({ postItem }) {
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
    categories,
    likesNumber,
    userVoteType,
    viewsNumber,
    commentsNumber,
  } = postItem;

  return (
    <div className="item-card-type flex flex-col gap-3">
      <div className="flex items-center gap-3 whitespace-nowrap text-sm">
        <ItemHeadingPart
          avatar={avatar}
          author={author}
          date={date}
          time={time}
        />
        <PostItemMenuBlock theme={theme} />
      </div>
      <Link
        href={`/posts/${id}`}
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
          slice="posts"
          likesNumber={likesNumber}
          userVoteType={userVoteType}
          itemId={id}
        />
        <ItemViewsPart theme={theme} viewsNumber={viewsNumber} />
        <Link
          href={`/posts/${id}#addComment`}
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

export default PostsListItem;
