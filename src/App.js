import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
