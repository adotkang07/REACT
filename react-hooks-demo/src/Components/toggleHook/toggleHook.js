import React, { useCallback, useState } from "react";

//Param is boolean, default false
const useToggle = (firstState) => {
    //Init state
    const [val, setState] = useState(firstState);

    //This fucntion changes the bool to opposite value
    const toggle = useCallback((val) => {
        setState(currVal => typeof val === 'boolean'? val: !currVal);
    }, []);

    return [val, toggle];
};

export default useToggle;