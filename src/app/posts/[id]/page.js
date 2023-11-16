import PostItemPageContent from "@/components/pages/PostItemPage/PostItemPageContent";

export default function PostItemPage({ params }) {
  const { id } = params;

  return <PostItemPageContent postId={id} />;
}
