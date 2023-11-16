"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import PostItemMenuBlock from "UI/PostItemMenu-Block/PostItemMenuBlock";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemCommentsPart from "UI/ItemCustomParts/ItemCommentsPart";
import ItemReplyPart from "UI/ItemCustomParts/ItemReplyPart";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";
import CommentItemReplies from "./CommentItemReplies/CommentItemReplies";

function CommentItem({
  slice,
  postItemId,
  fileItemId,
  modelItemId,
  commentItem,
  replies,
}) {
  const { theme } = useTheme();
  const [showCommentReplies, setShowCommentReplies] = useState(false);

  const {
    id,
    avatar,
    author,
    date,
    time,
    comment,
    likesNumber,
    userVoteType,
    repliesNumber,
  } = commentItem;

  const commentItemReplies = replies.filter((reply) => reply.commentId === id);

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
        <p className="mb-1 text-sm">{comment}</p>
        <div className="flex items-center gap-3">
          <ItemLikesPart
            theme={theme}
            slice={slice}
            likesNumber={likesNumber}
            userVoteType={userVoteType}
            postItemId={postItemId}
            fileItemId={fileItemId}
            modelItemId={modelItemId}
            itemId={id}
          />
          <ItemCommentsPart theme={theme} commentsNumber={repliesNumber} />
          <ItemReplyPart
            onToggleCommentRepliesVisibility={() =>
              setShowCommentReplies((prevState) => !prevState)
            }
          />
          <ItemSharePart />
        </div>
      </div>
      {showCommentReplies && (
        <CommentItemReplies
          slice={slice}
          repliesList={commentItemReplies}
          postItemId={postItemId}
          fileItemId={fileItemId}
          modelItemId={modelItemId}
          commentItemId={id}
          onCloseCommentReplies={() =>
            setShowCommentReplies((prevState) => !prevState)
          }
        />
      )}
    </div>
  );
}

export default CommentItem;
