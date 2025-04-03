
import "./index.css";

const { useState } = require("react");

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">React Counter</h1>
        <p className="count">{count}</p>
        <div className="button-group">
          <button className="button add" onClick={handleAdd}>
            + Add
          </button>
          <button className="button sub" onClick={handleSub}>
            − Subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;



