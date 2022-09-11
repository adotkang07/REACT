import { useState } from "react";
import useUpdateEffect from "./updateEffectHook";

const UpdateEffectHookDemoComponent = () => {
    const [count, setCount] = useState(5);
    const [list, setList] = useState([]);

    useUpdateEffect(() => alert("Added!"), [list]);
    useUpdateEffect(() => alert(count), [count]);

    return (
        <div className="effect">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>{count}</p>
            <br/>
            <button onClick={() => setList([...list, 'New Item'])}>Add Item</button>
            <ul style={{maxWidth: "600px", margin: "auto"}}>
                {list.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default UpdateEffectHookDemoComponent;