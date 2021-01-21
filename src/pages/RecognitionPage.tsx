import React, { useState } from "react";
import Clarifai, {  } from "clarifai";


const RecognitionPage = () => {

  const [imageURL, setImageURL] = useState([]);
  const [input, setInput] = useState([])
  const [food, setFood] = useState(' ')
  const [calories, setCalories] = useState( ' ' )
  const [carbs, setCarbs] = useState( ' ' )
  const [fat, setFat] = useState( ' ' )
  const [fiber, setFiber] = useState( ' ' )
  const [protein, setProtein] = useState( ' ' )

  const app = new Clarifai.App({
    apiKey: "e11a6cf77ae14b599eef0f11c5bd91e2",
  });
  
  const onInputChange = (event) => {
    console.log(event.target.value)
    setInput(event.target.value)
 
  }


  const detectFood = () => {
    app.models.predict('bd367be194cf45149e75f01d59f77ba7',`${input}`)
    .then(function(response){
      const foodItem = response.outputs[0].data.concepts[0].name
      setFood(foodItem)
        console.log(foodItem)

    })
    
  }

  const getNutrition = async () => {
  const foodChoice = String(food.replace(" ","%20"))
  const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${foodChoice}&app_id=e75ca3e9&app_key=9a8348e3f7d308a09160e67f5b92094e`)
  const responseJSON =  await response.json()
  const Kcal = responseJSON.parsed[0].food.nutrients.ENERC_KCAL
  setCalories(Kcal)
  setCarbs(responseJSON.parsed[0].food.nutrients.CHOCDF)
  setFat(responseJSON.parsed[0].food.nutrients.FAT)
  setFiber(responseJSON.parsed[0].food.nutrients.FIBTG)
  setProtein(responseJSON.parsed[0].food.nutrients.PROCNT)
  console.log(Kcal)
 
  }
  

  return (
    <div>
      <div className="welcomecontainer">
        <h1>See-Food</h1>
        <p>Please paste any food image link below</p>
        <input onChange={onInputChange} className="forminput" type='text' placeholder="paste link"/>
        <br/>
        <br/>
        <button className="btn" onClick={detectFood}>Analyze Food</button> 
        <button className = "btn" onClick={getNutrition}>Get Nutritional Information</button>
        <h2>Is this a {food} ?</h2>
        <h2>Calories: {calories}</h2> 
        <h2>Fat: {fat} grams</h2>
        <h2>Carbs: {carbs} grams</h2>
        <h2>Fiber: {fiber} grams</h2>
        <h2>Protein: {protein} grams</h2>

        <br />
      </div>
    </div>
  );
};
export default RecognitionPage; 
