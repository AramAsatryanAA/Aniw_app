function AddCommentBlock() {
  return (
    <div className="flex flex-col gap-4">
      <textarea placeholder="Add comment" rows={4} className="input-type" />
      <button className="button-blue-type self-start px-10">Send</button>
    </div>
  );
}

export default AddCommentBlock;
