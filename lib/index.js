"use strict";

exports.__esModule = true;

var _react = require("react");

var useSafeState = function useSafeState(initialState) {
  var _useState = (0, _react.useState)(initialState),
      state = _useState[0],
      setState = _useState[1];

  var mounted = (0, _react.useRef)(true);

  (0, _react.useEffect)(function () {
    return function () {
      mounted.current = false;
    };
  }, []);

  var setSafeState = (0, _react.useCallback)(function (data) {
    mounted.current && setState(data);
  }, []);

  return [state, setSafeState];
};

exports.default = useSafeState;
module.exports = exports["default"];