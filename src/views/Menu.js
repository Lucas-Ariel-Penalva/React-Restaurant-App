import { useState, useEffect } from "react";
import MenuCard from "../components/MenuCard";
import Order from "../components/Order";
import useLocalStorage from "../hooks/useLocalStorage";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([{title:"Misdrevauser",pricePerServing:34,readyInMinutes:25,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png",id:123445, healthScore:98},{title:"Calabazinger",pricePerServing:12,readyInMinutes:15,image:"https://www.lechepuleva.es/documents/13930/203222/calabaza_g.jpg/200c1562-c6dc-4eab-b392-cbf62a1109b1?t=1426759698000",id:12343, healthScore:2}]);

  const [currentOrder, setCurrentOrder] = useState({});
  const [currentTotal, setCurrentTotal] = useState(0);
  const [users, setUsers] = useLocalStorage("users", {});


  const initialMenuIds = [716426,715594,782600,716429,715497,640941,646512,780001];

  //Remember you are putting your actual API key here.
  const getMenu = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=d8093bd4f8084658b7b0ba0c844ce6a3&ids=${initialMenuIds.join(",")}`);
    const menu = await res.json();
    setMenuItems(menu);
  };

  // Esto carga el menu, desactivado para no gastar puntos.
  useEffect(() => {
    // getMenu();
  },[]);
  

  useEffect(()=>{
    let total = 0;
    for(let i in currentOrder){
      total += Math.floor(currentOrder[i].quantity * currentOrder[i].price);
    }
    setCurrentTotal(total);
  },[currentOrder])


  const confirmOrder = () => {
    const finalizedOrder = {...currentOrder, total:currentTotal}
    const email = JSON.parse(localStorage.getItem("activeUser"))[0];
    const userCopy = {...users}
    userCopy[email].orders.push(finalizedOrder);

    setUsers(userCopy)
    setCurrentOrder({})
  }


  return (
    <div className=" bg-gray-200">
      <header className="h-12 w-full bg-indigo-600 text-white">temp header</header>
      <button className="bg-black text-white p-3 rounded-lg" onClick={() => setMenuItems(menuItems.slice().sort((a,b) =>{
        return a.pricePerServing - b.pricePerServing;
      }))}>Sort by lowest price</button>

<button className="bg-black text-white p-3 rounded-lg" onClick={() => setMenuItems(menuItems.slice().sort((a,b) =>{
        return b.healthScore - a.healthScore;
      }))}>Sort by Healthiest</button>

      <main className="gridTest mt-4">
        {menuItems.map((item) => (
          <MenuCard
            title={item.title}
            image={item.image}
            pricePerServing={item.pricePerServing}
            readyInMinutes={item.readyInMinutes}
            key={item.id}
            healthScore={item.healthScore}
            isVegan={item.isVegan}
            currentOrder={currentOrder}
            setCurrentOrder={setCurrentOrder}
          />
        ))}
      </main>

      <section className="flex justify-center items-center mt-20">
        <Order currentOrder={currentOrder} currentTotal={currentTotal} />
        <button onClick={confirmOrder} className="ml-8 mr-2 px-2 py-1 bg-indigo-500 text-white rounded-lg font-bold">Confirm Order, disable this if !curr.order</button>
      </section>




      <footer className="h-14 mt-14 w-full bg-indigo-600 text-white">Temp footer</footer>

    </div>
  );
};

export default Menu;
