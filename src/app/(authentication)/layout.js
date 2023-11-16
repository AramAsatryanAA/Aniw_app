import HeaderAuthentication from "@/components/UI/Header-Authentication/HeaderAuthentication";

export const metadata = {
  title: "Aniw App",
  description:
    "Get an opportunity to search and view posts, files and 3D models from a large list published on the site, as well as create your owns. Interact with other users by rating the items on the site as well as commenting and replying to comments.",
  keywords: ["Posts", "Files", "3D Models", "Users", "Comments", "Dark mode"],
};

function AuthenticationPagesLayout({ children }) {
  return (
    <>
      <HeaderAuthentication />
      <main className="flex justify-center bg-custom-gray-100 dark:bg-custom-black-500">
        <section className="mt-6 px-1 lg:mt-[60px] lg:px-0">{children}</section>
      </main>
    </>
  );
}

export default AuthenticationPagesLayout;
