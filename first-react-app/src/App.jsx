import Hello from './Hello.jsx';
//import Button from './Button.jsx'
// import Random from './Random.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import FoodItems from './components/FoodItems.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {  //functional component

    let foodItems = ['Dal', 'Green Vegetables', 'Roti', 'Salad', 'Milk'];

    return <>
    <h1>Hello World</h1>
    <Hello></Hello>
    <br />

    {/* Map Mathod */}
    <h2>Healthy Food</h2>
    <ErrorMessage items = {foodItems}></ErrorMessage>
    <FoodItems items = {foodItems}></FoodItems>
    <br />

    {/* <Button></Button>
    <Random></Random>
    <Random></Random>
    <Random></Random> */}
  </>
}

export default App;