import { useDispatch } from "react-redux";
import Image from "next/image";

import { voteOnPostsSliceItem } from "@/store/posts/postsSlice";
import { voteOnFilesSliceItem } from "@/store/files/filesSlice";
import { voteOnModelsSliceItem } from "@/store/models/modelsSlice";

function ItemLikesPart({
  theme,
  slice,
  likesNumber,
  userVoteType,
  itemId,
  postItemId,
  fileItemId,
  modelItemId,
  commentItemId,
  replyItemId,
}) {
  const dispatch = useDispatch();

  function voteOnItemHandler(newVote) {
    slice === "posts"
      ? dispatch(
          voteOnPostsSliceItem({
            itemId,
            postItemId,
            commentItemId,
            replyItemId,
            newVote,
          }),
        )
      : slice === "files"
      ? dispatch(
          voteOnFilesSliceItem({
            itemId,
            fileItemId,
            commentItemId,
            replyItemId,
            newVote,
          }),
        )
      : slice === "models"
      ? dispatch(
          voteOnModelsSliceItem({
            itemId,
            modelItemId,
            commentItemId,
            replyItemId,
            newVote,
          }),
        )
      : "";
  }

  return (
    <div className="flex items-center gap-2 rounded-3xl bg-custom-gray-100 dark:bg-custom-black-300">
      <button
        className={`button-card-type h-8 w-8 rounded-full border p-1 ${
          userVoteType === "like"
            ? "border-black dark:border-white"
            : "border-transparent"
        }`}
        onClick={() => voteOnItemHandler("like")}
      >
        <Image
          src={theme === "dark" ? "/arrow_up-dark.svg" : "/arrow_up-light.svg"}
          alt="Arrow Up Icon"
          width={50}
          height={50}
        />
      </button>
      <span className="text-sm">{likesNumber}</span>
      <button
        className={`button-card-type h-8 w-8 rounded-full border p-1 ${
          userVoteType === "dislike"
            ? "border-black dark:border-white"
            : "border-transparent"
        }`}
        onClick={() => voteOnItemHandler("dislike")}
      >
        <Image
          src={
            theme === "dark" ? "/arrow_down-dark.svg" : "/arrow_down-light.svg"
          }
          alt="Arrow Down Icon"
          width={50}
          height={50}
        />
      </button>
    </div>
  );
}

export default ItemLikesPart;
