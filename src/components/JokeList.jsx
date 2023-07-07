import React from 'react'
import JokeCard from './JokeCard';

const JokeList = ({ jokes }) => {
  return (
    <div className='flex flex-col gap-5'>
      {jokes.map((joke, i) => <JokeCard joke={joke.joke} key={i} />)}
    </div>
  );
};
export default JokeList;