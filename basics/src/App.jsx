//Imports Gallery as a default import from Gallery.js
import Gallery from "./component/Gallery";
//Imports Profile as a named import called Profile from Gallery.js
import { Profile } from "./component/Gallery";

import Conditional from "./component/Conditional";

import "./styles.css";

//Exports the root App component as a default export.
export default function App() {

  const shinchan = 'https://th.bing.com/th/id/OIP.u2vcdg52TqA__QNyXlo-QQHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7';
  const cartoon = 'cartoon';

  return (
    //we can only return one statement so we always wrap all the JSX elements in one div -> fragment
    <>
      <Gallery />
      <Profile />
      {/* className -> class name for styling in css */}
      {/* {shinchan} -> reads the value of javascript variable */}
      <img className="shinchan" src={shinchan} alt={cartoon} />
      <img src={shinchan} alt={cartoon} style={{ border: "5px solid black" }} /> {/* inline css is passed as object */}

      <Conditional />
    </>
  );
}