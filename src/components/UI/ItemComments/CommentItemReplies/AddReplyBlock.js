function AddReplyBlock({ onCloseCommentReplies }) {
  return (
    <div className="flex flex-col gap-4">
      <textarea placeholder="Add reply" rows={4} className="input-type" />
      <div className="flex items-center gap-3">
        <button
          className="button-gray-type px-10"
          onClick={onCloseCommentReplies}
        >
          Cancel
        </button>
        <button
          className="button-blue-type px-10"
          onClick={onCloseCommentReplies}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AddReplyBlock;
