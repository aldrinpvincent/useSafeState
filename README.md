# useSafeState

Hook to prevent setting state on unmounted component that prevents memory leaks that happens when setting state on unmounted components.

Demo - https://aldrinpvincent.github.io/useSafeState/

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

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]
