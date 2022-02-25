import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCartPlus, faLeaf } from "@fortawesome/free-solid-svg-icons";

const MenuCard = ({ image, title, pricePerServing, readyInMinutes, healthScore, vegan, aggregateLikes, currentOrder ,setCurrentOrder }) => {


  // PRIORIDAD: DISENAR COMO SE VA A AGREGAR EL LOGO CUANDO isVegan is true
  // AGREGAR UN BOTON para mostrar el Health Score;
  //CORREGIR TODO LO QUE TIENE QUE VER CON EL PRECIO.

  function updateOrder(){
    let updatedOrder = {...currentOrder}
    if(!updatedOrder[title]){
      updatedOrder[title] = {price: pricePerServing,
        quantity: 1,
        readyInMinutes: readyInMinutes
      }

    } else updatedOrder[title].quantity++

    setCurrentOrder(updatedOrder)
  }



  return (
    <div className="mt-3">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="h-48 w-72 rounded-xl object-cover shadow-md"
        />

        <div className="-mt-2 p-3 w-64 bg-white border rounded-lg shadow-lg">
          <div className="flex items-center">
            <p className="px-1 py-1 rounded-lg bg-yellow-500 text-white font-bold">
              {pricePerServing}$
            </p>
            <h3 className="ml-3 text-lg leading-tight text-gray-800 font-extrabold">
              {title}
            </h3>
          </div>

          <div>
            <p> Health Score : {healthScore}</p>
            <p><FontAwesomeIcon icon={faLeaf} />Vegan: {vegan ? "Yes" : "No"}</p>
            <p>Likes: {aggregateLikes}</p>
          </div>

  


          <div className="flex justify-between mt-3">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-gray-400 h-4 w-4"
              />
              <p className="ml-1 text-gray-700 font-light text-sm">
                Ready in {readyInMinutes}
              </p>
            </div>

            <button className="py-1 px-2 uppercase bg-green-500 text-white font-semibold rounded-lg shadow"
            onClick={updateOrder}
            >
              Order
              <FontAwesomeIcon icon={faCartPlus} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
