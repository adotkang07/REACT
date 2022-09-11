import {useState} from "react";

const useArray = (initVal = []) => {
    const [array, setArray] = useState(initVal);

    const filterArray = (callback) => {
        setArray(prevState => prevState.filter(callback));
    }

    const removeFromArray = (index) => {
        setArray(oldVal => oldVal.filter((_, i) => i !== index));
    };

    const updateArray = (index, newEle) => {
        array[index] = newEle;
        setArray([...array]);
    }

    const pushArray = (ele) => {
        setArray(prevState =>[...prevState, ele]);
    };

    const clearArray = () => setArray([]);

    return {array, set: setArray, pushArray, filterArray, updateArray, removeFromArray, clearArray};
}

export default useArray;