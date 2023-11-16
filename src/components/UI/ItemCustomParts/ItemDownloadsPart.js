import Image from "next/image";

function ItemDownloadsPart({ theme, downloadsNumber }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <span className="inline-block h-6 w-6">
        <Image
          src={theme === "dark" ? "/download-dark.svg" : "/download-light.svg"}
          alt="View Icon"
          width={50}
          height={50}
        />
      </span>
      <span className="text-sm">{downloadsNumber}</span>
    </div>
  );
}

export default ItemDownloadsPart;
