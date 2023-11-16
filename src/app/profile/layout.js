import Header from "@/components/UI/Header/Header";
import PageNavigation from "@/components/UI/Page-Navigation/PageNavigation";
import ProfilePageProfileSection from "@/components/UI/ProfilePage-Profile-Section/ProfilePageProfileSection";

export const metadata = {
  title: "Aniw App",
  description:
    "Get an opportunity to search and view posts, files and 3D models from a large list published on the site, as well as create your owns. Interact with other users by rating the items on the site as well as commenting and replying to comments.",
  keywords: ["Posts", "Files", "3D Models", "Users", "Comments", "Dark mode"],
};

const pageNavigationItems = [
  {
    defaultPath: "/profile",
    path: "/profile/posts",
    title: "Posts",
  },
  { path: "/profile/files", title: "Files" },
  { path: "/profile/3d-models", title: "3D Models" },
  { path: "/profile/about", title: "About" },
];

function ProfilePageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-custom-gray-100 dark:bg-custom-black-500">
        <div className="container flex flex-col gap-6 px-5 pb-10 pt-6 md:flex-row md:justify-center md:gap-12 lg:gap-[104px] xl:px-0">
          <ProfilePageProfileSection />
          <section className="flex w-full max-w-[712px] flex-col gap-6">
            <PageNavigation navigationItems={pageNavigationItems} />
            {children}
          </section>
        </div>
      </main>
    </>
  );
}

export default ProfilePageLayout;
