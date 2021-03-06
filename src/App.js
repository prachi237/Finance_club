import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";

import Footer from "./components/Footer";
import Teams from "./pages/Knowmore";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/teams" exact component={Teams} />
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
