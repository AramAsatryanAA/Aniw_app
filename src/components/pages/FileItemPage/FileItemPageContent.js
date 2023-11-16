import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import SideNavigationBar from "@/components/UI/SideNavigationBar/SideNavigationBar";
import FileItemWithComments from "@/components/UI/FileItem-WithComments/FileItemWithComments";
import DownloadFileBlock from "@/components/UI/DownloadFile-Block/DownloadFileBlock";
import CategoriesBlock from "@/components/UI/Categories-Block/CategoriesBlock";

function FileItemPageContent({ fileId }) {
  return (
    <PageLayout>
      <section className="hidden lg:block lg:w-[200px] xl:w-[280px]">
        <SideNavigationBar />
      </section>
      <section className="flex flex-col gap-6 lg:flex-1">
        <FileItemWithComments fileId={fileId} />
        <div className="lg:hidden">
          <CategoriesBlock />
        </div>
      </section>
      <section className="hidden lg:flex lg:w-[200px] lg:flex-col lg:gap-4 xl:w-[280px]">
        <DownloadFileBlock />
        <CategoriesBlock />
      </section>
    </PageLayout>
  );
}

export default FileItemPageContent;
