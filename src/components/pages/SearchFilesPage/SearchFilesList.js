import FilesListItem from "@/components/UI/FilesList/FilesListItem";

function SearchFilesList({ filesList }) {
  return (
    <ul className="flex flex-col gap-4">
      {filesList.map((file) => (
        <li key={file.id}>
          <FilesListItem fileItem={file} />
        </li>
      ))}
    </ul>
  );
}

export default SearchFilesList;
