"use client";

import { useSelector } from "react-redux";

import SearchPostsList from "./SearchPostsList";

function SearchPostsPageContent() {
  const { posts, searchQuery } = useSelector((state) => state.posts);

  const searchedPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery) ||
      post.text.toLowerCase().includes(searchQuery)
    );
  });

  return <SearchPostsList postsList={searchedPosts} />;
}

export default SearchPostsPageContent;
