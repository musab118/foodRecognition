import React from "react";
import { useHistory } from 'react-router-dom'

const WelcomeScreen = () => {

const history = useHistory()

const navigateToApp = () => {
    history.push("/app")
}

  return (
    <div>
      <div className="welcomecontainer">
        <h1>Welcome to See-Food!</h1>
        <p>
          Welcome to the best food image recognition platform on the internet.
          Yes I really just said that. Upload any image of food you have on your
          device and See-Food will return an accurate result on the type of food
          and umportant nutrition data
        </p>
        <br/>
        <button className="btn" onClick={navigateToApp}>Begin</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
