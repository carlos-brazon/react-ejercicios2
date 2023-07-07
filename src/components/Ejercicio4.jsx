import React, { useState, useEffect } from 'react';
import JokeList from './JokeList';
import ButtonEjercicio4 from './ButtonEjercicio4';

const Apps = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJokes = async (word) => {
    setLoading(true)
    try {
      const response = await fetch(`https://icanhazdadjoke.com/search?term=${word}&limit=5&language=ES`, {
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
    fetchJokes('dad');
  }, []);

  return (

    <div className="flex flex-col items-center justify-center p-8 bg-gray-200">
      <div className='flex flex-col items-center gap-10'>
        <div className='flex gap-4'>
          <ButtonEjercicio4 text={'Birds'} fetchJokes={fetchJokes} setLoading={setLoading} />
          <ButtonEjercicio4 text={'Car'} fetchJokes={fetchJokes} setLoading={setLoading} />
          <ButtonEjercicio4 text={'Cat'} fetchJokes={fetchJokes} setLoading={setLoading} />
          <ButtonEjercicio4 text={'Dog'} fetchJokes={fetchJokes} setLoading={setLoading} />
        </div>
        {
          loading ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <JokeList jokes={jokes} />
        }
        {'VAMOS CARLOS TU PUEDES'}
      </div>
    </div>
  )


};

export default Apps;