"use client";

import { useRouter } from "next/navigation";

function CreateItemFormButtons() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="button-gray-type px-10"
        onClick={() => router.back()}
      >
        Cancel
      </button>
      <button type="submit" className="button-blue-type px-10">
        Create
      </button>
    </div>
  );
}

export default CreateItemFormButtons;
