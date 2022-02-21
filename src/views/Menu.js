import { useState, useEffect } from "react";
import MenuCard from "../components/MenuCard";
import Order from "../components/Order";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({
    calabazinger: { price: 12, quantity: 2, prepTime: 20 },
    Radillet: { price: 7, quantity: 3, prepTime: 10 },
    Pescadinator: { price: 24, quantity: 1, prepTime: 35 },
    Manzanita: { price: 3, quantity: 5, prepTime: 1 }
  });


  const [currentTotal, setCurrentTotal] = useState(0)

  //Aca vamos a llamar a un useEffect que contacta a la API, setea el Menu;

  useEffect(() => {}, []);

  return (
    <div className=" bg-gray-200">
      <header className="h-12 w-full bg-indigo-600 text-white">temp header</header>

      <main className="gridTest mt-4">
        {[...Array(9)].map((e, i) => (
          <MenuCard
            title="Carne con fritas"
            image="https://media-cdn.tripadvisor.com/media/photo-s/05/d4/83/3f/fast-food-restaurant.jpg"
            pricePerServing={12}
            readyInMinutes={20}
            key={i}
            currentOrder={currentOrder}
            setCurrentOrder={setCurrentOrder}
          />
        ))}
      </main>

      <section className="flex justify-center items-center mt-20">
        <Order currentOrder={currentOrder} />
        <button className="ml-8 mr-2 px-2 py-1 bg-indigo-500 text-white rounded-lg font-bold">Confirm Order</button>
      </section>

      <footer className="h-14 mt-14 w-full bg-indigo-600 text-white">Temp footer</footer>

    </div>
  );
};

export default Menu;
