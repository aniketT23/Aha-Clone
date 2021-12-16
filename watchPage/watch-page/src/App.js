
import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cast from './Components/Cast';
import { Dummy } from './Components/DummyIframe';
import { Episodes } from './Components/Episodes';
import { WatchList } from './Components/WatchListPage';
import { WatchPage } from './Components/WatchPage';

function App() {
  console.log("efreshing");
  const history = useHistory()
  return (
    <div className="App">
     <button onClick={()=>{
       history.push({
         pathname:"/watchpage",
         state:{
           id:1
         }
       })
     }}><h1>Click Me </h1></button>

    
      <div>
        <Switch>
        <Route exact path="/watchpage" >
            <WatchPage />
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
        <Episodes id={1}/>
        </Route>
        </Switch>
        
      </div>
    </div>
  );
}

export default App;
