import ErrorMessage from './components/ErrorMessage.jsx';
import FoodItems from './components/FoodItems.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from './components/Container.jsx';
import FoodInput from './components/FoodInput.jsx';
import { useState } from 'react';

function App() {  //functional component

  // let foodItems = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];


  let [ foodItems, setFoodItems ] = useState([]);

  const onKeyDown = (event) => { 
    if(event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  }

  return ( <>
  <Container>
    <h2 className='food-heading'>Healthy Food</h2>
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <ErrorMessage items = {foodItems}></ErrorMessage>
    <FoodItems items = {foodItems}></FoodItems>
  </Container>

  <Container>
    <p>Above is the list of healthy food you should eat for your health and well being</p>
  </Container>
  </>
  );
}

export default App;