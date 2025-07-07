import Button from './Button.jsx'
import Hello from './Hello.jsx';
import Random from './Random.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {  //functional component

  let fruitName = ['Apple', 'Mango', 'Grapes', 'Cherry', 'Litchi'];

  //Fragments <> </>
  return <>
    <h1>Hello World</h1>
    <Hello></Hello>
    <br />
    {/* Map Mathod */}
    <h2>Fruits</h2>
    <ul className="list-group">
      {fruitName.map((item) => <li className="list-group-item">{item}</li>)}
    </ul>
    <br />
    <Button></Button>
    <Random></Random>
    <Random></Random>
    <Random></Random>
  </>
}

export default App;