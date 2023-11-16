"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import PostItemMenuBlock from "UI/PostItemMenu-Block/PostItemMenuBlock";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemCommentsPart from "UI/ItemCustomParts/ItemCommentsPart";
import ItemReplyPart from "UI/ItemCustomParts/ItemReplyPart";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";
import CommentItemReplies from "./CommentItemReplies";

function ReplyItem({
  slice,
  replyItem,
  postItemId,
  fileItemId,
  modelItemId,
  commentItemId,
  replyItemId,
}) {
  const { theme } = useTheme();

  const [showReplyReplies, setShowReplyReplies] = useState(false);

  const {
    id,
    avatar,
    author,
    date,
    time,
    reply,
    likesNumber,
    userVoteType,
    repliesNumber,
    repliesList,
  } = replyItem;

  return (
    <div className="flex flex-col gap-6 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 whitespace-nowrap text-sm">
          <ItemHeadingPart
            avatar={avatar}
            author={author}
            date={date}
            time={time}
          />
          <PostItemMenuBlock theme={theme} />
        </div>
        <p className="mb-1 text-sm">{reply}</p>
        <div className="flex items-center gap-3">
          <ItemLikesPart
            theme={theme}
            slice={slice}
            likesNumber={likesNumber}
            userVoteType={userVoteType}
            postItemId={postItemId}
            fileItemId={fileItemId}
            modelItemId={modelItemId}
            commentItemId={commentItemId}
            replyItemId={replyItemId}
            itemId={id}
          />
          <ItemCommentsPart theme={theme} commentsNumber={repliesNumber} />
          <ItemReplyPart
            onToggleCommentRepliesVisibility={() =>
              setShowReplyReplies((prevState) => !prevState)
            }
          />
          <ItemSharePart />
        </div>
      </div>
      {showReplyReplies && (
        <CommentItemReplies
          slice={slice}
          repliesList={repliesList}
          postItemId={postItemId}
          fileItemId={fileItemId}
          modelItemId={modelItemId}
          commentItemId={commentItemId}
          replyItemId={id}
          onCloseCommentReplies={() =>
            setShowReplyReplies((prevState) => !prevState)
          }
        />
      )}
    </div>
  );
}

export default ReplyItem;
