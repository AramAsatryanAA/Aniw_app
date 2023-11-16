"use client";

import { useSelector } from "react-redux";

import PostsListItem from "./PostsListItem";

function PostsList() {
  const { posts } = useSelector((state) => state.posts);

  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post) => (
        <li key={post.id}>
          <PostsListItem postItem={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
