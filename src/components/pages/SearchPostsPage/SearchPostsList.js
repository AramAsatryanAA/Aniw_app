import PostsListItem from "@/components/UI/PostsList/PostsListItem";

function SearchPostsList({ postsList }) {
  return (
    <ul className="flex flex-col gap-4">
      {postsList.map((post) => (
        <li key={post.id}>
          <PostsListItem postItem={post} />
        </li>
      ))}
    </ul>
  );
}

export default SearchPostsList;
