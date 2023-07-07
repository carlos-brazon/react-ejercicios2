import React from 'react'

const ButtonEjercicio4 = ({ text, fetchJokes, setLoading }) => {

  return (
    <button onClick={() =>{
      setLoading(true)
      fetchJokes(text)
      setTimeout(function () {
        setLoading(false)
      }, 1000);

      }} className='flex p-2 bg-neutral-300 rounded-lg text-2xl w-24 justify-center focus:bg-neutral-600 focus:text-white' >
        {text}
      </button>
    );
  };
  export default ButtonEjercicio4;