import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import RecognitionPage from './pages/RecognitionPage'


function App() {
  return (
    <Router>
  
      <Route path='/' component={WelcomeScreen} exact/>
      <Route path='/app' component={RecognitionPage} exact/>


      <div className="App">

      </div>
    </Router>
  );
}

export default App;
 