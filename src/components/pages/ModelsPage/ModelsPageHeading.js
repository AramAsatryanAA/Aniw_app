"use client";

import { useSelector } from "react-redux";

function ModelsPageHeading() {
  const categories = useSelector((state) => state.categories);
  const tags = useSelector((state) => state.tags);

  return (
    <div className="item-card-type flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">3D Models</h1>
      <p className="mb-1 text-sm">
        Games are sometimes played purely for enjoyment, sometimes for
        achievement or reward as well. They can be played alone, in teams, or
        online; by amateurs or by professionals. On the other hand, players in a
        game may constitute their own audience as they take their turn to play.
      </p>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {categories.map((category, i) => (
          <span
            key={category + i}
            className="button-card-type px-2 py-1 text-base"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag, i) => (
          <span
            key={tag + i}
            className="button-card-type px-2 py-[2px] text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ModelsPageHeading;
