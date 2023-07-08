import './App.css'

import Ejercicio1 from "./components/Ejercicio1.jsx";
import Ejercicio2 from "./components/Ejercicio2.jsx";
import Ejercicio3PokeList from "./components/Ejercicio3PokeList.jsx";
import Ejercicio4 from "./components/Ejercicio4.jsx";

function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <Ejercicio1 number={0} />

      <Ejercicio2 />

      <Ejercicio3PokeList url={'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'} id={131} />

      <Ejercicio4 />
    </div>
  );
}
export default App;