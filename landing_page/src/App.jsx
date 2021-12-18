import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing";
import { AhaOrignal } from "./components/ahaOrignals";
import { Handpicked } from "./components/handpicked";
import { Top10 } from "./components/top10";

function App() {
  return (
    <div className="App">
      <Landing></Landing>
      <Top10 heading="work"></Top10>
      <Handpicked heading="handpicked"></Handpicked>
      {/* <AhaOrignal heading="Aha Orignals" slide={5}></AhaOrignal>
      <AhaOrignal heading="HandPicked"></AhaOrignal>
      <AhaOrignal heading="New Releases"></AhaOrignal>
      <AhaOrignal heading="Top 10 Today"></AhaOrignal> */}
    </div>
  );
}

export default App;
