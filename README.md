# useSafeState

Hook to prevent setting state on unmounted component that prevents memory leaks that happens when setting state on unmounted components.



### Installation

```bash
  npm i react-use-safe-state
```

### Usage

#### Importing component

```js
import useSafeState from "react-use-safe-state";

const [state, setState] = useSafeState(initalValue);
```


https://img.shields.io/npm/dm/react-use-safe-state?style=flat-square

