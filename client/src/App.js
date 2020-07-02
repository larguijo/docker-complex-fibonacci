import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/other-page">Other page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Router path="/other-page" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
