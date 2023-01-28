import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./view/Home";
import Cns from "./view/Cns";
import NotFound from "./view/NotFound";


declare global {
	interface Window {
	  showPopEvent: any;
	}
}
 
function App() {

  return (
    <div data-rk>
      <Header />
      <Router basename="/">
        <Switch>
          <Route key="home" path="/" exact component={Home} />
          <Route key="not" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
