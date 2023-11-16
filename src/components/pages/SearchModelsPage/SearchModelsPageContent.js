"use client";

import { useSelector } from "react-redux";

import SearchModelsList from "./SearchModelsList";

function SearchModelsPageContent() {
  const { models, searchQuery } = useSelector((state) => state.models);

  const searchedModels = models.filter((model) => {
    return (
      model.title.toLowerCase().includes(searchQuery) ||
      model.text.toLowerCase().includes(searchQuery)
    );
  });

  return <SearchModelsList modelsList={searchedModels} />;
}

export default SearchModelsPageContent;
