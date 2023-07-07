import React from 'react'
import { useState } from "react";
import ButtonEjercicio2 from "./ButtonEjercicio2";

const Ejercicio2 = () => {
  const [color, setColor] = useState('black');
  const handleClick = () => {
    setColor(prev => prev === 'aliceblue' ? 'black' : 'aliceblue')
  }

  return (
    <div className="flex justify-center p-8 bg-gray-400">
      <div style={{ color: `${color}`, backgroundColor: `${color == 'black' ? 'aliceblue' : 'black'}`, borderColor: `${color == 'black' ? 'black' : 'aliceblue'}` }} className='flex gap-2 rounded-3xl text-6xl flex-col p-2 items-center justify-center w-96 h-96 border-4'>
        <h1>CARLOS</h1>
        <p>BRAZON</p>
        <p>REACT</p>
        {<ButtonEjercicio2 onClick={handleClick} color={color} />}
      </div>
    </div>
  )
}
export default Ejercicio2;
