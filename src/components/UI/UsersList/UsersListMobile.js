import UsersListMobileItem from "./UsersListMobileItem";

function UsersListMobile({ users }) {
  return (
    <ul className="flex flex-col gap-3 ">
      {users.map((user) => (
        <li key={user.id}>
          <UsersListMobileItem user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UsersListMobile;
