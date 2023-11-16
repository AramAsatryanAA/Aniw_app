"use client";

import { useSelector } from "react-redux";

import FilesListItem from "./FilesListItem";

function FilesList() {
  const { files } = useSelector((state) => state.files);

  return (
    <ul className="flex flex-col gap-4">
      {files.map((file) => (
        <li key={file.id}>
          <FilesListItem fileItem={file} />
        </li>
      ))}
    </ul>
  );
}

export default FilesList;
