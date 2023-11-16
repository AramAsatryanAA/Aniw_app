function ItemCategoriesPart({ categories }) {
  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <button
          key={category}
          className="button-card-type rounded-lg px-2 py-[2px]"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ItemCategoriesPart;
