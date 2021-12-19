import logo from "./logo.svg";
import "./App.css";
import { LandingPage } from "./components/landingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Login from "./components/SignIn";
import { Switch, Route } from "react-router-dom";
import Cast from "./components/Cast";
import { Episodes } from "./components/Episodes";
import { WatchList } from "./components/WatchListPage";
import { WatchPage } from "./components/WatchPage";

if (localStorage.getItem("watchlist") == null)
  localStorage.setItem("watchlist", JSON.stringify([]));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage></LandingPage>
        </Route>
        <Route exact path="/watchpage">
          <WatchPage />
        </Route>

        <Route exact path="/WatchList">
          <WatchList />
        </Route>
        <Route path="/cast">
          <Cast />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/player">
          <Player />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
