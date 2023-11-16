import Image from "next/image";

import { formatDate } from "@/utils/formatDate";

function UsersListMobileItem({ user }) {
  const { avatar, isAdmin, nickName, fullName, createdAt, country } = user;

  const formattedDate = formatDate(createdAt);

  return (
    <div className="item-card-type">
      <div className="mb-3 flex items-start gap-3 border-b border-custom-gray-300 pb-3 dark:border-custom-black-300">
        <span className="inline-block h-12 w-12">
          <Image src={avatar} alt="User Avatar" width={300} height={300} />
        </span>
        <div>
          <p className="text-base font-semibold">{fullName}</p>
          <p className="text-sm">{nickName}</p>
        </div>
        {isAdmin && (
          <div className="ml-auto rounded-lg bg-custom-gray-100 px-2 py-[2px] text-sm dark:bg-custom-black-300">
            Admin
          </div>
        )}
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Created at</span>
        <span>{formattedDate}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Country</span>
        <span>{country}</span>
      </div>
    </div>
  );
}

export default UsersListMobileItem;
