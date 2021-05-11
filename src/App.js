import React from "react";
import './App.css';
import Footer from "./components/footer/Footer";
import Layoutgame1 from "./components/layout/Layoutgame1";
import Form from "./components/form/Form";
import Layoutgame2 from "./components/layout/Layoutgame2";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Biodata from "./components/biodata/Biodata";

function App() {
  return (
    <Biodata>
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Form} />
      <Route path="/game1"  component={Layoutgame1} />
      <Route path="/game2" exact component={Layoutgame2} />
      </Switch>
      <Footer />
    </div>
    </Router>
    </Biodata>
  );
}

export default App;
