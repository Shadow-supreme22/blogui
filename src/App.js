import './App.css';
import Nave from './nav';
import  Foot from './footer'
import Login from "./Login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Routeguard from "./Routeguard";


function App() {
  return (
    <div>
    <div className="App" >
    <Router>
          <Switch>
            {/* <Route path="/login" exact component={Login} /> */}
            <Route path="/" component={Nave} />
          </Switch>
        </Router>
        
    </div>
   
    <div>
    <br></br>
    
    
        </div>
    </div>
  );
}

export default App;
