import React, { useState, useEffect } from 'react';
import JokeList from './JokeList';
import ButtonEjercicio4 from './ButtonEjercicio4';

const Apps = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('dad');
  const fetchJokes = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://icanhazdadjoke.com/search?term=${category}&limit=5`, {
        headers: {
          "Accept": "application/json",
        }
      });
      const data = await response.json();
      setTimeout(function () {
        setLoading(false)
      }, 1000);
      setJokes(data.results);

    } catch (error) {
      console.log('error catch');
    }
  };

  useEffect(() => {
    fetchJokes();
  }, [category]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-200">
      <div className='flex flex-col items-center gap-10'>
        <div className='flex gap-4'>
          <ButtonEjercicio4 text={'Birds'} setLoading={setLoading} setCategory={setCategory} />
          <ButtonEjercicio4 text={'Car'} setLoading={setLoading} setCategory={setCategory} />
          <ButtonEjercicio4 text={'Cat'} setLoading={setLoading} setCategory={setCategory} />
          <ButtonEjercicio4 text={'Dog'} setLoading={setLoading} setCategory={setCategory} />
        </div>
        {
          loading ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <JokeList jokes={jokes} />
        }
      </div>
    </div>
  )
};
export default Apps;