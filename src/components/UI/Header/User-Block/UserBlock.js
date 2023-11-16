import Image from "next/image";

import UserBlockModal from "./UserBlock-Modals/UserBlockModal";

function UserBlock({
  showUserModal,
  onCloseUserModal,
  onToggleUserModalVisibility,
}) {
  return (
    <div className="relative">
      <button
        className="h-10 w-10 rounded-full"
        onClick={onToggleUserModalVisibility}
      >
        <Image
          src="/avatar_profile.png"
          alt="User Avatar"
          width={300}
          height={300}
        />
      </button>
      {showUserModal && <UserBlockModal onCloseUserModal={onCloseUserModal} />}
    </div>
  );
}

export default UserBlock;
