function ItemReplyPart({ onToggleCommentRepliesVisibility }) {
  return (
    <button
      className="button-card-type rounded-3xl px-3 py-[6px]"
      onClick={onToggleCommentRepliesVisibility}
    >
      Reply
    </button>
  );
}

export default ItemReplyPart;
