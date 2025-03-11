//Imports Gallery as a default import from Gallery.js
import Gallery from "./Gallery";
//Imports Profile as a named import called Profile from Gallery.js
import { Profile } from "./Gallery";

//Exports the root App component as a default export.
export default function App() {
  return (
    <>
      <Gallery />
      <Profile />
    </>
  );
}