"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { searchPosts, searchPostComments } from "@/store/posts/postsSlice";
import { searchFiles, searchFileComments } from "@/store/files/filesSlice";
import { searchModels } from "@/store/models/modelsSlice";
import { searchUsers, removeUsersSearchQuery } from "@/store/users/usersSlice";

function SearchBlock({ autoFocus, onCloseSearchBlock }) {
  const { theme } = useTheme();

  const { searchedPosts, searchedPostComments } = useSelector(
    (state) => state.posts,
  );
  const { searchedFiles, searchedFileComments } = useSelector(
    (state) => state.files,
  );
  const { searchedUsers } = useSelector((state) => state.users);
  const { searchedModels } = useSelector((state) => state.models);

  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const searchResultIsEmpty =
    searchQuery === "" ||
    (searchedPosts.length === 0 &&
      searchPostComments.length > 0 &&
      searchedUsers.length === 0 &&
      searchedFiles.length === 0 &&
      searchedModels.length === 0);

  function searchHandler(event) {
    setSearchQuery(event.target.value);

    const newSearchQuery = event.target.value.trim().toLowerCase();

    if (newSearchQuery) {
      dispatch(searchPosts(newSearchQuery));
      dispatch(searchPostComments(newSearchQuery));
      dispatch(searchFileComments(newSearchQuery));
      dispatch(searchUsers(newSearchQuery));
      dispatch(searchFiles(newSearchQuery));
      dispatch(searchModels(newSearchQuery));
    }
  }

  function closeSearchHandler() {
    setSearchQuery("");
    onCloseSearchBlock && onCloseSearchBlock();
  }

  return (
    <div className="relative">
      <div className="relative">
        <span className="absolute left-4 top-3 inline-block h-6 w-6">
          <Image
            src={theme === "dark" ? "/search-dark.svg" : "/search-light.svg"}
            alt="Search Icon"
            width={50}
            height={50}
          />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          autoFocus={autoFocus}
          className="search-input-type bg-custom-gray-100 dark:bg-custom-black-500 dark:focus:bg-custom-black-500"
          onChange={(event) => searchHandler(event)}
        />
        <button
          className={`absolute right-4 top-3 h-6 w-6 ${
            searchQuery ? "lg:block" : "lg:hidden"
          }`}
          onClick={closeSearchHandler}
        >
          <Image
            src={theme === "dark" ? "/close-dark.svg" : "/close-light.svg"}
            alt="Search Icon"
            width={50}
            height={50}
          />
        </button>
      </div>
      {!searchResultIsEmpty && (
        <div className="absolute z-50 mt-1 flex max-h-[85vh] w-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-custom-gray-300 bg-white py-3 dark:border-custom-black-300 dark:bg-custom-black-100 lg:py-5">
          <div className="mr-1 overflow-auto">
            {searchedPosts.length > 0 && (
              <div>
                <div className="mx-4 mb-1 text-base font-semibold lg:mx-6">
                  Posts
                </div>
                {searchedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/posts/${post.id}`}
                    onClick={() => setSearchQuery("")}
                    className="flex w-full cursor-pointer items-center gap-3 px-6 py-3 text-base transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300"
                  >
                    <span className="inline-block h-10 w-10">
                      <Image
                        src={post.avatar}
                        alt="User Avatar"
                        width={250}
                        height={250}
                      />
                    </span>
                    <div className="text-sm">
                      <p>{post.title}</p>
                      <p className="text-custom-gray-700">{post.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {(searchedPostComments.length > 0 ||
              searchFileComments.length > 0) && (
              <div>
                <div className="mx-4 mb-1 text-base font-semibold lg:mx-6">
                  Comments
                </div>
                {searchedPostComments.length > 0 &&
                  searchedPostComments.map((comment) => (
                    <Link
                      key={comment.postId + comment.id}
                      href={`/posts/${comment.postId}#addComment`}
                      onClick={() => setSearchQuery("")}
                      className="flex w-full cursor-pointer items-center gap-3 px-6 py-3 text-base transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300"
                    >
                      <span className="inline-block h-10 w-10">
                        <Image
                          src={comment.avatar}
                          alt="User Avatar"
                          width={250}
                          height={250}
                        />
                      </span>
                      <div className="text-sm">
                        <p>{comment.postTitle}</p>
                        <p className="text-custom-gray-700">{comment.author}</p>
                      </div>
                    </Link>
                  ))}
                {searchedFileComments.length > 0 &&
                  searchedFileComments.map((comment) => (
                    <Link
                      key={comment.fileId + comment.id}
                      href={`/files/${comment.fileId}#addComment`}
                      onClick={() => setSearchQuery("")}
                      className="flex w-full cursor-pointer items-center gap-3 px-6 py-3 text-base transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300"
                    >
                      <span className="inline-block h-10 w-10">
                        <Image
                          src={comment.avatar}
                          alt="User Avatar"
                          width={250}
                          height={250}
                        />
                      </span>
                      <div className="text-sm">
                        <p>{comment.fileTitle}</p>
                        <p className="text-custom-gray-700">{comment.author}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
            {searchedUsers.length > 0 && (
              <div>
                <div className="mx-4 mb-1 text-base font-semibold lg:mx-6">
                  Users
                </div>
                {searchedUsers.map((user) => (
                  <Link
                    key={user.id}
                    href="users"
                    onClick={() => setSearchQuery("")}
                    className="flex w-full cursor-pointer items-center gap-3 px-6 py-3 text-base transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300"
                  >
                    <span className="inline-block h-10 w-10">
                      <Image
                        src={user.avatar}
                        alt="User Avatar"
                        width={250}
                        height={250}
                      />
                    </span>
                    <div className="text-sm">
                      <p>{user.fullName}</p>
                      <p className="text-custom-gray-700">{user.nickName}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {searchedFiles.length > 0 && (
              <div>
                <div className="mx-4 mb-1 text-base font-semibold lg:mx-6">
                  Files
                </div>
                {searchedFiles.map((file) => (
                  <Link
                    key={file.id}
                    href={`/files/${file.id}`}
                    onClick={() => setSearchQuery("")}
                    className="flex w-full cursor-pointer items-center gap-3 px-6 py-3 text-base transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300"
                  >
                    <span className="inline-block h-10 w-10">
                      <Image
                        src={file.image ? file.image : file.avatar}
                        alt="User Avatar"
                        width={250}
                        height={250}
                        className="object-cover"
                      />
                    </span>
                    <div className="text-sm">
                      <p>{file.title}</p>
                      <p className="text-custom-gray-700">{file.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {searchedModels.length > 0 && (
              <div>
                <div className="mx-4 mb-1 text-base font-semibold lg:mx-6">
                  3D Models
                </div>
                {searchedModels.map((model) => (
                  <Link
                    key={model.id}
                    href={`/3d-models/${model.id}`}
                    onClick={() => setSearchQuery("")}
                    className="flex w-full cursor-pointer items-center gap-3 px-6 py-3 text-base transition-all hover:bg-custom-gray-100 dark:hover:bg-custom-black-300"
                  >
                    <span className="inline-block h-10 w-10">
                      <Image
                        src={model.image}
                        alt="User Avatar"
                        width={250}
                        height={250}
                        className="object-cover"
                      />
                    </span>
                    <div className="text-sm">
                      <p>{model.title}</p>
                      <p className="text-custom-gray-700">{model.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href={
              searchedPosts.length > 0
                ? "/search/posts"
                : searchPostComments.length > 0 || searchFileComments.length > 0
                ? "search/comments"
                : searchedUsers.length > 0
                ? "search/users"
                : searchedFiles.length > 0
                ? "/search/files"
                : searchedModels.length > 0
                ? "/search/3d-models"
                : "#"
            }
            className="button-black-type mx-6"
            onClick={() => {
              setSearchQuery("");
              dispatch(removeUsersSearchQuery());
            }}
          >
            View all results
          </Link>
        </div>
      )}
    </div>
  );
}

export default SearchBlock;
