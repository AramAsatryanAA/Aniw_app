import ModelsListItem from "@/components/UI/ModelsList/ModelsListItem";

function SearchModelsList({ modelsList }) {
  return (
    <ul className="grid gap-4 2xl:grid-cols-2">
      {modelsList.map((model) => (
        <li key={model.id}>
          <ModelsListItem modelItem={model} />
        </li>
      ))}
    </ul>
  );
}

export default SearchModelsList;
