import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      

      <UserGreeting isLoggedIn={false} username="Palak" />
      <UserGreeting isLoggedIn={true} username="Yudhish" />
      <UserGreeting isLoggedIn={true} />
    </>
  );
};

export default App;