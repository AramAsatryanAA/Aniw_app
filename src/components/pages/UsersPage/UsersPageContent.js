import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import SideNavigationBar from "@/components/UI/SideNavigationBar/SideNavigationBar";
import UserPageSearch from "./UserPageSearch";
import UsersList from "@/components/UI/UsersList/UsersList";
import SortItems from "@/components/UI/SortItems/SortItems";

function UsersPageContent() {
  return (
    <PageLayout>
      <section className="hidden lg:block lg:w-[200px] xl:w-[280px]">
        <SideNavigationBar />
      </section>
      <section className="flex flex-col gap-6 lg:flex-1">
        <UserPageSearch />
        <div className="px-4 lg:hidden lg:px-0">
          <SortItems />
        </div>
        <UsersList />
      </section>
      <section className="hidden lg:flex lg:w-[200px] lg:flex-col lg:gap-4 xl:w-[280px]">
        <SortItems />
      </section>
    </PageLayout>
  );
}

export default UsersPageContent;
