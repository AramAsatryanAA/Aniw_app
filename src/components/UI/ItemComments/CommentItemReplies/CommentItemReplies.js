import AddReplyBlock from "./AddReplyBlock";
import ReplyItem from "./ReplyItem";
import NoCommentBlock from "UI/ItemComments/NoCommentBlock";

function CommentItemReplies({
  slice,
  repliesList,
  postItemId,
  fileItemId,
  modelItemId,
  commentItemId,
  replyItemId,
  onCloseCommentReplies,
}) {
  return (
    <div className="flex flex-col gap-6 pl-4 xl:pl-8">
      <AddReplyBlock onCloseCommentReplies={onCloseCommentReplies} />
      {repliesList?.length > 0 ? (
        <ul className="flex flex-col gap-6">
          {repliesList.map((reply) => (
            <ReplyItem
              key={reply.id}
              slice={slice}
              replyItem={reply}
              postItemId={postItemId}
              fileItemId={fileItemId}
              modelItemId={modelItemId}
              replyItemId={replyItemId}
              commentItemId={commentItemId}
            />
          ))}
        </ul>
      ) : (
        <NoCommentBlock itemType="reply" />
      )}
    </div>
  );
}

export default CommentItemReplies;
