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

Describe useSafeState here.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
