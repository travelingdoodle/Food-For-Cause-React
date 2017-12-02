import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reserve from "./pages/Reserve";
import Donate from "./pages/Donate";
import Profile from "./pages/Profile";
import Wrapper from "./components/wrapper/Wrapper";
import "./App.css";

const App = () =>
  <Router>
    <div>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reserve" component={Reserve} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/profile" component={Profile} />
          <Route component={Home} /> 
        </Switch>       
      </Wrapper>
    </div>
  </Router>;

export default App;
