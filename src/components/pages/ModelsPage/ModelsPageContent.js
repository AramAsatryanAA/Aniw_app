import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import SideNavigationBar from "@/components/UI/SideNavigationBar/SideNavigationBar";
import ModelsPageHeading from "./ModelsPageHeading";
import SortItems from "@/components/UI/SortItems/SortItems";
import ModelsList from "@/components/UI/ModelsList/ModelsList";
import CategoriesBlock from "@/components/UI/Categories-Block/CategoriesBlock";

function ModelsPageContent() {
  return (
    <PageLayout>
      <section className="hidden lg:block lg:w-[200px] xl:w-[280px]">
        <SideNavigationBar />
      </section>
      <section className="flex flex-col gap-6 lg:flex-1">
        <ModelsPageHeading />
        <div className="px-4 lg:hidden lg:px-0">
          <SortItems />
        </div>
        <ModelsList />
        <div className="lg:hidden">
          <CategoriesBlock />
        </div>
      </section>
      <section className="hidden lg:flex lg:w-[200px] lg:flex-col lg:gap-4 xl:w-[280px]">
        <SortItems />
        <CategoriesBlock />
      </section>
    </PageLayout>
  );
}

export default ModelsPageContent;
