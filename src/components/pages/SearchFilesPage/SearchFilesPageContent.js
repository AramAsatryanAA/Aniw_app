"use client";

import { useSelector } from "react-redux";

import SearchFilesList from "./SearchFilesList";

function SearchFilesPageContent() {
  const { files, searchQuery } = useSelector((state) => state.files);

  const searchedFiles = files.filter((file) => {
    return (
      file.title.toLowerCase().includes(searchQuery) ||
      file.text.toLowerCase().includes(searchQuery)
    );
  });

  return <SearchFilesList filesList={searchedFiles} />;
}

export default SearchFilesPageContent;
