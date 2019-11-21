import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import SearchSafe from "./searchSafe";
import AnotherScreen from "./anotherScreen";
import SearchUnsafe from "./searchUnsafe";

class Demo extends Component {
  render() {
    return (
      <main className="App">
        <h2>UseSafeState</h2>
        <p>
          Hook to prevent setting state on unmounted component that prevents
          memory leaks that happens when setting state on unmounted components.
          <a href="https://github.com/aldrinpvincent/useSafeState">GitHub Repository</a>

        </p>
        <hr />
        <h3>Demo</h3>
        <p>
          Delay fetch will give you response after the specified delay(in
          seconds) . Eg: Enter 2 in the input and fetch --> you will get
          response after two seconds
        </p>
        <p>
          Search and navigate away from the page. Search without useSafeState
          will give you a console warning like{" "}
          <b>
            "Warning: Can't perform a React state update on an unmounted
            component. This is a no-op, but it indicates a memory leak in your
            application. To fix, cancel all subscriptions and asynchronous tasks
            in a useEffect cleanup function."
          </b>
        </p>

        <p>Search with useSafeState will not gives a warning</p>
        <hr />
        <nav>
          <Link to="/">Search with useSafeState</Link> |{" "}
          <Link to="anotherScreen">Navigate</Link> |{" "}
          <Link to="/unsafe">Search without useSafeState</Link>
        </nav>
        <br />

        <Router>
          <SearchSafe path="/" />
          <SearchUnsafe path="/unsafe" />
          <AnotherScreen path="/anotherScreen" />
        </Router>

        <br />
      </main>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
