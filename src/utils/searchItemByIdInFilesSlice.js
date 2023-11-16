export function searchItemByIdInFilesSlice(
  state,
  itemId,
  fileItemId,
  commentItemId,
  replyItemId,
) {
  // 1. --- Искать в "files", если нашли, возвращяем
  const currentFile = state.files.find((file) => file.id === itemId);
  if (currentFile) return currentFile;

  // 2. --- Искать в "comments", если нашли, возвращяем
  const currentComment = state.comments.find(
    (comment) => comment.fileId === fileItemId && comment.id === itemId,
  );
  if (currentComment) return currentComment;

  // 3. --- Искать в "replies", если нашли, возвращяем
  const currentReply = state.replies.find(
    (reply) =>
      reply.fileId === fileItemId &&
      reply.commentId === commentItemId &&
      reply.id === itemId,
  );
  if (currentReply) return currentReply;

  // 4. --- Искать в "repliesToReply / repliesList", если нашли, возвращяем
  const currentReplyToReply = state.replies.reduce((acc, reply) => {
    if (reply.repliesList.length === 0) return acc;

    const foundedReply = reply.repliesList.find((replyToReply) => {
      return (
        replyToReply.fileId === fileItemId &&
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
