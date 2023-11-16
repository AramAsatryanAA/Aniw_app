import Header from "UI/Header/Header";
import SideNavigationBar from "@/components/UI/SideNavigationBar/SideNavigationBar";
import SearchPageNavigation from "@/components/UI/SearchPage-Navigation/SearchPageNavigation";
import SortItems from "@/components/UI/SortItems/SortItems";

export const metadata = {
  title: "Aniw App",
  description:
    "Get an opportunity to search and view posts, files and 3D models from a large list published on the site, as well as create your owns. Interact with other users by rating the items on the site as well as commenting and replying to comments.",
  keywords: ["Posts", "Files", "3D Models", "Users", "Comments", "Dark mode"],
};

function SearchPageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-custom-gray-100 dark:bg-custom-black-500">
        <div className="container px-1 pb-10 pt-6 lg:flex lg:justify-between lg:gap-11 lg:px-10">
          <section className="hidden lg:block lg:w-[200px] xl:w-[280px]">
            <SideNavigationBar />
          </section>
          <section className="flex flex-col gap-6 lg:flex-1">
            <div className="px-4 lg:px-0">
              <SearchPageNavigation />
            </div>
            <div className="px-4 lg:hidden lg:px-0">
              <SortItems />
            </div>
            {children}
          </section>
          <section className="hidden lg:flex lg:w-[200px] lg:flex-col lg:gap-4 xl:w-[280px]">
            <SortItems />
          </section>
        </div>
      </main>
    </>
  );
}

export default SearchPageLayout;
