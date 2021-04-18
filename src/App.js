import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Resume } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/resume" exact component={() => <Resume />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
