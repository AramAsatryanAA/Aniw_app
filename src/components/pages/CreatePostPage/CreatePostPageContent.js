import Header from "@/components/UI/Header/Header";
import CreateItemLanguageButtons from "@/components/UI/CreateItem-Buttons/CreateItemLanguageButtons";
import CreatePostForm from "./CreatePostForm";

function CreatePostPageContent() {
  return (
    <>
      <Header />
      <main className="border-t border-custom-gray-300 bg-white dark:border-custom-black-300  dark:bg-custom-black-100">
        <div className="container px-5 pb-10 pt-6 lg:px-10">
          <section className="m-auto flex w-full max-w-[712px] flex-col gap-6">
            <h1 className="text-2xl font-semibold">Create a post</h1>
            <CreateItemLanguageButtons />
            <CreatePostForm />
          </section>
        </div>
      </main>
    </>
  );
}

export default CreatePostPageContent;
