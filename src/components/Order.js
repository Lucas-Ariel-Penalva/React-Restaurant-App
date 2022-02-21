import React from 'react'

const Order = ({currentOrder}) => {
  return (
    <div className='text-xl flex flex-col items-center justify-center border border-indigo-700 border-t-8'>
    {Object.keys(currentOrder).map((keyName, index) => {
      
      
      return (<div className='flex p-2' key={index}>
      <h3>{keyName}<span> x {currentOrder[keyName].quantity}</span></h3>

      <h4 className='ml-10'>{currentOrder[keyName].price}</h4>

      </div>)
    })}
  </div>
  )
}

export default Order