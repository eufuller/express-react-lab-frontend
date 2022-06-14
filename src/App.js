import './App.css';
//Import components
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Route} from "react-router-dom"

//Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  //Heroku URL
  const URL = "https://express-react-backend1.herokuapp.com/"
  return (
    <div className="App">
      <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      <Footer />
    </div>
  );
}

export default App;
