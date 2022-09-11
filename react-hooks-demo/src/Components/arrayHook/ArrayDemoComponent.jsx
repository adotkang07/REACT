import useArray from "./arrayHook";

const ArrayDemoComponent = () => {
    const fruits = ["Banana", "Strawberry", "Lemon", "Orange", "Apple"];

    const {array, set, pushArray, filterArray, updateArray, removeFromArray, clearArray} = useArray(fruits);

    return (
        <>
            <h3>Fruits</h3>
            <button onClick={() => removeFromArray(3)}>Remove 4th index from array</button>
            <button onClick={() => pushArray("Guava")}>Add Guava</button>
            <button onClick={() => updateArray(2, "Pineapple")}>Update third fruit with Pineapple</button>
            <button onClick={() => set(["Star Fruit", "Lychee", "Avocado"])}>Set new fruits</button>
            <button onClick={() => filterArray(fruit => fruit.includes("n"))}>Grab all fruits that have n in name</button>
            <button onClick={clearArray}>Clear array</button>
            <h2>{array.map((n, i) => <div>{`${i+1}. ${n}`}</div>)}</h2>
        </>
    )
}

export default ArrayDemoComponent;