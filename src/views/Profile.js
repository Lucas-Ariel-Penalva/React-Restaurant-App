import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import SavedOrder from "../components/SavedOrder";
import Navigation from "../components/Navigation";
import Order from "../components/Order";
import Footer from "../components/Footer";

const Profile = () => {
  const [users, setUsers] = useLocalStorage("users", {});
  const [activeUser, setActiveUser] = useLocalStorage("activeUser", [
    false,
    "",
  ]);
  const orders = activeUser[0] === false ? [] : users[activeUser[0]].orders;

  const logOff = () => {
    Swal.fire({
      icon: "question",
      title: "Do you want to log out?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setActiveUser([false, ""]);
        window.location.reload();
      }
    });
  };

  const deleteAccount = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "This will permanently delete your account.",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let updatedUsers = {};

        for (let i in users) {
          if (i !== activeUser[0]) updatedUsers[i] = users[i];
        }
        setActiveUser([false, ""]);
        setUsers(updatedUsers);
        window.location.reload();
      }
    });
  };

  console.log(orders);

  return (
    <div className="bg-gradient-to-b from-indigo-100 to-indigo-300 min-h-screen">
      <Navigation />

    

      <div className="flex justify-end mt-3 mr-4 sm:mt-4 sm:mr-6 lg:mt-5 lg:mr-7">
        <button
          onClick={logOff}
          className="mr-1 sm:mr-2 p-1 lg:p-2 bg-indigo-100 text-indigo-700 border-2 border-indigo-600  hover:bg-white font-bold hover:text-indigo-800 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="mr-1" />
          Log Out
        </button>
        <button
          onClick={deleteAccount}
          className="mr-1 p-1 lg:p-2 bg-red-500 text-gray-100 border-2 border-red-700 hover:bg-red-600 hover:text-white font-extrabold transition-all duration-300"
        >
          Delete Account{" "}
        </button>
      </div>

    

      <div className="min-h-screen">
        {orders.length === 0 ? (
          <p className="m-6 sm:m-8 lg:m-10 text-lg md:text-xl text-indigo-900 font-semibold">Once you buy from our menu, everything that you ordered will be displayed here.</p>
        ) : (
          <main className="mx-10 mb-10 grid rows gap-5 sm:gap-7 mt-7">
            {" "}
            {orders.map((order, index) => {
              return <SavedOrder order={order} key={index} number={index} />;
            })}
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
