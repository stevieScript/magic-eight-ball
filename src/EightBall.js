import React, {useState} from "react";
import "./EightBall.css";

const EightBall = (props) => {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const [count, setCount] = useState(0);

    const reset = () => {
        setMsg("Think of a Question");
        setColor("black");
        setCount(0);
    };

    const choice = (arr) => {
        const randomIdx = Math.floor(Math.random() * arr.length);
        return arr[randomIdx];
    };
    
    const handleClick = () => {
        const {msg, color} = choice(props.answers);
        setMsg(msg);
        setColor(color);
        setCount(count + 1);
    };
    
    return (
        <>
        <div className="EightBall" onClick={handleClick} style={{backgroundColor: color}}>
        <b>{msg}</b>
        </div>
        <div>
        <p>Count: {count}</p>
        <button onClick={reset}>Reset</button>
        </div>
        </>
    );
};

export default EightBall;