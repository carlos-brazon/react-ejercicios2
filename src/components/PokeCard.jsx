import React from 'react'

const PokeCard = ({ pokemon: { id, name, sprites }, setPokemon, setPika }) => {
    const handleClick = () => {
        if (setPokemon) {
            setPokemon(prev => prev.filter(pokemon => pokemon.id !== id))
        }
        else {
            setPika()
        }
    }

    return (
        <div className={`flex ${id % 2 == 0 ? 'bg-red-500' : 'bg-blue-500'} flex-col justify-center items-center gap-4 p-4 text-4xl rounded-3xl border-2 border-neutral-950 w-64`}>
            <p>{id}</p>
            <p>{name}</p>
            <img src={sprites.front_default} alt="Aquí va una imagen de un pokemon" />
            <button onClick={handleClick} className='p-2 bg-slate-200 rounded-lg text-xl'>Eliminar</button>
        </div>
    )
}
export default PokeCard;