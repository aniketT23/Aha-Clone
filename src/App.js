// import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Footer />
      <br />
      <Player url="https://www.youtube.com/watch?v=0867JeIfyLY" />
    </div>
  );
}

export default App;
