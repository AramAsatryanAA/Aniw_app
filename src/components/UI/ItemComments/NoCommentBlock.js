import { useTheme } from "next-themes";
import Image from "next/image";

function NoCommentBlock({ itemType }) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-1 rounded-lg bg-custom-gray-100 py-3 text-base dark:bg-custom-black-300">
      <span className="inline-block h-8 w-8">
        <Image
          src={theme === "dark" ? "/comment-dark.svg" : "/comment-light.svg"}
          alt="Comment Icon"
          width={50}
          height={50}
        />
      </span>
      <p className="text-base text-custom-gray-900">No {itemType} added yet</p>
    </div>
  );
}

export default NoCommentBlock;
