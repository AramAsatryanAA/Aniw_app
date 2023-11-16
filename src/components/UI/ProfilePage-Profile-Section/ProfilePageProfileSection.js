"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

function ProfilePageProfileSection() {
  const { theme } = useTheme();

  return (
    <div className="flex w-full flex-col gap-6 whitespace-nowrap border-b border-custom-gray-300 pb-6 dark:border-custom-black-300 sm:w-[220px] lg:border-none">
      <div className="flex flex-col gap-6">
        <div className="relative h-[84px] w-[84px]">
          <Image
            src="/avatar_profile.png"
            alt="Avatar Profile"
            width={500}
            height={500}
          />
          <div className="absolute left-0 top-0 h-5 w-5 rounded-full border-4 border-custom-gray-100 bg-custom-green dark:border-custom-black-500" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-2xl font-semibold">Lucas Pacheco</h1>
          <p className="text-sm">lucaspacheco</p>
          <p className="rounded-lg bg-white px-2 py-[2px] text-sm dark:bg-custom-black-300">
            Admin
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={
                theme === "dark" ? "/location-dark.svg" : "/location-light.svg"
              }
              alt="Location Icon"
              width={50}
              height={50}
            />
          </span>
          <p className="text-sm">Russia Moscow</p>
        </div>
        <button className="button-black-type w-full max-w-[220px]">
          Edit Profile
        </button>
      </div>
      <div className="flex flex-col gap-4 border-y border-custom-gray-300 py-6 text-base dark:border-custom-black-300">
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/post-dark.svg" : "/post-light.svg"}
              alt="Post Icon"
              width={50}
              height={50}
            />
          </span>
          <span>Posts</span>
          <span className="ml-auto">0</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={
                theme === "dark" ? "/comment-dark.svg" : "/comment-light.svg"
              }
              alt="Comment Icon"
              width={50}
              height={50}
            />
          </span>
          <span>Comments</span>
          <span className="ml-auto">0</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/file-dark.svg" : "/file-light.svg"}
              alt="File Icon"
              width={50}
              height={50}
            />
          </span>
          <span>Files</span>
          <span className="ml-auto">0</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={
                theme === "dark" ? "/project-dark.svg" : "/project-light.svg"
              }
              alt="Project Icon"
              width={50}
              height={50}
            />
          </span>
          <span>Projects</span>
          <span className="ml-auto">0</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 text-base">
        <span>Registration</span>
        <span>Yan 25, 2023</span>
      </div>
    </div>
  );
}

export default ProfilePageProfileSection;
