import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing";
import { AhaOrignal } from "./components/ahaOrignals";
import { Handpicked } from "./components/handpicked";
import { Top10 } from "./components/top10";
import { NewRelease } from "./components/newRelease";
import { FreeMovies } from "./components/freeMovies";
import { Sample } from "./components/sample";
import { MostWatched } from "./components/mostWatched";
import { Upcoming } from "./components/upcoming";
import { Thriller } from "./components/thriller";
import { Drama } from "./components/drama";
import { Romance } from "./components/romance";
import { NewAdd } from "./components/newleyAdded";

function App() {
  return (
    <div className="App">
      <Landing></Landing>
      <Handpicked heading="Handpicked"></Handpicked>
      <NewRelease heading="New Release"></NewRelease>
      <AhaOrignal heading="Aha Orignals"></AhaOrignal>
      <Top10 heading="Top10 Today"></Top10>
      <MostWatched heading="Most Watched"></MostWatched>
      <Upcoming heading="Upcoming on Aha"></Upcoming>
      <NewAdd heading="Newly Added"></NewAdd>
      <FreeMovies heading="Free Movies"></FreeMovies>
      <Thriller heading="Thriller On Aha"></Thriller>
      <Drama heading="Drama on Aha"></Drama>
      <Romance heading="Romance"></Romance>

      <AhaOrignal heading="New Releases"></AhaOrignal>
      <AhaOrignal heading="Top 10 Today"></AhaOrignal>
    </div>
  );
}

export default App;
