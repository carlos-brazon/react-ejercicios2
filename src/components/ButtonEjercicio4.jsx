import React from 'react'

const ButtonEjercicio4 = ({ text, setCategory, setLoading }) => {

  return (
    <button onClick={() =>{
      setLoading(true)
      setCategory(text)
      setTimeout(function () {
        setLoading(false)
      }, 1000);

      }} className='flex p-2 bg-neutral-400 rounded-lg text-2xl w-24 justify-center focus:bg-neutral-600 focus:text-white' >
        {text}
      </button>
    );
  };
  export default ButtonEjercicio4;