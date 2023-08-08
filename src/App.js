import "./App.css";
import Component1 from "./Components/component1";
import Counter from "./Components/counter";
import Map from "./Components/map";
import From from "./Components/From";
function App() {
  const cars = ["Ford", "BMW", "Audi"];

  return (
    <>
      <Component1 />
      <Counter />
      <From />
      <Map cars={cars} />
    </>
  );
}

export default App;
