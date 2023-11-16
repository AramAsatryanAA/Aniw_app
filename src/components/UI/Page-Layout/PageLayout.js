import Header from "UI/Header/Header";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-custom-gray-100 dark:bg-custom-black-500">
        <div className="container px-1 pb-10 pt-6 lg:flex lg:justify-between lg:gap-11 lg:px-10">
          {children}
        </div>
      </main>
    </>
  );
}

export default PageLayout;
