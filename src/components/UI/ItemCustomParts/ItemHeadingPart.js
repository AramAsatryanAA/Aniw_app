import Image from "next/image";

import { formatDate } from "@/utils/formatDate";

function ItemHeadingPart({ avatar, author, date, time }) {
  const formattedDate = formatDate(date);

  return (
    <>
      <span className="inline-block h-6 w-6">
        <Image src={avatar} alt="User Avatar" width={250} height={250} />
      </span>
      <div className="mr-auto lg:flex lg:items-center lg:gap-2">
        <p>{author}</p>
        {date && time && (
          <p className="text-custom-gray-900">
            {formattedDate} {time}
          </p>
        )}
      </div>
    </>
  );
}

export default ItemHeadingPart;
