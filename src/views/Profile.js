import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

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

  /*
  const deleteAccount = () =>{

    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'This will permanently delete your account.',
      showCancelButton:true
  }).then(result => {
    if(result.isConfirmed){
     let updatedUsers = {}

      for(let i in users){
        if(i !== activeUser[0]) updatedUsers[i] = users[i]
      }
      setUsers(updatedUsers)
      setActiveUser(false);
      //window.location.href = '/register'
      Swal.fire({
        icon: 'success',
        title: 'Your account was deleted successfully.'
    })

    }
  })
  
}



*/

  return (
    <div>
      <Navigation />
      My Orders page, where all the shopping cart of the account is shown
      <div className="flex">
        <button onClick={logOff} className="p-3 bg-indigo-500 text-white">
          Log Out
        </button>
        <button className="p-3 bg-red-500 text-white">Delete Account </button>
      </div>
      <main>
        {!orders.length
          ? "Your orders will show here"
          : orders.map((order, index) => {
              return (
                <Order
                  currentOrder={order}
                  currentTotal={order.total}
                  key={index}
                />
              );
            })}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
