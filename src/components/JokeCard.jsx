import React from 'react'

const JokeCard = ({ joke }) => {
  return (
    <p className='bg-blue-300 p-4 text-xl rounded flex justify-center items-center'>
      {joke}
    </p>
  )
};
export default JokeCard;





