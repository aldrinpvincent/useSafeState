# Archiving this repository

Archiving this repository because - https://github.com/reactwg/react-18/discussions/82


Also this hook is availble in the new project, along with a bunch of other useful custom hooks. Please checkout https://github.com/aldrinpvincent/react-use-custom-hooks

Documentation of this hook in new project - https://react-use-custom-hooks.vercel.app/docs/useSafeState



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

![react-use-safe-state downloads per month](https://img.shields.io/npm/dm/react-use-safe-state?style=flat-square)
