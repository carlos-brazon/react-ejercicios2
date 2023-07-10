import React from 'react'
import { useState, useEffect } from "react";
import PokeCard from './PokeCard';

const Ejercicio3PokeList = ({ url, id }) => {
	const [pika, setPika] = useState(null);
	const [pokemon, setPokemon] = useState([]);
	const [morePokemon, setMorePokemon] = useState(20);
	const [loading, setLoading] = useState(false);

	const getPika = async () => {
		console.log();
		try {
			const responsePika = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			const datapika = await responsePika.json();
			setPika(datapika)

		} catch (error) {
			console.log('estas en el catch');
		}
	}
	const getPokemon = async (urlPokemon) => {
		setLoading(true)
		const response = await fetch(urlPokemon);
		const data = await response.json();

		const allPoke = await Promise.all(data.results.map(async (poke) => {
			const response = await fetch(poke.url);
			return await response.json();
		}))
		
		setTimeout(function () {
			setLoading(false)
		}, 1000);

		return allPoke
	}
	
	useEffect(() => {
		getPika()
		const setPoke = async () => setPokemon( await getPokemon(url))
		setPoke()
		
	}, []);

	const handleClick = async () => {
		setMorePokemon(prev => prev += 10);
		const tenMore = await getPokemon(`https://pokeapi.co/api/v2/pokemon/?offset=${morePokemon}&limit=10`);
		setPokemon(prev=> [...prev, ...tenMore] )
	}

	return (
		<div className="flex justify-center p-8 bg-gray-200">

			<div className='flex flex-col justify-center items-center gap-4'>
				<button onClick={handleClick} className='p-4 rounded-lg bg-slate-100 text-xl'>Give me more!</button>
				<div className='flex flex-wrap gap-6'>
					{
						loading ? null : pika && <PokeCard pokemon={pika} setPika={setPika} /> 
					}
					{
						loading ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : pokemon.map((poke, i) => <PokeCard key={i} pokemon={poke} setPokemon={setPokemon} />)
					}
				</div>
			</div>
		</div>
	);
}
export default Ejercicio3PokeList;