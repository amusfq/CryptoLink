import React, { Suspense } from "react";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Base = React.lazy(() => import("./components/Base"));
const Resolver = React.lazy(() => import("./components/Resolver"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Base />
          </Route>
          <Route exact path="/resolver">
            <Resolver />
          </Route>
          <Route path="/:link">
            <Base />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
