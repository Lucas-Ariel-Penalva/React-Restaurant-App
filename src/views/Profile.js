import { Link } from "react-router-dom"
import Order from "../components/Order"

const Profile = ({logOut}) => {

  //IMPORTA EL LOCAL STORAGE ARRAY CON LAS ORDERS, Y EXPRESALAS CON ORDER COMPONENT
  //SI ESTA VACIO, USA UN CONDICIONAL PARA MOSTRAR QUE AHI VAN A ESTAR LAS ORDENES
  



  return (
    <div>
      My Orders page, where all the shopping cart of the account is shown
      <Link to="/menu">Go to the menu</Link>
    <button onClick={logOut}>Log Out</button>

    <button>Delete account</button>
    </div>
  )
}

export default Profile