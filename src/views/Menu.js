import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import MenuCard from "../components/MenuCard";
import Order from "../components/Order";
import Navigation from "../components/Navigation";
import SortButtons from "../components/SortButtons";
import Footer from "../components/Footer";
import useLocalStorage from "../hooks/useLocalStorage";

const Menu = () => {
  const [menuItems, setMenuItems] = useState(exampleMenu);
  const [currentOrder, setCurrentOrder] = useState({});
  const [currentTotal, setCurrentTotal] = useState(0);
  const [users, setUsers] = useLocalStorage("users", {});
  const [searchInput, setSearchInput] = useState("");

  const initialMenuIds = [716426, 715594, 782600, 716429, 715497, 646512];
  const API_KEY = "d8093bd4f8084658b7b0ba0c844ce6a3";

  //Remember you are putting your actual API key here.
  const getMenu = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${API_KEY}&ids=${initialMenuIds.join(
        ","
      )}`
    );
    const menu = await res.json();
    setMenuItems(menu);
  };

  //Cambia este useffect a un boton que hace el fetch

  useEffect(() => {
    //getMenu()
  }, []);

  useEffect(() => {
    let total = 0;
    for (let i in currentOrder) {
      total += Math.floor(currentOrder[i].quantity * currentOrder[i].price);
    }
    setCurrentTotal(total);
  }, [currentOrder]);

  const confirmOrder = () => {
    Swal.fire({
      icon: "question",
      title: "Confirm your order?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const finalizedOrder = { ...currentOrder, total: currentTotal };
        const email = JSON.parse(localStorage.getItem("activeUser"))[0];
        const userCopy = { ...users };
        userCopy[email].orders.push(finalizedOrder);

        setUsers(userCopy);
        setCurrentOrder({});

        Swal.fire({
          icon: "success",
          title: "Your order was made!",
        });
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-indigo-100 to-indigo-300 min-h-screen">
      <Navigation />

      <div className="mt-4 lg:mt-5 flex flex-col justify-center items-center text-center text-indigo-900 font-extrabold sm:text-lg lg:text-xl transition-all duration-300">
        <h2>Pick items and confirm your order below. </h2>

        <p className="mt-1 sm:mt-2">
          You can use these buttons to sort the menu by what interests you.
        </p>
      </div>

      <SortButtons menuItems={menuItems} setMenuItems={setMenuItems} />

      <main className="grid rows gap-5 sm:gap-7 mt-7">
        {menuItems.length &&
          menuItems.map((item) => (
            <MenuCard
              title={item.title}
              image={item.image}
              pricePerServing={Math.round(item.pricePerServing) / 100}
              readyInMinutes={item.readyInMinutes}
              key={item.id}
              healthScore={item.healthScore}
              vegan={item.vegan}
              aggregateLikes={item.aggregateLikes}
              currentOrder={currentOrder}
              setCurrentOrder={setCurrentOrder}
            />
          ))}
      </main>


      <section className="flex flex-col justify-center items-center mt-20">

      <input
        type="text"
        id="search"
        autoComplete="off"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className="mt-1 mb-10 input-indigo"
      />

      {Object.keys(currentOrder).length > 0 &&  <><Order currentOrder={currentOrder} currentTotal={currentTotal} setCurrentOrder={setCurrentOrder} /><button
          onClick={confirmOrder}
          disabled={Object.keys(currentOrder).length === 0 ? true : false}
          className="my-6 px-2 py-2 rounded-lg shadow-xl bg-indigo-600 text-gray-100 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 hover:text-white disabled:opacity-60 disabled:pointer-events-none font-bold disabled:shadow-none text-xl sm:text-2xl"
        >
          Make Order
        </button></>}
       


      </section>

      <Footer />
    </div>
  );
};

const exampleMenu = [
  {
    title: "Hamburguer with fries",
    pricePerServing: 340.5,
    readyInMinutes: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/640px-RedDot_Burger.jpg",
    id: 1,
    healthScore: 35,
    vegan: false,
    aggregateLikes: 1284,
  },
  {
    title: "Falafel with spinach",
    pricePerServing: 100,
    readyInMinutes: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Falafel_balls.jpg/640px-Falafel_balls.jpg",
    id: 2,
    healthScore: 50,
    vegan: true,
    aggregateLikes: 640,
  },
  {
    title: "The pretentious atrocity",
    pricePerServing: 1100,
    readyInMinutes: 55,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Rock_salmon_with_shrimp_and_saffron_sauce_on_a_bed_of_spinach_%282600406103%29.jpg/640px-Rock_salmon_with_shrimp_and_saffron_sauce_on_a_bed_of_spinach_%282600406103%29.jpg",
    id: 3,
    healthScore: 67,
    vegan: false,
    aggregateLikes: 2,
  },
  {
    title: "Nature's mistake",
    pricePerServing: 500,
    readyInMinutes: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Earth_to_table_dinner_with_Gunnar_Karl_G%C3%ADslason_%28cropped%29.jpg/640px-Earth_to_table_dinner_with_Gunnar_Karl_G%C3%ADslason_%28cropped%29.jpg",
    id: 4,
    healthScore: 77,
    vegan: true,
    aggregateLikes: 5,
  },
  {
    title: "Chocolate death",
    pricePerServing: 400,
    readyInMinutes: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Chocolate_Ice_cream.jpg/337px-Chocolate_Ice_cream.jpg",
    id: 5,
    healthScore: 2,
    vegan: false,
    aggregateLikes: 5384,
  },
  {
    title: "Gourmet Sushi",
    pricePerServing: 900,
    readyInMinutes: 120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/640px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg",
    id: 6,
    healthScore: 81,
    vegan: false,
    aggregateLikes: 204,
  },
];

export default Menu;
