import { useState, useEffect, useRef, useCallback } from "react";

var useSafeState = function useSafeState(initialState) {
  var _useState = useState(initialState),
      state = _useState[0],
      setState = _useState[1];

  var mounted = useRef(true);

  useEffect(function () {
    return function () {
      mounted.current = false;
    };
  }, []);

  var setSafeState = useCallback(function (data) {
    mounted.current && setState(data);
  }, []);

  return [state, setSafeState];
};

export default useSafeState;