
const Autocomplete = ({title,id, APIKEY, menuItems, setMenuItems}) => {
    //result.id
    //result.title
    /*
    {
"id": 296687,
"title": "chicken",
}
    */
console.log(menuItems)
  return (
    <div className="bg-red-500 text-xl flex">
        <h3>{title}</h3>
        <button onClick={ async() => {
            const updatedMenu = menuItems.slice();
            const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}?includeNutrition=false`)
            const newItem = await res.json()
            updatedMenu.push(newItem)
            setMenuItems(updatedMenu)




        }} className="ml-3 bg-green-500 text-white">Add</button>
        </div>
  )
}

export default Autocomplete