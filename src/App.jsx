import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(false);
  const [counters, setCounters] = useState([0, 1, 2, 3, 4]);
  const [count, setCount] = useState(0);
  const [plus, setCounts] = useState(0);

  const addCounter = () => {
    let item = counters[counters.length - 1] + 1;
    counters.push(item);
    setCounters([...counters]);
  };

  const increaseCount = (index) => {
    counters[index] += 1;
    setCounters([...counters]);
  };

  const decreaseCount = (index) => {
    counters[index] -= 1;
    setCounters([...counters]);
  };

  const change = () => {
    setActive(!active);
  };


  const increment = () => {
    setCount(count + 1);
  };

  const add = () => {
    setCounts(plus + 1);
  };


  return (
    <div className="container-custom">
      <div className="counter-container">
        {counters.map((item, index) => (
          <div key={index} className="counter-item">
            <button className="btn-custom btn-success" onClick={() => increaseCount(index)}>
              +
            </button>
            <span>{item}</span>
            <button className="btn-custom btn-danger" onClick={() => decreaseCount(index)}>
              -
            </button>
          </div>
        ))}
        <button className="btn-custom btn-primary" onClick={addCounter}>
          Add Counter
        </button>
      </div>
      <div className="mode-container">
        <button className="btn-custom btn-warning mode-button" onClick={change}>
          Change Mode
        </button>
        {active ? (
          <button className="btn-custom btn-success mode-button">Active</button>
        ) : (
          <button className="btn-custom btn-danger mode-button">Disable</button>
        )}
      </div>
      <div>

        <h1>Meters<p> {count}</p></h1>
        <button className="btn btn-success" onClick={increment}>Yurish</button>


        <h1>Qadamni Kattaligi <p>metr: {plus}</p></h1>


        <button className="btn btn-warning" onClick={add}>Qadamni kengaytirish</button>
      </div>
    </div>
  );
}

export default App;
