import { useState, useEffect, useRef, useCallback } from "react";

const useSafeState = (initialState) => {
  const [state, setState] = useState(initialState);

  let mounted = useRef(true);

  useEffect(() => {
    return () => {
      mounted.current = false;
    }
  }, []);

  const setSafeState = useCallback((data) => {
    mounted.current && setState(data)
  }, []);

  return [state, setSafeState];
};

export default useSafeState;