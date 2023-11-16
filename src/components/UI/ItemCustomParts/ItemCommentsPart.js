import Image from "next/image";

function ItemCommentsPart({ theme, commentsNumber }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <span className="inline-block h-6 w-6">
        <Image
          src={theme === "dark" ? "/comment-dark.svg" : "/comment-light.svg"}
          alt="Comment Icon"
          width={50}
          height={50}
        />
      </span>
      <span className="text-sm">{commentsNumber}</span>
    </div>
  );
}

export default ItemCommentsPart;
