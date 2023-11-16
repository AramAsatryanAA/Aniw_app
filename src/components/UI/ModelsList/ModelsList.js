"use client";

import { useSelector } from "react-redux";

import ModelsListItem from "./ModelsListItem";

function ModelsList() {
  const { models } = useSelector((state) => state.models);

  return (
    <ul className="grid gap-4 2xl:grid-cols-2">
      {models.map((model) => (
        <li key={model.id}>
          <ModelsListItem modelItem={model} />
        </li>
      ))}
    </ul>
  );
}

export default ModelsList;
