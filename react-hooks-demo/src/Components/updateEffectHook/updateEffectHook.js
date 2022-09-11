import {useEffect, useRef} from "react";

const useUpdateEffect = (callback, deps) => {
    const didMount = useRef(true);

    useEffect(() => {
        if(didMount.current) {
            didMount.current = false;
        }

        return callback;
    }, deps);
}

export default useUpdateEffect;