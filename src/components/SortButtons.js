import React from 'react'

const SortButtons = ({menuItems,setMenuItems}) => {
  return (
    <div className='mt-4 ml-3 mr-3 sm:ml-5 sm:mr-5 md:mr-6 md:ml-6 lg:mr-8 lg:ml-8 grid grid-cols-3 gap-3 sm:gap-8 lg:gap-10 text-lg sm:text-xl'>
    <button
    className="p-1 lg:p-2 bg-indigo-100 text-indigo-700 border-2 border-indigo-600 rounded-lg hover:bg-white font-bold hover:text-indigo-800 transition-all duration-300"
      onClick={() =>
        setMenuItems(
          menuItems.slice().sort((a, b) => {
            return a.pricePerServing - b.pricePerServing;
          })
        )
      }
    >
      Cheapest
    </button>

    <button
        className="p-1 bg-indigo-100 text-indigo-700 border-2 border-indigo-600 rounded-lg hover:bg-white font-bold hover:text-indigo-800 transition-all duration-300"
      onClick={() =>
        setMenuItems(
          menuItems.slice().sort((a, b) => {
            return b.healthScore - a.healthScore;
          })
        )
      }
    >
      Healthiest
    </button>

    <button
        className="p-1 bg-indigo-100 text-indigo-700 border-2 border-indigo-600 rounded-lg hover:bg-white font-bold hover:text-indigo-800 transition-all duration-300"
      onClick={() =>
        setMenuItems(
          menuItems.slice().sort((a, b) => {
            return b.aggregateLikes - a.aggregateLikes;
          })
        )
      }
    >
      Likes
    </button>
    </div>
  )
}

export default SortButtons