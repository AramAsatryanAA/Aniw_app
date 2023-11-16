import SearchCommentsListItem from "./SearchCommentsListItem";

function SearchCommentList({ commentList }) {
  return (
    <ul className="flex flex-col gap-4">
      {commentList.map((commentItem, i) => (
        <li key={commentItem.id + i}>
          <SearchCommentsListItem commentItem={commentItem} />
        </li>
      ))}
    </ul>
  );
}

export default SearchCommentList;
