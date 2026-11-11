
import React, { useState } from 'react';
import "./Toggle.css";

export default function Toggle() {

    const [count, setcount] = useState(10);

    return (
        <div className="counter">

            <h2>Counter Application</h2>

            <div className="count-display">
                <h4>Count: {count}</h4>
            </div>

            <div className="counter-btn">

                <button
                    className="incre-btn"
                    onClick={() => setcount(count + 1)}>Increment
                </button>

                <button className="decre-btn" 
                onClick={() => setcount(count - 1)}> Decrement
                </button>

                <button className="reset-btn" 
                onClick={() => setcount(0)}>Reset
                </button>

            </div>

        </div>
    );
}
