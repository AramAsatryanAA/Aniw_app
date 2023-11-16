"use client";

import { useSelector } from "react-redux";

import PostItemContent from "./PostItemContent";
import ItemComments from "@/components/UI/ItemComments/ItemComments";

function PostItemWithComments({ postId }) {
  const { posts, comments, replies } = useSelector((state) => state.posts);
  const postItem = posts.find((post) => post.id === postId);
  const postItemComments = comments.filter(
    (comment) => comment.postId === postId,
  );
  const postItemReplies = replies.filter((reply) => reply.postId === postId);

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <PostItemContent postItem={postItem} />
      <ItemComments
        slice="posts"
        postItemId={postId}
        comments={postItemComments}
        replies={postItemReplies}
      />
    </div>
  );
}

export default PostItemWithComments;
