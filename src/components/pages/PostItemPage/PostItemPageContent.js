import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import SideNavigationBar from "@/components/UI/SideNavigationBar/SideNavigationBar";
import PostItemWithComments from "@/components/UI/PostItem-WithComments/PostItemWithComments";
import CategoriesBlock from "@/components/UI/Categories-Block/CategoriesBlock";

function PostItemPageContent({ postId }) {
  return (
    <PageLayout>
      <section className="hidden lg:block lg:w-[200px] xl:w-[280px]">
        <SideNavigationBar />
      </section>
      <section className="flex flex-col gap-6 lg:flex-1">
        <PostItemWithComments postId={postId} />
        <div className="lg:hidden">
          <CategoriesBlock />
        </div>
      </section>
      <section className="hidden lg:flex lg:w-[200px] lg:flex-col lg:gap-4 xl:w-[280px]">
        <CategoriesBlock />
      </section>
    </PageLayout>
  );
}

export default PostItemPageContent;
