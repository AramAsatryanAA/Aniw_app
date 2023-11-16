import ModelItemPageContent from "@/components/pages/ModelItemPage/ModelItemPageContent";

export default function ModelItemPage({ params }) {
  const { id } = params;

  return <ModelItemPageContent modelId={id} />;
}
