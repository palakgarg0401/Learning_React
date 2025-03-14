//We can conditionally render JSX using JavaScript syntax like "if" statements, "&&", and "? :" operators.

// //Conditionally returning JSX
// function Item({ name, isPacked }) {
//     if (isPacked) {
//       return <li className="item">{name} ✅</li>;
//     }
//     return <li className="item">{name}</li>;
//   }

// //Conditionally returning nothing with null
// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return null;
//   }
//   return <li className="item">{name}</li>;
// } 

// //Conditional (ternary) Operator (? :)
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {isPacked ? (
//         <del>
//           {name + ' ✅'}
//         </del>
//       ) : (
//         name
//       )}
//     </li>
//   );
// }
 

//Logical AND operator (&&)
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}


  export default function Conditional() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  