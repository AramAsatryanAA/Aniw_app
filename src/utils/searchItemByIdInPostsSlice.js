export function searchItemByIdInPostsSlice(
  state,
  itemId,
  postItemId,
  commentItemId,
  replyItemId,
) {
  // 1. --- Искать в "posts", если нашли, возвращяем
  const currentPost = state.posts.find((post) => post.id === itemId);
  if (currentPost) return currentPost;

  // 2. --- Искать в "comments", если нашли, возвращяем
  const currentComment = state.comments.find(
    (comment) => comment.postId === postItemId && comment.id === itemId,
  );
  if (currentComment) return currentComment;

  // 3. --- Искать в "replies", если нашли, возвращяем
  const currentReply = state.replies.find(
    (reply) =>
      reply.postId === postItemId &&
      reply.commentId === commentItemId &&
      reply.id === itemId,
  );
  if (currentReply) return currentReply;

  // 4. --- Искать в "repliesToReply / repliesList", если нашли, возвращяем
  const currentReplyToReply = state.replies.reduce((acc, reply) => {
    if (reply.repliesList.length === 0) return acc;

    const foundedReply = reply.repliesList.find((replyToReply) => {
      return (
        replyToReply.postId === postItemId &&
        replyToReply.commentId === commentItemId &&
        replyToReply.replyId === replyItemId &&
        replyToReply.id === itemId
      );
    });

    if (!foundedReply) return acc;

    return (acc = foundedReply);
  }, {});
  if (currentReplyToReply) return currentReplyToReply;

  // 5. --- Если после всех шагов ничего не нашли, возвращяем "null"
  return null;
}
