import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReserveItems from "./pages/ReserveItems";
import DonateFood from "./pages/DonateFood";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reserveitems" component={ReserveItems} />
        <Route exact path="/donatefood" component={DonateFood} />
        <Route exact path="/profile" component={Profile} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
