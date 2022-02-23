import { Link } from "react-router-dom"
import { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"


import Navigation from "../components/Navigation"
import Order from "../components/Order"
import Footer from "../components/Footer"

const Profile = ({logOut}) => {

  //SI ESTA VACIO, USA UN CONDICIONAL PARA MOSTRAR QUE AHI VAN A ESTAR LAS ORDENES
  const [users, setUsers] = useLocalStorage("users", {});
  const [activeUser, setActiveUser] = useLocalStorage("activeUser", "");
  const [orders, setOrders] = useState(users[activeUser[0]].orders, []);


  return (
    <div>
      <Navigation />
      My Orders page, where all the shopping cart of the account is shown
    <button onClick={logOut} className="p-3 bg-indigo-500 text-white">Log Out</button>
    <main>
      {!orders ? "Your orders will show here" : orders.map((order, index) => {
        console.log(order)
       return <Order currentOrder={order} currentTotal={order.total} key={index} />
      }) }
    </main>
    <Footer />
    </div>
  )
}

export default Profile