
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cast from './Components/Cast';
import { Dummy } from './Components/DummyIframe';
import { WatchList } from './Components/WatchListPage';
import { WatchPage } from './Components/WatchPage';

function App() {
  return (
    <div className="App">
     

    
      <div>
        <Switch>
        <Route exact path="/" >
            <WatchPage id={1}/>
        </Route>
        <Route exact path="/check">
              <Dummy  />
        </Route>
        <Route exact path="/WatchList">
           <WatchList />
        </Route>
        <Route path="/cast">
          <Cast />
        </Route>
        <Route path="/episodes">
          <Cast />
        </Route>
        </Switch>
        
      </div>
    </div>
  );
}

export default App;
