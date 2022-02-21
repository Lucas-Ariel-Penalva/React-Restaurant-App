import React from 'react'

const Order = ({currentOrder, currentTotal}) => {

  //CORREGIR TODO LO QUE TIENE QUE VER CON EL PRECIO



  return (
    <div className='text-xl flex flex-col items-center justify-center border border-indigo-700 border-t-8'>
    {Object.keys(currentOrder).map((keyName, index) => {
      
      
      return (<div className='flex p-2' key={index}>
      <h3>{keyName}<span> x {currentOrder[keyName].quantity}</span></h3>

      <h4 className='ml-10'>{currentOrder[keyName].price}</h4>
      <h3 className='ml-5'>ready in minutes {currentOrder[keyName].readyInMinutes}</h3>
      <h5 className='ml-5'>{Math.floor(+currentOrder[keyName].quantity * +currentOrder[keyName].price)}</h5>
      </div>)
    })}

    <h1>{currentTotal}</h1>
    
  </div>
  )
}

export default Order