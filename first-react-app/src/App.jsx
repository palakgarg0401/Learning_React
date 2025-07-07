import Button from './Button.jsx'
import Hello from './Hello.jsx';
import Random from './Random.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {  //functional component

  let fruitName = [];
  //let fruitName = ['Apple', 'Mango', 'Grapes', 'Cherry', 'Litchi'];

  // if(fruitName.length === 0){
  //   return <h5>Fruit Basket is Empty!!</h5>
  // }

  //let emptyMsg = fruitName.length === 0 ? <h5>Fruit Basket is Empty</h5> : null;

  //Fragments <> </>
  return <>
    <h1>Hello World</h1>
    <Hello></Hello>
    <br />

    {/* Map Mathod */}
    <h2>Fruits</h2>

    {/* {fruitName.length === 0 ? <h5>Fruit Basket is Empty</h5> : null}  //ternary */}
    {/* {emptyMsg} */}
    {fruitName.length === 0 && <h5>Fruit Basket is Empty</h5>}

    <ul className="list-group">
      {fruitName.map((item) => <li key={item} className="list-group-item">{item}</li>)}
    </ul>
    <br />

    {/* <Button></Button>
    <Random></Random>
    <Random></Random>
    <Random></Random> */}
  </>
}

export default App;