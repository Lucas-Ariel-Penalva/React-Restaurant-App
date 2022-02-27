const Autocomplete = ({
  title,
  id,
  API_KEY,
  menuItems,
  setMenuItems,
  presentItems,
  setPresentItems,
}) => {
  return (
    <div className="p-2 flex justify-between bg-white text-gray-900 lg:text-lg hover:bg-gray-300 transition-all duration-300">
      <h3 className="truncate w-32 sm:w-36 lg:w-56">{title}</h3>
      <button
        onClick={async () => {
          const updatedMenu = menuItems.slice();
          const res = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}?includeNutrition=false`
          );
          const newItem = await res.json();
          updatedMenu.push(newItem);

          let newItemDict = { ...presentItems };
          newItemDict[title] = true;
          setPresentItems(newItemDict);
          setMenuItems(updatedMenu);
        }}
        className="ml-3 lg:ml-6 px-1 bg-green-500 text-gray-100 rounded-lg uppercase font-semibold hover:text-white hover:bg-green-600"
      >
        Add
      </button>
    </div>
  );
};

export default Autocomplete;
