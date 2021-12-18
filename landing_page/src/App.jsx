import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing";
import { AhaOrignal } from "./components/ahaOrignals";
import { Sample } from "./components/sample";
function App() {
  return (
    <div className="App">
      <Landing></Landing>
      <AhaOrignal heading="Aha Orignals" slide={5}></AhaOrignal>
      <AhaOrignal heading="HandPicked"></AhaOrignal>
      <AhaOrignal heading="New Releases"></AhaOrignal>
      <AhaOrignal heading="Top 10 Today"></AhaOrignal>
    </div>
  );
}

export default App;
