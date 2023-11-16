import FileItemPageContent from "@/components/pages/FileItemPage/FileItemPageContent";

export default function FileItemPage({ params }) {
  const { id } = params;

  return <FileItemPageContent fileId={id} />;
}
