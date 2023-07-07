import { useState } from "react";

export default function Counter({ number }) {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [counter, setCounter] = useState(number);
    const [counter2, setCounter2] = useState(number);
    const [backgroundCo, setbackgroundCo] = useState(0);
    const [backgroundCo2, setbackgroundCo2] = useState(0);

    const btn1 = () => {
        setbackgroundCo(prev => Math.floor(Math.random() * 6))
        setCounter(prev => prev += 1);
    }
    const btn2 = () => {
        setbackgroundCo2(prev => Math.floor(Math.random() * 6))
        setCounter2(prev => prev += 1);
    }


    return (
        <div className="flex justify-center items-center bg-slate-300 w-96 h-52">

            <div className="flex gap-4">
                <button style={{ backgroundColor: `${colors[backgroundCo]}` }} onClick={btn1} className={`p-3 rounded text-3xl border-red-600 focus:border-8`}>{counter} Likes</button>
                <button style={{ backgroundColor: `${colors[backgroundCo2]}` }} onClick={btn2} className={`p-3 rounded text-3xl border-red-600 focus:border-8`}>{counter2} Likes</button>
            </div>
        </div>
    );
}