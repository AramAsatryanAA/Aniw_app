"use client";

import { useSelector } from "react-redux";

import ModelItemContent from "./ModelItemContent";
import ItemComments from "@/components/UI/ItemComments/ItemComments";

function ModelItemWithComments({ modelId }) {
  const { models, comments, replies } = useSelector((state) => state.models);
  const modelItem = models.find((model) => model.id === modelId);
  const modelItemComments = comments.filter(
    (comment) => comment.modelId === modelId,
  );
  const modelItemReplies = replies.filter((reply) => reply.modelId === modelId);
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <ModelItemContent modelItem={modelItem} />
      <ItemComments
        slice="models"
        modelItemId={modelId}
        comments={modelItemComments}
        replies={modelItemReplies}
      />
    </div>
  );
}

export default ModelItemWithComments;
