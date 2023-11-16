import AddCommentBlock from "./AddCommentBlock";
import CommentItem from "./CommentItem";
import NoCommentBlock from "./NoCommentBlock";

function ItemComments({
  slice,
  postItemId,
  fileItemId,
  modelItemId,
  comments,
  replies,
}) {
  return (
    <div className="item-card-type flex flex-col gap-6" id="addComment">
      <AddCommentBlock />
      {comments.length > 0 ? (
        <ul className="flex flex-col gap-6">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              slice={slice}
              postItemId={postItemId}
              fileItemId={fileItemId}
              modelItemId={modelItemId}
              commentItem={comment}
              replies={replies}
            />
          ))}
        </ul>
      ) : (
        <NoCommentBlock itemType="comment" />
      )}
    </div>
  );
}

export default ItemComments;
