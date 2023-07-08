import React from 'react'

const ButtonEjercicio2 = (props) => {
  return (
    <button onClick={props.onClick} style={{ backgroundColor: `${props.color == 'aliceblue' ? 'aliceblue' : 'black'}`, color: `${props.color == 'aliceblue' ? 'black' : 'aliceblue'}` }} className={`p-3 rounded text-3xl border-aliceblue-600`}>
      {props.color == 'aliceblue' ? 'Ligth' : 'Dark'}
    </button>
  )
}
export default ButtonEjercicio2;