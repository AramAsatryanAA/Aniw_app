import Image from "next/image";

import { formatDate } from "@/utils/formatDate";

const usersListHeading = ["User", "Fullname", "Created at", "Country"];

function UsersListDesktop({ users }) {
  return (
    <div className="mb-6 rounded-xl bg-white px-6 py-1 dark:bg-custom-black-100">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-sm font-medium">
            {usersListHeading.map((heading) => (
              <th key={heading} className="pb-4 pt-5">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const {
              id,
              avatar,
              nickName,
              isAdmin,
              fullName,
              createdAt,
              country,
            } = user;

            const formattedDate = formatDate(createdAt);

            return (
              <tr
                key={id}
                className="border-t border-custom-gray-300 text-sm dark:border-custom-black-300"
              >
                <td className="flex items-center gap-3 py-4">
                  <span className="inline-block h-6 w-6">
                    <Image src={avatar} alt="Avatar" width={300} height={300} />
                  </span>
                  <span>{nickName}</span>
                  {isAdmin && (
                    <span className="rounded-lg bg-custom-gray-100 px-2 py-[2px] text-sm dark:bg-custom-black-300">
                      Admin
                    </span>
                  )}
                </td>
                <td>{fullName}</td>
                <td>{formattedDate}</td>
                <td>{country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersListDesktop;
