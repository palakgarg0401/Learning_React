import List from "./components/List";

function App() {

  const fruits = [{id : 1, name : "Mango", calories : 95}, 
                  {id : 2, name : "Litchi", calories : 45}, 
                  {id : 3, name : "Orange", calories : 105}, 
                  {id : 4, name : "Kiwi", calories : 159}, 
                  {id : 5, name : "Strawberry", calories : 37}];

  const vegatables = [{id : 6, name : "Potatoes", calories : 110}, 
                      {id : 7, name : "Celery", calories : 15}, 
                      {id : 8, name : "Carrots", calories : 25}, 
                      {id : 9, name : "Corn", calories : 63}, 
                      {id : 10, name : "Peas", calories : 50}];

  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegatables.length > 0 && <List items={vegatables} category="Vegetables" />}
    </>
  );
};

export default App;