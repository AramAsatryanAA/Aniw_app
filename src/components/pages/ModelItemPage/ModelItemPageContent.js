import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import SideNavigationBar from "@/components/UI/SideNavigationBar/SideNavigationBar";
import ModelItemWithComments from "@/components/UI/ModelItem-WithComments/ModelItemWithComments";
import BuyModelBlock from "@/components/UI/BuyModel-Block/BuyModelBlock";
import CategoriesBlock from "@/components/UI/Categories-Block/CategoriesBlock";

function ModelItemPageContent({ modelId }) {
  return (
    <PageLayout>
      <section className="hidden lg:block lg:w-[200px] xl:w-[280px]">
        <SideNavigationBar />
      </section>
      <section className="flex flex-col gap-6 lg:flex-1">
        <ModelItemWithComments modelId={modelId} />
        <div className="lg:hidden">
          <CategoriesBlock />
        </div>
      </section>
      <section className="hidden lg:flex lg:w-[200px] lg:flex-col lg:gap-4 xl:w-[280px]">
        <BuyModelBlock />
        <CategoriesBlock />
      </section>
    </PageLayout>
  );
}

export default ModelItemPageContent;
