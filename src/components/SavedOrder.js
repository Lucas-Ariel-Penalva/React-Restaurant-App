import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SavedOrder = ({ order, number }) => {
  return (
    <section className="flex flex-col items-center justify-center p-4 md:text-lg text-gray-100 font-bold bg-indigo-700 rounded hover:scale-105 hover:text-white transition-all duration-300">
      <h2 className="text-xl font-extrabold md:text-2xl">
        Saved order # {number + 1}
      </h2>
      <ul className="mt-2">
        {Object.keys(order)
          .filter((key) => key !== "total")
          .map((keyName, index) => {
            return (
              <li className="flex items-center " key={index}>
                <h3 className="truncate w-40 md:w-44 font-light">
                  {order[keyName].quantity} x {keyName}
                </h3>

                <div className="ml-3 flex items-center w-10 md:w-11 font-light">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-gray-300 h-4 w-4 mr-1"
                  />
                  <p>{order[keyName].readyInMinutes}</p>
                </div>

                <h4 className="ml-6">
                  {Math.floor(
                    order[keyName].quantity * order[keyName].price
                  ).toString()}
                  $
                </h4>
              </li>
            );
          })}
      </ul>

      <div className="mt-3 bg-gradient-to-l from-indigo-500 to-indigo-200 rounded-lg w-3/4 h-2 sm:h-3"></div>

      <h2 className="mt-2 text-lg md:text-lg">
        Total:{" "}
        <span className="ml-1 text-xl font-extrabold md:text-2xl">
          {order.total}$
        </span>
      </h2>
    </section>
  );
};

export default SavedOrder;
