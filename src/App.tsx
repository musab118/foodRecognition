import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import RecognitionPage from './pages/RecognitionPage'


function App() {

  const toggleDarkMode = () => {

    const element = document.body
    element.classList.toggle("dark-mode")

  }

  return (
    
    <Router>
      <div className = "darkmodecontainer"> 
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode}/> 
        <span className="slider round"> </span>
      </label>

      </div> 



      <Route path='/' component={WelcomeScreen} exact/>
      <Route path='/app' component={RecognitionPage} exact/>


      <div className="App">

      </div>
    </Router>
  );
}

export default App;
 