
import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cast from './Components/Cast';
import { Dummy } from './Components/DummyIframe';
import { Episodes } from './Components/Episodes';
import { WatchList } from './Components/WatchListPage';
import { WatchPage } from './Components/WatchPage';
//61be05b5e26140757605d89e
//61bdea35e26140757605d888
if(localStorage.getItem("watchlist")==null)
localStorage.setItem("watchlist",JSON.stringify([]))
function App() {
  console.log("efreshing");
  const history = useHistory()
  return (
    <div>
     <button onClick={()=>{
       history.push({
         pathname:"/watchpage",
         state:{
           id:"61be05b5e26140757605d89e"
         }
       })
     }}><h1>Click Me </h1></button>
      
    
      
        <Switch>
        <Route exact path="/watchpage" >
            <WatchPage />
        </Route>
        <Route exact path="/check">
              <Dummy  />
        </Route>
        <Route exact  path="/WatchList">
           <WatchList />
        </Route>
        <Route path="/cast">
          <Cast />
        </Route>
        <Route path="/episodes">
        <Episodes />
        </Route>
        </Switch>
        <div className='footer_p_check'>
        Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
        </div>
      </div>
   
  );
}

export default App;
