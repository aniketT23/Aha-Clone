import logo from "./logo.svg";
import "./App.css";
import { LandingPage } from "./components/landingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Player from "./components/Player";
import Login from "./components/SignIn";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage></LandingPage>
        </Route>
        <Route path="/watchpage"></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
