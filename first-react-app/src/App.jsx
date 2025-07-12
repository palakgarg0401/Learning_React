import ErrorMessage from './components/ErrorMessage.jsx';
import FoodItems from './components/FoodItems.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from './components/Container.jsx';
import FoodInput from './components/FoodInput.jsx';

function App() {  //functional component

  let foodItems = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];

  return ( <>
  <Container>
    <h2 className='food-heading'>Healthy Food</h2>
    <ErrorMessage items = {foodItems}></ErrorMessage>
    <FoodInput></FoodInput>
    <FoodItems items = {foodItems}></FoodItems>
  </Container>

  <Container>
    <p>Above is the list of healthy food you should eat for your health and well being</p>
  </Container>
  </>
  );
}

export default App;