import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route
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
