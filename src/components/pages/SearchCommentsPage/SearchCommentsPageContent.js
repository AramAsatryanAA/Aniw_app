"use client";

import { useSelector } from "react-redux";

import SearchCommentList from "./SearchCommentsList";

function SearchCommentsPageContent() {
  const { posts, searchQuery } = useSelector((state) => state.posts);
  const postComments = useSelector((state) => state.posts.comments);
  const { files } = useSelector((state) => state.files);
  const fileComments = useSelector((state) => state.files.comments);

  const filteredPostComments = postComments.filter((comment) => {
    return comment.comment.toLowerCase().includes(searchQuery);
  });
  const searchedPostComments = filteredPostComments.map((comment) => {
    const post = posts.find((post) => post.id === comment.postId);

    return {
      ...comment,
      postAvatar: post.avatar,
      postAuthor: post.author,
      postDate: post.date,
      postTime: post.time,
      postTitle: post.title,
    };
  });

  const filteredFileComments = fileComments.filter((comment) => {
    return comment.comment.toLowerCase().includes(searchQuery);
  });
  const searchedFileComments = filteredFileComments.map((comment) => {
    const file = files.find((file) => file.id === comment.fileId);

    return {
      ...comment,
      fileAvatar: file.avatar,
      fileAuthor: file.author,
      fileDate: file.date,
      fileTime: file.time,
      fileTitle: file.title,
    };
  });

  const commentsList = [...searchedPostComments, ...searchedFileComments];

  return <SearchCommentList commentList={commentsList} />;
}

export default SearchCommentsPageContent;
