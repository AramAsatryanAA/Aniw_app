"use client";

import { useSelector } from "react-redux";

import FileItemContent from "./FileItemContent";
import ItemComments from "@/components/UI/ItemComments/ItemComments";

function FileItemWithComments({ fileId }) {
  const { files, comments, replies } = useSelector((state) => state.files);
  const fileItem = files.find((file) => file.id === fileId);
  const fileItemComments = comments.filter(
    (comment) => comment.fileId === fileId,
  );
  const fileItemReplies = replies.filter((reply) => reply.fileId === fileId);

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <FileItemContent fileItem={fileItem} />
      <ItemComments
        slice="files"
        fileItemId={fileId}
        comments={fileItemComments}
        replies={fileItemReplies}
      />
    </div>
  );
}

export default FileItemWithComments;
