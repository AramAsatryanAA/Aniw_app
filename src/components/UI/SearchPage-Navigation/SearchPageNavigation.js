"use client";

import { useSelector } from "react-redux";

import SearchPageNavigationItem from "./SearchPageNavigationItem";

function SearchPageNavigation() {
  const { searchedPosts, searchedPostComments } = useSelector(
    (state) => state.posts,
  );
  const { searchedUsers } = useSelector((state) => state.users);
  const { searchedFiles, searchedFileComments } = useSelector(
    (state) => state.files,
  );
  const { searchedModels } = useSelector((state) => state.models);

  return (
    <div className="flex flex-wrap items-center gap-3 whitespace-nowrap md:gap-4">
      {searchedPosts.length > 0 && (
        <SearchPageNavigationItem path="/search/posts" title="Posts" />
      )}
      {(searchedPostComments.length > 0 || searchedFileComments.length > 0) && (
        <SearchPageNavigationItem path="/search/comments" title="Comments" />
      )}
      {searchedUsers.length > 0 && (
        <SearchPageNavigationItem path="/search/users" title="Users" />
      )}
      {searchedFiles.length > 0 && (
        <SearchPageNavigationItem path="/search/files" title="Files" />
      )}
      {searchedModels.length > 0 && (
        <SearchPageNavigationItem path="/search/3d-models" title="3D Models" />
      )}
    </div>
  );
}

export default SearchPageNavigation;
