// props -> read-only properties that are shared between components
//          A parent component can send data to a child component
//          <Component key = value />

import Student from "./components/Student";

function App() {
  return (
    <>
      <Student name="Palak" age={19} isStudent={true}/> {/* boolean don't display as it is  */}
      <Student name="Yudhish" age={19} isStudent={true}/>
      <Student name="Sunny" age={40} isStudent={false}/>
      <Student />
      <Student name="Erica" />
    </>
  );
};

export default App
