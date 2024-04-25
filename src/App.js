import React, { useState } from 'react'
import './App.css'

function App() {
    const [input, setinput] = useState('');
    const handleClick = (value) => {
        if (value === '=') {
            try {
                setinput(eval(input).toString());
            } catch (error) {
                setinput('error')
            }
        } else if (value === 'C') {
            setinput('');
        } else if (value === 'AC') {
            setinput(prevInput => prevInput.slice(0, -1));
        } else {
            setinput(prevInput => prevInput + value);
        }
    };
    return (
        <div>
            <div className="calculator">
                <h2>CALCULATOR</h2>
                <input type="text" value={input} />
                <div className="buttons">
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('+')}>+</button>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('-')}>-</button>
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('*')}>*</button>
                    <button onClick={() => handleClick('C')}>C</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('=')}>=</button>
                    <button onClick={() => handleClick('/')}>/</button>
                    <button onClick={() => handleClick('AC')}>AC</button>
                </div>
            </div>
        </div>
    )
}

export default App
